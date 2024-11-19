// // IEFE



alert("hello bro");
// (() => { 
//     // state variables
//     let toDoListArray = [];
//     // ui variables
//     const form = document.querySelector(".form"); 
//     const input = form.querySelector(".form__input");
//     const ul = document.querySelector(".toDoList"); 
  
//     // event listeners
//     form.addEventListener('submit', e => {
//       // prevent default behaviour - Page reload
//       e.preventDefault();
//       // give item a unique ID
//       let itemId = String(Date.now());
//       // get/assign input value
//       let toDoItem = input.value;
//       //pass ID and item into functions
//       addItemToDOM(itemId , toDoItem);
//       addItemToArray(itemId, toDoItem);
//       // clear the input box. (this is default behaviour but we got rid of that)
//       input.value = '';
//     });
    
//     ul.addEventListener('click', e => {
//       let id = e.target.getAttribute('data-id')
//       if (!id) return // user clicked in something else      
//       //pass id through to functions
//       removeItemFromDOM(id);
//       removeItemFromArray(id);
//     });
    
//     // functions 
//     function addItemToDOM(itemId, toDoItem) {    
//       // create an li
//       const li = document.createElement('li')
//       li.setAttribute("data-id", itemId);
//       // add toDoItem text to li
//       li.innerText = toDoItem
//       // add li to the DOM
//       ul.appendChild(li);
//     }
    
//     function addItemToArray(itemId, toDoItem) {
//       // add item to array as an object with an ID so we can find and delete it later
//       toDoListArray.push({ itemId, toDoItem});
//       console.log(toDoListArray)
//     }
    
//     function removeItemFromDOM(id) {
//       // get the list item by data ID
//       var li = document.querySelector('[data-id="' + id + '"]');
//       // remove list item
//       ul.removeChild(li);
//     }
    
//     function removeItemFromArray(id) {
//       // create a new toDoListArray with all li's that don't match the ID
//       toDoListArray = toDoListArray.filter(item => item.itemId !== id);
//       console.log(toDoListArray);
//     }
    
//   })();

(() => {
  // State variable to store tasks
  let toDoListArray = [];

  // Select elements
  const form = document.querySelector(".form");
  const taskInput = document.getElementById("task"); // Text input for task
  const timeInput = document.getElementById("time"); // Number input for time
  const ul = document.querySelector(".toDoList"); // List where tasks will be displayed
  alert(task)
  alert(time)
  // Event listener for form submission
  form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent page reload

      // Get values from inputs
      const task = taskInput.value.trim(); // Task description
      const time = parseInt(timeInput.value.trim(), 10); // Time in minutes

      // Validate inputs
      if (!task || isNaN(time) || time <= 0) {
          alert("Please enter a valid task and a positive time value.");
          return;
      }

      // Create a unique ID for the task
      const itemId = String(Date.now());

      // Add task and time to the array
      const toDoItem = { itemId, task, time };
      toDoListArray.push(toDoItem);

      // Log the array to verify
      console.log(toDoListArray);

      // Add the task and time to the DOM
      addItemToDOM(toDoItem);

      // Clear inputs after submission
      taskInput.value = "";
      timeInput.value = "";
  });

  // Function to add task and time to DOM
  function addItemToDOM({ task, time }) {
      const li = document.createElement("li");
      li.textContent = `${task} -----=-space ---- ${time} minutes`; // Display format
      ul.appendChild(li);
  }
})();
