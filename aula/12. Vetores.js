// Criando um Vetor.
const frutas = ['Maçã', 'Banana', 'Laranja']
console.log(frutas)

// Acessar elementos específicos.
console.log(frutas[0])
console.log(frutas[1])

// Adicioando elementos
frutas.push('Uva')
console.log(frutas)

// Remover elemento.
frutas.pop() // Remover o útimo elemento.
console.log(frutas)

frutas.splice(1,1) // Remove apenas o segundo elemento.
console.log(frutas)

// percorrendo o vetor
frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`)
})