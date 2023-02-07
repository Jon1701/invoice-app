# Path to Node Modules.
PATH_NODE_MODULES=./node_modules
PATH_NODE_MODULES_BIN=${PATH_NODE_MODULES}/.bin

# Next.js variables.
PORT_DEV_SERVER=8080
PORT_STAGING_SERVER=8081
PORT_STORYBOOK=6006

# MongoDB variables.
MONGO_DOCKER_CONTAINER_NAME=invoice-app
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=password
MONGO_PORT=27017
MONGO_HOST=localhost
MONGO_ADMIN_DATABASE=admin

# Mongo Express variables.
ME_CONFIG_MONGODB_ADMINUSERNAME=${MONGO_INITDB_ROOT_USERNAME}
ME_CONFIG_MONGODB_ADMINPASSWORD=${MONGO_INITDB_ROOT_PASSWORD}
ME_CONFIG_MONGODB_URL=mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@mongo:${MONGO_PORT}/
ME_PORT=8082

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
	@${PATH_NODE_MODULES_BIN}/eslint "**/*.{ts,tsx,js}"
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
		'**/*.{ts,tsx,js}' '!.volumes/**'
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

# Starts Docker services.
start-services:
	@echo "Starting Docker services..."
	MONGO_DOCKER_CONTAINER_NAME=${MONGO_DOCKER_CONTAINER_NAME} \
	MONGO_INITDB_ROOT_USERNAME=${MONGO_INITDB_ROOT_USERNAME} \
	MONGO_INITDB_ROOT_PASSWORD=${MONGO_INITDB_ROOT_PASSWORD} \
	MONGO_PORT=${MONGO_PORT} \
	ME_CONFIG_MONGODB_URL=${ME_CONFIG_MONGODB_URL} \
	ME_CONFIG_MONGODB_ADMINUSERNAME=${ME_CONFIG_MONGODB_ADMINUSERNAME} \
	ME_CONFIG_MONGODB_ADMINPASSWORD=${ME_CONFIG_MONGODB_ADMINPASSWORD} \
	ME_PORT=${ME_PORT} \
	docker-compose up
	@echo "Done starting Docker services."

# Stops Docker services.
stop-services:
	@echo "Stopping Docker serivces..."
	MONGO_DOCKER_CONTAINER_NAME=${MONGO_DOCKER_CONTAINER_NAME} \
	docker-compose down
	@echo "Done stopping Docker services."

# Runs Mongo Shell.
mongosh:
	@docker exec -it ${MONGO_DOCKER_CONTAINER_NAME} \
		mongosh	\
			--host ${MONGO_HOST}	\
			--port ${MONGO_PORT}	\
			--username ${MONGO_INITDB_ROOT_USERNAME}	\
			--password ${MONGO_INITDB_ROOT_PASSWORD}	\
			--authenticationDatabase ${MONGO_ADMIN_DATABASE}
