# Anti-Corruption

## Reforms

This package provides a static API for the Anti-Corruption Reforms. The API
offers a resource with the following identifiers:

    {:country}/{:api-version}/reforms/{:reform-id}/{:reform-version}

An example URL assuming the API has been deployed to localhost:

    http://localhost/us/b2/reforms/9876/1.0/

The static API returns results in JSON format, e.g:

    {
      "title": "Provide that public elections are publicly funded",
      "description": "Campaigns for public elections need to be publicly funded...",
      "sponsor": {
        "name": "Sponsor Name",
        "bioguide_id": "X000123"
      },
      "bill_id": "xx1111-222"
      "url": "http://example.com/"
    }

***The API is currenly in Beta. All resources and fields may be modified,
deprecated or removed without prior notice.***

### Requirements

* Node.js
* Grunt - `npm install -g grunt-cli`
* Bower - `npm install -g bower`
* static-api - `npm install -g static-api`
* Apache

Make sure that Apache is at minimum set to `AllowOverride Indexes`, and will
serve `.json` files as `application/json`.

### Installation

    git clone git@github.com:Anti-Corruption/reforms.git .
    npm install
    bower install

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

### Development

The API contents can be updated by editing the `reforms.yml` file and re-running
the build process. Be certain to follow the established formatting. The indent
style uses 2 spaces.

### TODO

* Encapsulate the `static-api` build step as a Grunt task.
