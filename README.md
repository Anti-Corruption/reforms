# Anti-Corruption

## Reforms

This package provides a static API for the Anti-Corruption Reforms. The API offers resources using the following identifiers:

    reforms/{:country}/{:api-version}/{:reform-id}/{:reform-version}

An example URL assuming the API has been deployed to localhost:

    http://localhost/reforms/us/v1/publicly-funded-elections/1.0/

The static API returns results in JSON format, e.g:

    {
      "version": "1.0",
      "id": "publicly-funded-elections",
      "title": "Provide that public elections are publicly funded",
      "body": "Campaigns for public elections need to be publicly funded..."
    }

### Requirements

* Node.js
* Grunt - `npm install -g grunt-cli`
* static-api - `npm install -g static-api`
* Apache

Make sure that Apache is at minimum set to `AllowOverride Indexes`, and will
serve `.json` files as `application/json`.

### Installation

    git clone git@github.com:Anti-Corruption/reforms.git .
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
