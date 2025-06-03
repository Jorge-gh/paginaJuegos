function fibonacci() {

  const limite = document.getElementById("texto").value
  const arrFib = [0, 1]
  for (let i = 2; i <= limite; i++) {
    arrFib.push(arrFib[i - 1] + arrFib[i - 2])
    console.log(arrFib);
  }

  document.getElementById("result").innerText = arrFib
}