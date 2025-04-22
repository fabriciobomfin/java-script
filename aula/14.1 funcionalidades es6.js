// Criando um vetor de obejetos.
const usuarios = [
    {nome: 'Marta', idade: 31},
    {nome: 'José', idade: 35},
    {nome: 'Carla', idade: 25}

]
console.log(`Listando todos os usuário. `)
usuarios.forEach(usuario =>
    console.log( `Nome: ${usuario.nome}, idade: ${usuario.idade}`))

// Filtar idade maior que 30.
const idadeMaiorQue30 = usuarios.filter(usuario => usuario.idade > 30)
// console.log(idadeMaiorQue30)

console.log('\nIdade maior que 30.')
idadeMaiorQue30.forEach(usuario => {
    console.log( `Nome: ${usuario.nome}, idade: ${usuario.idade}`)
})

// Encontrar um usuário específico.
const usuarioEncontrado = usuarios.find( usuario => usuario.nome === 'Marta')
// Devolve um obejeto.
console.log('\nEncontrando usuario.')
console.log(usuarioEncontrado) // Resposta como obejeto.
console.log(`Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`)

// Buscar em uma listar apenas nomes.
console.log(`\nLista com nomes dos usuarios.`)
const apenasNomes = usuarios.map(usuario => usuario.nome)
apenasNomes.forEach(nome => console.log(nome))

