const numeros = [1,2,3,4,5,6,7,8,9,]

const mascotas = [
    {nombre:'blue' , edad:9 , raza:'perro'},
    {nombre:'luna' , edad:8 , raza:'perro'},
    {nombre:'atom' , edad:5 , raza:'perro'},
    {nombre:'wikoz', edad:15 , raza:'gato'}
]

// console.log(mascotas,numeros);
const numerosFiltrados = numeros.filter(x => x < 5);

console.log(numerosFiltrados);