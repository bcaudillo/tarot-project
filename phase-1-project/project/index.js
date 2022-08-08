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