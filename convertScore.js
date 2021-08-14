// Convert the scores from numeric values to A, B, C, D, E, F grades.
function convertScore(score) {
    if(score >= 90 && score <= 100) {
        return "A";
    } else if(score >= 80 && score < 90) {
        return "B";
    } else if(score >= 70 && score < 80) {
        return "C";
    } else if(score >= 60 && score < 70) {
        return "D";
    } else if(score >= 50 && score < 60) {
        return "E";
    } else if(score >= 0 && score < 50) {
        return "F";
    } else {
        return "Invalid Score!";
    }
}

function validationTest() {
    console.log(convertScore(101));
    console.log(convertScore(100));
    console.log(convertScore(90));
    console.log(convertScore(80));
    console.log(convertScore(70));
    console.log(convertScore(60));
    console.log(convertScore(50));
    console.log(convertScore(49));
    console.log(convertScore(1));
    console.log(convertScore(0));
    console.log(convertScore(-1));
}

validationTest();