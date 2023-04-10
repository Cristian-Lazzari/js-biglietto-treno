// let kilometri = prompt('get km')
// let eta = prompt('get your age')
// km = 0
// do{
// }while(km == NaN)

const km = Number(window.prompt("GET YOUR KM", ""));
console.log(km);
const eta = Number(window.prompt("GET YOUR AGE", ""));
console.log(eta);

let prezzo = km * 0.21;
let prezzoScontato = Number.toFixed(2);
if(eta < 18){
    prezzoScontato = prezzo * 0.8;
    console.log(prezzoScontato);
} else if(eta > 60){
    prezzoScontato = prezzo * 0.6;
}
