#!/bin/bash
cd /home/kavia/workspace/code-generation/figma-component-library-6700-6709/storybook_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

