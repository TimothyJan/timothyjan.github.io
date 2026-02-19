# timothyjan.github.io/deploy.ps1
# Angular GitHub Pages Deployment Script

param(
    [switch]$DryRun = $false
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Deploying timothyjan.github.io to GitHub Pages" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Configuration
$BASE_HREF = "/"  # Changed: For user sites, use root path
$GH_PAGES_DIR = "docs"

# Step 1: Clean up previous builds
Write-Host "`n[1/5] Cleaning up previous builds..." -ForegroundColor Yellow
if (Test-Path $GH_PAGES_DIR) {
    Write-Host "  Removing docs folder..." -ForegroundColor Gray
    Remove-Item -Path $GH_PAGES_DIR -Recurse -Force -ErrorAction SilentlyContinue
}

# Step 2: Build the Angular app
Write-Host "`n[2/5] Building Angular app with base-href: $BASE_HREF" -ForegroundColor Yellow
if ($DryRun) {
    Write-Host "  [DRY RUN] Would run: npx ng build --configuration=production --base-href=$BASE_HREF --output-path=$GH_PAGES_DIR" -ForegroundColor Gray
} else {
    # Build directly to docs folder
    npx ng build --configuration=production --base-href=$BASE_HREF --output-path=$GH_PAGES_DIR

    if ($LASTEXITCODE -ne 0) {
        Write-Host "  Build failed!" -ForegroundColor Red
        exit $LASTEXITCODE
    }
    Write-Host "  Build completed successfully!" -ForegroundColor Green
}

# Step 3: Handle Angular 17+ application builder output structure
Write-Host "`n[3/5] Checking build output structure..." -ForegroundColor Yellow

$browserPath = Join-Path $GH_PAGES_DIR "browser"
if (Test-Path $browserPath) {
    Write-Host "  Found 'browser' subfolder (Angular 17+ structure)" -ForegroundColor Gray

    if ($DryRun) {
        Write-Host "  [DRY RUN] Would move files from $browserPath to $GH_PAGES_DIR" -ForegroundColor Gray
    } else {
        # Move all contents from browser folder to docs root
        Write-Host "  Moving files to root of docs folder..." -ForegroundColor Gray
        Get-ChildItem -Path $browserPath | Move-Item -Destination $GH_PAGES_DIR -Force

        # Remove the now-empty browser folder
        Remove-Item -Path $browserPath -Recurse -Force
        Write-Host "  Folder structure fixed!" -ForegroundColor Green
    }
} else {
    Write-Host "  No 'browser' subfolder found - output structure looks good!" -ForegroundColor Green
}

# Step 4: Create a .nojekyll file to disable Jekyll processing
Write-Host "`n[4/5] Creating .nojekyll file..." -ForegroundColor Yellow
if ($DryRun) {
    Write-Host "  [DRY RUN] Would create .nojekyll file in $GH_PAGES_DIR" -ForegroundColor Gray
} else {
    $nojekyllPath = Join-Path $GH_PAGES_DIR ".nojekyll"
    New-Item -Path $nojekyllPath -ItemType File -Force | Out-Null
    Write-Host "  .nojekyll file created!" -ForegroundColor Green
}

# Show build output
Write-Host "`nBuild output in '$GH_PAGES_DIR' folder:" -ForegroundColor Green
Get-ChildItem -Path $GH_PAGES_DIR | Format-Table Name, Length, LastWriteTime -AutoSize

# Step 5: Git operations (new step)
Write-Host "`n[5/5] Deploying to GitHub..." -ForegroundColor Yellow

if ($DryRun) {
    Write-Host "  [DRY RUN] Would commit and push docs folder" -ForegroundColor Gray
} else {
    # Stage the docs folder
    git add docs/
    git add docs/.nojekyll

    # Commit
    git commit -m "Deploy to GitHub Pages"

    # Push to main branch
    git push origin main

    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n========================================" -ForegroundColor Green
        Write-Host "✅ Deployment successful!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "Your app will be available at:" -ForegroundColor White
        Write-Host "https://timothyjan.github.io/" -ForegroundColor Cyan
        Write-Host "`nNote: It may take a few minutes to propagate." -ForegroundColor Yellow
    } else {
        Write-Host "`n❌ Deployment failed!" -ForegroundColor Red
        exit $LASTEXITCODE
    }
}
