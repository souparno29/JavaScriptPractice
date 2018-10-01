/*  A closure is the combination of a function and the lexical environment within which that function was declared. 
This environment consists of any local variables that were in-scope at the time the closure was created  - MDN Definition.

Obs: This is the best way to create a Global variable that can be changed by only the function that contains it.  */
function switchStatus() {
    let status = true;
    function change() {   // when change was declared, status is present in its lexical environment.
        status = !status;
        return status;
    };
    return change;  // when we return change, we return its closure with it, this preserves the state of status()
};

let flipIt = switchStatus();  // flip it gets the definition of change and its closure. 

console.log(flipIt());  // everytime we call flipIt(), it accesses change and looks for the status (and its value) in its closure closure.
console.log(flipIt());  // this way we have a switch that is only changed by calling flipIt. 
console.log(flipIt());  // hence output will switch every time we call it. 
                                         