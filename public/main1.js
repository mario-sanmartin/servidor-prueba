// console.log('correcto');

document.querySelector('#botoncillo').addEventListener('click',traerElfos);

function traerElfos(){
    console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET','elfos.json',true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200){
            
            let datos = JSON.parse(this.responseText);

            let res = document.querySelector('#res');
            res.innerHTML = '';

        //   const nuevo =  datos.filter(x => x.nombre == 'Feanor');
            // const mapita = datos.map(x => x.nombre);
            const poto = datos;


            for(let elf of poto){
            // for(let elf of nuevo){
            // for(let elf of mapita){
                res.innerHTML += `
                <tr>
                    <td>${elf.id}</td>
                    <td>${elf.nombre}</td>
                    <td>${elf.Padre}</td>
                </tr>
                `
            }
        }
    }

}
{/* <td>${elf.nombre}</td> */}
