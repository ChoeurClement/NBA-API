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
            contenu = '<div class="card">';
            contenu += '<div class="face face1">';
            contenu += '<div class="content">';
            contenu += '<div class="icon">';
            contenu += '<a href="resultat.html?equipe='+ reponse.data[i].id +'"><img src="images/' + reponse.data[i].abbreviation + '.png"></a>';
            contenu += '</div></div></div>';
            contenu += '<div class="face face2">';
            contenu += '<div class="content">';
            contenu += '<h1>Equipe : ' + reponse.data[i].full_name + '</h1>';
            contenu += '<p>Conference : ' + reponse.data[i].conference + '</p>';
            contenu += '</div></div></div>';
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
            contenu = '<div class="card">';
            contenu += '<div class="face face1">';
            contenu += '<div class="content">';
            contenu += '<div class="icon">';
            contenu += '<a href="resultat.html?equipe='+ reponse.data[i].id +'"><img src="images/' + reponse.data[i].abbreviation + '.png"></a>';
            contenu += '</div></div></div>';
            contenu += '<div class="face face2">';
            contenu += '<div class="content">';
            contenu += '<h1>Equipe : ' + reponse.data[i].full_name + '</h1>';
            contenu += '<p>Conference : ' + reponse.data[i].conference + '</p>';
            contenu += '</div></div></div>';
            contenuPage.innerHTML += contenu;
            }
        }
    });
}) ;