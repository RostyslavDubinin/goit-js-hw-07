// #validation-input {
//     border: 3px solid #bdbdbd;
//   }
  
//   #validation-input.valid {
//     border-color: #4caf50;
//   }
  
//   #validation-input.invalid {
//     border-color: #f44336;
//   }


const input = document.querySelector('#validation-input');
input.setAttribute("style", "border: 3px solid #bdbdbd;");


const validLength = input.dataset.length






input.addEventListener('input', onInput);

function onInput (event) {
    if (event.currentTarget.value.length == validLength){
        input.classList.add("valid")
        input.classList.remove("invalid")
        input.setAttribute("style", "border-color: #4caf50;");
       return; 
    }
        input.classList.remove("valid")
        input.classList.add("invalid");
        input.setAttribute("style", "border-color: #f44336;");
        
};


