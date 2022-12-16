function ajaxGet(url, callback) {
    let promise = fetch(url, { method: "GET", })
        .then((resp) => resp.json())
        .then(function (data) { callback(data); })
        .catch(function (error) {
            console.error(error + " " + url);
        });
}

// API -> Resultat au click sur une equipe
window.addEventListener('load', (event) => {
    let equipe = window.location.href;
    equipe = equipe.substring(equipe.indexOf('=') + 1);

    var contenuPage = document.getElementById('resultAPI');

    // Définition du endPoint avec l'id de l'équipe de en paramètres
    for(let i = 1; i < 4; i++){
        let endPoint = 'https://www.balldontlie.io/api/v1/games?seasons[]=2022&team_ids[]=' + equipe + '&page=' + i;

        ajaxGet(endPoint, function (reponse) {
            for(let i = 0; i < 25; i++){
                let date = reponse.data[i].date;
                let newDate = new Date(Date.parse(date));

                let contenu;
                if(reponse.data[i].home_team_score != 0){
                    contenu = '<ul>';
                    contenu += '<li>' + newDate.toLocaleDateString() + '</li>';
                    contenu += '<li><img src="images/' + reponse.data[i].home_team.abbreviation + '.png">' + '</li>';
                    contenu += '<li>' + reponse.data[i].home_team_score + '</li>';
                    contenu += '<li> VS </li>';
                    contenu += '<li>' + reponse.data[i].visitor_team_score + '</li>';
                    contenu += '<li><img src="images/' + reponse.data[i].visitor_team.abbreviation + '.png">' + '</li>';
                    contenuPage.innerHTML += contenu;
                }
            }
        });
    }
}) ;