#!/usr/bin/env bash
docker network create drimmm_network
docker volume create keycloak-db
docker volume create main-db