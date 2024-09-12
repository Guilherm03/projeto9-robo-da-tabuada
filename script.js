let number = parseFloat(prompt("Digite um número de 1 a 20:"))
let operationResult = ""

for (let i = 1; i <= 20; i * ++i) {
    operationResult += `${number} x ${i} = ${number * i}\n`
}
alert("Resultado da tabuada do " + number + " é:\n" + operationResult)