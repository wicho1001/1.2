let valor = [];
let a = 0;
let b = 0;
let c = 0;


// Math.sign = 
chicharronero = () => {
    let d = (Math.pow(b,2) - 4*a*c);
    let operacion = (-b + Math.sqrt(d))/2*a
    if(d <= -1){
        return alert("la raices negativas no tienen indeterminacion")
    }else{
        return operacion  
    }
}

// Math.sign = 
chicharronero2 = () => {
    let d = (Math.pow(b,2) - 4*a*c);
    let operacion2 = (b - Math.sqrt(d))/2*a
    if(d <= -1){
        return alert("la raices negativas no tienen indeterminacion")
    }else{
        return operacion2  
    }
}
let button = document.querySelector('#boton').addEventListener('click',()=>{

    a = document.querySelector('#a').value;
    b = document.querySelector('#b').value;
    c = document.querySelector('#c').value;
    document.querySelector('#result').textContent = `El resultado es ${chicharronero()} Y ${chicharronero2()}` ;
    valor.push(chicharronero(),chicharronero2());
    
});




