//===============LOCAL STORAGE==========

export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem('products'));

    if(products) {
        return products;
    } else{
        return [];
    }
};

//guardar en LocalStorage
//recibir un producto
export const setInLocalStorage = (productsIn) => {

    if(productsIn){
        //traer los elementos
        let productsInLocal = handleGetProductLocalStorage();
        const existingIndex = productsInLocal.findIndex(
            (productsLocal)=>productsLocal.id === productsIn.id
        );
    //verificar si el elemento existe
    if(existingIndex !== -1) {
        //si existe debe reemplazarse
        productsInLocal[existingIndex] = productsIn;
    }else{
        //si no existe debe agregarse
        productsInLocal.push(productsIn);
    }
    //setear el nuevo array
    localStorage.setItem('products', JSON.stringify(productsInLocal));
    }
};