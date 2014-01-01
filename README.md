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

### Building

Prepare the files:

    grunt prepare

Compile the API:

    static-api -f tmp/static -j tmp/json/reforms.json -b false

Build the distribution:

    grunt dist

The compiled app will be built in the `dist/` directory, and can be deployed to
a static server in production.

### Deploying

When copying the `dist/` results into the webroot, take care not to miss any
hidden files (specifically, `.htaccess`):

    cp -R dist/. /srv/www/reforms.example.org/public/
