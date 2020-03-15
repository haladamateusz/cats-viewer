import '../styles/index.scss';

const axios = require('axios').default;
const album_url = `https://api.thecatapi.com/v1/images/search`;
let image;

function getData() {
    return axios({
        method: 'get',
        url: album_url,
    })
        .catch(function (error) {
            console.log(error);
        });
}

async function TossCat() {
    const images = await getData();


    return images.data;
}

TossCat().then(res => {
    image = res[0].url;
});

function showCat() {
    TossCat().then(res => {
        image = res[0].url;
        let img = document.createElement("img");
        img.src = image;
        img.classList.add("image");
        let div = document.querySelector(".parent");
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        div.appendChild(img);
    });
}

let button = document.querySelector(".random-button");
button.addEventListener('click', showCat);


let row_delete = document.querySelector(".container");

function closeInfo() {
    row_delete.removeChild(row_delete.firstElementChild);
}

let close_button = document.querySelector(".close-button");
close_button.addEventListener('click', closeInfo);
