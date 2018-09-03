let valor = [];
let a = 0;
let b = 0;
let c = 0;


Math.sign = chicharronero = () => {
    let operacion =  (-b - (Math.sqrt(b** - 4*a*c)))/2*a
    // let operacion2 =  (-b + (Math.sqrt(b** - 4*a*c)))/2*a
    return operacion  
}

Math.sign = chicharronero2 = () => {
    // let operacion =  (-b -(Math.sqrt=(b** - 4*a*c)))/2*a
    let operacion2 =  (-b + (Math.sqrt(b** - 4*a*c)))/2*a
    return operacion2  
}
let button = document.querySelector('#boton').addEventListener('click',()=>{

    a = document.querySelector('#a').value;
    b = document.querySelector('#b').value;
    c = document.querySelector('#c').value;
    document.querySelector('#result').textContent = `El resultado es ${chicharronero()} Y ${chicharronero2()}` ;
    valor.push(chicharronero);
    console.log(valor);
    chicharronero();
    console.log(chicharronero());

    
});




