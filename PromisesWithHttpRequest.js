var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/* new Promise( executor ->  function(resolve, reject) { ... } );
    @param executor: A function that is passed with the arguments resolve and reject. The executor function is executed immediately by the Promise implementation, 
    passing resolve and reject functions (the executor is called before the Promise constructor even returns the created object). 
    The resolve and reject functions, when called, resolve or reject the promise, respectively. The executor normally initiates some asynchronous work,
    and then, once that completes, either calls the resolve function to resolve the promise or else rejects it if an error occurred. 
    If an error is thrown in the executor function, the promise is rejected. The return value of the executor is ignored. 
    Details : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise  */
function get(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      /*  XMLHttpRequest.onload = callback;
            callback is the function to be executed when the request completes successfully. 
            It receives a ProgressEvent object as its first argument. 
            The value of this (i.e. the context) is the same XMLHttpRequest this callback is related to. */
      req.onload = function(){
          if (req.status === 200) {
              resolve(req.status);
          } else {
              reject(Error(req.status));
           }}
      /* XMLHttpRequest.onerror = callback;
           callback is the function to be executed if the request results in an error */
      req.onerror = (e) => reject(Error(`Network Error: ${e}`));
      req.send();
    });
  }

  get('http://www.example.com')
  /*p.then(onFulfilled[, onRejected]);

    @param onFulfilled : A Function called if the Promise is fulfilled. This function has one argument, the fulfillment value. 
    If it is not a function it is internally replaced with an "Identity" function(it returns received argument).
    
    @param onRejected (Optional) :
    A Function called if the Promise is rejected. This function has one argument, the rejection reason. 
    If it is not a function it is internally replaced with "Thrower" function(it throws an error received as argument). */
  .then((reason) => {
      console.log('got a response ' + reason);
  })
  /* p.catch(function(reason) { // rejection });
    @param onRejected: A Function called when the Promise is rejected. This function has one argument:
        reason : The rejection reason.
    The Promise returned by catch() is rejected if onRejected throws an error or returns a Promise which is itself rejected; otherwise, it is resolved. */
  .catch((reason) => {
      console.log('did not get any responses. ' + reason)
  });

  