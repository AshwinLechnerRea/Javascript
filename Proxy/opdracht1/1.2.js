const handler = {
  // bouw hier een .get functie die de waarde 
  // van de opgevraagde key teruggeeft
  get: function (target, property, receiver) {
    return target[property]
  }
}

function negativeArray() {
  return new Proxy(array, handler)
}

const arr = ['a', 'b', 'c']
const arrProxy = negativeArray(arr)