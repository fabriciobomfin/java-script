// Criando um vetor de obejetos.
const usuarios = [
    {nome: 'Marta', idade: 30},
    {nome: 'José', idade: 35},
    {nome: 'Carla', idade: 30}

]

// Exibindo.
//console.log(usuarios)
usuarios.forEach(usuario => {
    console.log(`Nome: ${usuario.nome} - idade: ${usuario.idade}`)
})
