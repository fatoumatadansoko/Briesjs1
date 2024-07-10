let myform = document.getElementById('myform');

myform.addEventListener('submit', function(e){
    let myInput = document.getElementById('nom');

    if (myInput.value.trim = "") {
        let myError = document.getElementById('error');
        myError.innerHTML = "le champs nom est requis.";
        myError.style.color = 'red';
        e.preventDefault();
    }
})
