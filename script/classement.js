// Tableau a 2 dimensions pour les résultats des équipes
let equipes = [
    ['ATL', 0, 0, 1],
    ['BOS', 0, 0, 1],
    ['BKN', 0, 0, 1],
    ['CHA', 0, 0, 1],
    ['CHI', 0, 0, 1],
    ['CLE', 0, 0, 1],
    ['DAL', 0, 0, 0],
    ['DEN', 0, 0, 0],
    ['DET', 0, 0, 1],
    ['GSW', 0, 0, 0],
    ['HOU', 0, 0, 0],
    ['IND', 0, 0, 1],
    ['LAC', 0, 0, 0],
    ['LAL', 0, 0, 0],
    ['MEM', 0, 0, 0],
    ['MIA', 0, 0, 1],
    ['MIL', 0, 0, 1],
    ['MIN', 0, 0, 0],
    ['NOP', 0, 0, 0],
    ['NYK', 0, 0, 1],
    ['OKC', 0, 0, 0],
    ['ORL', 0, 0, 1],
    ['PHI', 0, 0, 1],
    ['PHX', 0, 0, 0],
    ['POR', 0, 0, 0],
    ['SAC', 0, 0, 0],
    ['SAS', 0, 0, 0],
    ['TOR', 0, 0, 1],
    ['UTA', 0, 0, 0],
    ['WAS', 0, 0, 1],
];

function ajaxGet(url, callback) {
    let promise = fetch(url, { method: "GET", })
        .then((resp) => resp.json())
        .then(function (data) { callback(data); })
        .catch(function (error) {
            console.error(error + " " + url);
        });
}

function addWin(equipe) {
    for (let i = 0; i < equipes.length; i++) {
        if (equipe == equipes[i][0]) {
            equipes[i][1] = equipes[i][1] + 1;
        }
    }
}

function addLose(equipe) {
    for (let i = 0; i < equipes.length; i++) {
        if (equipe == equipes[i][0]) {
            equipes[i][2] = equipes[i][2] + 1;
        }
    }
}

function win(equipe) {
    switch (equipe) {
        case 'ATL':
            addWin('ATL');
            break;
        case 'BOS':
            addWin('BOS');
            break;
        case 'BKN':
            addWin('BKN');
            break;
        case 'CHA':
            addWin('CHA');
            break;
        case 'CHI':
            addWin('CHI');
            break;
        case 'CLE':
            addWin('CLE');
            break;
        case 'DAL':
            addWin('DAL');
            break;
        case 'DEN':
            addWin('DEN');
            break;
        case 'DET':
            addWin('DET');
            break;
        case 'GSW':
            addWin('GSW');
            break;
        case 'HOU':
            addWin('HOU');
            break;
        case 'IND':
            addWin('IND');
            break;
        case 'LAC':
            addWin('LAC');
            break;
        case 'LAL':
            addWin('LAL');
            break;
        case 'MEM':
            addWin('MEM');
            break;
        case 'MIA':
            addWin('MIA');
            break;
        case 'MIL':
            addWin('MIL');
            break;
        case 'MIN':
            addWin('MIN');
            break;
        case 'NOP':
            addWin('NOP');
            break;
        case 'NYK':
            addWin('NYK');
            break;
        case 'OKC':
            addWin('OKC');
            break;
        case 'ORL':
            addWin('ORL');
            break;
        case 'PHI':
            addWin('PHI');
            break;
        case 'PHX':
            addWin('PHX');
            break;
        case 'POR':
            addWin('POR');
            break;
        case 'SAC':
            addWin('SAC');
            break;
        case 'SAS':
            addWin('SAS');
            break;
        case 'TOR':
            addWin('TOR');
            break;
        case 'UTA':
            addWin('UTA');
            break;
        case 'WAS':
            addWin('WAS');
            break;

        default:
            console.log(`${equipe}. inconnu`);
    }
}

