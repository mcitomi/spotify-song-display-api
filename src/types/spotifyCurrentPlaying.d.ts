export type SpotifyPlayback = {
    timestamp: number;
    context: null | any;
    progress_ms: number;
    item: {
        album: {
            album_type: string;
            artists: Array<{
                external_urls: { spotify: string };
                href: string;
                id: string;
                name: string;
                type: string;
                uri: string;
            }>;
            available_markets: string[];
            external_urls: { spotify: string };
            href: string;
            id: string;
            images: Array<{ height: number; url: string; width: number }>;
            name: string;
            release_date: string;
            release_date_precision: string;
            total_tracks: number;
            type: string;
            uri: string;
        };
        artists: Array<{
            external_urls: { spotify: string };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
        }>;
        available_markets: string[];
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_ids: { isrc: string };
        external_urls: { spotify: string };
        href: string;
        id: string;
        is_local: boolean;
        name: string;
        popularity: number;
        preview_url: string | null;
        track_number: number;
        type: string;
        uri: string;
    };
    currently_playing_type: string;
    actions: {
        disallows: {
            resuming?: boolean;
            toggling_repeat_context?: boolean;
            toggling_repeat_track?: boolean;
            toggling_shuffle?: boolean;
        };
    };
    is_playing: boolean;
    error: string | undefined;
};
