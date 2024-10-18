
# PROYECTO INTEGRADOR HTML-CSS-JAVASCRIPT

Este proyecto es una aplicación web para una empresa que se dedica a la venta de indumentaria. La aplicación permitirá visualizar los productos disponibles, filtrar por categorias, ordenar por precio y añadir nuevos productos.


## Deployment

Link del Vercel:

https://integrador-front-jet.vercel.app/

## Video de prueba

https://youtu.be/NUoNsVmzwnY



## Tecnologías Utilizadas
- HTML
- CSS
- JavaScript
- NodeJs
- Vite


## Estructura del Proyecto

```
IntegradorFrontEnd/
├── node_modules/
├── public/
│   ├── src/
│   │   ├── persistence/
│   │   ├── services/
│   │   │   ├── categories.js
│   │   │   ├── products.js
│   │   │   ├── searchBar.js
│   │   ├── views/
│   │   │   ├── modal.js
│   │   │   ├── store.js
│   ├── gitignore
│   ├── image.png
│   └── index.html
├── main.js
├── package-lock.json
├── package.json
└── README.md
└── style.css
```




## Capturas de Pantalla

![Principal 1](./capturas/principal1.png)

![Principal 2](./capturas/principal2.png)

![Principal 3](./capturas/principal3.png)

![Modal 1](./capturas/modal1.png)

![Modal 1](./capturas/modal2.png)


## Ejemplo

Se puede utilizar los siguientes ejemplos para probar la introduccion de elementos a la página

Copiar y pegar el los campos correspondientes o directamente en el value del LocalStorage

``` json
[
  {
    "id": "2024-10-17T15:56:06.361Z",
    "nombre": "Zapatillas Nike Sportswear AIR FORCE 1 '07 LV8 HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1521687-1200-auto?v=638645942099330000&width=1200&height=auto&aspect=true",
    "precio": "239.989",
    "categoria": "Zapatillas"
  },
  {
    "id": "2024-10-17T15:57:04.461Z",
    "nombre": "ZAPATILLAS ADIDAS ORIGINALS FORUM LOW CL HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1517432-1200-auto?v=638622606291030000&width=1200&height=auto&aspect=true",
    "precio": "171.999",
    "categoria": "Zapatillas"
  },
  {
    "id": "2024-10-17T15:57:38.773Z",
    "nombre": "REMERA PUMA JAWS CORE DE HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1450287-1200-auto?v=638497474350200000&width=1200&height=auto&aspect=true",
    "precio": "34.299",
    "categoria": "Remeras"
  },
  {
    "id": "2024-10-17T19:17:33.770Z",
    "nombre": "REMERA ADIDAS ONE DE HOMBRE",
    "imagen": "https://i.ibb.co/zPbRSpN/Remera-Adidas-ONE-DE-HOMBRE.webp",
    "precio": "59.499",
    "categoria": "Remeras"
  },
  {
    "id": "2024-10-17T19:41:18.565Z",
    "nombre": "Chomba Peru Pique M/c Bensimon",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_715649-MLA71503666689_092023-O.webp",
    "precio": "89.000",
    "categoria": "Seleccione una categoria"
  },
  {
    "id": "2024-10-17T22:34:21.139Z",
    "nombre": "",
    "imagen": "",
    "precio": "0",
    "categoria": "Seleccione una categoria"
  },
  {
    "id": "2024-10-17T22:34:25.936Z",
    "nombre": "",
    "imagen": "",
    "precio": "0",
    "categoria": "Seleccione una categoria"
  },
  {
    "id": "2024-10-17T22:52:19.007Z",
    "nombre": "Zapatillas Nike Sportswear DUNK LOW RETRO SE HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1521601-1200-auto?v=638645914033000000&width=1200&height=auto&aspect=true",
    "precio": "229.999",
    "categoria": "Zapatillas"
  },
  {
    "id": "2024-10-17T22:53:42.234Z",
    "nombre": "BUZO NBA CHICAGO BULLS HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1508077-1200-auto?v=638554438966570000&width=1200&height=auto&aspect=true",
    "precio": "43.999",
    "categoria": "Buzos"
  },
  {
    "id": "2024-10-17T22:54:56.764Z",
    "nombre": "REMERA PUMA T7 ICONIC DE HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1008712-1200-auto?v=638365616304970000&width=1200&height=auto&aspect=true",
    "precio": "34.399",
    "categoria": "Remeras"
  },
  {
    "id": "2024-10-17T22:55:36.444Z",
    "nombre": "REMERA PUMA DOWNTOWN DE HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1305313-1200-auto?v=638472539656100000&width=1200&height=auto&aspect=true",
    "precio": "30.799",
    "categoria": "Remeras"
  },
  {
    "id": "2024-10-17T22:56:11.639Z",
    "nombre": "REMERA ADIDAS ORIGINALS FLAMES CONCERTS DE HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1504097-1200-auto?v=638550182719570000&width=1200&height=auto&aspect=true",
    "precio": "61.999",
    "categoria": "Remeras"
  },
  {
    "id": "2024-10-18T00:13:08.585Z",
    "nombre": "BUZO ADIDAS ORIGINALS ADICOLOR CLASSICS TREFOIL DE HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1449605-1200-auto?v=638518938258500000&width=1200&height=auto&aspect=true",
    "precio": "84.699",
    "categoria": "Buzos"
  },
  {
    "id": "2024-10-18T00:13:55.242Z",
    "nombre": "BUZO NBA BOSTON CELTICS HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1508070-1200-auto?v=638554437345700000&width=1200&height=auto&aspect=true",
    "precio": "69.999",
    "categoria": "Buzos"
  },
  {
    "id": "2024-10-18T00:14:20.494Z",
    "nombre": "BUZO PUMA SMALL LOGO DE HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1497080-1200-auto?v=638550055879570000&width=1200&height=auto&aspect=true",
    "precio": "84.999",
    "categoria": "Seleccione una categoria"
  },
  {
    "id": "2024-10-18T00:15:27.469Z",
    "nombre": "ZAPATILLAS NIKE AIR FORCE 1 '07 LV8 HOMBRE",
    "imagen": "https://essential.vtexassets.com/arquivos/ids/1518797-1200-auto?v=638629723416830000&width=1200&height=auto&aspect=true",
    "precio": "239.999",
    "categoria": "Zapatillas"
  }
]
```

## Color Reference

```css
{
    --azulClarito: #0085ff;
    --azulPastel: #69b4ff;
    --azulOscuro: #006fff;
    --negro: #1E1E1E;
    --negroClaro: #2d2d2d;
    --gris: #454545;
    --blanco: #FFFFFF;
    --naranja: #FF6600;
    --naranjaClarito: #ff983f;
    --rojo: #c21d03;
    --rojoClarito: #fd5732;
}
    
```

## Autor

- **Nombre**: Fabio Escudero
- **Comisión**: 3K10
- **Materia**: Desarrollo de Software
- Universidad Técnologica Nacional, Mendoza

- [Link GitHub](https://github.com/XxFabio24xX)

