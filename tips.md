Tips for Heroku
================

Useful tips and tricks for Heroku deployment.
This is just a quick memo for me.

- [Tips for Heroku](#tips-for-heroku)
    - [Port for Heroku](#port-for-heroku)
    - [Procfile](#procfile)
    - [Node.js version](#nodejs-version)

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