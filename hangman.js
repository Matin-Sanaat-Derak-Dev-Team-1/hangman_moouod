const theWord = 'dynamic'; // game answer
var theWordIndex = 0;
var health = 5;

function checkinput(){
    var tmpChar = document.getElementById('inputChar').value;
    document.getElementById('inputChar').value = "";

    if (tmpChar == theWord[theWordIndex]) {
        document.getElementById('answerSpan').innerHTML += theWord[theWordIndex];
        document.getElementById('missBox').style.display = 'none';
        document.getElementById('correctBox').style.display = 'inline';
        theWordIndex++;

        if(theWordIndex >= theWord.length){
            document.getElementById('checkButton').disabled = true;
            document.getElementById('inputChar').disabled = true;
            document.getElementById('correctBox').style.display = 'none';
            document.getElementById('winBox').style.display = 'block';
        }
    }
    else{
        document.getElementById('missBox').style.display = 'inline';
        document.getElementById('correctBox').style.display = 'none';
        health--;
        document.getElementById('healthSpan').innerHTML = health;

        if(health == 0){
            document.getElementById('checkButton').disabled = true;
            document.getElementById('inputChar').disabled = true;
            document.getElementById('missBox').style.display = 'none';
            document.getElementById('loseBox').style.display = 'block';
        }

    }
}