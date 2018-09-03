let valor = [];
let a = 0;
let b = 0;
let c = 0;
chicharronero = () => {
    let operacion =  -b +- (Math.sqrt(b** - 4*a*c))/2*a
    return operacion
    
}
let button = document.querySelector('#boton').addEventListener('click',()=>{

    a = document.querySelector('#a').value;
    b = document.querySelector('#b').value;
    c = document.querySelector('#c').value;
    document.querySelector('#result').textContent = `El resultado es ${chicharronero()}` ;
    valor.push(chicharronero);
    console.log(valor);
    chicharronero();
    console.log(chicharronero());

    
});




