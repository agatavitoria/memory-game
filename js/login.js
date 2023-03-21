const input = document.querySelector('.login__input');
const button = document.querySelector('.login__buton');

const validateInput = ({ target }) => {
    const hasThreeCharacters = target.value.length > 2;

    if (hasThreeCharacters) {
        button.removeAttribute('disabled');
        return;
    }
    
    button.setAttribute('disabled', '');
}

input.addEventListener('input', validateInput);