function song(arr) {
    let songNumber = arr.shift()
    let typeSong = arr.pop()
    class Song {
        constructor(type, song, time) {
            this.type = type,
                this.songName = song,
                this.time = time
        }
    }
    let songs = []
    for (let i = 0; i < songNumber; i++) {
        let current = arr[i].split("_")
        let type = current[0]
        let song = current[1]
        let length = current[2]
        songs.push(new Song(type, song, length))
    }
    function print() {
        let result=[]
        for (let currentSong of songs) {
            if (typeSong === "all") {
                result.push(currentSong.songName);
            }else {
                if(currentSong.type===typeSong) {
                    result.push(currentSong.songName);
                }
            }
        }
        return result;
    }

    console.log(print().join("\n"));
}
