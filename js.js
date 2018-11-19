const key = 'ef7a09799aa54ebaa0cab00366fd82e1';
const url = 'https://newsapi.org/v2/everything';
const searchWords = 'hello';
const urlForRequest = `${url}?q=${searchWords}&from=2018-11-19&sortBy=popularity&apiKey=${key}`;

function createContent(data){
  console.dir(data);
  for (let i = 0; i < data.articles.length; i++) {
  const myDivPapa = document.createElement('div');
  myDivPapa.classList.add('inputDataFromRequest');
  myDivPapa.textContent = `${data.articles[i].description}`;
  document.querySelector('article').appendChild(myDivPapa);
}
}

function myRequest(url) {
  const request = new XMLHttpRequest();
  request.open('get', url);
  request.onload = () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);      
        createContent(data);
      }
  };
  request.send();
}

function myListener(e){
  if (e.target===document.querySelector('.button')){
    myRequest(urlForRequest);
  }
}

document.body.addEventListener('click', myListener);
