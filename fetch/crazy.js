const card = document.querySelector(".card")


fetch("https://dummyjson.com/products")
    .then((response) => {
        return response.json();
    })

    .then(function (data) {
        const products = data.products;
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
            // const jsonn = JSON.stringify(element)
            card.innerHTML += crtlist(element)   
        }
    })



    function crtlist(elemente) {
        const listItem = `
        <div class="insidecard">
        <div class="pussy">
        <img class="gone" src="${elemente.thumbnail}"></img>
        ${elemente.id}<br>
        ${elemente.title}<br>
        ${elemente.description}<br>
        ${elemente.price}<br>
        ${elemente.discountPercentage}<br>
        ${elemente.rating}<br>
        ${elemente.stock}<br>
        ${elemente.brand}<br>
        ${elemente.category}<br>
        ${elemente.images}<br>
        </div>
        </div>
        `;
        // heb ervoor gekozen om alleen belangrijke dingen erin te doen
        return listItem;

    }