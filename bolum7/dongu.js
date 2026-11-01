// Bölüm 7 Ödevi - for döngüsü ile 1..5.000.000
let adet = 0;
const baslangic = Date.now();

for (let i = 1; i <= 5000000; i++) {
  adet++;
}

const sure = Date.now() - baslangic;
console.log("Sayılan adet:", adet);
console.log("Süre:", sure, "ms");

// İstersen ilk 10 ve son 10'u göster (5 milyon satır yazdırmak yerine)
for (let i = 1; i <= 5000000; i++) {
  if (i <= 10 || i > 5000000 - 10) console.log(i);
}
