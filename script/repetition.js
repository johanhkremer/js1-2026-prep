/*
🧠 ARRAY-METODER – FÖRDJUPAD ÖVERSIKT

Metod        Returnerar                Används för            Mental modell                  Viktigt att tänka på
---------------------------------------------------------------------------------------------------------------
forEach()    undefined                 göra saker             "Loopa & gör"                  Kan inte chainas, används för side effects
map()        ny array                  förändra alla          "1 → 1 transformation"         Måste returnera något
filter()     ny array                  välja flera            "Behåll vissa"                 Returnerar true/false i callbacken
find()       ett värde / undefined     hitta en               "Första match vinner"          Stoppar vid första träff
findIndex()  index / -1                hitta position         "Var ligger den?"              Bra om du behöver index
some()       true / false              kolla om någon finns   "Finns det minst en?"          Stoppar vid första true
every()      true / false              kolla om alla passar   "Är alla OK?"                  Stoppar vid första false

🟢 UTAN CALLBACK

includes()   true / false              kolla om värde finns   "Finns den?"                   Enkel check
indexOf()    index / -1                hitta position         "Var finns den?"               Fungerar på exakta värden
at()         värde                     hämta på index         "Ge mig position"              at(-1) ger sista elementet
slice()      ny array                  kopiera del av array   "Klipp ut"                     Ändrar inte original
join()       string                    göra om till text      "Slå ihop"                     Bra för utskrift/UI

⚖️ JÄMFÖRELSER

map vs forEach
- map() används när du vill få tillbaka en ny array
- forEach() används när du bara vill göra något med varje element

filter vs find
- filter() används när du vill få tillbaka flera matchningar
- find() används när du bara vill hitta första matchningen

some vs every
- some() används när minst ett element ska uppfylla villkoret
- every() används när alla element ska uppfylla villkoret

🧠 GULDREGEL
Beskriv problemet i en mening → välj metod

"Jag vill förändra alla"   → map()
"Jag vill ha vissa"        → filter()
"Jag vill hitta en"        → find()
"Jag vill bara köra kod"   → forEach()
"Jag vill kolla om någon"  → some()
"Jag vill kolla om alla"   → every()

🟣 SORTERING

sort()       samma array (muterar)     sortera array          "Ordna i ordning"

Exempel:
const numbers = [10, 2, 5]

❌ Fel (sorterar som text)
numbers.sort()

✅ Rätt (nummer)
numbers.sort((a, b) => a - b)

🔽 fallande
numbers.sort((a, b) => b - a)

🧠 Med objekt
products.sort((a, b) => a.price - b.price)

⚠️ Viktigt:
- sort() muterar arrayen (ändrar original)
- använd slice() först om du vill behålla originalet:

const sorted = [...numbers].sort((a, b) => a - b)

*/