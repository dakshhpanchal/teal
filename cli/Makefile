APP_NAME=teal
BUILD_DIR=build

.PHONY: all build clean docker

all: build

build:
	go build -o $(BUILD_DIR)/$(APP_NAME) ./cmd/

run: build
	./$(BUILD_DIR)/$(APP_NAME)

clean:
	rm -rf $(BUILD_DIR)

docker:
	docker build -t $(APP_NAME)-cli .
