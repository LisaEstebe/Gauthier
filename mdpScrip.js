// redirection si le mot de passe est correct
var mot_de_passe = 'chocolatine';

document.getElementById('valider').addEventListener("click",verification);

function verification(){
    if((document.getElementById("mdp")).value === mot_de_passe){
        alert('Mot de passe correct !');
        window.location = 'page.html';
    }

    else{
        alert('Bien essayé mais non !');
        document.getElementById('mdp').value = '';
    }
}

