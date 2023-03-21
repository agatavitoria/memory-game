const grid = document.querySelector('.grid');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

let firstCard = '';
let secondCard = '';

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {
        // TODO: create method to show card
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 500)
    }
}

const revealCard = ({ target }) => {
    const parentNode = target.parentNode;

    if (parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        parentNode.classList.add('reveal-card');
        firstCard = parentNode;
    } else if (secondCard === '') {
        parentNode.classList.add('reveal-card');
        secondCard = parentNode;

        checkCards();
    }
}

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;

    return element;
}

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
}

const loadGame = () => {
    const duplicateCharacters = [ ...characters, ...characters ];
    const shuffleArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffleArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame();