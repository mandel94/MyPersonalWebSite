function addPhoto(links) {
    let photogallery = document.querySelector(".photogallery"); 
    for (let link of links) {
        let image = document.createElement("img");
        image.src = link;
        // let div = document.createElement("div")
        // div.appendChild(image)
        photogallery.appendChild(image);
    }
}


fetch("https://dog.ceo/api/breeds/image/random/30")
.then(response => response.json())
.then(data => data.message)
.then(arrayOfDogs => addPhoto(arrayOfDogs))
.catch(e => console.log(e))

