# Anti-Corruption

## Reforms

### Requirements

* Node.js
* Grunt - `npm install -g grunt-cli`
* static-api - `npm install -g static-api`
* Apache

Make sure that Apache is at minimum set to `AllowOverride Indexes`, and will
serve `.json` files as `application/json`.

### Installation

    npm install

### Deployment

Compile the API:

    static-api -f tmp -j reforms.json -b false

Build the distribution:

    grunt

The compiled app will be built in the `dist/` directory, and can be deployed to
a static server in production.
