const products = [
    {
        id:"AB5678",
        name: "Remera negra",
        description: "Esta remera lisa de color negro es una prenda versátil y cómoda para cualquier ocasión. Su diseño minimalista la convierte en un básico imprescindible en tu guardarropa",
        stock: 10,
        price: 350,
        image: "/public/img/remera-negra.webp",
        category: "remeras"
    },
    {
        id:"CD9012",
        name: "Remera azul",
        description: "La remera azul lisa es perfecta para un estilo casual y relajado. Su suave tejido y corte clásico la hacen ideal para combinar con jeans o shorts",
        stock: 7,
        price: 1490,
        image: "/public/img/remera-azul.webp",
        category: "remeras"
    },
    {
        id: "CD9876",
        name: "Buzo Gris con capucha",
        description: "Este moderno buzo gris destaca por su calidad y estilo. Su corte favorecedor y la comodidad de la capucha lo convierten en una excelente elección para los días más frescos",
        stock: 10,
        price: 886.50,
        image: "/public/img/buzo-gris.webp",
        category: "buzos"
    },
    {
        id: "CD5432",
        name: "Buzo Negro con capucha",
        description: "Si buscas comodidad y funcionalidad, este buzo negro con capucha es perfecto. Su diseño versátil te mantendrá abrigado y con estilo en cualquier ocasión",
        stock: 15,
        price: 990,
        image: "/public/img/buzo-negro.webp",
        category: "buzos"
    },
    {
        id: "CE5432",
        name: "Championes blancos",
        description: "Estos championes con detalles satinados son ideales para quienes buscan un calzado ligero y elegante. Su diseño minimalista combina con todo tipo de outfits",
        stock: 7,
        price: 990,
        image: "/public/img/championes-blancos.webp",
        category: "calzado"
    },{
        id: "CE7890",
        name: "Championes Vans negros",
        description: "Los Vans Old Skool, conocidos originalmente como Vans #36, debutaron en 1977 con una adición única: un garabato aleatorio dibujado por el fundador Paul Van Doren, originalmente denominado “raya de jazz”. Estos championes negros son un ícono del estilo urbano y la cultura skate",
        stock: 15,
        price: 4990,
        image: "/public/img/championes-negros.webp",
        category: "calzado"
    },
]

const getProducts = () => {
    return new Promise((resolve, reject)=> {
        setTimeout( ()=> {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }