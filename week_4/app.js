

function getRequest() {
  axios
    .get("https://api.vschool.io/mikkel/todo/")
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        const label = document.createElement("label");
        label.id = response.data[i].completed;
        label.setAttribute("for", response.data[i]._id);
        label.textContent = response.data[i].title;
        document.body.appendChild(label);
        const p = document.createElement("p");
        p.textContent = response.data[i].description;
        document.body.appendChild(p);
        const img = document.createElement("img");
        img.setAttribute("src", response.data[i].imgUrl);
        img.style.display = "block";
        document.body.appendChild(img);
        if (label.id === "true") {
          input.checked = true;
          label.style.textDecoration = "line-through";
        } else {
          label.style.textDecoration = "none";
        }
      }
    })
    .catch((error) => console.log(error));
}
getRequest();

// function createTodo() {
// document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);

//   function performPostRequest(e) {
//     var resultElement = document.getElementById('postResult');
//     var todoTitle = document.getElementById('todoTitle').value;
//     resultElement.innerHTML = '';
    
//     axios.post('https://api.vschool.io/mikkel/todo/', {
//       title: todoTitle,
//       description: todoDescription,
//       price: todoPrice,
//       completed: false
//     })
//     .then(function (response) {
//       resultElement.innerHTML = generateSuccessHTMLOutput(response);
//     })
//     .catch(function (error) {
//       resultElement.innerHTML = generateErrorHTMLOutput(error);
//     });
    
//     e.preventDefault();
//   }}
// handleSubmit (event) {
//   event.preventDefault()
//   let formData = new FormData(event.target)
//   axios.post('https://api.vschool.io/mikkel/todo/', formData).then(response => ...).catch(error => ...)
// }

// handleSubmit()

// function postRequest(){
//   window.addEventListener('load', ()=>{ 
        
//   const form = document.querySelector('form'); 
//   form.addEventListener('submit', (e)=>{ 
    
//       e.preventDefault(); 
//       let data = new FormData(form); 
//       axios({ 
//         method  : 'post', 
//         url : 'https://api.vschool.io/mikkel/todo/', 
//         data : data, 
//       }) 
//       .then((res)=>{ 
//         console.log(res); 
//       }) 
//       .catch((err) => {throw err}); 
//   }); 
// })}; 


// function getPost(){
//   axios.post('https://api.vschool.io/mikkel/todo/', {
//     Title: 'BMW X6 Competition',
//     Description: 'Sport SUV',
//     Price: 100000
//   })
//   .then((response) => {
//     console.log(response);
//   }, (error) => {
//     console.log(error);
//   });
  
// }


// const axios = require('axios');

// // Make a request for a user with a given ID
//   axios.get('https://api.vschool.io/mikkel/todo/')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
// };function getTodos(){
//   axios
//     .get("https://api.vschool.io/mikkel/todo/")
//     .then(console.log(res.data);
//     })
//     .catch(err => console.error(err));
// }

// const displayTodos = (data) =>{
//   console.log(data)
//   let container = document.getElementById('todoContainer')
//   data.forEach( todo => {
//     let todoCard = document.createElement('div')
//     let title = document.createElement('h3')
//     title.textContent = todo.title
//     todoCard.appendChild(title)
//     container.appendChild(todoCard)
//   })


// GET REQUEST
// function getTodos() {
//   axios.get('https://api.vschool.io/mikkel/todo/')
//   .then(res =>{
//     console.log(res)
//   })
//   .catch(err =>console.error(err))
// }

// // POST REQUEST
// function addTodo() {
//   console.log('POST Request');
// }

// // PUT/PATCH REQUEST
// function updateTodo() {
//   console.log('PUT/PATCH Request');
// }

// // DELETE REQUEST
// function removeTodo() {
//   console.log('DELETE Request');
// }

// // SIMULTANEOUS DATA
// function getData() {
//   console.log('Simultaneous Request');
// }

// // CUSTOM HEADERS
// function customHeaders() {
//   console.log('Custom Headers');
// }

// // TRANSFORMING REQUESTS & RESPONSES
// function transformResponse() {
//   console.log('Transform Response');
// }

// // ERROR HANDLING
// function errorHandling() {
//   console.log('Error Handling');
// }

// // CANCEL TOKEN
// function cancelToken() {
//   console.log('Cancel Token');
// }

// // INTERCEPTING REQUESTS & RESPONSES

// // AXIOS INSTANCES

// // Show output in browser
// function showOutput(res) {
//   document.getElementById('res').innerHTML = `
//   <div class="card card-body mb-4">
//     <h5>Status: ${res.status}</h5>
//   </div>
//   <div class="card mt-3">
//     <div class="card-header">
//       Headers
//     </div>
//     <div class="card-body">
//       <pre>${JSON.stringify(res.headers, null, 2)}</pre>
//     </div>
//   </div>
//   <div class="card mt-3">
//     <div class="card-header">
//       Data
//     </div>
//     <div class="card-body">
//       <pre>${JSON.stringify(res.data, null, 2)}</pre>
//     </div>
//   </div>
//   <div class="card mt-3">
//     <div class="card-header">
//       Config
//     </div>
//     <div class="card-body">
//       <pre>${JSON.stringify(res.config, null, 2)}</pre>
//     </div>
//   </div>
// `;
// }

// // Event listeners
// document.getElementById('get').addEventListener('click', getTodos);
// document.getElementById('post').addEventListener('click', addTodo);
// document.getElementById('update').addEventListener('click', updateTodo);
// document.getElementById('delete').addEventListener('click', removeTodo);
// document.getElementById('sim').addEventListener('click', getData);
// document.getElementById('headers').addEventListener('click', customHeaders);
// document
//   .getElementById('transform')
//   .addEventListener('click', transformResponse);
// document.getElementById('error').addEventListener('click', errorHandling);
// document.getElementById('cancel').addEventListener('click', cancelToken);

// function getRequest() {
//   axios
//     .get("")
//     .then((response) => {
//       for (let i = 0; i < response.data.length; i++) {
//         let input = document.createElement("input");
//         input.setAttribute("type", "checkbox");
//         input.setAttribute("id", response.data[i]._id);
//         document.body.appendChild(input);
//         const label = document.createElement("label");
//         label.id = response.data[i].completed;
//         label.setAttribute("for", response.data[i]._id);
//         label.textContent = response.data[i].title;
//         document.body.appendChild(label);
//         const p = document.createElement("p");
//         p.textContent = response.data[i].description;
//         document.body.appendChild(p);
//         const img = document.createElement("img");
//         img.setAttribute("src", response.data[i].imgUrl);
//         img.style.display = "block";
//         document.body.appendChild(img);
//         if (label.id === "true") {
//           input.checked = true;
//           label.style.textDecoration = "line-through";
//         } else {
//           label.style.textDecoration = "none";
//         }
//       }
//     })
//     .catch((error) => console.log(error));
// }
// getRequest();

// function makePostRequest() {

//   let res = axios.post('https://api.vschool.io/mikkel/todo/');

//   console.log(`Status code: ${res.status}`);
//   console.log(`Status text: ${res.statusText}`);
//   console.log(`Request method: ${res.request.method}`);
//   console.log(`Path: ${res.request.path}`);

//   console.log(`Date: ${res.headers.date}`);
//   console.log(`Data: ${res.data}`);
// }

// makePostRequest();
