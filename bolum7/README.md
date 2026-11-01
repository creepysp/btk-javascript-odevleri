# Bölüm 7 Ödevi — 1'den 5 milyona kadar yazdırma

Soru: 1'den 5.000.000'a kadar sayıları ekrana yazdırmak için hangi döngü daha uygun?

## Cevap

**`for` döngüsü.** Kaç kez döneceği baştan belli olduğu için en okunaklı ve en hızlı seçenek.

- `while` de olur ama sayacı elle yönetmek gerekir, hata yapmaya daha açık.
- `do...while` en az bir kez çalıştığı için burada gereksiz.
- `forEach` bir dizi gerektirir; 5 milyon elemanlı dizi bellekte yer kaplar.

## Örnek

```js
for (let i = 1; i <= 5000000; i++) {
  console.log(i);
}
```

Not: 5 milyon satır konsola yazmak çok yavaştır. Gerçek ölçüm için `console.log` yerine toplam sayıyı saymak daha mantıklı:

```js
let adet = 0;
for (let i = 1; i <= 5000000; i++) adet++;
console.log(adet); // 5000000
```

## Çalıştırma

```bash
node bolum7/dongu.js
```
