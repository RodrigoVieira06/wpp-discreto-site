.DEFAULT_GOAL := help
PNPM ?= pnpm
.PHONY: help install dev build preview check test verify clean
help: ## List project commands
	@awk 'BEGIN {FS=":.*## "} /^[a-zA-Z_-]+:.*## / {printf "make %-10s %s\n", $$1, $$2}' $(MAKEFILE_LIST)
install: ## Install pinned dependencies
	$(PNPM) install --frozen-lockfile
dev: ## Start the development server
	$(PNPM) dev
build: ## Build static pages for Vercel
	$(PNPM) build
preview: ## Serve the production build
	$(PNPM) preview
check: ## Run Biome and Astro TypeScript checks
	$(PNPM) check
test: ## Run Jest tests
	$(PNPM) test
verify: check test build ## Validate a release candidate
clean: ## Remove generated output
	rm -rf dist .astro coverage
