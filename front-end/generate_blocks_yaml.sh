#!/bin/bash

# Set the content directory and output file paths
CONTENT_DIR="./content"
OUTPUT_FILE="./data/blocks.yml"

# Initialize the output file with an empty string
echo "" > $OUTPUT_FILE

# Loop through all _index.md files in sprint directories
find $CONTENT_DIR -type f -name '_index.md' -path '*/sprints/*' | while read -r FILE; do
    # Extract block data from the front matter and append it to the output file
    awk '/^blocks:/,/---/{if (!/---/) print}' "$FILE" >> $OUTPUT_FILE
done
