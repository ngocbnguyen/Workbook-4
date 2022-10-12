let myScores = [92,98,84,76,89,99,100];
let yourScores = [82,98,94,88,92,100,100];

function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total = total + scores[i];
    }
    return total / scores.length;
}
let averageScore = getAverage(myScores);
console.log(averageScore.toFixed(2));