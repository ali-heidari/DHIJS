const math=require('math')

const p=23,g=5;
const secret_integer=new Date().getTime();

const A=math.pow(g,secret_integer) % p;

function computesSecretKey(B){
    return math.pow(g,secret_integer) % p;
}