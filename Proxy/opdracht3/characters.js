const getCharacters = async (source) => {
  const response = await fetch(source)
  return response.json()
}

const displayCharacters = (characters) => {
  const charactersElement = document.getElementById("characters")

  for(const character of characters){
    const characterContainer = document.createElement("div")
    const image = document.createElement("div")
    const name = document.createElement("h4")
    const title = document.createElement("small")
    const house = document.createElement("span")
    
    image.classList.add('image')
    image.style = `background-image:url(${character.image.startsWith('https://') ? character.image : character.image ? 'https://thronesapi.com/assets/images/' + character.image : 'https://via.placeholder.com/300'})`
    name.innerHTML = character.name || 'Unknown'
    title.innerHTML = character.title || 'Unknown'
    house.innerHTML = character.house || 'Unknown'
    house.classList.add('badge')

    characterContainer.classList.add('character')
    characterContainer.appendChild(image)
    characterContainer.appendChild(name)
    characterContainer.appendChild(house)
    name.appendChild(title)

    charactersElement.appendChild(characterContainer)
  }
  
}

export { getCharacters, displayCharacters }