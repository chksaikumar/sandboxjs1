const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/todos"
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
).then((result) => {
  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2]);
});

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
