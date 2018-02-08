Tips for Heroku
================

Useful tips and tricks for Heroku deployment.
This is just a quick memo for me.

- [Tips for Heroku](#tips-for-heroku)
    - [Port for Heroku](#port-for-heroku)
    - [Procfile](#procfile)
    - [Node.js version](#nodejs-version)
    - [Deploy commands](#deploy-commands)
    - [Environment variables](#environment-variables)
        - [in local](#in-local)
    - [Disable production mode](#disable-production-mode)

## Port for Heroku

We need to start the app on a port provided by Heroku

```javascript
//8080 is the default port if the environment variable PORT doesn't exist
app.set('port', (process.env.PORT || 8080))

app.listen(app.get('port'), () =>
{
    console.log(`App started on port ${app.get('port')}`)
})
```

## Procfile

We need to create at the root the file `Procfile` to tell the start command.

```text
web: node server.js
```

Also we specify this command in `package.json`

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
}
```

## Node.js version

We need to specify the version of node.js in `package.json`.

```json
"engines": {
    "node": "9.4.0"
}
```

## Deploy commands

First, create Heroku container && Heroku branch

```bash
heroku create
```

Then, push the master branch on Heroku

```bash
git push heroku master
```

That's it ! We can go on our Heroku app with

```bash
heroku open
```

## Environment variables

We stocks our enbironment variables like API key in the file `.env`

```text
GMAPS_KEY=mysecretkey
```

We used this variable with `process.env.GMAPS_KEY`

The file `.env` is in `.gitignore` beacuse we don't want to push our secret key on Github.

To specify environment variables for Heroku we can go on our [dashboard](https://dashboard.heroku.com) or used

```bash
heroku config:set GMAPS_KEY=mysecretkey
```

We can list all variables with `heroku config`

### in local

To use environment variables in local we need [dotenv](https://www.npmjs.com/package/dotenv) package as devDepedencie and init with

```javascript
require('dotenv').config()
```

We can also run Heroku in local with `heroku local` to use environment variables defined on Heroku

## Disable production mode

To disable production mode on Heroku and avoid to load devDepencies we used

```bash
heroku config:set NPM_CONFIG_PRODUCTION=false
```
