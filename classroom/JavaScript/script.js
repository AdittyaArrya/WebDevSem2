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

const form = document.querySelector("form");
form.addEventListener("submit", formSubmit);
function formSubmit(event) {
    event.preventDefault();
    console.log(event.srcElement[0].value);
    console.log(event.srcElement[1].value);
    console.log("Form Submitted");
}