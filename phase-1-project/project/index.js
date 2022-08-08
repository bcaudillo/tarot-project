//I've been workiing on the project and forgot to commit to github while I was coding. Starting commits from where I left off

let cardForm = () => document.querySelector("new-spread-description")
let spreadForm = () =>document.querySelector('#pickedSpread')
// const spreads = document.getElementById('spreads')
let spreadDescriptions = {
    'Release & Retain': {'Release': 'What is ready to leave your life or has been taking up too much of your attention and engery?',
        'Retain': 'What is necessary to keep for continual growth'},
    'Asset & Hindrance': 'Asset: A natural gift or ability you possess',
    'Advice from the Universe': '',
    'Past, Present, Future': '',
    'Mind,Body,Spirit':''
}
const spreadArray = Object.keys(spreadDescriptions)
function asyncRequest(){
    fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/")
        .then(resp=>resp.json())
        .then(object => {
            cardsObj = object.cards
            presentAllCards()
            chooseSpread(object)
            setIntention()
        })
        
}
function presentAllCards(){
    for(let i=0; i<cardsObj.length; i++){
        //eventually will turn into present cards
        //get all the cards
        //must be forEach, map, or filter method
        let li = document.createElement('li')
        let li2 = document.createElement('li')
        let li3 = document.createElement('li')
        let p =document.createElement('p')
        li.innerText = `Card Name:` + cardsObj[i].name
        li2 = document.createElement('p')
        li2.innerText = `Description:` + cardsObj[i].desc
        li3 = document.createElement('p')
        li3.innerText = `Type: ` + cardsObj[i].type
        p.appendChild(li)
        p.appendChild(li3)
        p.appendChild(li2)
    
        
        
    }
}
function chooseSpread(object){
    const spreads = () => document.getElementById('spreads')
    const select = () => spreads().querySelector('select')
    // const option = ()=> spreads().querySelector('option')
    select().addEventListener('click',(event)=>{
        const text = event.target.value
        event.preventDefault();
        // console.log(text)
        h4ElementStuff(event,object)
    
        
        
    })
}
function setIntention(){    
    document.addEventListener('submit',(event)=>{
        event.preventDefault()
        let input = document.querySelector('#new-spread-description').value
        h3=document.createElement('h3')
        h3.textContent = input
        h3.style.color = 'orange'
        pickedSpread.appendChild(h3)
        let btn = document.createElement('button')
        btn.addEventListener('click',handleDelete)
        btn.textContent = 'x'
        h3.appendChild(btn)
    }
)


}