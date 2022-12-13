function ajaxGet(url, callback) {
    let promise = fetch(url, { method: "GET", })
        .then((resp) => resp.json())
        .then(function (data) { callback(data); })
        .catch(function (error) {
            console.error(error + " " + url);
        });
}

// API -> Lancement de la page
window.addEventListener('load', (event) => {
    var contenuPage = document.getElementById('resultAPIAccueil');
    let endPoint = 'https://www.balldontlie.io/api/v1/teams';

    ajaxGet(endPoint, function (reponse) {
        let contenu;
        for(let i = 0; i < 30; i++){
            contenu = '<ul>';
            contenu += '<li>Equipe : ' + reponse.data[i].full_name + '</li>';
            contenu += '<li>Conference : ' + reponse.data[i].conference + '</li>';
            contenu += '<li>Ville : ' + reponse.data[i].city + '</li>';
            contenu += '</ul>';
            contenuPage.innerHTML += contenu;
        }
    });
});

// API -> Recherche par l'utilisateur
document.getElementById("myBtn").addEventListener("click", function(e) {
    var contenuPage = document.getElementById('resultAPIAccueil');
    contenuPage.innerHTML = "";

    // Récupération de la catégorie
    let search = document.getElementById("search").value; 

    // Définition du endPoint
    let endPoint = 'https://www.balldontlie.io/api/v1/teams';

    ajaxGet(endPoint, function (reponse) {
        let contenu;
        for(let i = 0; i < 30; i++){
            if(reponse.data[i].full_name.search(search) == -1){
                contenu = 'Aucune équipe ne corresponds à la recherche.'
            }else{
            contenu = '<ul>';
            contenu += '<li>Equipe : ' + reponse.data[i].full_name + '</li>';
            contenu += '<li>Conference : ' + reponse.data[i].conference + '</li>';
            contenu += '<li>Ville : ' + reponse.data[i].city + '</li>';
            contenu += '</ul>';
            contenuPage.innerHTML += contenu;
            }
        }
    });
}) ;