function lose(equipe) {
    switch (equipe) {
        case 'ATL':
            addLose('ATL');
            break;
        case 'BOS':
            addLose('BOS');
            break;
        case 'BKN':
            addLose('BKN');
            break;
        case 'CHA':
            addLose('CHA');
            break;
        case 'CHI':
            addLose('CHI');
            break;
        case 'CLE':
            addLose('CLE');
            break;
        case 'DAL':
            addLose('DAL');
            break;
        case 'DEN':
            addLose('DEN');
            break;
        case 'DET':
            addLose('DET');
            break;
        case 'GSW':
            addLose('GSW');
            break;
        case 'HOU':
            addLose('HOU');
            break;
        case 'IND':
            addLose('IND');
            break;
        case 'LAC':
            addLose('LAC');
            break;
        case 'LAL':
            addLose('LAL');
            break;
        case 'MEM':
            addLose('MEM');
            break;
        case 'MIA':
            addLose('MIA');
            break;
        case 'MIL':
            addLose('MIL');
            break;
        case 'MIN':
            addLose('MIN');
            break;
        case 'NOP':
            addLose('NOP');
            break;
        case 'NYK':
            addLose('NYK');
            break;
        case 'OKC':
            addLose('OKC');
            break;
        case 'ORL':
            addLose('ORL');
            break;
        case 'PHI':
            addLose('PHI');
            break;
        case 'PHX':
            addLose('PHX');
            break;
        case 'POR':
            addLose('POR');
            break;
        case 'SAC':
            addLose('SAC');
            break;
        case 'SAS':
            addLose('SAS');
            break;
        case 'TOR':
            addLose('TOR');
            break;
        case 'UTA':
            addLose('UTA');
            break;
        case 'WAS':
            addLose('WAS');
            break;

        default:
            console.log(`${equipe}. inconnu`);
    }
}

function callAPI(){
    for(let i = 1; i < 50; i++){
        // Définition du endPoint avec l'id de l'équipe de en paramètres
        let endPoint = 'https://www.balldontlie.io/api/v1/games?start_date=2022-10-19&end_date=2022-12-31&page=' + i;

        ajaxGet(endPoint, function (reponse) {
            
            for (let j = 0; j < 25; j++) {
                if (reponse.data[j].home_team_score > reponse.data[j].visitor_team_score) {
                    win(reponse.data[j].home_team.abbreviation);
                    lose(reponse.data[j].visitor_team.abbreviation);
                }else if(reponse.data[j].home_team_score < reponse.data[j].visitor_team_score){
                    win(reponse.data[j].visitor_team.abbreviation);
                    lose(reponse.data[j].home_team.abbreviation);
                }
            }
            
        });
    }
}


function afficheTrier(){
    // Récupération des références des deux tables
    var refTableOuest = document.getElementById("Ouest");
    var refTableEst = document.getElementById("Est");

    equipes.sort(function(a, b){
        if(a[1] == b[1]){
            return a[2] - b[2];
        }
        return b[1] - a[1];
    });

    for (let i = 0; i < equipes.length; i++){

        //Insère une ligne a l'indice suivant
        var nouvelleLigne;
        if(equipes[i][3] == 0){
            nouvelleLigne = refTableOuest.insertRow();

            // Insertion des données 
            var c1 = nouvelleLigne.insertCell(0);
            var c2 = nouvelleLigne.insertCell(1);
            var c3 = nouvelleLigne.insertCell(2);

            var nomEquipe = document.createTextNode(equipes[i][0]);
            c1.appendChild(nomEquipe);

            var nbVictoire = document.createTextNode(equipes[i][1]);
            c2.appendChild(nbVictoire);

            var nbDefaite = document.createTextNode(equipes[i][2]);
            c3.appendChild(nbDefaite);

        }else if(equipes[i][3] == 1){
            nouvelleLigne = refTableEst.insertRow();

            // Insertion des données 
            var c1 = nouvelleLigne.insertCell(0);
            var c2 = nouvelleLigne.insertCell(1);
            var c3 = nouvelleLigne.insertCell(2);

            var nomEquipe = document.createTextNode(equipes[i][0]);
            c1.appendChild(nomEquipe);

            var nbVictoire = document.createTextNode(equipes[i][1]);
            c2.appendChild(nbVictoire);

            var nbDefaite = document.createTextNode(equipes[i][2]);
            c3.appendChild(nbDefaite);
        }
    }
}

// API -> Resultat au click sur une equipe
window.addEventListener('load', (event) => {
    let equipe = window.location.href;
    equipe = equipe.substring(equipe.indexOf('=') + 1);

    var contenuPage = document.getElementById('resultAPI');

    callAPI();
    setTimeout(afficheTrier, 2000);
});