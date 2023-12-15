const html = document.querySelector(".array")

let array = [
    {
        voornaam: "dhakir",
        achternaam: "yakhlef",
        hobby: "slapen"
    },
    {
        voornaam: "son",
        achternaam: "goku",
        hobby: "fighting"
    }
]

for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    html.innerHTML += `
    <div>${ele.voornaam}</div>
    <div>${ele.achternaam}</div>
    <div>${ele.hobby}</div>`
}


let array2 = [
    {
        merk: "bmw",
        model: "idk",
        bouwjaar: "1",
        prijs: 300,
    },
    {
        merk: "BMW",
        model: "idkk",
        bouwjaar: "2",
        prijs: 380,
    }
]
let optellen = 0

for (let ii = 0; ii < array2.length; ii++) {
    const eles = array2[ii];
    optellen += eles.prijs;
    html.innerHTML += `
    <div>${eles.merk}</div>
    <div>${eles.model}</div>
    <div>${eles.bouwjaar}</div>
    <div>${eles.prijs}</div>
    `
}

html.innerHTML += `<div> totaal bedrag = ${optellen}</div>`



// Opdr. 3

function creatStudent(firstName, className, course) {
    const student = {
        firstName: firstName,
        className: className,
        course: course
    }

    return student;
}

const student1 = creatStudent("Dhakir", "B1L", "SD");
console.log("Student 1 is: ", student1);





fetch("https://meme-api.com/gimme/5")
    .then((response) => {
        return response.json();
    })

    .then(function (data) {
        console.log("ontvange data: ", data)
        const products = data.memes;
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
            // const jsonn = JSON.stringify(element)
            html.innerHTML += crtlist(element)   
        }
    })


    function crtlist(elementeh) {
        let fetch = `<div class="card">
        <div>${elementeh.count}</div>
        <div>${elementeh.postLink}</div>
        <div>${elementeh.subreddit}</div>
        <div>${elementeh.title}</div>
        <div>${elementeh.url}</div>
        <div>${elementeh.nsfw}</div>
        <div>${elementeh.spoiler}</div>
        <div>${elementeh.author}</div>
        <div>${elementeh.ups}</div>
        <div>${elementeh.preview}</div>
        <div>${elementeh.author}</div>
        <div>${elementeh.author}</div>
        </div>`
        return fetch
    }