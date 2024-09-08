// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((response) => response.json())
// .then((data) => console.log(data))


const demo = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(response);
}

demo()


