let body = document.querySelector('body')
let color1=document.querySelector('.color1')
let color2=document.querySelector('.color2')
let h3 = document.querySelector('h3')


//functions

//this function is changing the bg color
function changer(){
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3Reciever()
}


//this function writing the color code into h3
function h3Reciever(){
  h3.textContent=`the color code is gradient between ${color1.value} and ${color2.value}`

}

//event listener
color1.addEventListener("input", changer)
color2 .addEventListener("input", changer)


