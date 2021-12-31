let config = {
    outputFormat: {
        args: "-c copy",
        ext: ""
    },
    embedLyrics: true,
    saveLyrics: true,
    embedCoverArt: true,
    saveCoverArt: true,
    playbackSpeed: 1.0,
    saveCanvas: false,
    savePaths: {
        basePath: "{user_home}/Music/Soggfy",
        track: "{artist_name}/{album_name}{multi_disc_path}/{track_num}. {track_name}.ogg",
        episode: "Podcasts/{artist_name}/{album_name}/{release_date} - {track_name}.ogg",
        canvas: "{artist_name}/{album_name}{multi_disc_path}/Canvas/{track_num}. {track_name}.mp4"
    },
    blockAds: true
};
export default config;