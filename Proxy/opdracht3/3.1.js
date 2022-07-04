import { getCharacters, displayCharacters } from './characters.js'

const characters = await getCharacters('https://thronesapi.com/api/v2/characters')

const houses = ['House Stark']

const handler = {}

const theStarks = new Proxy([], handler)

displayCharacters(characters)
