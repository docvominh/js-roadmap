import fetch from "node-fetch";

fetch('https://dummyjson.com/products/1', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });

