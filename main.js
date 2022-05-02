//factorial

document.querySelector('#calc-factorial').addEventListener('click', factorial);

const factorialSolution = document.querySelector('#fact-sol');
const userInput = document.querySelector('#fact-num');

function factorial(){
    let num = Number(userInput.value);
    if(isNaN(num) || num < 0 || num%1 != 1){
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

const permutationSolution = document.querySelector('#perm-sol');


function permutation(){
    let n1 = Number(document.querySelector('#n1').value);
    let r1 = Number(document.querySelector('#r1').value);
    if(n1 < r1 || n1%1 !=0 || r1%1 !=0){
        permutationSolution.innerText = 'Error! n must be and integer larger than r.'
    } else {
        let arr1 = [];
        for(let i = n1; i > n1-r1; i--){
        arr1.push(i)
    }  let perm = arr1.reduce((a,b)=>a*b,1)
    permutationSolution.innerText = perm
 } 
}

//combination

document.querySelector('#calc-comb').addEventListener('click', combination);

const combinationSolution = document.querySelector('#comb-sol');

function combination() {
    let n2 = Number(document.querySelector('#n2').value);
    let r2 = Number(document.querySelector('#r2').value);
    if(n2 < r2 || n2%1 !=0 || r2%1 !=0){
        combinationSolution.innerText = 'Error! n must be an integer larger than r.'
    } else{
        let arr2 = [];
        let arr3 = []
        for(let i = n2; i > n2-r2; i--){
            arr2.push(i) }
            for(let j= 1; j <=r2; j++){
                arr3.push(j);
            }
        let prod1 = arr2.reduce((a,b)=>a*b,1)
        let prod2 = arr3.reduce((a,b)=>a*b,1);
        let comb = prod1/prod2;
        combinationSolution.innerText = comb;
    }
}
