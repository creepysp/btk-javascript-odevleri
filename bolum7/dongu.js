
let adet = 0;
const baslangic = Date.now();

for (let i = 1; i <= 5000000; i++) {
  adet++;
}

const sure = Date.now() - baslangic;
console.log("Sayılan adet:", adet);
console.log("Süre:", sure, "ms");


for (let i = 1; i <= 5000000; i++) {
  if (i <= 10 || i > 5000000 - 10) console.log(i);
}
