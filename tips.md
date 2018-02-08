Tips for Heroku
================

Useful tips and tricks for Heroku deployment.
This is just a quick memo for me.

- [Tips for Heroku](#tips-for-heroku)
    - [Port for Heroku](#port-for-heroku)

## Port for Heroku

We need to start the app on a port provided by Heroku

```javascript
//8080 is the default port if the environment variable PORT doesn't exist
const PORT = process.env.PORT || 8080

app.listen(PORT, () =>
{
    console.log(`App started on port ${PORT}`)
})
```