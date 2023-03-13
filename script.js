let items = [
    product1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    product2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    product3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    product4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    product5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    product6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];


let listFigures = []                                        
let listFrames = []                                         

function separateItems (list){
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (element.type == 'Painting'){
            listFrames.push(element);
        } else if (element.type == 'Action Figures'){
            listFigures.push(element);
        }
    }
}
separateItems(items);

let sectionListFigure = document.getElementById('paintings')
let sectionListFrames = document.getElementById('actionFigures')
console.log(sectionListFigure)
console.log(sectionListFrames)

function postItems(itemList){
    for(let i = 0; i < itemList.length; i++){
        let elementItemList = document.createElement('li')
        let addImage = document.createElement('img')
        let textBox = document.createElement('div')                                 //criação dos elementos
        let itemName = document.createElement('span')
        let priceString = document.createElement('span')

        addImage.src = `${itemList[i].image}`
        itemName.innerText = `${itemList[i].name}`
        textBox.classList.add('text-box')                                           //atribuição dos valores, e classes para o CSS
        itemName.classList.add('itemName')
        priceString.innerText = `${itemList[i].price}`
        priceString.classList.add('itemPrice')

        elementItemList.appendChild(addImage)
        textBox.appendChild(itemName)                                                   //acoplando elementos nos seus lugares
        textBox.appendChild(priceString)
        elementItemList.appendChild(textBox)
        
        if (itemList[i].type == 'Action Figures'){
            sectionListFigure.appendChild(elementItemList)                              //verificando a seção certa para acoplar o item finalizado
           }
        if (itemList[i].type == 'Painting'){
            sectionListFrames.appendChild(elementItemList)
           }

      }
}

postItems(listFigures)
postItems(listFrames)