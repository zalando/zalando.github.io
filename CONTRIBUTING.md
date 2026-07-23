# Contributing Guide

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

# Development

### Option 1: GitHub Codespaces
Click **Code** → **Codespaces** → **New codespace** to launch a ready-to-use environment in your browser.

### Option 2: VS Code Dev Containers
1. Install Docker and the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension
2. Open this repo in VS Code → click "Reopen in Container" when prompted
3. Run `bundle exec jekyll serve` → site available at http://localhost:4000

### Option 3: Command line
Requires devcontainer CLI: `brew install devcontainer`
```sh
make serve
```
Site available at http://localhost:4000.

## Updating dependencies

```
bundle update
```

## Optimizing images

```
find ./assets -iname "*.jpg" -exec jpegoptim -p --strip-com --strip-iptc -m 90 -o -t {} \;
```

# Contact

- **Email**: opensource@zalando.de
- **Issue tracker**: https://github.com/zalando/zalando.github.io/issues
