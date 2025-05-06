# spotify-song-display-api
spotify song display api - to get your actual playing music information via Bun based rest api.

## 🚀 Installation
### Install Bun runtime.

**Navigate to the main folder, and run thesee commands:**

To install dependencies:

```bash
bun install
```

To run:

```bash
bun .
```

This project was created using `bun init` in bun v1.2.8. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## ✨ Configuration:
Open your spotify dev portal (https://developer.spotify.com/dashboard) and create an app.

```json
{
    "port" : 8181,  // this will be your song 
    "client_id" : "",  // spotify app client id
    "client_secret" : "",  // spotify app secret
    "callback" : "http://localhost:8181/api/callback"  // spotify app callback url
}
```
## 💘 Usage / endpoints:
- `/login` - You can log in to your Spotify app with your profile. (After this, the "data" folder will appear in the main folder, where your data will be saved.)
- `/api/callback` - This is where you'll be redirected after logging into Spotify (don't worry about it)
- `/api/current` - This will allow you to retrieve the song you are currently listening to (this is what you will need!)
- `/api/types/SpotifyPlayback.d.ts` - You can get the Spotify current playing API type

## 🍻 Contact me on
*Discord: @mcitomi / https://dc.mcitomi.hu*
