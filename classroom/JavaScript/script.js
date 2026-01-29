// const button=document.getElementsByClassName("btn_click")

// button[0].addEventListener("click",Btn_Click)
// function Btn_Click(){
//     alert("Button Clicked")
// }

// const stopButton=document.getElementsByClassName("btn_stop")

// stopButton[0].addEventListener("click",Stop_Click)
// function Stop_Click(){
//     button[0].removeEventListener("click",Btn_Click)
//     alert("Event Listener Removed")
// }

// const btnPress = document.querySelectorAll(".btn_click");
// btnPress.addEventListener("keyup", press);
// function press() {
//     console.log("Button Pressed");
// }

// const form = document.querySelector("form");
// form.addEventListener("submit", formSubmit);
// function formSubmit(event) {
//     event.preventDefault();
//     console.log(event.srcElement[0].value);
//     console.log(event.srcElement[1].value);
//     console.log("Form Submitted");
// }

// debugger
// console.log(a)
// var a =100
// let b =200
// console.log(a)
// console.log(b)

// function print(){
//     let c =300
//     console.log("Inside Function")
//     console.log(c)
// }
// print()

// function firstFunction(){
//     SecondFunction()
// }
// function SecondFunction(){
//     ThirdFunction()
// }
// function ThirdFunction(){
//     console.log("Inside Third Function")
// }
// firstFunction()

// let total = 100;
// function calculateTotal() {
//     console.log("Total inside function:", total);
//     var total = 200;
//     console.log("Total after declaration inside function:", total);
// }
// calculateTotal();


// setTimeout(() => {
//     console.log("this is inside setTimeout")
// }, 2000);

// setInterval(() => {
//     console.log("this is inside setInterval")
// }, 2000);


// const timeout= setTimeout(() => {
//     console.log("After 2 seconds")
// }, 2000);
// clearTimeout(timeout)

// const interval= setInterval(() => {
//     console.log("printing at every 2 seconds")
// }, 2000);

// setTimeout(() => {
//     clearInterval(interval)
// }, 10000);

// let count = 0;
// const interval = setInterval(() => {
//     count++;
//     console.log(`Count: ${count}`);
//     if (count === 5) {
//         clearInterval(interval);
//     }
// }, 1000);

// const addTaskButton = document.getElementById("add-task-button");
// const taskInput = document.getElementById("task-input");
// const taskList = document.getElementById("task-list");

// addTaskButton.addEventListener("click", () => {
//     const taskText = document.createElement("li");
//     const delBtn = document.createElement("button");

//     taskText.innerText = taskInput.value;
    
//     delBtn.innerText = "Delete";
//     delBtn.addEventListener("click", () => {
//         taskList.removeChild(taskText);
//     });
    
//     taskList.appendChild(taskText);
//     taskText.appendChild(delBtn);
//     taskInput.value = "";
// });

// callback
function print(){
    console.log('Inside Print Function')
}

function greet(callback){
    setTimeout(() => {
        console.log('Hello User')
        callback()
    }, 2000);
}

greet(print)