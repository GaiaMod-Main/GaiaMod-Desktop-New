#!/bin/bash
# Exit on any error
set -e

echo "Updating Ark IDE source code..."

# Navigate to electron directory
cd "$(dirname "$0")"

# Remove old source directory
echo "Removing old source directory..."
rm -rf source

# Clone the repository at gh-pages branch
echo "Cloning latest version from GitHub..."
git clone --branch gh-pages --depth 1 https://github.com/arc360alt/arkide-new.git temp-source

# Remove .git directory from cloned repo (optional, keeps things clean)
rm -rf temp-source/.git

# Rename to source
echo "Installing new source..."
mv temp-source source

# Create README.MD in the source folder
echo "Creating README.MD..."
cat > source/README.MD << 'EOF'
![Icarus Frontend](__/art/Backend.png__)
# DO NOT EDIT. THIS FOLDER IS AUTOMATICLY REPLACED EVREY BUILD.
### Kronos Backend: THe backend code for ArkIDE Desktop that is replaced evrey build.
EOF

echo "Update complete!"
echo "Run 'npm start' to launch the updated app."