// Bölüm 3 Ödevi - basit çözüm
function kup(sayi) {
  return sayi * sayi * sayi;
}

function buyukOlan(a, b) {
  if (a > b) return a;
  if (b > a) return b;
  return "eşit";
}

console.log("3'ün küpü:", kup(3));
console.log("5 ve 9'dan büyük olan:", buyukOlan(5, 9));
console.log("7 ve 7:", buyukOlan(7, 7));
