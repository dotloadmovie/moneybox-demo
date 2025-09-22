# Moneybox Demo

This is a demo app built on React, Next and PayloadCMS. It demonstrates the bare functionality required by the brief

## Requirements

This is a nodeJS app and building it requires a node environment of at least v20 and a corresponding npm installation.

## Installation

Clone this repository and then

`npm install`

For simplicity the database binary is provided as part of the repo. Before running you will also need an appropriate environment in order to access this. Create a `.env` file in the root of the project with the following contents

```
DATABASE_URI=file:./moneybox.db
PAYLOAD_SECRET=7cb358f1e5e4afb1d742f998
```

## Running

`npm run dev` will start the app on http://localhost:3000

admin is available automatically on http://localhost:3000/admin (username: admin@localhost.local password Password1)

## Testing

(Very) bare bones testing implementations are provided for E2E and API integrations. To run integration tests:

`npm run test:int`

To run end to end tests:

`npm run test:e2e`

Note: E2E requires an installed Playwight environment. Playwright will manage this as part of the initial run but you may need admin or root privileges on the installing machine to complete.

## API

A JSON API via Payload is provided at http://localhost:3000/api:

Products are at http://localhost:3000/api/products
Categories are at http://localhost:3000/api/categories

This is a query API and can be filtered using Payload query parameters: https://payloadcms.com/docs/queries/overview
