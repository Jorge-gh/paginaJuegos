const cardInner = document.querySelector('.card-inner')
const resultado = document.getElementById('result')
const front = document.querySelector('.front')
const back = document.querySelector('.back')
const btnEnviar = document.getElementById('btnEnviar')
const audio = document.getElementById('bg-music');
const sonidoHover = document.getElementById('hover-sound');
const sonidoClick = document.getElementById('click-sound')
const linkMenu = document.querySelectorAll('.linkMenu');
const sonidoError = document.getElementById('error-sound')
const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const inputTexto = document.getElementById("texto");

const form = document.getElementById("formPalindromo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  esPalindromo();
});



audio.volume = 0.2;
sonidoHover.volume = 0.3
sonidoClick.volume = 0.3
sonidoError.volume = 0.3


linkMenu.forEach(link => {
  link.addEventListener('mouseenter', () => {
    sonidoHover.currentTime = 0;
    sonidoHover.play();
  });
});

btnEnviar.addEventListener('mouseenter', () => {
  sonidoHover.currentTime = 0;
  sonidoHover.play();
});

function ajustarAltura() {
  document.body.style.height = window.innerHeight + 'px';
}

window.addEventListener('resize', ajustarAltura);
window.addEventListener('orientationchange', ajustarAltura);
ajustarAltura();

function spinTarjeta() {
  cardInner.classList.remove("spin");
  void cardInner.offsetWidth;
  cardInner.classList.add("spin");
}

function flipTarjeta() {
  cardInner.classList.remove("spin");
  cardInner.classList.toggle("flip");
}

function repSoundClick() {
  sonidoClick.currentTime = 0;
  sonidoClick.play();
}

function repSoundError() {
  sonidoError.currentTime = 0;
  sonidoError.play();
}

cardInner.addEventListener('click', flipTarjeta)

function esPalindromo() {
  const input = document.getElementById("texto");
  const textoOriginal = input.value.trim();

  if (textoOriginal === "" || textoOriginal.length <= 2 || !soloLetras.test(textoOriginal)) {
    resultado.classList.remove("animado");
    void resultado.offsetWidth;
    resultado.classList.remove("animado2");
    void resultado.offsetWidth;
    resultado.innerText = "No es Valido!";
    resultado.classList.add("animado2");
    repSoundError()
    input.value = ""
    return
  };

  repSoundClick()

  spinTarjeta();

  const texto = textoOriginal
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();

  const textoInvertido = texto.split("").reverse().join("");

  front.innerText = texto;
  back.innerText = textoInvertido;


  resultado.classList.remove("animado");
  void resultado.offsetWidth;
  resultado.classList.remove("animado2");
  void resultado.offsetWidth;

  if (texto === textoInvertido) {
    resultado.innerText = "¡Es Palíndromo!";
    resultado.classList.add("animado");

  } else {
    resultado.innerText = "No es Palíndromo";
    resultado.classList.add("animado2");
  }

  input.value = ""
}