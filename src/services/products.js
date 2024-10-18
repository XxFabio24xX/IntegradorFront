/* Products */
import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

//GUARDAR O MODIFICAR ELEMENTOS
const acceptButton = document.getElementById("aceptarButton")

acceptButton.addEventListener("click", () => {
    handleSaveOrModifyElements();
})

//FUNCION DE GUARDAR
const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("inputName").value,
        imagen = document.getElementById("inputImg").value,
        precio = document.getElementById("inputPrecio").value,
        categoria = document.getElementById("selectCategoria").value;

    let object = null

    if (productoActivo) {
        // Si el producto ya existe, lo modificamos
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria,
        }
    } else {
        // Si es un nuevo producto, lo creamos con un nuevo ID
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };
    }

    setInLocalStorage(object);  // Guardamos en LocalStorage
    handleGetProductsToStore(); // Actualizamos la lista de productos
    closeModal();
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Elemento agregado existosamente",
        showConfirmButton: false,
        timer: 1500
      });              // Cerramos el modal
};

//ELIMINAR ELEMENTOS

export const handleDeleteProducts = () => {

    Swal.fire({
        title: "Desea eliminar elemento?",
        text: "No hay vuelta atras",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id)
            //setear el nuevo array
            localStorage.setItem('products', JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
    });
}
