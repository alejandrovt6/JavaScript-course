const player = {
    song: '',
    play: (id) => console.log(`Playing song with id ${id}...`),
    stop: () => console.log('Stopping...'),
    delete: () => {console.log('Deleting song with id ${id}')},
    createPlaylist: () => console.log(`Creating playlist of {id}`),
    playPlaylist: () => console.log(`Playing playlist of {id}`),

    set newSong(song) {
        this.song = song
        console.log(`Adding ${song}`)
    },
    get obtainSong() {
        console.log(`${this.song}`)
    }
}

player.newSong = 'Hello'
player.obtainSong;

player.play(20)
player.createPlaylist('Rock')
