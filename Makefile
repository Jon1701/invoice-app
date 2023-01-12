# Path to Node Modules.
PATH_NODE_MODULES=./node_modules
PATH_NODE_MODULES_BIN=${PATH_NODE_MODULES}/.bin

# Ports.
PORT_DEV_SERVER=8080
PORT_STAGING_SERVER=8081
PORT_STORYBOOK=6006

# Installs project dependencies.
install: install-node-modules disable-nextjs-telemetry

# Installs Node.js modules.
install-node-modules:
	@echo "Installing Node.js modules..."
	@npm ci
	@echo "Done installing Node.js modules."

# Runs all linters.
lint: run-eslint run-prettier run-stylelint

# Runs ESLint.
run-eslint:
	@echo "Running ESLint..."
	@${PATH_NODE_MODULES_BIN}/next \
		lint
	@echo "Done running ESLint."

# Runs Prettier.
run-prettier:
	@echo "Running Prettier..."
	@${PATH_NODE_MODULES_BIN}/prettier \
		--check **/*.{ts,tsx,js}
	@echo "Done running Prettier."

# Runs Stylelint.
run-stylelint:
	@echo "Running Stylelint..."
	@${PATH_NODE_MODULES_BIN}/stylelint \
		'**/*.{ts,tsx,js}'
	@echo "Done running Stylelint."

# Runs Storybook.
run-storybook:
	@echo "Starting Storybook..."
	@${PATH_NODE_MODULES_BIN}/start-storybook	\
		-p ${PORT_STORYBOOK}

# Creates a production build.
build:
	@echo "Creating production build..."
	@${PATH_NODE_MODULES_BIN}/next \
		build
	@echo "Done creating production build."

# Starts the development server.
dev:
	@echo "Starting development server..."
	@${PATH_NODE_MODULES_BIN}/next	\
		dev \
		-p ${PORT_DEV_SERVER}

# Starts the staging server.
staging: build
	@echo "Starting the staging server..."
	@${PATH_NODE_MODULES_BIN}/next \
		start \
		-p ${PORT_STAGING_SERVER}

# Disables Next.js telemetry.
disable-nextjs-telemetry:
	@echo "Disabling Next.js telemetry..."
	@${PATH_NODE_MODULES_BIN}/next \
		telemetry disable
	@echo "Done disabling Next.js telemetry."

# Runs all tests.
test:
	@echo "Running tests..."
	@${PATH_NODE_MODULES_BIN}/jest
	@echo "Done running tests."