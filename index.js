const API = "https://hp-api.onrender.com/api/characters/?_limit=50"
// const name = document.createElement('li')
const characterName = document.getElementById('name')
const species = document.getElementById('species')
const characterHouse = document.getElementById('house')
const wand = document.getElementById('wand')
const containerImage = document.getElementById('image')
const votesForm = document.getElementById('votes-form')
const commentContainer = document.getElementById('comment-container')
const votes = document.getElementById('votes')
const comment = document.getElementById('comment')

const renderCharacters = () => {
    fetch(API)
    .then(res => res.json())
    .then(characterData => {
        console.log(characterData)
        characterData.forEach(singleCharacter)
    })
}

const singleCharacter = (character) =>{
    const characterBar = document.getElementById('character-bar');
    const name = document.createElement('li')
    const alternateNames = document.createElement("h1")
    const image = document.createElement('img')
    const house = document.createElement('h2')
    const ul = document.createElement('ul')
    const detailedInfo = document.getElementById('detailed-info')
    const voteCount = document.getElementById('vote-count')
    // const characterName = document.getElementById('name')
    
    
    name.textContent = character.name
    image.src = character.image
    house.textcontent = character.house
    
    ul.append(name)
    characterBar.append(ul)
    
    name.addEventListener('mouseover', handleMouseOver)
    name.addEventListener('mouseleave', handleMouseLeave)
    // addEventListener mouseleave event
    // create handleMouseLeave function 
    name.addEventListener('click', (e) => {
        // console.log(name)
        // console.log(house)
        // console.log(species)
        // console.log(wand)
        // e.preventDefault()
        
        commentContainer.innerHTML = ""
        characterName.textContent = character.name
        containerImage.src = character.image
        
        characterHouse.textContent = `House: ${character.house}` 
        species.textContent = `Species: ${character.species}`
        wand.textContent = `Wand: ${character.wand.core}, ${character.wand.wood}, ${character.wand.wood.length} inches`  
    })
    votesForm.addEventListener('submit', handleSubmit)
    

}

const handleSubmit = (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    li.innerText = e.target.votes.value
    commentContainer.appendChild(li)
    
    e.target.reset()

}

const handleMouseOver = (e) => {
    characterName.classList.add("animate-hover")
// on mouseover add a classname to the thing that i want to animate
//ex: name.classList.add("animate-hover")
// in css, do .animate-hover {
// name.classList.remove("animate-hover")
}

const handleMouseLeave = (e) => {
    characterName.classList.remove("animate-hover");
}








const init = () => {
    renderCharacters()
   
}
init()