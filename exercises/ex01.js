// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(stack, a, b) {
  let distance = 0
  let foundA = false
  let foundB = false
  const tempStack = new Stack()

  while (!stack.isEmpty()) {
    const element = stack.pop()
    tempStack.push(element)

    if (element === a || element === b) {
      if (!foundA) {
        foundA = true
      } else {
        foundB = true
        break
      }
    }

    if (foundA) {
      distance++
    }
  }

 
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop())
  }

  return foundA && foundB ? distance : -1
}
const students = new Stack()
students.push("John")
students.push("Joe")
students.push("Jane")
students.push("Jill")
students.push("Jim")

const distance = calcDistance(students, "Joe", "Jim")
console.log(distance) // 3
const distance2 = calcDistance(students, "Joe", "Jill")
console.log(distance2) // 2

exports.calcDistance = calcDistance