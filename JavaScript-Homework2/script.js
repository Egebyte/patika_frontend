const ADD_BTN = document.querySelector("#liveToastBtn");    // Button next to the input field
const TO_DO_LIDOM = document.querySelector("#list");        // The ul element

let removeBtns = document.getElementsByClassName("remove"); // Buttons with remove class. These buttons are used for removing items from the list
let myToast, bStrapAlert;                                   // Variables for toast

ADD_BTN.addEventListener("click", newElement);              // Event listener for the button next to the input field
window.addEventListener('load',callList);


// Function to add a new element to the list
function newElement(){                                      
    let taskToDo = document.querySelector("#task").value;   // Get the value of input
    if (taskToDo.trim() != "") {                            // Check if it's empty. trim() helps with " " string
        let liDOM = document.createElement(`li`);           // Create a li element
        liDOM.className = `list-element `;                  // Give it a class
        // Set the innerHTML using template literal
        liDOM.innerHTML = ` 
        ${taskToDo} 
        <span onclick="removeElement(this)" class="btn remove">x</span>
        `;
        liDOM.onclick = function(){taskDone(this)};         // Give the created element a onclick function with a value so that taskDone can be called on click
        myToast = document.querySelector(".toast.success"); // Get the DOM with toast and success classes 
        bStrapAlert = new bootstrap.Toast(myToast);         // Define the toast
        bStrapAlert.show();                                 // Show the toast
        TO_DO_LIDOM.append(liDOM);                          // Append to the ul element
        saveList();    
        resetInput();                                       // Reset the value of input
    } else {                                                // If it's empty
        myToast = document.querySelector(".toast.error");   // Get the DO with toast and error classes
        bStrapAlert = new bootstrap.Toast(myToast);         // Define the toast
        bStrapAlert.show();                                 // Show the toast
    }
    
}
// Function to reset input
function resetInput(){
    let input = document.querySelector("#task");            // Get the input
    input.value = "";                                       // Reset the value of that input by making it an empty string
}
// Function to remove the element. Takes the button as its parameter
function removeElement(btn){                                 
    let liElement = btn.parentElement;                      // Button is the child of a li element so we can learn which element will be removed with this
    TO_DO_LIDOM.removeChild(liElement);                     // Using the DOM of the ul element we can remove the li element which is its child
    saveList();
}
// Function for user to indicate that a task is done. Takes the li element as its parameter. This proccess can be taken back as a solution of a missclick
// Background color becomes green and text color becomes white if the task is done
function taskDone (item){
    let defaultStyle = item.style;                          // Stores the original style values of the item in a variable
    
    if (item.style.color == "white") {                      // Checks if the current text color is white. If it's white it means we changed it and clicking back means we want to change it back
        item.style = defaultStyle;                          // If it's different it means the user previously marked that task as done. Changes it back
    } else {
        item.style.backgroundColor = "#04AA6D";             // Makes the background green(#04AA6D) 
        item.style.color = "white";                         // Makes the text white
    }
    saveList();
}
// Function for storing the list in localStorage
function saveList(){
    localStorage.setItem("list", TO_DO_LIDOM.innerHTML);    // Stores the innerHTML of the To-Do List at keyword 'list' in localStorage
}
// Function for calling the list from localStorage
function callList(){
    TO_DO_LIDOM.innerHTML = localStorage.getItem("list");   // Makes the innerHTML of the To-Do List same as the value stored at keyword 'list' in localStorage
}