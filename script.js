let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];


let listFigures = []                                        
let listFrames = []                                         

function separateItens (list){
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (element.type == 'Painting'){
            listFrames.push(element);
        } else if (element.type == 'Action Figures'){
            listFigures.push(element);
        }
    }
}
separateItens(itens);

let secaolistFigure = document.getElementById('paintings')
let secaolistFrames = document.getElementById('actionFigures')
console.log(secaolistFigure)
console.log(secaolistFrames)

function postItems(lista){
    for(let i = 0; i < lista.length; i++){
        let elementoLista = document.createElement('li')
        let addImage = document.createElement('img')
        let textBox = document.createElement('div')                                 //criação dos elementos
        let nome = document.createElement('span')
        let priceString = document.createElement('span')

        addImage.src = `${lista[i].image}`
        nome.innerText = `${lista[i].name}`
        textBox.classList.add('text-box')                                           //atribuição dos valores, e classes para o CSS
        nome.classList.add('itemName')
        priceString.innerText = `${lista[i].price}`
        priceString.classList.add('itemPrice')

        elementoLista.appendChild(addImage)
        textBox.appendChild(nome)                                                   //acoplando elementos nos seus lugares
        textBox.appendChild(priceString)
        elementoLista.appendChild(textBox)
        
        if (lista[i].type == 'Action Figures'){
            secaolistFigure.appendChild(elementoLista)                              //verificando a seção certa para acoplar o item finalizado
           }
        if (lista[i].type == 'Painting'){
            secaolistFrames.appendChild(elementoLista)
           }

      }
}

postItems(listFigures)
postItems(listFrames)