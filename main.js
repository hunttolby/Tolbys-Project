var buttonOne = document.getElementById("buttonOne");

var buttonTwo = document.getElementById("buttonTwo");

var buttonThree = document.getElementById("japanButton");

var output = document.getElementById("output");

var outputTwo = document.getElementById("outputTwo");

var helloList = ['Hola','Bonjour', 'Guten Tag','Ni Hao', 'Aloha'];

var translateList = ['French', 'German','Chinese','Hawaiian','Spanish'];

var currentHello = 0;

buttonOne.addEventListener("mousedown", function(){
    buttonOne.style.backgroundColor = "gray";
})

buttonOne.addEventListener("mouseup", function(){
    output.innerHTML = helloList[currentHello];
    buttonOne.textContent = "Translate " + translateList[currentHello];
    currentHello = (currentHello + 1) % helloList.length;
    buttonOne.style.backgroundColor = "whitesmoke";
});

buttonTwo.addEventListener("mousedown", function(){
    buttonTwo.style.backgroundColor = "gray";
})
    
buttonTwo.addEventListener("mouseup", function(){
    output.innerHTML = "";
    outputTwo.innerHTML = "";
    buttonTwo.textContent = "Cleared!";
    buttonOne.textContent = "Translate Once";
    currentHello = (currentHello * 0)
    buttonTwo.style.backgroundColor = "aliceblue";
});

buttonTwo.addEventListener("mouseover", function(){
    buttonTwo.textContent = "Clear All"
    buttonTwo.style.backgroundColor = "whitesmoke";
});

buttonThree.addEventListener("mousedown", function() {
    buttonThree.style.backgroundColor = "gray";
    buttonThree.style.color = "Black";
});

buttonThree.addEventListener("mouseup", function(){
    buttonThree.style.color = "red";
    buttonThree.style.backgroundColor = "whitesmoke";
    outputTwo.innerHTML = "Kon'nichiwa";
});

buttonThree.addEventListener("mouseenter", function(){
    buttonThree.textContent = "Click Me!"
});

buttonThree.addEventListener("mouseleave", function(){
    buttonThree.textContent = "Translate Japanese"
});