function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFaranheite(celcius){
    return (celcius * 9 ) / 5 + 32;
}

module.exports = {
    generateRandomNumber,
    celciusToFaranheite,
};