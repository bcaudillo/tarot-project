
let cardForm = () => document.querySelector("new-spread-description")
let spreadForm = () =>document.querySelector('#pickedSpread')
let spreadDescriptions = {
    'Release & Retain': {'Release': 'What is ready to leave your life or has been taking up too much of your attention and engery?',
        'Retain': 'What is necessary to keep for continual growth'},
    'Asset & Hindrance': 'Asset: A natural gift or ability you possess',
    'Advice from the Universe': '',
    'Past, Present, Future': '',
    'Mind,Body,Spirit':''
}
const spreadArray = Object.keys(spreadDescriptions)


function clickSpread(object){
    const keys = Object.keys(object)
    keys.forEach((key)=>{
        getRandomItem(key) 
    })
}

   
function asyncRequest(){
    fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/")
        .then(resp=>resp.json())
        .then(object => {
            cardsObj = object.cards
            cardsObjKeys = Object.keys(cardsObj)
            // presentAllCards()
            chooseSpread(cardsObj)
            setIntention()
        })
        
    }
function chooseSpread(cardsObj){
    const spreads = () => document.getElementById('spreads')
    const select = () => spreads().querySelector('select')
    select().addEventListener('click',(event)=>{
        const text = event.target.value
        event.preventDefault();
        h4ElementStuff(event,cardsObj)
        removeGhostH4()
    
        
        
    })
}
function h4ElementStuff(event,cardsObj){   
    let h = document.createElement('h4')
    let pickedSpread = document.querySelector('#pickedSpread')
    const h4Array = document.querySelectorAll('h4')
    const btn = document.createElement('button')
    pickedSpread.appendChild(h)
    h4Array.forEach(itm=>{
        itm.appendChild(btn)
        btn.textContent = 'x'
    })
    btn.addEventListener('click',handleDelete)
    h.addEventListener('click',()=>{
        checkSpreadSize(event,cardsObj)
        // console.log(cardsObj[0].meaning_up)
        })
    h.textContent = event.target.value
    console.log(event.target.value)
    
}
function handleDelete(e){
    e.target.parentNode.remove()
}
    
    
function setIntention(){    
    document.addEventListener('submit',(event)=>{
        event.preventDefault()
        let input = document.querySelector('#new-spread-description').value
        h3=document.createElement('h3')
        h3.textContent = input
        h3.style.color = 'white'
        pickedSpread.appendChild(h3)
        let btn = document.createElement('button')
        btn.addEventListener('click',handleDelete)
        btn.textContent = 'x'
        h3.appendChild(btn)
    }
)


}
function getRandomItem(array){
    const randomIndex = Math.floor(Math.random()*array.length)
    const item = array[randomIndex]
    return item;
}
function dealSpread(number){
    for(i=0;i<number;i++){
        randomValue = getRandomItem([1,2])
        let r = getRandomItem(cardsObjKeys)
        let p = document.createElement('p')
        let name = cardsObj[r].name
        let meaning = cardsObj[r]
            if (randomValue===1){
                
                meaning = cardsObj[r].meaning_up
                clickCount ++
            }
            else{
                meaning = '(Reversed position)' + cardsObj[r].meaning_rev
                clickCount++
            }
            h4 = document.querySelector('h4')
            h4.appendChild(p)
            p.textContent = name
            li3 = document.createElement('li')
            p.appendChild(li3)
            li3.textContent = 'Card Description: ' + cardsObj[r].desc 
            li2 = document.createElement('li')
            p.appendChild(li2)
            li2.textContent =  'Card meaning: '+meaning
}
}

let clickCount = 0
function removeGhostH4(){
    h4 = () => document.querySelector('h4')
    h4().handleDelete
}
function checkSpreadSize(event){
    let two = ['Release & Retain','Asset & Hindrance']
    if(event.target.value===(two[0]||two[1])){
        console.log(event.target.value)
        dealSpread(2)
        
    }
    else{
        dealSpread(3)
    }

       
    
}



//     //neat idea:
// let pickP = document.querySelector("p")
// pickP.addEventListener('mouseover',(event)=>{
//     event.preventDefault()
//     if(event.target.innerText==='Release & Retain'){
//     event.target.style.color = 'orange'
//     }
//     else{
//         setTimeout(()=>{
//         event.target.style.color = '';
//         },500);
//     }
// },false)
//     // },false)
    


    

        
// function presentAllCards(){
//     for(let i=0; i<cardsObj.length; i++){
//         let li = document.createElement('li')
//         let li2 = document.createElement('li')
//         let li3 = document.createElement('li')
//         let p =document.createElement('p')
//         li.innerText = `Card Name:` + cardsObj[i].name
//         li2 = document.createElement('p')
//         li2.innerText = `Description:` + cardsObj[i].desc
//         li3 = document.createElement('p')
//         li3.innerText = `Type: ` + cardsObj[i].type
//         p.appendChild(li)
//         p.appendChild(li3)
//         p.appendChild(li2)
    
      
        
//     }
// }
asyncRequest()

