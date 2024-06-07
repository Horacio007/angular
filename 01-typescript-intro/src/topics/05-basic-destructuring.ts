interface AudioPlayer {
    audioVolumne:number;
    songDuration:number;
    song:string;
    details:Details;    
}

interface Details {
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer = {
    audioVolumne: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Edd Sheeran",
        year: 2015
    }
}

const {song, song:anotherSong, details, details:{author:anotherAutor}} = audioPlayer;
const { author} = details

// console.log('Song sacada con destructuracion del primer ejemplo:', song);
// console.log('Song sacada con destructuracion del segundo ejemplo:', anotherSong);
// console.log('Author sacado con destruccturacion de objetos de la forma separada:', author);
// console.log('Author sacado con destruccturacion de objetos de la forma todo junto:', anotherAutor);
// console.log('Song sacada normal:', audioPlayer.song);
// console.log('Song:', audioPlayer.songDuration);
// console.log('Author:', audioPlayer.details.author);

// const dbz:string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , trunks = 'Not found']:string[] = ['Goku', 'Vegeta'];
// const trunks = dbz[3] || 'Personaje no encontrado';


console.log('Personaje 3:', trunks);


export {};