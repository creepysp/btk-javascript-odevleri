document.getElementById("hesapla").addEventListener("click", function () {
  const girilen = prompt("Bir sayı gir:");
  const sonucAlani = document.getElementById("sonuc");

  if (girilen === null) {
    sonucAlani.textContent = "İşlem iptal edildi.";
    return;
  }

  const sayi = Number(girilen);

  if (girilen.trim() === "" || Number.isNaN(sayi)) {
    sonucAlani.textContent = "Lütfen geçerli bir sayı gir.";
    return;
  }

  if (sayi < 0) {
    sonucAlani.textContent = "Negatif sayının karekökü gerçek sayı değildir.";
    return;
  }

  const karekok = Math.sqrt(sayi);
  sonucAlani.textContent = "Karekök: " + karekok;
});
