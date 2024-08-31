# Turbo Repo & Payload Template

## Getting Started

First, install dependencies using pnpm:

```bash
pnpm i
```

Second, setup your `.env` files (this could prob be made better...). One in apps/web & apps/admin:

```bash
DATABASE_URI=postgres://postgres:password@127.0.0.1:5432/postgres
PAYLOAD_SECRET=967f174c0679d3e3a96d3f7e
```

Third, turn on postgres (requires docker)

```bash
pnpm stack:up
```

Last, fire it up!

```bash
pnpm dev
```
