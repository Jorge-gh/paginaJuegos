function fizzBuzz() {
  const valor = document.getElementById("texto").value
  document.getElementById("result").innerText = " "

  for (let i = 1; i <= valor; i++) {

    let result = ""

  if (i % 3 === 0 && i % 5 === 0) {
    result = "FizzBuzz"
  } else if (i % 3 === 0) {
    result = "Fizz"
  } else if (i % 5 === 0) {
    result = "Buzz"
  }else{
    result = i
  }

  document.getElementById("result").innerText += " " + result
}
}