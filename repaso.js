 //TYPES
 console.log("hola")
 console.log(1)
 console.log(true)
 console.log("")
 console.log(null)
 console.log(undefined)
 console.log(["hola", 1, true])
 console.log({nombre: "Juan", Edad: 1, isBoy: true})
 
 //VARIABLES
 var name = "Juan"
 let perritos = ["Braus", "Galleta", "Cajeta", "Kanckys"]
 const Person = {
       nombre: "Pedro",
       edad: 12,
       isWorking: false
   }
 const Persons = [
   {
    nombre: "Pedro",
    edad: 12,
    isWorking: false 
   },
   {
     nombre: "Isra",
     edad: 32,
     isWorking: true
   }
 ]
  console.log(Persons)
 
  //FUNCTIONS
  function getName(a,b){
     //code 
   return
  }

  let churros= 12
  let papas = 25
  
  function SumaVenta(producto1, producto2){
    sum = producto1 + producto2
    return sum

  }
  console.log(SumaVenta)

// #1 
  let firstName = "Eliam"
  let lastName = "Martinez"
function getfullName(name1, name2){
    let fullName = name1 + name2
    return fullName 
}
console.log(getfullName(firstName, lastName))

//#2
let firstName = "Eliam"
let lastName = "Martinez"
function getfullName(name1, name2){
  let fullName = `#{name1} ${name2}`
  return fullName 
}
console.log(getfullName(firstName, lastName))

//#3
//Saber si el dia de hoy se trabaja, si se trabaja lo imprimes, sino se imprime no se trabaja.
//rango 0-6, siendo 0 domingo a 6 sabado.
//valor inicial 3
let day = 3   

function getWorkingDay(currentDay=0){
  if((currentDay == 0) || (currentDay == 6)){
  console.log("No se trabaja")
  }else{
   console.log("Si se trabaja")
  }
}
getWorkingDay(day)

//#4
//Imprimir si el numero es unidad, decena o centena.
//valor inicial 50

let initialNumber = 50
function getTypeNumber(number = 0){
  if(number <= 9){
    console.log("Es unidad 😊")
  }
  else if(number <= 99){
    console.log("Es decena 😊😊")
  }
  else if(number <= 999){
    console.log("Es centena 😊😊😊")
  }else {
    console.log("es millar u otro numero")
  }
}
getTypeNumber(initialNumber)

//#5 
//Crear una funcion.       
// Imprimir si me alcanza comprar los 3 productos con un presupuesto.
// Si no me alcanza imprimir cuanto me hace falta.
// Valores iniciales:
// Presupuesto: $250
// Producto 1: $55
// Producto 2: $60
// Producto 3: $150

// Pasar los 3 productos y el presupuesto por la funcion como parametros.
// ejemplo function calculate(p1, p2, p3, p) ...
let budget = 250
let product1 = 55
let product2 = 60
let product3 = 150

function getBuyProducts(b = 0, p1 = 0, p2 = 0, p3 = 0){
  let sum = p1 + p2 +p3
  let subt = b - sum

  if(sum <= b){
    console.log("Si te alcanza el presupuesto 😊😊😊")
  }else {
    console.log("Mmm no te alcanza 😥😥😥 te faltan" + subt)
  }
}
getBuyProducts(budget, product1, product2, product3)

