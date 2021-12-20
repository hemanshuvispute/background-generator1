var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad");

function setGradient(){
	body.style.background = "linear-gradient( to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);


function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

username = true;
location = true;
const whereAmI = (username,location) => username===true && location===true ? "i am not lost" : "I am lost";


const arr1 = [1,2,3,4,5];
const arr2 = []
const newarr1 = arr1.forEach((num)=>{
	arr2.push(num*2);
})