let userScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll('.btn');

function checkWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'user';
        } else {
            return 'computer';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'user';
        } else {
            return 'computer';
        }
    } else  {
        if (computerChoice === 'rock') {
            return 'computer';
        } else {
            return 'user';
        }
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
    console.log('randomNumber:', randomNumber);
}

choices.forEach((choice) => {
    choice.addEventListener('click', function () {
        let userChoice = choice.id;
        let computerChoice = getComputerChoice();
        let p=document.querySelector('#computer-choice');
        p.innerText = `Computer choice: ${computerChoice}`;
        let pr=document.querySelector('#user-choice');
        pr.innerText = `User choice: ${userChoice}`;
        let result = checkWinner(userChoice, computerChoice);
        if (result === 'user') {
            userScore++;
            document.getElementById('user-score').innerText = userScore;
        } else if (result === 'computer') {
            computerScore++;
            document.getElementById('computer-score').innerText = computerScore;
        }
        if(userScore==5){
        document.getElementById('msg').innerText = 'Result: User wins';
        userScore=0;
        computerScore=0;
        document.getElementById('user-score').innerText=userScore;
        document.getElementById('computer-score').innerText=computerScore;
        }
        else if(computerScore==5){
            document.getElementById('msg').innerText = 'Result: Computer wins';
            userScore=0;
        computerScore=0;
        document.getElementById('user-score').innerText=userScore;
        document.getElementById('computer-score').innerText=computerScore;
        }
        else{
            document.getElementById('msg').innerText = `Result:`;
        }

    });
});
