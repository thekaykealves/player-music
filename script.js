let musicas = [
    {titulo:"Alive", artista: "Alok", src:"assets/musicas/Alok - Alive (It Feels Like) Official Video _160k.mp3",
    img: "assets/imagens/alok.jpeg"},
    {titulo:"Colors", artista: "NoCopyRigthSounds", src:"assets/musicas/Tobu - Colors NCS Release _160k.mp3",
    img: "assets/imagens/nocopyrightsounds.jpg"},
    {titulo:"In da Club", artista: "50 Cent", src:"assets/musicas/50 Cent - In Da Club (Official Music Video)_160k.mp3",
    img: "assets/imagens/50cent.jpg"}
]

let musica = document.querySelector("audio");

let indexMusica = 0;

let imagem = document.querySelector("#image-fundo");
let nomeMusica = document.querySelector(".title h2");
let nomeArtista = document.querySelector(".title #artist");

renderizarMusica(indexMusica);

// Events
document.querySelector("#button-play").addEventListener("click", tocarMusica);
document.querySelector("#button-pause").addEventListener("click", pararMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
    indexMusica--;
    if(indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
    tocarMusica();
})

document.querySelector(".proxima").addEventListener("click", () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    tocarMusica();
})


// Functions
function renderizarMusica(index) {
    musica.setAttribute("src", musicas[index].src);
    musica.addEventListener("loadeddata", () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src =  musicas[index].img;
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector("#button-play").style.display = "none";
    document.querySelector("#button-pause").style.display = "block";
}

function pararMusica() {
    musica.pause();
    document.querySelector("#button-pause").style.display = "none";
    document.querySelector("#button-play").style.display = "block"
}

function atualizarBarra() {
    let barra = document.querySelector("progress");
    barra.style.width = Math.floor(musica.currentTime / musica.duration * 100) + "%";   
}
