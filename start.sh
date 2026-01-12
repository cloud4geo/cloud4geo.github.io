#!/bin/bash

# CloudFront Distribution ID
export CLOUDFRONT_DISTRIBUTION_ID='E34BMKTGLEPBJY'

# Default environment to development if not set
export ENVIRONMENT=${ENVIRONMENT:-development}

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
    
    echo "✅ Deployment complete!"
fi

