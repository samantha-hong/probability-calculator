//factorial

document.querySelector('#calc-factorial').addEventListener('click', factorial);

const factorialSolution = document.querySelector('#fact-sol');
const userInput = document.querySelector('#fact-num');

function factorial(){
    let num = Number(userInput.value);
    if(isNaN(num) || num < 0){
        factorialSolution.innerText = 'Error! The input must be a positive integer.'
    } else if(num === 0){
        factorialSolution.innerText = '1'
    } else{
    let arr = []
    for(let i=1; i <=num; i++){
        arr.push(i);
    } let fact = arr.reduce((a,b)=>a*b,1)
    factorialSolution.innerText = fact
}
}

//permutation

document.querySelector('#calc-perm').addEventListener('click', permutation);

const permutationSolution = document.querySelector('#perm-sol')


function permutation(){
    let n1 = Number(document.querySelector('#n1').value);
    let r1 = Number(document.querySelector('#r1').value);
    if(n1 < r1 || isNaN(n1) || isNaN(r1)){
        permutationSolution.innerText = 'Error! n must be and integer larger than r.'
    } else {
        let arr1 = []
    for(let i = n1; i > n1-r1; i--){
        arr1.push(i)
    }  let perm = arr1.reduce((a,b)=>a*b,1)
    permutationSolution.innerText = perm
 } 
}
