#!/bin/bash

# Playwright container name
CONTAINER_NAME="playwright-diggi-pymes"

echo "🚫 Stopping the container $CONTAINER_NAME if running..."
docker stop $CONTAINER_NAME 2>/dev/null && docker rm $CONTAINER_NAME 2>/dev/null

echo "🔨 Building the Docker image..."
docker-compose build

echo "📦 Lifting services with Docker Compose..."
docker-compose up -d

echo "You are inside the container🥳, run the cucumber commands to run your tests 🚀."
docker exec -it playwright-diggi-pymes bash