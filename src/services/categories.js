//======CATEGORIA======

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage();

    switch(categoryIn){
        case categoriaActiva:
            handleRenderList(products)
            break;

        case "Todo":
            handleRenderList(products);
            break;
        case "Zapatillas":
        case "Remeras":
        case "Buzos":
            const result = products.filter((el) => el.categoria === categoryIn)
            handleRenderList(result)
        default:
            break;
        case "MayorPrecio":
            const resultPrecioMayor = products.sort((a,b)=> b.precio - a.precio);
            handleRenderList(resultPrecioMayor);
            break;

        case "MenorPrecio":
            const resultPrecioMenor = products.sort((a,b)=> a.precio - b.precio);
            handleRenderList(resultPrecioMenor);
            break;

    }
}
export const renderCategories = () => {

    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Zapatillas">Zapatillas</li>
    <li id="Remeras">Remeras</li>
    <li id="Buzos">Buzos</li>
    <li id="MayorPrecio">Mayor Precio</li>
    <li id="MenorPrecio">Menor Precio</li>
    `;

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener('click', () => {
            handleClick(liElement);
        });
    });

    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el) => {
            if(el.classList.contains('liActive')){
                el.classList.remove('liActive');
            } else{
                if(elemento === el){
                    el.classList.add('liActive');
                }
            }            
        });
    };
};
