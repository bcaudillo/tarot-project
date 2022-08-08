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
function getRandomItem(array){
    const randomIndex = Math.floor(Math.random()*array.length)
    const item = array[randomIndex]
    return item;
}
function h4ElementStuff(event,object){   
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
        checkSpreadSize(event,object)
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
        h3.style.color = 'orange'
        pickedSpread.appendChild(h3)
        let btn = document.createElement('button')
        btn.addEventListener('click',handleDelete)
        btn.textContent = 'x'
        h3.appendChild(btn)
    })
}

let clickCount = 0
function checkSpreadSize(event,object){
    let two = ['Release & Retain','Asset & Hindrance']
    for (item of two){
        if(clickCount<10){
            console.log(event.target.value)
            if(item===event.target.value){
                cardsObj = Object.keys(cardsObj)
                randomValue = getRandomItem([1,2])
                let r = getRandomItem(cardsObj)
                let p = document.createElement('p')
                let name = object.cards[r].name
                let meaning = object.cards[r]
                if (randomValue===1){
                    
                    meaning = object.cards[r].meaning_up
                    clickCount ++
                }
                else{
                    console.log('you got to me')
                    meaning = '(Reversed position)' + object.cards[r].meaning_rev
                    clickCount++
                }
                h4 = document.querySelector('h4')
                h4.appendChild(p)
                p.textContent = name
                h5 = document.createElement('h5')
                p.appendChild(h5)
                h5.textContent = 'Card Description: ' + object.cards[r].desc 
                li2 = document.createElement('li')
                h5.appendChild(li2)
                li2.textContent =  'Card meaning: '+meaning
            }
        }
        else{
            break
        }
    }
}