#!/bin/bash

# Setup script for GiftsApp - Configure environment variables

echo "🎯 GiftsApp Environment Setup"
echo "================================"
echo ""

# Check if environment.development.ts already exists
if [ -f src/environments/environment.development.ts ]; then
    echo "✓ environment.development.ts already exists"
else
    echo "Creating environment.development.ts from template..."
    cp src/environments/environment.development.example.ts src/environments/environment.development.ts
    echo "✓ File created"
fi

echo ""
echo "📝 Please follow these steps:"
echo "1. Open: src/environments/environment.development.ts"
echo "2. Replace 'YOUR_API_KEY_HERE' with your actual Giphy API key"
echo "3. Get your key from: https://developers.giphy.com/"
echo ""
echo "After adding your API key, you can start the dev server with:"
echo "  npm start"
echo ""
