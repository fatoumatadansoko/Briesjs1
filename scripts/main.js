document.addEventListener('DOMContentLoaded', (event) => {
    let myform = document.getElementById('myform');
    let submitBtn = document.getElementById('submitBtn');

    let myInputNom = document.getElementById('nom');
    let myInputEmail = document.getElementById('email');
    let myInputPassword = document.getElementById('password');

    let myErrorNom = document.getElementById('errorNom');
    let myErrorEmail = document.getElementById('errorEmail');
    let myErrorPassword = document.getElementById('errorPassword');

    let emailContainer = document.getElementById('emailContainer');
    let passwordContainer = document.getElementById('passwordContainer');

    function validateField(input, errorElement, minLength, pattern) {
        let isValid = true;
        errorElement.innerHTML = "";

        if (input.value.trim() === "" || (minLength && input.value.length < minLength) || (pattern && !pattern.test(input.value))) {
            errorElement.innerHTML = "Ce champ est requis et doit respecter les contraintes.";
            isValid = false;
        }

        return isValid;
    }

    function validateForm() {
        let isValid = true;

        // Validation du champ nom
        isValid = validateField(myInputNom, myErrorNom, 3) && isValid;

        // Validation de l'email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = validateField(myInputEmail, myErrorEmail, 0, emailPattern) && isValid;

        // Validation du mot de passe
        isValid = validateField(myInputPassword, myErrorPassword, 8) && isValid;

        // Activer ou désactiver le bouton de soumission en fonction de la validité
        submitBtn.disabled = !isValid;
    }

    // Afficher le champ suivant lorsque le champ actuel est validé
    myInputNom.addEventListener('blur', function() {
        if (validateField(myInputNom, myErrorNom, 3)) {
            emailContainer.classList.remove('hidden');
        }
    });

    myInputEmail.addEventListener('blur', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (validateField(myInputEmail, myErrorEmail, 0, emailPattern)) {
            passwordContainer.classList.remove('hidden');
        }
    });

    myInputPassword.addEventListener('blur', function() {
        if (validateField(myInputPassword, myErrorPassword, 8)) {
            validateForm();
        }
    });

    // Validation finale avant soumission du formulaire
    myform.addEventListener('submit', function(e) {
        validateForm();
        if (submitBtn.disabled) {
            e.preventDefault();
        } else {
            alert("Formulaire soumis avec succès !");
        }
    });
});