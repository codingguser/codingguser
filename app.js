document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll("img");

for(const image of images){
    fetch("https://picsum.photos/200/300?random=1")
    .then(Response => Response.json())
    .then(data => {
        image.src = data.message
        image.width = 100;
        image.height = 100;
    })
}

})