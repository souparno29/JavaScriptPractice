var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = () => req.status === 200 ? resolve(req.status) : reject(Error(req.status));
      req.onerror = (e) => reject(Error(`Network Error: ${e}`));
      req.send();
    });
  }

  get('http://www.example.com')
  .then((reason) => {
      console.log('got a response' + reason);
  })
  .catch((reason) => {
      console.log('did not get any responses.' + reason)
  });