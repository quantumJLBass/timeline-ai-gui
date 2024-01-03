# Set variables
$REPO_NAME = "timeline-ai-gui"
$GITHUB_USERNAME = "quantumJLBass"

# Initialize Git (if not already a Git repo)
git init

# Create a .gitignore file
@"
# Dependency directories
node_modules/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# MacOS folder attributes
.DS_Store

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
public

# Vue-cli build output
dist/

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/
"@ | Out-File -FilePath .gitignore

# Create .gitignore and add other files to staging
git add .

# Commit changes
git commit -m "Initial commit"

# Set remote to existing GitHub repo
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# Push to GitHub
git push -u origin master