import OS from "os";

import { parseFile } from "music-metadata";
import { IAudioMetadata } from "music-metadata/lib/type";

import __GET_PATHS from "./__GET_PATHS.js";

import createBase64String from "./createBase64String";
import createMp3ObjectURL from "./createMp3ObjectURL";

const __HOME_DIR: string = OS.userInfo().homedir;

const PATHS_DIRS: string[] = [
    `${__HOME_DIR}/Music/test`,
]

function __DATA() {
    const data = __GET_PATHS(PATHS_DIRS).map( async (URI: string) => {

        const metadata: IAudioMetadata = await parseFile(URI);

        return {
            url:        createMp3ObjectURL(URI),
            artist:     metadata.common.artist,
            album:      metadata.common.album,
            cover:      createBase64String(metadata.common.picture[0]),
            duration:   metadata.format.duration,
            title:      metadata.common.title,
            year:       metadata.common.year
        }

    } )

    return Promise.all(data)
}

export default __DATA;