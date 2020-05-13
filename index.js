

const p=23,g=5;
const secret_integer=4;//new Date().getTime();

const A=Math.pow(g,secret_integer) % p;

function computesSecretKey(B){
    return Math.pow(B,secret_integer) % p;
}

console.log(computesSecretKey(Math.pow(g,3) % p))