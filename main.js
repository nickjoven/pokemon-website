const pokemon = [
    {name: 'Bulbasaur', id: '001'},
    {name: 'Charmander', id: '004'},
    {name: 'Squirtle', id: '007'},
]

const userRoster = []

const containerDiv = document.querySelector('#container')
const newBtn = document.querySelector('#new-pokemon-btn')
const rosterDiv = document.querySelector('#roster')

newBtn.addEventListener('click', () => {
    let num = prompt('ENTER A POKEMON NUMBER')
    console.log('Number entered', num)
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`
    let img = document.createElement('img')
    img.setAttribute('src', imgUrl)
    img.setAttribute('class', 'roster-img')
    let position = document.querySelector(`#pokemon-${userRoster.length + 1}`)
    position.append(img)
    userRoster.push(num)
})

// DOM = Document Object Model
// loop over every ID
// create an HTML element
// set the HTML element values
// append HTML element to the DOM

pokemon.map((element, index) => {
    console.log(element)
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.id}.png`
    let div = document.createElement('div') //adding a div to house the img element
    let h3 = document.createElement('h3')
    h3.innerText = element.name
    div.setAttribute('class', 'pokemon-card') //setting the class of the div
    let img = document.createElement('img') // creating the img element itself
    let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${element.name.toLowerCase()}.mp3`
    let audio = document.createElement('audio')
    let source = document.createElement('source')
    source.setAttribute('src', audioUrl)
    source.setAttribute('type', 'audio/mpeg')
    audio.append(source)
    div.addEventListener('click', () => {
        console.log('audio', audioUrl)
        audio.play();
    })
    img.src = imgUrl
    div.append(img, h3), audio
    containerDiv.append(div)
})

// below let div =...
// let h3 = document.CreateElement.('h3')
// h3.innterText = element.name

// add h3 to your div.append => div.append(img, h3)

// add, commit and push changes to github