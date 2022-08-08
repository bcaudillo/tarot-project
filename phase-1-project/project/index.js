//I've been workiing on the project and forgot to commit to github while I was coding. Starting commits from where I left off
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