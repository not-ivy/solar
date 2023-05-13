# solar

a web analytics service; built on deno and fresh.

### usage

create `.env` file:

```
# planetscale serverless driver
DATABASE_HOST=<host>
DATABASE_USERNAME=<username>
DATABASE_PASSWORD=<password>
SIGNUP_ENABLED=<bool>
```

apply database migrations:

```
deno task db:migrate
```

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
