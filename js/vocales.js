function contadorVocales() {
  const textoOriginal = document.getElementById("texto").value

  const texto = textoOriginal.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  let contador = 0

  for (let i = 0; i < texto.length; i++) {
    if ("aeiou".includes(texto[i])) {
      contador++
    }
  
    document.getElementById("numVocales").innerText = `${contador}`

  } 
}

