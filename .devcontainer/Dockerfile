FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# Install curl
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends curl

EXPOSE 3000