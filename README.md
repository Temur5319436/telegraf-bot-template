# Telegram Bot Template

This is a template for building a Telegram bot using the Telegraf.js framework, Telegraf-i18n for localization, Prisma as an ORM for database operations, and Telegraf-session-redis for session management. Use this template as a starting point for your Telegram bot project.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Redis server for session management (Optional)

## Getting Started

1. **Clone this repository:**

```bash
git clone https://github.com/Temur5319436/telegraf-bot-template.git
cd telegraf-bot-template
```

2. **Install dependencies:**

```bash
npm install
or 
yarn install
```

3. **Environment Configuration:**

Before you can run the Telegram bot, you need to configure the environment variables. Create a .env file in the project root directory and add the following variables:

- NODE_ENV: Set the Node.js environment to development or production as needed.

- BOT_TOKEN: Your Telegram Bot Token goes here. Replace it with your actual Bot Token.

- DOMAIN: The domain where your application is hosted, if applicable. Leave it blank for local development.

- PORT: The port on which your application should listen.

- SESSION_TYPE: Choose the session type. Set it to redis to use Redis as a session store. If it does not equal redis, the application uses memory sessions.

- REDIS_HOST and REDIS_PORT: Configure Redis host and port for session storage if you are using Redis.

- DATABASE_URL: Prisma supports the native connection string format for various databases. Replace this with the connection string for your chosen database system. See the documentation for all the connection string options: Prisma Connection Strings.

Here's an example .env.example file:
```bash
# Set the Node.js environment. You can change it to development or production.
NODE_ENV=development

# Your Telegram Bot Token goes here. Replace with your actual Bot Token.
BOT_TOKEN=

# The domain where your telegram bot is made webhook.
# Leave it blank for local development.
DOMAIN=

# The port on which your telegram bot is listening
# Leave it blank for local development.
PORT=

# Choose the session type. Set it to 'redis' to use Redis as a session store.
# If it does not equal to 'redis', the application uses memory session.
SESSION_TYPE=redis

# Configure Redis host and port for session storage (if using Redis).
REDIS_HOST=127.0.0.1
REDIS_PORT=6379

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings
# Replace this with the connection string for your chosen database system.
DATABASE_URL="postgresql://user:password@localhost:5432/database?schema=public"

```

4. **Initialize your Prisma database and apply migrations:**
```bash
npx prisma generate

npx prisma migrate dev
```

5. **Start the bot:**

```bash
nodemon src/main.js (in development)
```

If you need to set up a webhook with Telegram. You need to configure the DOMAIN and PORT and NODE_ENV variables specifically for webhook setup.

## Configuration

- Modify the Prisma data models in the `~/prisma/schema.prisma` file to define your database structure.

- Customize the bot logic in the `~/src/main.js` file using the Telegraf framework.

- Update the translations in the `~/locales` directory for your bot's localized messages using Telegraf-i18n.

If you prefer to use Redis for session management, you can configure it in the .env file by setting `SESSION_TYPE=redis` and providing the Redis host and port. If not, the bot will use in-memory sessions by default.

## Contributing

Contributions are welcome! If you have any feature requests, bug reports, or improvements, please open an issue or create a pull request.


## Attribution

This project is based on the original work by [telegraf-bot-template](https://github.com/mcpeblocker/telegraf-bot-template/) and has been modified and extended by [Temur Usmonaliyev](https://github.com/Temur5319436).


## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).