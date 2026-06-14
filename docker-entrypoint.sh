#!/bin/sh
set -e

echo "Applying database migrations..."
npx prisma migrate deploy

if [ "${RUN_DB_SEED:-true}" != "false" ]; then
  echo "Seeding database..."
  npx prisma db seed
else
  echo "Skipping database seed (RUN_DB_SEED=false)."
fi

echo "Starting application..."
exec npm run start
