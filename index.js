

const p=5210644015679228794060694325390955853397149309953825381775
591280356090833797121,g=5;
const secret_integer=4;//new Date().getTime();

const A=Math.pow(g,secret_integer) % p;

function computesSecretKey(B){
    return Math.pow(B,secret_integer) % p;
}

console.log(computesSecretKey(Math.pow(g,3) % p))