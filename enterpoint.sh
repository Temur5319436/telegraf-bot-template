#!/bin/sh

echo "Waiting for postgres database ..."
./wait-for database:5432 

echo "Prisma models are generting ..."
npx prisma generate

echo "Migrations are running ..."
npx prisma db push

node src/main.js
