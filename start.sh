#!/bin/bash

# Default port to 3006 if not set
export PORT=${PORT:-3008}

echo "🚀 Starting Cloud4Geo on port $PORT..."

# Check if node_modules exists, install if missing
if [ ! -d "node_modules" ]; then
    echo "📦 Dependencies not found. Installing..."
    yarn install
fi

# Run in development mode using yarn (resolves 'next' path correctly)
echo "⚡ Starting development server..."
yarn dev
