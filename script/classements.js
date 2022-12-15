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
    var contenuPageWestern = document.getElementById('Western');
    var contenuPageEastern = document.getElementById('Eastern');

    let endPoint = 'https://www.balldontlie.io/api/v1/games?seasons[]=2022';

    ajaxGet(endPoint, function (reponse) {
        let contenu;
        for(let i = 0; i < 2; i++){

        }
    });
});
