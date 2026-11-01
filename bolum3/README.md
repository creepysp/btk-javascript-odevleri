# Bölüm 3 Ödevi — Akış Diyagramları

İki algoritma: (1) girilen sayının küpü, (2) iki sayıdan büyük olanı.

## 1) Girilen sayının küpünü bulan algoritma

```mermaid
flowchart TD
    A([Başla]) --> B[/sayi gir/]
    B --> C{kontrol: sayi sayısal mı?}
    C -- Hayır --> D[/"Lütfen sayı gir"/]
    D --> B
    C -- Evet --> E[kup = sayi * sayi * sayi]
    E --> F[/kup yazdır/]
    F --> G([Bitir])
```

**Pseudo kod**
```
BAŞLA
  sayi oku
  kup = sayi * sayi * sayi
  kup yazdır
BİTİR
```

## 2) İki sayıdan büyük olanı bulan algoritma

```mermaid
flowchart TD
    A([Başla]) --> B[/a ve b gir/]
    B --> C{a > b ?}
    C -- Evet --> D[/"a daha büyük"/]
    C -- Hayır --> E{a < b ?}
    E -- Evet --> F[/"b daha büyük"/]
    E -- Hayır --> G[/"İkisi eşit"/]
    D --> H([Bitir])
    F --> H
    G --> H
```

**Pseudo kod**
```
BAŞLA
  a oku, b oku
  EĞER a > b İSE "a büyük" yaz
  DEĞİLSE EĞER a < b İSE "b büyük" yaz
  DEĞİLSE "eşit" yaz
BİTİR
```

## Basit çalışan örnek

`kup-ve-buyuk.js` dosyasında iki fonksiyon var:

```bash
node bolum3/kup-ve-buyuk.js
```
