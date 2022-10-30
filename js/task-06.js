// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на 
//правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl=document.querySelector("#validation-input");
const dataLength=parseInt(inputEl.getAttribute("data-length"),10);
function validationEventHandler(event){
    event.preventDefault();
    const inputString=inputEl.value.toString();
    const inputStringProcessed=inputString.replace( /\s/g, "");
    if (inputStringProcessed.length===0){
        inputEl.classList.remove("valid");
        inputEl.classList.remove("invalid");
    }
    if (inputStringProcessed.length!==dataLength&&inputStringProcessed.length!==0){
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
    if (inputStringProcessed.length===dataLength){
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    }
}
inputEl.addEventListener("blur",validationEventHandler);