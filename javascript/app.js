/* -------------------------------------------------------------------------- */
/*                                  VARIABLES                                 */
/* -------------------------------------------------------------------------- */

const cartList = document.getElementById('shoppingCart')


const cart = []


/* -------------------------------------------------------------------------- */
/*                              ADD ITEM TO CART                              */
/* -------------------------------------------------------------------------- */

function addItem(phone_model, wood_type, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].phone_model === phone_model && cart[i].wood_type === wood_type) {
           cart[i].qty += 1
           return
        }
    }
    const item = {phone_model:phone_model, wood_type:wood_type, price:price, qty: 1}
    cart.push(item)
}

/* -------------------------------------------------------------------------- */
/*                             SHOW ITEMS IN CART                             */
/* -------------------------------------------------------------------------- */

function showItems() {
    const qty = getQty()
    const total = getTotal()
   
    console.log(`You have ${qty} items in your cart`)

    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].phone_model} ${cart[i].wood_type} $${cart[i].price} x ${cart[i].qty}`)
    }

    console.log (`Cart Total: $${total}`)
}

/* -------------------------------------------------------------------------- */
/*                   GET QUANTITY OF (specific) ITEM IN CART                  */
/* -------------------------------------------------------------------------- */

function getQty() {
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}

/* -------------------------------------------------------------------------- */
/*                        GET TOTAL PRICE OF ALL ITEMS IN CART                */
/* -------------------------------------------------------------------------- */

function getTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    return total
}

/* -------------------------------------------------------------------------- */
/*                            REMOVE ITEMS IN CART                            */
/* -------------------------------------------------------------------------- */

function removeItem(phone_model, wood_type, qty = 0) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].phone_model === phone_model && cart[i].wood_type === wood_type) {
            if (qty > 0) {
                cart[i].qty -= qty
            }
        if (cart[i].qty < 1 || qty === 0) {
            cart.splice(i, 1)
        }
            return
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                                  TEST ZONE                                 */
/* -------------------------------------------------------------------------- */

addItem('iPhone11', 'walnut', 30.00)
addItem('iPhone11', 'rosewood', 30.00)
addItem('iPhone11', 'rosewood', 30.00)
addItem('iPhoneX', 'bamboo', 30.00)
addItem('iPhoneX', 'bamboo', 30.00)
addItem('iPhoneX Max', 'rosewood', 30.00)
addItem('iPhoneX Max', 'walnut', 30.00)
addItem('Samsung Galaxy 10', 'cherry', 30.00)
addItem('Samsung Galaxy 10', 'cherry', 30.00)
addItem('Samsung Note 10', 'rosewood', 30.00)

removeItem('iPhone11', 'rosewood')
removeItem('iPhoneX', 'bamboo', 1)
removeItem('Samsung Galaxy 10', 'cherry', 1)


showItems() 
