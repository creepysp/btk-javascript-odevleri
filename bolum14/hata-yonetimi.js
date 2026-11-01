function notAl() {
  const girdi = prompt("1-100 arası bir not gir:");

  if (girdi === null) {
    throw new Error("İşlem iptal edildi.");
  }

  const temiz = girdi.trim();

  if (temiz === "") {
    throw new Error("Boş değer girdin.");
  }

  const sayi = Number(temiz);

  if (Number.isNaN(sayi)) {
    throw new TypeError("Bu bir sayı değil.");
  }

  if (sayi < 0 || sayi > 100) {
    throw new RangeError("Not 0 ile 100 arasında olmalı.");
  }

  return sayi;
}

document.getElementById("gir").addEventListener("click", function () {
  const alan = document.getElementById("sonuc");
  alan.textContent = "";

  try {
    const not = notAl();
    alan.textContent = "Not kaydedildi: " + not;
  } catch (hata) {
    alan.textContent = "Hata: " + hata.message;
    console.warn(hata.name, hata.message);
  } finally {
    console.log("İşlem bitti.");
  }
});
