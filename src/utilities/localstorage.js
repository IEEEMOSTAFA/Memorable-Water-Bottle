const getStorage = () => {
    const storageCartString = localStorage.getItem('cart')

    if (storageCartString) {
        return JSON.parse(storageCartString)
    }
    return [];
}

const saveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const addToLS = id =>{
    const cart = getStorage();
    cart.push(id);
    // save to local storage
    saveCartToLS(cart);
}

export {addToLS, getStorage}
