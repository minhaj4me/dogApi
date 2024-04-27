// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) =>{
//     console.log("got data");
//     console.log(json)});


let img=document.querySelector("img")
let button=document.querySelector("button")


button.addEventListener("click",()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((json) =>{
    img.src=json.message;
});
})




  