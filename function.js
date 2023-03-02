/**
 
*****function declaration
  
function hitungUmur(tahunLahir){
    const umur = 2023 - tahunLahir;
    return umur;
}

console.log(hitungUmur(2002));
 

****function expression

const hitungUmur = function(tahunLahir){
    const umur = 2023 - tahunLahir;
    return umur;
}

console.log(hitungUmur(2002));



*****arrow function 

*/
const hitungUmur = (tahunLahir = 2001) => 2023 - tahunLahir;
console.log(hitungUmur(2002));
console.log(hitungUmur());