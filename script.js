
function suara(){

let audio = new Audio();

audio.src="suara.mp3";

audio.play();

}
function mulaiBelajar(){

alert(
"Yuk mulai belajar! Pilih pelajaran yang kamu suka 😊"
);


}

function bacaHuruf(teks){


let suara = new SpeechSynthesisUtterance();


suara.text = teks;


suara.lang="id-ID";


speechSynthesis.speak(suara);



}
function bacaAngka(teks){


let suara = new SpeechSynthesisUtterance();


suara.text = teks;


suara.lang="id-ID";


speechSynthesis.speak(suara);


}