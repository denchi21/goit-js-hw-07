
const userNameInput = document.querySelector(`#name-input`);
const onNameForGreeting = document.querySelector(`#name-output`);



userNameInput.addEventListener(`input`, typeLetters);

function typeLetters() {
    const clearValue = userNameInput.value.trim();

    if (clearValue === ``) {
        onNameForGreeting.textContent = `Anonymous`;
    }
    else {
        onNameForGreeting.textContent = clearValue;
    };
    
}
