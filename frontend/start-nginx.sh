#!/usr/bin/env sh

# Substitute environment variables in each file
envsubst < "$CONF_FILE" > "${CONF_FILE}.tmp"
# Replace the original file with the temporary file
mv "${CONF_FILE}.tmp" "$CONF_FILE"

nginx -g 'daemon off;'