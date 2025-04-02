# Remove old packages folders
if (Test-Path -Path "Packages" -PathType Container) {
	Remove-Item -Path "Packages" -Recurse -Force
}
if (Test-Path -Path "DevPackages" -PathType Container) {
	Remove-Item -Path "DevPackages" -Recurse -Force
}
if (Test-Path -Path "ServerPackages" -PathType Container) {
	Remove-Item -Path "ServerPackages" -Recurse -Force
}

# Install packages
wally install

# If ServerPackages doesn't exist, create it
if (-Not (Test-Path -Path "Packages" -PathType Container)) {
	New-Item -Path "Packages" -ItemType Directory
}
if (-Not (Test-Path -Path "DevPackages" -PathType Container)) {
	New-Item -Path "DevPackages" -ItemType Directory
}
if (-Not (Test-Path -Path "ServerPackages" -PathType Container)) {
	New-Item -Path "ServerPackages" -ItemType Directory
}

# Sourcemap generation
rojo sourcemap --output sourcemap.json default.project.json

# Fix the types (why is this not native???)
wally-package-types --sourcemap sourcemap.json Packages/
wally-package-types --sourcemap sourcemap.json ServerPackages/
wally-package-types --sourcemap sourcemap.json DevPackages/
