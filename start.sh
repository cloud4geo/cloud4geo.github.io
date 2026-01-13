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
    npm run deploy
    echo "✅ All deployments complete!"
fi

