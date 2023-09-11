let scoreJoueur = 0;
let scoreBot = 0;
let nombrePartiesJouees = 0;

function getResult(user, computer) {
    if (user === computer) {
        return 'Égalité!';
    } else if (
        (user === 'pierre' && computer === 'ciseaux') ||
        (user === 'feuille' && computer === 'pierre') ||
        (user === 'ciseaux' && computer === 'feuille')
    ) {
        scoreJoueur++;
        return 'Vous avez gagné !';
    } else {
        scoreBot++;
        return 'Vous avez perdu !';
    }
}

function displayResult(user, computer, result) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        Vous avez choisi ${user}.<br>
        L'ordinateur a choisi ${computer}.<br>
        Résultat: ${result}`;
}

function displayScores() {
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.innerHTML = `
        <p>Votre score : ${scoreJoueur}</p>
        <p>Score de l'adversaire: ${scoreBot}</p>
        <p>Nombre de parties jouées : ${nombrePartiesJouees}</p>
    `;
}

function play(userChoice) {
    nombrePartiesJouees++;
    const choices = ['pierre', 'feuille', 'ciseaux'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    const result = getResult(userChoice, computerChoice);

    displayResult(userChoice, computerChoice, result);
    displayScores();
}