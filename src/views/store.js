//========STORE========

import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage"
import { openModal } from "./modal";

export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};

export const handleRenderList = (productosIn) => {
    // Agrupar productos por categoría automáticamente
    const categorias = ["Zapatillas", "Remeras", "Buzos"];
    const groupedProducts = categorias.map(categoria => {
        return {
            categoria,
            productos: productosIn.filter(producto => producto.categoria === categoria)
        };
    });

    const renderProductsGroup = ({ productos, categoria }) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `
                <div class='containerTargetItem' data-categoria='${producto.categoria}' data-index='${index}'>
                    <div>
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <div>
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class='targetProps'>
                            <p><b>Precio: </b>$ ${producto.precio}</p>
                        </div>
                    </div>
                </div>`;
            }).join('');

            return `
            <section class='sectionStore'>
                <div class='containerTitleSection'>
                    <h3>${categoria}</h3>
                </div>
                <div class='containerProductStore'>
                    ${productosHTML}
                </div>
            </section>`;
        }
        return ''; // No renderizar si no hay productos
    };

    // Renderizar todas las categorías de una vez
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = groupedProducts.map(renderProductsGroup).join('');

    // Anade los elementos de forma dinamica
    appContainer.addEventListener('click', (event) => {
        const productElement = event.target.closest('.containerTargetItem');
        if (productElement) {
            const categoria = productElement.getAttribute('data-categoria');
            const index = productElement.getAttribute('data-index');
            
            // Encuentra los productos de la categoría correspondiente
            const productosCategoria = productosIn.filter(producto => producto.categoria === categoria);
            
            // Obtén el producto correcto basado en el índice
            const product = productosCategoria[index];  // Usa el índice dentro de la categoría
    
            if (product) {
                setProductoActivo(product);  // Asigna el producto activo
                openModal();  // Abre el modal
            }
        }
    });
};