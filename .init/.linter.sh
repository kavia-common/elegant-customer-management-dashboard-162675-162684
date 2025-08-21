#!/bin/bash
cd /home/kavia/workspace/code-generation/elegant-customer-management-dashboard-162675-162684/frontend_react_js
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

