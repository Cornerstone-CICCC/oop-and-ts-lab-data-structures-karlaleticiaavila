// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  let current = list.head;

  while (current) {
    if (current.data === value) {

      
      if (current === list.head) {
        list.head = current.next;
        if (list.head) {
          list.head.prev = null;
        } else {
          list.tail = null;
        }
      }

      
      else if (current === list.tail) {
        list.tail = current.prev;
        list.tail.next = null;
      }

      
      else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }

      list.size--;
    }

    current = current.next;
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5