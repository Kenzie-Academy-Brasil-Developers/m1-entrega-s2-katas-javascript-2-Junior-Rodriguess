function add(a,b) {
    let soma = a + b
    return soma
}
console.log(add(2,4))
function multiply(c, d) {
    let multiplicacao = 0
    for(let i = 0; i < d ; i++) {
        multiplicacao = add(c, multiplicacao)
    }    
   return multiplicacao
}
console.log(multiply(5,5))
function power(x,n) {
    let potencia = 1
    for (let i = 0; i < n; i++) {
     potencia = multiply(x, potencia)
    }
 return potencia
}
console.log(power(2,6))
function factorialize(e) {
    let fatorial = 1
    for (let i = 1; i <= e; i++) {  
    fatorial = multiply(i, fatorial)       
    }
   return fatorial
}
console.log(factorialize(4))


