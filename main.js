let carrito= []

const prodAdidas = [
    {
    precio: 60000,
    nombre:" Adidas SuperStar ",
    id: 1,
    },
    {
    precio: 5000,
    nombre:" Medias Adidas Originals",
    id: 2,
    },
    {
    precio: 30000,
    nombre:" Buzo trainer adidas",
    id: 3,    
    }
]
const prodCarhatt = [
    {
    precio: 50000,
    nombre:" Carpintero marron",
    id: 1,
    },
    {
    precio: 70000,
    nombre:" Pantalon doble knee azul",
    id: 2,
    },
    {
    precio: 10000,
    nombre:" Carhatt Hat, rojo",
    id: 3,
    }
]        


const prodNike = [
    {
    precio: 10000,
    nombre:" Remera running",
    id: 1,
    },
    {
    precio: 95000,
    nombre:" Nike AirMax",
    id: 2,
    },
    {   
    precio: 5000,
    nombre:" Medias Nike",
    id: 3,
    }
]

const marcas = [
    {nombre:"Nike"},
    {nombre:"Adidas"},
    {nombre:"Carhatt"},
  ]
 
  alert("Bienvenido a Reckless Love, a continuacion las marcas con las que trabajamos")

let stock = marcas.map (
    (marca) => marca.nombre)
alert (stock.join (" - "))

 
let seleccion = prompt(" ¿Desea realizar una compra?")
  
while (seleccion != "si" &&  seleccion != "no") {
    alert("por favor ingresa si o no ")
    seleccion = prompt ("Bienvenido, desea realizar una compra ? si o no")
}

  if(seleccion != "no") {
    let marca = prompt ("Introduce la marca")
    if (marca  == "Nike" || marca  == "Adidas" || marca  == "Carhatt" || marca  == "Corteiz" || marca == "Chromehearts"){
    switch (marca ) {
        case "Nike":
            alert("los productos disponibles son:")
        nike = prodNike.map (
            (el) => `ID= ${el.id} ,${el.nombre}, ${el.precio}$`)
        alert (nike.join (" - "))
        let producto = parseInt(prompt ("agrega a tu carrito un producto con su id"))
        let precio = 0

            if (producto == 1 || producto == 2 || producto == 3  ){
                switch (producto) {
                    case 1:
                        precio = 10000;
                        break;
                    case 2:
                        precio = 95000;
                        break;
                    case 3:
                        precio = 5000;
                        break;
                    default:
                        break;
                }
            let unidades = parseInt(prompt("cuantas unidades quiere llevar"))
        
            carrito.push ({producto, unidades, precio})
            console.log(carrito);
            }else{
                alert(" sin Stock ")
            }
        
            more = prompt ("algo mas ?")
            while (more == "no"){
                alert("gracias por su compra !")
                carrito.forEach((carritoFinal) => {
                    alert( `producto: ${carritoFinal.producto}, unidades ${carritoFinal.unidades}`)
                })
                
            break;
            }
            const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
            alert(`el total a pagar es:  ${total}`)  
        break;
      
        case "Adidas":
            alert("los productos disponibles son:")
            adidas = prodAdidas.map (
                (el) => `ID= ${el.id} ,${el.nombre}, ${el.precio}$`)
            alert (adidas.join (" - "))
            let producto2 = parseInt(prompt ("agrega a tu carrito un producto con su id"))
            let precio2 = 0
    
                if (producto2 == 1 || producto2 == 2 || producto2 == 3  ){
                    switch (producto2) {
                        case 1:
                            precio2 = 60000;
                            break;
                        case 2:
                            precio2 = 5000;
                            break;
                        case 3:
                            precio2 = 30000;
                            break;
                        default:
                            break;
                    }
                let unidades2 = parseInt(prompt("cuantas unidades quiere llevar"))
            
                carrito.push ({producto2, unidades2, precio2})
                console.log(carrito);
                }else{
                    alert(" sin Stock ")
                }
            
                more2 = prompt ("algo mas ?")
                while (more2 == "no"){
                    alert("gracias por su compra !")
                    carrito.forEach((carritoFinal) => {
                        alert( `producto: ${carritoFinal.producto2}, unidades ${carritoFinal.unidades2}`)
                    })
                    
                break;
                }
                const total2 = carrito.reduce ((acc, el) => acc + el.precio2 * el.unidades2, 0)
                alert(`el total a pagar es:  ${total2}`)    
        break;
      
        case "Carhatt":
            alert("los productos disponibles son:")
            carhat = prodCarhatt.map (
                (el) => `ID= ${el.id} ,${el.nombre}, ${el.precio}$`)
            alert (carhat.join (" - "))
            let producto3 = parseInt(prompt ("agrega a tu carrito un producto con su id"))
            let precio3 = 0
    
            if (producto3 == 1 || producto3 == 2 || producto3 == 3  ){
                switch (producto3) {
                    case 1:
                        precio3 = 50000;
                        break;
                    case 2:
                        precio3 = 70000;
                        break;
                    case 3:
                        precio3 = 10000;
                        break;
                    default:
                        break;
                }
            let unidades3 = parseInt(prompt("cuantas unidades quiere llevar"))
        
            carrito.push ({producto3, unidades3, precio3})
            console.log(carrito);
            }else{
                alert(" sin Stock ")
            }
        
            more3 = prompt ("algo mas ?")
            while (more3 == "no"){
                alert("gracias por su compra !")
                carrito.forEach((carritoFinal) => {
                    alert( `producto: ${carritoFinal.producto3}, unidades ${carritoFinal.unidades3}`)
                })
                
            break;
            }
            const total3 = carrito.reduce ((acc, el) => acc + el.precio3 * el.unidades3, 0)
            alert(`el total a pagar es:  ${total3}`)   


        break;
        default:  
        break;
      }
    }else{
      alert("No trabajamos con esa marca")
    }
  }else{
    alert("Vuelva pronto")
  }
