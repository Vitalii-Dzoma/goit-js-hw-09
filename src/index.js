import './css/styles.css';
import "./fetchCountries.js"
import { fetchExport } from './fetchCountries.js';
import { debounce } from 'lodash';
const DEBOUNCE_DELAY = 300;
    const inputData = document.querySelector("#search-box");
const inputValue = inputData.value;
console.log(inputData)
function onSearch() {

  
    fetchExport(inputValue);
// function cleanInput() {
//     inputData.trim()
//     if (!inputData.value) {
//         inputData.reset()
//     }
// }
}

  
inputData.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY))
