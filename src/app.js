//js/app.js
import './assets/scss/app.scss';

const apiKey = "11809035-3189d9575e1b430113762ca91";
let searchTerm = document.getElementById("searchTerm").value;
const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo`;

 