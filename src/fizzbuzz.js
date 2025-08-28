function convertirFizzBuzz(n){
    if(n % 5 === 0){
        return "Buzz"
    }else if(n % 3 === 0){
        return "Fizz"
    }
    return n + "";
}
export default convertirFizzBuzz;