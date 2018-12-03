
let sayHello = function(name) {
  console.log(`Heloo ${name}`);
}

let sayHelloAfter5sec = setTimeout(function() {
  sayHello('Ali'); /* here we must call the function to be able using effect of setTimeout */
}, 5000)
