function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(num1) {
  return function(num2){
    return num1 * num2
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(num1, num2) {
  return num1 * num2
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
