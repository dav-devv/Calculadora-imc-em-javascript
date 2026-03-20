
const conversionFactor = 0.01;

const IMC_STATUS_DICT = {
    UNDERWEIGHT: 'UNDERWEIGHT',
    REGULAR:'REGULAR',
    OVERWEIGHT: 'OVERWEIGHT',
    OBESITY: 'OBESITY'
}

function getClassificationDescription(classification){
    return{
        [IMC_STATUS_DICT.UNDERWEIGHT]: 'Abaixo do peso',
        [IMC_STATUS_DICT.REGULAR]: 'Peso normal',
        [IMC_STATUS_DICT.OVERWEIGHT]: 'Acima do peso',
        [IMC_STATUS_DICT.OBESITY]: 'obesidade',
    }[classification] || 'Falha em fazer a classificação do imc'
    
}

function classificateIMC(imc) {
    if(imc < 18.5) {
        return IMC_STATUS_DICT.UNDERWEIGHT;
    } else if(imc >= 18.5 && imc < 25){
        return IMC_STATUS_DICT.REGULAR;
    } else if(imc >= 25 && imc < 30){
        return IMC_STATUS_DICT.OVERWEIGHT;
    } else {
        return IMC_STATUS_DICT.OBESITY;
    }
}

function calculateIMC(person){

let height = person.height;
let weight = person.weight;

height = height * conversionFactor;



let imc = weight / (height * height)
const classification = classificateIMC(imc);
const ClassificationDescription = getClassificationDescription(classification)
const result = "O resultado do imc é de " + imc;
const isHealthy = true;

return{
    name: person.name,
    imc,
    result,
    isHealthy,
    classification,
    ClassificationDescription,
}
}


const person = {
    name: 'David',
    height: 183,
    weight: 98,
}

console.log(calculateIMC(person))


