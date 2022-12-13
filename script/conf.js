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
    var contenuPage = document.getElementById('West');
    var contenuPage2 = document.getElementById('East');
    let endPoint = 'https://www.balldontlie.io/api/v1/teams';

    ajaxGet(endPoint, function (reponse) {
        let contenu;
        for(let i = 0; i < 30; i++){
            if(reponse.data[i].conference.search("West") != -1){
                contenu = '<ul>';
                contenu += '<li>' + reponse.data[i].full_name + '</li>';
                contenuPage.innerHTML += contenu;
            }else if(reponse.data[i].conference.search("East") != -1){
                contenu = '<ul>';
                contenu += '<li>' + reponse.data[i].full_name + '</li>';
                contenuPage2.innerHTML += contenu;
            }
        }
    });
});
