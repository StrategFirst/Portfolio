#!/bin/bash

# Stop ip if it is already running
docker-compose down

# Build image and biding internal user to the current user (for file permission issues)
docker-compose build --build-arg UID=$(id -u) --build-arg GID=$(id -g)

# Start it
docker-compose up -d
