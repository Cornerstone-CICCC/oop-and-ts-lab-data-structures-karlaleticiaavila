// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  const tempQueue = new Queue();
  const stack = [];
while (!queue.isEmpty()) {
  const element = queue.dequeue();   // first fifo
  tempQueue.enqueue(element);        // save in tempQueue to restore later
  stack.push(element);               // save
}
  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue());
  }
  let isPalindrome = true;
  for (let i = 0; i < stack.length / 2; i++) {
    if (stack[i] !== stack[stack.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true