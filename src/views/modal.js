/* POPUP */

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProducts } from "../services/products";

const cancelButton = document.getElementById("cancelarButton");
cancelButton.addEventListener("click", () => {
    closeModal();
})



export const openModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'flex';
    const buttonDelete = document.getElementById("eliminarButton");

    if (productoActivo) {
        const nombre = document.getElementById("inputName"),
            imagen = document.getElementById("inputImg"),
            precio = document.getElementById("inputPrecio"),
            categoria = document.getElementById("selectCategoria");

        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria;

        buttonDelete.style.display = 'block';
    }else{
        buttonDelete.style.display = "none";
    }
};

export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'none'
    setProductoActivo(null);
    resetModal();
};

const resetModal = () => {
    const nombre = document.getElementById("inputName"),
        imagen = document.getElementById("inputImg"),
        precio = document.getElementById("inputPrecio"),
        categoria = document.getElementById("selectCategoria");

    nombre.value = '';
    imagen.value = '';
    precio.value = 0;
    categoria.value = 'Seleccione una categoria';
};

const eliminarButton = document.getElementById("eliminarButton");
eliminarButton.addEventListener("click", () => {
    handleButtonDelete();
})

const handleButtonDelete = ()=> {
    handleDeleteProducts();
};