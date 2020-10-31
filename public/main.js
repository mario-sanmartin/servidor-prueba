const numeros = [1,2,3,4,5,6,7,8,9,]

const mascotas = [
    {nombre:'blue' , edad:9 , raza:'perro'},
    {nombre:'luna' , edad:8 , raza:'perro'},
    {nombre:'atom' , edad:5 , raza:'perro'},
    {nombre:'wikoz', edad:15 , raza:'gato'}
]

// console.log(mascotas,numeros);
const numerosFiltrados = numeros.filter(x => x < 5);
// const papi = document.getElementById('papi');
// papi.innerHTML = `<h1>MI listado de numeros</h1>
// ${numerosFiltrados}`

const perros = mascotas.filter(x => x.raza == 'perro');
const gatos = mascotas.filter(x => x.raza == 'gato');

console.log(perros);
console.log('Gatos del array' ,gatos);
console.log(numerosFiltrados);

///MAP
const multiplicados = numeros.map(x => x * 2);

console.log(multiplicados);

const segundoFiltro = multiplicados.filter(x => x <= 10);
console.log(segundoFiltro);

const parejas = segundoFiltro.map(x => [x,x]);
console.log(parejas);


const suma = (ns) => {
    let acumalado = 0;
    for(i = 0; i<ns.length; i++){
        acumalado +=ns[i];
    }
    return acumalado
}

const edades = mascotas.map(x => x.edad)

console.log('edades mascostas',edades);

const resultado = suma(edades);
console.log(resultado/ edades.length);


//REDUCE
// const reducer = (acumulador, valorActual) => nuevoAcumulador

const reducido = [1,2,1].reduce((acc,el) => acc + el ,0) //el segundo elemento 0 es el valor inicial
console.log(reducido);

//Esta es la forma de sumar todos los valores de un arreglo
const res = numeros.reduce((acc,el)=> acc + el , 0);
console.log( res);

//indezar arreglo --brutal
const indexed = mascotas.reduce((acc,el)=> ({
    ...acc,
    [el.nombre]: el,
}),{})
//reduce + indezado + parametro NAZIIIIIIIIIIIII!!!
console.log(indexed['blue']);


//array con elemento anidados complicado
const anidado = [1,[2,3],4,[5]]
const plano = anidado.reduce((acc,el)=> acc.concat(el),[])
//acc es un arreglo vacio y el primer elemento es uno

console.log(plano);