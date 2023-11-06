const player = {
    play: function(id) {  // propierty methods
        console.log(`Playing song with id ${id}...`)
    },
    stop: function() {
        console.log('Stopping...')
    },
    delete: function() {
        console.log('Deleting song with id ${id}')
    },
    createPlaylist: function() {
        console.log(`Creating playlist of {id}`)
    },
    playPlaylist: function() {
        console.log(`Playing playlist of {id}`)
    }
}

player.play(20)
player.createPlaylist('Rock')
