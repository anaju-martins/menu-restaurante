//items
const menu = [
    {
        id: 1,
        title: "Cosmopolitan",
        category: "classicos",
        price: 24.00,
        img: "./images/cosmopolitan.jpg",
        desc: "Coquetel refrescante e sofisticado, feito com vodka, licor de laranja, suco de cranberry e limão."

    },
    {
        id: 2,
        title: "Bloody Mary",
        category: "contemporaneos",
        price: 30.00,
        img: "./images/bloody-mary.jpg",
        desc: "Drink icônico e temperado, feito com vodka, suco de tomate, limão e especiarias, ideal para quem aprecia sabores intensos."  
    },
    {
        id: 3,
        title: "Caipirinha",
        category: "classicos",
        price: 22.00,
        img: "./images/caipirinha.jpg",
        desc: "Clássico brasileiro, preparado com cachaça, limão, açúcar e gelo, oferecendo um equilíbrio perfeito entre doçura e frescor."  
    },
    {
        id: 4,
        title: "Café Sour ",
        category: "sours",
        price: 24.00,
        img: "./images/coffee-sour.jpg",
        desc: "Drink sofisticado que combina café, whisky, limão e açúcar, resultando em um sabor equilibrado entre o amargo e o cítrico."  
    },
    {
        id: 5,
        title: "Mango Salty",
        category: "contemporaneos",
        price: 26.00,
        img: "./images/mango-salty.jpg",
        desc: "Drink exótico e refrescante, que combina manga, tequila, limão e uma pitada de sal para um equilíbrio perfeito de sabores."  
    },
    {
        id: 6,
        title: "Manhattan",
        category: "classicos",
        price: 28.00,
        img: "./images/manhattan.jpg",
        desc: "Coquetel clássico e elegante, feito com whisky, vermute e bitters, proporcionando um sabor sofisticado e levemente amargo."  
    },
    {
        id: 7,
        title: "Moscow Mule",
        category: "classicos",
        price: 26.00,
        img: "./images/moscow-mule.jpg",
        desc: "Drink refrescante e levemente picante, feito com vodka, ginger beer e limão, servido tradicionalmente em uma caneca de cobre."  
    },
    {
        id: 8,
        title: "Paloma",
        category: "contemporaneos",
        price: 24.00,
        img: "./images/paloma.jpg",
        desc: "Coquetel mexicano leve e refrescante, feito com tequila, grapefruit, limão e um toque de sal, perfeito para dias quentes."  
    },
    {
        id: 9,
        title: "Whisky Sour",
        category: "sours",
        price: 24.00,
        img: "./images/whisky-sour.jpg",
        desc: "Clássico equilibrado e aromático, feito com whisky, limão, açúcar e clara de ovo, resultando em uma textura cremosa e sabor marcante."  
    },
    {
        id: 10,
        title: "Gin com Frutas Vermelhas",
        category: "gins",
        price: 24.00,
        img: "./images/gin-frutas.jpg",
        desc: "Drink leve e aromático, que combina gin, frutas vermelhas frescas e tônica, proporcionando um sabor frutado e refrescante."  
    }

];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


//load items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});

 function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return ` <article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title} />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>  
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
 }

 function displayMenuButtons(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values
    }, ['all']);
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');

    //filter items 
filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category == category){
                return menuItem;
            } 
        });
        if (category == 'all'){
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});
 }
 