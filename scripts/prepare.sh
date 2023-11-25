# Check if ts-node is installed
if ! command -v ts-node >/dev/null; then
  echo "ts-node is not installed. Any changes to file structure of documentation files will not be handled."
  exit 0 # exit with 0 to continue anyway
fi

# ts-node --esm scripts/generateRoutes.ts -v
ts-node --esm scripts/generateRoutes.ts
