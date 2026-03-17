//Criar um programa com uma condicional composta para avaliar o desenpenho escolar entre "excelente", "otimo", "bom", "regular", ou "ruim" dependendo da nota
let nota = 20;
if (nota >= 90) {
    console.log(`Excelente`);
} else if(nota >= 80) {
    console.log (`Ótimo`);
} else if (nota >= 70) {
    console.log(`Bom`);
} else if(nota >= 60) {
    console.log(`Regular`);
} else if(nota <= 59 && nota >= 31) {
    console.log(`Ruim`);
}
