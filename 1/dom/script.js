let count = 0;

const tombol = document.getElementById("myButton");
const clickCount = document.getElementById("clickCount");

tombol.addEventListener("click", function(){
    count++;
    clickCount.textContent = count;
})


const newTitle = "This is new title";
const titleElement = document.querySelector("h1");
titleElement.textContent = newTitle;
