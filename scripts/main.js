// Attendre que tout le contenu de la page soit chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', (event) => {
    // Sélectionner le formulaire par son identifiant
    let myform = document.getElementById('myform');

    // Ajouter un écouteur d'événement pour intercepter la soumission du formulaire
    myform.addEventListener('submit', function(e) {
        // Sélectionner les champs de saisie par leurs identifiants
        let myInputNom = document.getElementById('nom');
        let myInputEmail = document.getElementById('email');
        let myInputPassword = document.getElementById('password');

        // Sélectionner les éléments où les messages d'erreur seront affichés
        let myErrorNom = document.getElementById('errorNom');
        let myErrorEmail = document.getElementById('errorEmail');
        let myErrorPassword = document.getElementById('errorPassword');
        let mySuccessMessage = document.getElementById('successMessage');

        // Réinitialiser les messages d'erreur à chaque soumission du formulaire
        myErrorNom.innerHTML = "";
        myErrorEmail.innerHTML = "";
        myErrorPassword.innerHTML = "";
        mySuccessMessage.innerHTML = "";

        // Initialiser une variable pour suivre l'état de validation
        let isValid = true;

        // Vérifier si le champ de saisie du nom est vide après avoir supprimé les espaces au début et à la fin
        if (myInputNom.value.trim() === "" || myInputNom.value.length < 3 || myInputNom.value.length > 15) {
            // Si le champ nom est vide, ajouter un message d'erreur
            myErrorNom.innerHTML = "Le champ nom est requis et doit contenir entre 3 et 15 caractères.";
            // Empêcher la soumission du formulaire
            isValid = false;
        }

        // Définir un modèle (pattern) pour vérifier le format de l'adresse email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Vérifier si le champ de saisie de l'email est vide ou si le format de l'email est incorrect
        if (myInputEmail.value.trim() === "" || !emailPattern.test(myInputEmail.value)) {
            // Si le champ email est vide ou n'est pas dans un format valide, ajouter un message d'erreur
            myErrorEmail.innerHTML = "L'adresse email est requise et doit être dans un format valide.";
            // Empêcher la soumission du formulaire
            isValid = false;
        }

        // Vérifier si le champ de saisie du mot de passe est vide ou si le mot de passe est trop court
        if (myInputPassword.value.trim() === "" || myInputPassword.value.length < 8) {
            // Si le champ mot de passe est vide ou contient moins de 8 caractères, ajouter un message d'erreur
            myErrorPassword.innerHTML = "Le mot de passe est requis et doit contenir au moins 8 caractères.";
            // Empêcher la soumission du formulaire
            isValid = false;
        }

        // Si tous les champs sont valides, afficher un message de succès
        if (isValid) {
            mySuccessMessage.innerHTML = "<div class='alert alert-success' role='alert'>Le formulaire a été soumis avec succès.</div>";
            mySuccessMessage.style.display = 'block';
        } else {
            // Empêcher la soumission du formulaire si une validation a échoué
            e.preventDefault();
        }
    });
});
