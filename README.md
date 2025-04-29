# spotify-song-display-api
spotify song display api - to get your actual playing music information via api.

## Installation
### Install Bun runtime.
To install dependencies:

```bash
bun install
```

To run:

```bash
bun .
```

This project was created using `bun init` in bun v1.2.8. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Configuration:
Open your spotify dev portal (https://developer.spotify.com/dashboard) and create an app.

```json
{
    "port" : 8181,  // this will be your song 
    "client_id" : "",  // spotify app client id
    "client_secret" : "",  // spotify app secret
    "callback" : "http://localhost:8181/api/callback"  // spotify app callback url
}
```
