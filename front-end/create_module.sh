#!/bin/bash

if [ -z "$1" ]
  then
    echo "No module name supplied. Usage: ./create_module.sh <module_name>"
    exit 1
fi

MODULE_NAME=$1
MODULE_DIR="content/$MODULE_NAME"
SPRINT_DIR="$MODULE_DIR/sprints"
BLOCKS_DIR="$MODULE_DIR/blocks"
PRODUCT_DIR="$MODULE_DIR/product"

mkdir -p $MODULE_DIR
mkdir -p $SPRINT_DIR
mkdir -p $BLOCKS_DIR
mkdir -p $PRODUCT_DIR

echo "+++
title = '$MODULE_NAME Plan'
description = '$MODULE_NAME description'
layout = 'module'
+++

" > $MODULE_DIR/_index.md

FILES=("prep" "backlog" "success")

for file in "${FILES[@]}"; do
  mkdir -p $MODULE_DIR/$file
  echo "+++
title = '$(echo $file | tr '[:lower:]' '[:upper:]')'
description = '$(echo $file | tr '[:lower:]' '[:upper:]') description'
layout = $(echo $file | tr '[:lower:]' '[:upper:]')
+++

" > $MODULE_DIR/$file/index.md
done

for i in {1..4}; do
  SPRINT_NAME="$i"
  SPRINT_PATH="$SPRINT_DIR/$SPRINT_NAME"
  mkdir -p $SPRINT_PATH
  echo "+++
title = 'Sprint $i'
description = 'Sprint $i description'
layout = 'sprint'
+++

" > $SPRINT_PATH/_index.md

  SPRINT_FILES=("prep" "backlog" "day-plan" "success")

  for file in "${SPRINT_FILES[@]}"; do
    mkdir -p $SPRINT_PATH/$file
    echo "+++
title = '$(echo $file | tr '[:lower:]' '[:upper:]')'
date = '$(date -u +"%Y-%m-%dT%H:%M:%SZ")'
+++

" > $SPRINT_PATH/$file/index.md
  done
done

BLOCKS=("block1" "block2" "block3")

for block in "${BLOCKS[@]}"; do
  mkdir -p $BLOCKS_DIR/$block
  echo "+++
title = '$(echo $block | tr '[:lower:]' '[:upper:]')'
date = '$(date -u +"%Y-%m-%dT%H:%M:%SZ")'
headless = true
time = 0.3
facilitation = false
[objectives]
    1="Use the Teach Tech Together guide to construct your objectives"
    2="Limit the objectives to 3-5 items"
    3="Write objectives you can measure"
+++

" > $BLOCKS_DIR/$block/index.md
done

PRODUCT_FILES=("plan" "build" "ship")

echo "+++
title = 'Product'
description = 'Product description'
layout = 'product'
+++

" > $PRODUCT_DIR/_index.md

for product_file in "${PRODUCT_FILES[@]}"; do
  mkdir -p $PRODUCT_DIR/$product_file
  echo "+++
title = '$(echo $product_file | tr '[:lower:]' '[:upper:]')'
description = '$(echo $product_file | tr '[:lower:]' '[:upper:]') description'
layout = $(echo $product_file | tr '[:lower:]' '[:upper:]')
+++

" > $PRODUCT_DIR/$product_file/index.md
done
