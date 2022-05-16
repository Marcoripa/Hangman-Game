//select DOM elements
const word = document.getElementById('word')
const letterButtons = document.querySelectorAll('.letter-button')
const lifeLeft = document.getElementById('lives')
const clueButton = document.getElementById('clue-button')
const clue = document.getElementById('clue')

//create an array of possible words
const wordArray = ['Ocean', 'Mountain', 'Butterfly', 'Television', 'Printer', 'Window', 'Swimming Pool', 'Forest', 'Air Balloon']

//randomly choose the hidden word
let hiddenWord = wordArray[Math.floor(Math.random() * wordArray.length)].toLocaleLowerCase();

//set the hidden letters for the selected word
let counter = hiddenWord.length

//set the starting lives
let lives = 10


    for (let letter of hiddenWord) {
        const letterSpace = document.createElement('span');
        letterSpace.setAttribute('id', letter)
        letterSpace.textContent = ' _ ';
        word.append(letterSpace);
    
        letterButtons.forEach(letterButton => {
            letterButton.addEventListener('click', () => {
                    if (letterButton.id == letterSpace.id) {
                        letterSpace.textContent = letterSpace.id
                        letterButton.style.backgroundColor = 'gray'
                        letterButton.removeEventListener('click')
                        counter--
                    } 
                    if (counter == 0) {
                        alert('WELL DONE!')
                    }
            }) 
        })
    }

    letterButtons.forEach(letterButton => {
        letterButton.addEventListener('click', () => {
            if (hiddenWord.indexOf(letterButton.id) == -1) {
                lives--
                lifeLeft.innerText = lives
            }
            if (lives == 0) {
                alert('GAME OVER')
            }
        })
    })
    


//reveal clue

clueButton.addEventListener('click', revealClue)

function revealClue() {
    switch (hiddenWord) {
        case 'ocean':
            clue.textContent = 'Large and full of water'
            break;
        case 'mountain':
            clue.textContent = 'High and cold'
            break;
        case 'butterfly':
            clue.textContent = 'Used to be a caterpillar'
            break;
        case 'farfalla':
            clue.textContent = 'Used to be a caterpillar'
            break;
        case 'television':
            clue.textContent = 'A black box full of boring stuff'
            break;
        case 'printer':
            clue.textContent = 'Useless without ink'
            break;
        case 'window':
            clue.textContent = 'It can have a great view'
            break;
        case 'swimming pool':
            clue.textContent = 'Great for training or when it is hot'
            break;
        case 'forest':
            clue.textContent = 'Where wild animals live'
            break;
        case 'air balloon':
            clue.textContent = 'Invented by Mongolfier'
            break;
        default: 'Sorry, you are on your own...'
    }
}

