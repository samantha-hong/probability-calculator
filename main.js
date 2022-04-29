//factorial

document.querySelector('#factorial').addEventListener('click', factorial)

function factorial(){
    let num = Number(document.querySelector('#fact-num').value);
    if(num < 0){
        document.querySelector('#fact-sol').innerText = 'Error! The input must be a positive integer.'
    } else if(num === 0){
        document.querySelector('#fact-sol').innerText = '1'
    } let fact = 1; 
    for(let i=1; i <=num; i++){
        fact *= i;
    } document.querySelector('#fact-sol').innerText = fact;
}

factorial();

//permutation

function permutation(){
    let n1 = Number(document.querySelector('#').value);
    let r1 = Number(documnet.querySelector('#').value);
    if(n1 < r1){
        document.querySelector('#').innerText = 'Error! n must be larger than r.'
    } let perm = 1
    for(let i = n1; i > n1-r1; i--){
        perm *= i
    } document.querySelector('#').innerText = perm
}

permutation();