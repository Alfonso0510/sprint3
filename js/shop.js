// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    //Recorremos el array products, si el id coindice con el id pasado por parametro se añade a carlist
    for (let i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            cartList.push(products[i]);
        }
    }
    console.log(cartList)
}

// Exercise 2
function cleanCart() {
    //Ponemos el array a logitud 0
    cartList.length = 0;
}

// Exercise 3
function calculateTotal() {
    //Recorremos el array sumando los importes de cada producto
    let precio = 0;
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
        applyPromotionsCart()
        //Extraemos solo la propiedad precio de cada elemento
        precio = cartList[i].price;
        total = total + precio
    }
    console.log(total);
}

// Exercise 4
function generateCart() {
    //Recorremos el array para ver si existe el producto
    for (i = 0; i < cartList.length; i++) {
        var producto = cartList[i];
        var itemProducto = cart.find(productoCart => productoCart.name === producto.name);
        // Si no existe el producto creamos uno con cantidad 1
        if (itemProducto == null) {
            itemProducto = producto;
            itemProducto.quantity = 1;
            cart.push(itemProducto);
        }
        // Si ya existe el producto le sumamos 1 al total de la cantidad
        else {
            itemProducto.quantity = itemProducto.quantity + 1;
        }
    }
    console.log(cart);
}
// Exercise 5
function applyPromotionsCart() {
    total = 0;
    //Creamos la constante del descuento de los 2/3 que seria 0.66
    const descuentoMezclaPastel = 0.66;
    for (i = 0; i < cart.length; i++) {
        //Evaluamos si el producto es oil o la mezcla para pasteles
        if (cart[i].id == 1 || cart[i].id == 3) {
            //Descuento del producto oil
            if (cart[i].id == 1) {
                if (cart[i].quantity >= 3) {
                    cart[i].price = 10;
                }
                //Descuento de la mezcla para pasteles    
            } else if (cart[i].id == 3) {
                if (cart[i].quantity >= 10) {
                    cart[i].price = cart[i].price * descuentoMezclaPastel;
                }
            }
        }
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    let product = products[id-1] ;
    let itemProduct = cart.find( productCart => productCart.name === product.name);

    //Evaluamos si el producto existe o no, si es que no se añade y se pone cantidad a 1
    if (itemProduct == null) {
        itemProduct = product;
        itemProduct.quantity = 1;
        cart.push(itemProduct);
    }
    else {
        //Si el producto ya existe solamente se suma 1 a la cantidad
        itemProduct.quantity = itemProduct.quantity + 1 ;
    }
    console.log(cart);
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}

console.log(cartList)

// if(id == cart[i].id && cart[i].quantity==0