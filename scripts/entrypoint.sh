#!/bin/sh
set -e

echo -e "\nš running entrypoint...\n"

echo -e "\nš  starting application"

exec "$@"
