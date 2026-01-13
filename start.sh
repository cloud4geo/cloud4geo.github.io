#!/bin/bash

# CloudFront Distribution ID
export CLOUDFRONT_DISTRIBUTION_ID='E34BMKTGLEPBJY'

# Get environment from command line argument or environment variable, default to development
if [ "$1" == "production" ]; then
    export ENVIRONMENT="production"
elif [ -n "$ENVIRONMENT" ]; then
    # Use existing ENVIRONMENT variable if set
    export ENVIRONMENT="$ENVIRONMENT"
else
    export ENVIRONMENT="development"
fi

# Default port to 3008 if not set
export PORT=${PORT:-3008}

echo "🚀 Starting Cloud4Geo $ENVIRONMENT on port $PORT..."

if [ "$ENVIRONMENT" == "development" ]; then
    # Check if node_modules exists, install if missing
    if [ ! -d "node_modules" ]; then
        echo "📦 Dependencies not found. Installing..."
        yarn install
    fi

    # Run in development mode using yarn (resolves 'next' path correctly)
    echo "⚡ Starting development server..."
    yarn dev
else
    # Production: Build and deploy
    echo "🏗️  Building for production..."
    yarn build
    
    if [ $? -ne 0 ]; then
        echo "❌ Build failed. Aborting deployment."
        exit 1
    fi
    
    echo "📤 Deploying to S3..."
    export AWS_PROFILE=kiara
    aws s3 sync out/ s3://cloud4geo.com/ --delete
    
    if [ $? -ne 0 ]; then
        echo "❌ S3 sync failed. Aborting CloudFront invalidation."
        exit 1
    fi
    
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id=$CLOUDFRONT_DISTRIBUTION_ID \
        --paths="/*"
    
    if [ $? -ne 0 ]; then
        echo "⚠️  CloudFront invalidation failed, but continuing with GitHub Pages deploy..."
    fi
    
    # Deploy to GitHub Pages using gh-pages package
    echo "📦 Deploying to GitHub Pages..."
    
    # Check if gh-pages is installed
    if ! yarn list --pattern gh-pages --depth=0 > /dev/null 2>&1; then
        echo "📥 Installing gh-pages..."
        yarn add -D gh-pages
    fi
    
    # Check if we're in a git repository
    if [ ! -d ".git" ]; then
        echo "⚠️  Not a git repository. Skipping GitHub Pages deployment."
        echo "✅ S3 deployment complete!"
        exit 0
    fi
    
    # Use gh-pages to deploy
    if yarn deploy; then
        echo "✅ GitHub Pages deployment complete!"
    else
        echo "❌ GitHub Pages deployment failed."
        exit 1
    fi
    
    echo "✅ All deployments complete!"
fi

