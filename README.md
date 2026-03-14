## Prisma notes

After setting DATABASE_URL, run:

```bash
npm run prisma:generate
npm run prisma:migrate
```

Optional seeding:
- Use `prisma/seed.sql` in your DB client, or add a TS seed script later.
