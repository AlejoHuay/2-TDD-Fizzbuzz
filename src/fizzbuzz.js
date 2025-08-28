function convertirFizzBuzz(n){
    if(n % 3 === 0 && n % 5 === 0){
        return "FizzBuzz"
    }else if(n % 3 === 0){
        return "Fizz"
    }else if(n % 5 === 0){
        return "Buzz"
    }
    return n + "";
}

function generarCadenaFizzBuzz(n){
    let i=1;
    let cadena="";
    for(i; i<= n; i++){
        cadena += convertirFizzBuzz(i);
        if(i!=n){
            cadena +=" ";
        }
    }
    return cadena;
}

export {convertirFizzBuzz, generarCadenaFizzBuzz};