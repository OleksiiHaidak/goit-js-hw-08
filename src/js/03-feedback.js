import throttle from 'lodash.throttle';

const inputEmail = document.querySelector("input[name='email']");
const inputMessage = document.querySelector("textarea[name='message']");
const form = document.querySelector('.feedback-form');


const saveForm = () => {
  const inputForm = {
    email: inputEmail.value,
    message: inputMessage.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(inputForm));
};


form.addEventListener('input', throttle(saveForm, 500));


const loadSavedForm = () => {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    inputEmail.value = email;
    inputMessage.value = message;
  }
};

loadSavedForm();


form.addEventListener('submit', function (event) {
  event.preventDefault();

if (inputEmail.value === "" || inputMessage.value === "") {
    return alert("Будь-ласка заповніть всі поля форми!");};   
    
const formData = {
    email: inputEmail.value,
    message: inputMessage.value,
  };
    
console.log(formData);
    
  localStorage.removeItem("feedback-form-state");
  inputEmail.value = "";
  inputMessage.value = "";
});










// form.addEventListener("input", (event) => {
// event.preventDefault();
    
   
    
// if (inputEmail.value === "" || inputMessage.value === "") {
//     return alert("Будь-ласка заповніть всі поля форми!");
//   }

// const inputForm = {
//         email: inputEmail.value,
//         message: inputMessage.value,
//     };

// localStorage.setItem("feedback-form-state", JSON.stringify(inputForm));

// console.log(inputForm);
// });

    
    
    
    


