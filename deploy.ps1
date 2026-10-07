# powershell -ExecutionPolicy Bypass -File .\deploy.ps1
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

# 检查 origin
$remote = git remote get-url origin 2>$null

if (-not $remote) {
    throw 'No origin remote found. Please run: git remote add origin <repository-url>'
}

# 构建
npm run build

# 构建产物目录
$dist = Join-Path $root 'dist'

if (-not (Test-Path $dist)) {
    throw "Build output directory not found: $dist"
}

# 进入 dist
Push-Location $dist

try {
    git init
    git checkout -B gh-pages

    git add -A
    git commit -m "deploy"

    git push -f $remote HEAD:gh-pages
}
finally {
    Pop-Location
}

Write-Output "Deploy completed."
Write-Output "Remote: $remote"
Write-Output "Branch: gh-pages"