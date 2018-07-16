var activePlayer, currentScore, totalScore, isPlaying, lastDice;

init();


document.querySelector(".btn-roll").addEventListener("click", function(){
	if(isPlaying){
		var dice = Math.floor(Math.random() * 6 + 1);
		document.querySelector(".dice").style.display = 'block';
		document.querySelector(".dice").src = "img/dice-" + dice + '.png';
		if(dice === 6 && lastDice === 6){
			totalScore[activePlayer] = 0;
			document.querySelector(".player-"+activePlayer+"-total").textContent = '0';
			nextPlayer();
		}
		if(dice !== 1){
			currentScore += dice;
			lastDice = dice;
			document.querySelector(".player-" + activePlayer + '-current').textContent = currentScore;
		}
		else{
			nextPlayer();
		}
	}
});

document.querySelector(".btn-hold").addEventListener("click",function(){
	if(isPlaying){
		totalScore[activePlayer] += currentScore;
		document.querySelector(".player-" + activePlayer + "-total").textContent = totalScore[activePlayer];

		var inputValue = document.querySelector(".scoreToBeat").value;
		var setScore = inputValue === ''? 100 : inputValue;
		if(totalScore[activePlayer] >= setScore){
			document.querySelector('#player-' + activePlayer + '-name').textContent = 'Winner!';
	        document.querySelector('.dice').style.display = 'none';
	        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
	        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	        isPlaying = false;
		}
		else{
			nextPlayer();
		}
	}
});

document.querySelector(".btn-new").addEventListener("click",init);


function numberInput(event){
	console.log(event.keyCode !== 69);
	return event.keyCode !== 69;
};



function init(){
	activePlayer = 0;
	currentScore = 0;
	totalScore = [0,0];
	isPlaying = true;
	lastDice = 0;
	document.querySelector(".player-0-current").textContent = 0;
	document.querySelector(".player-1-current").textContent = 0;
	document.querySelector(".player-1-total").textContent = 0;
	document.querySelector(".player-0-total").textContent = 0;
	document.querySelector(".player-0-panel").classList.remove('winner');
	document.querySelector(".player-1-panel").classList.remove('winner');
	document.querySelector(".player-1-panel").classList.remove('active');
	document.querySelector(".player-1-panel").classList.remove('active');
	document.querySelector(".player-0-panel").classList.add('active');
	document.querySelector('.dice').style.display = 'none';
}

function nextPlayer(){
	currentScore = 0;
	document.querySelector(".player-" + activePlayer + '-current').textContent = currentScore;
	activePlayer = activePlayer === 0 ? 1 : 0;
	document.getElementById("player-1-panel").classList.toggle('active');
	document.getElementById("player-0-panel").classList.toggle('active');
	document.querySelector(".dice").style.display = 'none';
	lastDice = 0;
}


function numberInput(event){
	return event.keyCode !== 69;
}

