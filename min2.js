let valor = [];

chicharronero = () => {
    let a = 0;
    let b = 0;
    let c = 0;

    let operacion =  -b +- (Math.sqrt(b** - 4*a*c))/2*a
    return operacion
    
}

let button = document.querySelector('#boton').addEventListener('click',()=>{

    let aInput = document.querySelector('#a').value;
    let bInput = document.querySelector('#b').value;
    let cInput = document.querySelector('#c').value;
    valor.push(chicharronero);
    chicharronero();
    console.log(chicharronero());

    
});




// let inputPeso = document.querySelector('#Imc');
// let inputAltura = document.querySelector('#Imc2');
// let button= document.querySelector('#boton')


// let valor = [];


// function mic(peso, altura){
//     let operacion = peso / (altura*altura)
//     return operacion
// }


// button.addEventListener('click', () => { 
//     let micResultado = mic(inputPeso.value, inputAltura.value)

// }
//     console.log(micResultado)
// );

