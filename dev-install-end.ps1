# Check if Node.js is installed
$node = (Get-Command "node" -ErrorAction SilentlyContinue).Source
if (-not $node) {
    Write-Error "Node.js is not installed. Please install Node.js first."
    exit
}

# Update npm to its latest version
npm install -g npm@latest

# Installing global npm packages
npm install -g electron prisma electron-builder electron-packager ffmpeg-static docxtemplater sequelize luxon d3
npm install -g pdfkit sharp papaparse node-red crypto-js

# Create a new project directory or navigate to your existing project directory
# Check if package.json exists to determine if 'npm init -y' is needed
if (-not (Test-Path "package.json")) {
    npm init -y
}

# Initialize a new Node.js project (if not already done)
# npm init -y

# Install React and related packages
npm install react react-dom bootstrap react-bootstrap react-router-dom redux react-redux @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome sqlite3 pdfjs-dist --save

# Install Electron and packaging tools for development
npm install electron electron-packager electron-builder --save-dev

# Install loaders and server for development
npm install css-loader style-loader file-loader http-server thread-loader html-loader source-map-loader --save-dev

# Install Webpack and related plugins for bundling and optimization
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin webpack-dev-middleware workbox-webpack-plugin --save-dev

# Install Babel for JSX and ES6+ support
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev

# Check if Python is installed
$python = (Get-Command python).Source
if (-not $python) {
    Write-Error "Python is not installed. Please install Python first."
    exit
}

# Check if Whisper is installed and up to date
$whisperCheckScript = @"
import pkg_resources
try:
    installed_version = pkg_resources.get_distribution('whisper').version
    print(f"Whisper installed, version: {installed_version}")
except pkg_resources.DistributionNotFound:
    print("Whisper not installed")
"@

$whisperStatus = python -c $whisperCheckScript
Write-Host $whisperStatus

if ($whisperStatus -like "Whisper not installed") {
    # Check if Git is installed
    $git = (Get-Command git).Source
    if (-not $git) {
        Write-Error "Git is not installed. Please install Git first."
        exit
    }

    # Check if GitHub CLI is installed
    $gh = (Get-Command gh).Source
    if (-not $gh) {
        Write-Error "GitHub CLI is not installed. Please install GitHub CLI first."
        exit
    }

    # Clone the Whisper repository using GitHub CLI
    gh repo clone openai/whisper
    cd whisper

    # Install Whisper using pip
    pip install -r requirements.txt

    cd ..\ #return to the project directory
}
else {
    Write-Host "Whisper is already installed."
}

# Note: HTML and CSS3 are not installable technologies. They are used within your project files.