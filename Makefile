.PHONY: serve build up

up:
	devcontainer up --workspace-folder .

serve: up
	devcontainer exec --workspace-folder . bundle exec jekyll serve --host 0.0.0.0

build: up
	devcontainer exec --workspace-folder . bundle exec jekyll build
