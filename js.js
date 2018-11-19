const key = 'ef7a09799aa54ebaa0cab00366fd82e1';
const url = 'https://newsapi.org/v2/everything';
const searchWords = 'rollingscopes';
const urlForRequest = `${url}?q=${searchWords}&from=2018-11-19&sortBy=popularity&apiKey=${key}`;

function myRequest(url) {
  const request = new XMLHttpRequest();
  request.open('get', url);
  request.onload = () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      return data;
      }
  };
  request.send();
}

const mydata =  myRequest(urlForRequest);
console.dir(mydata);