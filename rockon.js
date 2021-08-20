window.onload = userPlay;

let playerscore = 0;
let computerscore = 0;

function userPlay () {
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach (button => {
        button.addEventListener('click', () => {
            let computerSelection = computerPlay();
            let playerSelection  = +button.value;
            gameRound(playerSelection, computerSelection);
            adjustColors(playerSelection, computerSelection);
        });
    });
}

function computerPlay() {

    return Math.floor(Math.random()*3);

} 

function adjustColors(playerselect, computerselect){
    let playercolor   = document.querySelector('.player');
    let computercolor = document.querySelector('.computer');
    
    if (playerselect == 0 ){
        playercolor.style.backgroundColor = '#91d841';
    }else if (playerselect ==1){
        playercolor.style.backgroundColor = '#e9b831';
    }else if (playerselect ==2 ){
        playercolor.style.backgroundColor = '#23a9e7';
    };

    if (computerselect == 0 ){
        computercolor.style.backgroundColor = '#91d841';
    }else if (computerselect ==1){
        computercolor.style.backgroundColor = '#e9b831';
    }else if (computerselect ==2 ){
        computercolor.style.backgroundColor = '#23a9e7';
    };
}

function gameRound(player, computer){

    let round = '';

    if  (player == computer){
        round = 'tie';
    }else if (player == 0 && computer == 2 || player == 1 && computer ==0 || player== 2 && computer == 1){
        round = 'player';
        playerscore++;
    }else {
        round = 'computer';
        computerscore++;
    }; 
    
    updateDisplay(round, playerscore, computerscore)
   
}  

function updateDisplay(round, playerscore, computerscore){
    let notice        = document.querySelector('.announcement');
    let computerlabel = document.querySelector('.computerscore');
    let playerlabel   = document.querySelector('.playerscore');
    
    if( round === 'tie' ){
        notice.textContent = 'You tied!';
    }else if ( round === 'player' ){
        notice.textContent = 'You won!';
        playerlabel.textContent   =   `You: ${playerscore}`
    }else {
        notice.textContent = 'The computer won!';
        computerlabel.textContent = `Computer: ${computerscore}`
    };
    isGameOver(playerscore, computerscore);
}

function isGameOver(playerscore, computerscore) {
    
    console.log(playerscore, computerscore);
    if (playerscore == 5 || computerscore == 5){
        openModal();
    };
}

function resetDisplay(playerscore, computerscore){
    let notice        = document.querySelector('.announcement');
    let playertint   = document.querySelector('.player');
    let computertint = document.querySelector('.computer');
    let computerlabel = document.querySelector('.computerscore');
    let playerlabel   = document.querySelector('.playerscore');

    playertint.style.backgroundColor = '#fff';
    computertint.style.backgroundColor = '#fff';
    playerlabel.textContent   =  'You: 0';
    computerlabel.textContent = 'Computer: 0';
    notice.textContent = 'Pick one!'
}

function openModal(){
    let modal = document.querySelector('#modal');
    let span = document.querySelector('.close');
    modal.style.display = 'block';
    span.addEventListener('click', () => {
        modal.style.display = 'none';
        resetDisplay();
    })
}







