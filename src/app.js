//js/app.js
import './assets/scss/app.scss';



const getImages = () => {
    const searchTerm = document.getElementById("searchTerm").value;
    const apiKey = "11809035-3189d9575e1b430113762ca91";
    const URL = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}`;
    console.log(searchTerm);
    console.log(URL);
    fetch(URL)
        .then(function(response) {
        return response.json();
        })
        .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        });
}

document.getElementById("searchButton").addEventListener("click", getImages);

 