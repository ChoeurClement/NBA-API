function ajaxGet(url, callback) {
    let promise = fetch(url, { method: "GET", })
        .then((resp) => resp.json())
        .then(function (data) { callback(data); })
        .catch(function (error) {
            console.error(error + " " + url);
        });
}

// API -> Resultat au click sur une equipe
document.getElementById("myBtn").addEventListener("click", function (e) {
    var contenuPage = document.getElementById('resultAPI');
    contenuPage.innerHTML = "";

    let search = document.getElementById("search").value;

    for(let i = 1; i < 2; i++){
        // Définition du endPoint avec l'id de l'équipe de en paramètres
        let endPoint = 'https://www.balldontlie.io/api/v1/players?search=' + search + '&page=' + i;

        ajaxGet(endPoint, function (reponse) {
            let contenu;
            for (let i = 0; i < 30; i++) {
                contenu = '<ul>';
                contenu += '<li><img src="images/' + reponse.data[i].team.abbreviation + '.png"></li>';
                contenu += '<li>' + reponse.data[i].first_name + '</li>'
                contenu += '<li>' + reponse.data[i].last_name + '</li>'
                contenu += '<li>' + reponse.data[i].position + '</li>'
                contenuPage.innerHTML += contenu;
            }
        });
    }
});