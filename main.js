//factorial

document.querySelector('#calc-factorial').addEventListener('click', factorial)

const factorialSolution = document.querySelector('#fact-sol');
const userInput = document.querySelector('#fact-num');

function factorial(){
    let num = Number(userInput.value);
    if(isNaN(num) || num < 0){
        factorialSolution.innerText = 'Error! The input must be a positive integer.'
    } else if(num === 0){
        factorialSolution.innerText = '1'
    } else{
        //let fact = 1; 
    let arr = []
    for(let i=1; i <=num; i++){
        arr.push(i);
       // fact *= i;
    } let fact = arr.reduce((a,b)=>a*b,1)
    factorialSolution.innerText = fact
}
}

//permutation

// document.querySelector('#permutation').addEventListener('click', permutation)

// function permutation(){
//     let n1 = Number(document.querySelector('#n1').value);
//     let r1 = Number(documnet.querySelector('#r1').value);
//     if(n1 < r1){
//         document.querySelector('#perm-sol').innerText = 'Error! n must be larger than r.'
//     } let perm = 1
//     for(let i = n1-r1+1; i <= n1; i++){
//         perm *= i
//     } document.querySelector('#perm-sol').innerText = perm
// }
