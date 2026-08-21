#!/usr/bin/env bash
set -euo pipefail

printf '\nINDGE Services website setup\n============================\n'

if ! command -v node >/dev/null 2>&1; then
  echo 'Node.js is not installed. Install Node.js 22 LTS or newer, then run this script again.'
  exit 1
fi

NODE_MAJOR=$(node -p "process.versions.node.split('.')[0]")
if [ "$NODE_MAJOR" -lt 22 ]; then
  echo "Node.js 22+ is required. Current version: $(node --version)"
  exit 1
fi

npm install
npm run check
npm run build

echo
echo 'Setup complete.'
echo 'Run: npm run dev'
echo 'Then open: http://localhost:3000'
