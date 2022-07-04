const prefix = "_"    // gebruik deze in je handler checks

const handler = {    
  get: (target, property) => {
    // Onderschept lees verzoeken van object properties
    if(typeof property === 'string' && property.startsWith(prefix)){
      return undefined
    }
    return target[property]
  },
  // has: (target, property) => {
  //   // Onderschept de `key in objProxy`
  // },
  // ownKeys: target => {
  //   // Onderschept verzoeken zoals `Object.keys(proxy)`
  // }
}

function setPrivateField(obj){
  return new Proxy(obj, handler)
}

const obj = { a:1, _value: 2 }
const objProxy = setPrivateField(obj)

console.log(objProxy._value)
for (const key in objProxy) { console.log(key) }