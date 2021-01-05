const checkbox = document.querySelector('#checkbox');

console.log(checkbox.checked);



checkbox.addEventListener('blur', function() {
    if(checkbox.checked === true) {
        console.log("true");
    }
})