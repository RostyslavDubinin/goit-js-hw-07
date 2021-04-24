const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

console.log(output);


input.addEventListener('input', onInput);

function onInput (event) {
    if (input.value === ""){
        console.log("empty");
        output.textContent = "незнакомец"
        return;
    }
    output.textContent = event.currentTarget.value
};

