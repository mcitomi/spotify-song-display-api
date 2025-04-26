import { port, client_id, callback, client_secret } from "../config.json";
import CORS from "bun-routes-cors";
import { join } from "path";
import { saveUserData } from "./modules/saveUserData";
import { getSongInfo } from "./modules/getSongInfo";

Bun.serve({
    port: port,
    routes: CORS({
        "/": {
            GET: async (req) => {
                return new Response(`Hi! Spotify Song Display api running on port ${port}! Made by mcitomi ^^`);
            }
        },
        "/login": {
            GET: async (req) => {
                return Response.redirect("https://accounts.spotify.com/authorize?" +
                    `response_type=code&client_id=${encodeURIComponent(client_id)}` +
                    `&scope=user-read-playback-state` +
                    `&redirect_uri=${encodeURIComponent(callback)}`
                );
            }
        },
        "/api/callback": {
            GET: async (req) => {
                const { searchParams } = new URL(req.url);
                console.log(req.url);

                const code: string | null = searchParams.get("code");

                if (!code) {
                    return new Response("Unable to get code", { status: 400 });
                }

                const response = await fetch("https://accounts.spotify.com/api/token", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa(`${client_id}:${client_secret}`),
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams({
                        grant_type: "authorization_code",
                        code: code,
                        redirect_uri: callback
                    }).toString()
                });

                const body = await response.json() as {
                    error: string;
                    error_description: string;
                };

                if (!response.ok) {
                    return new Response(`Spotify error: ${body?.error ? body?.error : " "} ${body?.error_description ? body?.error_description : " "} `, { status: 400 });
                }

                saveUserData(body);

                return new Response("Auth ok");
            }
        },
        "/api/current": {
            GET: async (req) => {
                const body = await getSongInfo();
                if (body) {
                    return new Response(JSON.stringify(body));
                } else {
                    return new Response(`{ "error" : "no item found" }`, { status: 400 });
                }
            }
        },
        "/api/types/SpotifyPlayback.d.ts": {
            GET: async (req) => {
                return new Response(Bun.file(join(import.meta.dir, "types", "spotifyCurrentPlaying.d.ts")));
            }
        }
    })
});

console.log(`Spotify Song Display api started on port ${port}`);
