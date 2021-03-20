function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

   botChoice = numberToChoice(randomToRpsInt());

   let results = decideWinner(humanChoice, botChoice);

    let message = finalMessage(results); //You won!
    rpsFrontEnd(yourChoice.id, botChoice, message)
}
function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'scissors': 0, 'rock': 1, 'paper': 0.5},
        'scissors':{'scissors': 0.5, 'rock':0, 'paper': 1},
    };
    let yourScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'}
    }else if(yourScore === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'}
    }else {
        return {'message': 'You won!', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}
