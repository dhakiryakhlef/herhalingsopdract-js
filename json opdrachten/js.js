const person = `
{
    "firstname" : "judeska",
    "email": "judeska@gmail.com"
}`;

const objPerson = JSON.parse(person);
console.log("firstname is : ", objPerson.firstname);
console.log("Email is : ", objPerson.email);


const WRAHGGGGG = `
{
  "id": 1,
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "birthDate": "1973-01-22",
  "phone": "(555) 555-1234",
  "website": "www.johndoe.com"
}`

const GGGGGHARW = JSON.parse(WRAHGGGGG)

console.log("de id is ", GGGGGHARW.id);
console.log("firstname is ", GGGGGHARW.firstname);
console.log("lastname is ", GGGGGHARW.lastname);

const oegaboega = `
{
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1
  }`

const oehoehahah = JSON.parse(oegaboega)

console.log(oehoehahah.title);
console.log(oehoehahah.content);
console.log(oehoehahah.publishedAt);


const crazy =`
{
    "id": 4,
        "firstname": "Emily",
            "lastname": "Davis",
                "email": "emilydavis@example.com",
                    "birthDate": "1974-11-30",
                        "login": {
        "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
            "username": "emilydavis",
                "password": "jsonplaceholder.org",
                    "md5": "c1328472c5794a25723600f71c1b4586",
                        "sha1": "35544a31cc19bd6520af116554873167117f4d94",
                            "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
        "street": "321 Maple Street",
            "suite": "Apt. 50",
                "city": "Anytown",
                    "zipcode": "12345-6789",
                        "geo": {
            "lat": "42.9012",
                "lng": "-71.5678"
        }
    },
    "phone": "(555) 555-3456",
        "website": "www.emilydavis.com",
            "company": {
        "name": "GHI Corporation",
            "catchPhrase": "Your success is our priority",
                "bs": "Consulting"
    }
}`

const crazyy = JSON.parse(crazy)
console.log(crazyy.email);
console.log(crazyy.login.username);
console.log(crazyy.address.city);
console.log(crazyy.company.name);

const okidokie = `
{
    "id": 11,
    "postId": 3,
    "userId": 2,
    "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
  }`

const okidokie2 = JSON.parse(okidokie)
console.log(okidokie2);
const array =`
[
    {
      "id": 1,
      "postId": 1,
      "userId": 1,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 2,
      "postId": 1,
      "userId": 1,
      "comment": "Nulla quis libero vel orci rutrum suscipit."
    },
    {
      "id": 3,
      "postId": 3,
      "userId": 2,
      "comment": "Cras ac elit sit amet mi placerat bibendum."
    }
  ]`

  const array1 = JSON.parse(array)
for (let i = 0; i < array1.length; i++) {
    const array2 = array1[i];
    console.log(array2);
}



// Opdr. 6
// -----------
// Maak een string variabele met de volgende string waarde:

const walahi =`
[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  }
]`


const walahi2 = JSON.parse(walahi)

for (let i = 0; i < walahi2.length; i++) {
    const water = walahi2[i];
    water = document.querySelector(".div1")
    water.innerHTML
}


// Converteer dit json object naar JS object.
// Toon op de webpagina de title en de url als <li> items in <ul>.

