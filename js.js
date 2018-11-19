const key = 'ef7a09799aa54ebaa0cab00366fd82e1';
const url = 'https://newsapi.org/v2/everything';
const searchWords = 'hello';
const urlForRequest = `${url}?q=${searchWords}&from=2018-11-19&sortBy=popularity&apiKey=${key}`;

function createContent(data){
  console.dir(data);
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
