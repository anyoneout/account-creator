function createUser() {


let userName;
let userState;
let userCity;
let userStreet;
let userZip;
let userColor;



userName = prompt("What's your name?");
userState = prompt("What state do you live in?");
userCity = prompt("What city?");
userStreet = prompt("What street?");
userZip = prompt("What is your zipcode?");
userColor = prompt("What color do you like?");


accountParaName.innerHTML = `${userName}`;
accountParaState.innerHTML = `${userState}`;
accountParaCity.innerHTML = `${userCity}`;
accountParaStreet.innerHTML = `${userStreet}`;
accountParaZip.innerHTML = `${userZip}`;
}

accountButton.onclick = createUser;