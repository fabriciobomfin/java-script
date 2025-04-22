/*
Crie um vetor com 3 notas, calcule a média aritmética.

Mostre as 3 notas e informe a média.
usando uma arow function.

*/


const notas = [7.5, 8.0, 9.2];

const calcularMedia = (notas) => {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
};

const media = calcularMedia(notas);

console.log("Notas:", notas.join(", "));
console.log("Média:", media.toFixed(2));
