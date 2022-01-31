
function changeImg(){

        randomNmber1 = Math.floor(Math.random() * 6);
        var imgData = new Array ("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");
        document.getElementsByClassName("img1")[0].setAttribute('src', imgData[randomNmber1]);

        randomNmber2 = Math.floor(Math.random() * 6);
        document.getElementsByClassName("img2")[0].setAttribute('src', imgData[randomNmber2]);

        if (randomNmber1 > randomNmber2)
        {
            document.firstElementChild.lastElementChild.querySelector("h1").innerText = "Player 1 Wins!"
        }
        else if (randomNmber1 < randomNmber2){
            document.firstElementChild.lastElementChild.querySelector("h1").innerText = "Player 2 Win!"
        }
        else
        {
            document.firstElementChild.lastElementChild.querySelector("h1").innerText = "DRAW!"
        }
}

