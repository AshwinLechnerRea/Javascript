const handler = {
  // bouw hier een .get functie die een 
  // string met "unclear, your request is"
  // teruggeeft wanneer een opgevraagde
  // key niet bestaat

  get: function (target, property, receiver) {
    if (typeof target[property] === "undefined") {
      return "unclear, your request is";
    } else {
      return target[property]
    }
  }

}

const obj = {
  x: 1,
  y: 2
}

const proxy = new Proxy(obj, handler)

console.log(proxy.x, proxy.z)