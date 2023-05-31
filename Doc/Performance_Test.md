# Teljesítménytesztek készítése az alkalmazáshoz

## A tesztekről
A feladatom a címnek megfelelően teljesítménytesztek készítése volt. A tesztek elsősorban arra szolgálnak, hogy miképp viselkedik a rendszer különböző körülények között. Ennek megfelelően a következő típusú teljesítményteszteket valósítottam meg:
+ Load tesztek az alkalmazás normál működés alatti tesztelésére,
+ Spike tesztek készítése rövid idő alatt nagy ütemben megnövő adatbázis hívások eredményességének vizsgálatára
+ Stress tesztek a vártnál jóval nagyobb mennyiségű kérés modellezésére
+ Soak tesztek a kis terhelésű, de folyamatos kérések mintázására

Az Következő adatbázisműveleteket vizsgáltam a tesztelés során:
+ Növények listázása
+ Növény hozzáadása
+ Növény meglocsolása
+ Növény adatainak módosítása

A tesztek megvalósításához a NestJS-nek megfelelő könyvtárat kerestem, így esett a választásom a K6 könyvtárra. Ez részletes eredményeket közöl a teszt eredményeiről, ezek közül legfontosabbnak a http_req_durationt és a http_req_failed mezőket ítéltem (Alább a növények listájának "load tesztes" lekérésének eredménye látható)

![](images\performance_test\query_loadtest_result.jpg)

## Eredmények

A következőeket állapíthattam meg a tesztek futtatása után:

Tartósan nagyobb terhelésnél (Stress teszt), a kéréseknek több, mint 10%-a kerül eldobásra, míg ha az extrém terhelés hirtelen jön, abban az esetben is sikertelen lesz pár tranzakció (Ez az 1%-ot nem érte el). Ezekben az esetekben ~1000 egyidejű kérés érkezik be a rendszerhez, amit már nem tud a szerver megfelelő hatékonysággal feldolgozni. Tehát kijelenthető, a jelenlegi adatbázis nem elégítheti például azt az igényt, hogy az egész kollégium egyidőben menedzselje a növényöntözős ügyeit, azonban egy-két szint esetében nem áll fenn probléma. (Gyakorlatban használhatná a kollégium az appot, hiszen nem realitás, hogy egyidőben 150-nél több kérés érkezzen be )

A Load és a Soak tesztben meghatározott követelményeket a rendszer könnyedén teljesíti. (~150 user egyidejű kiszolgálása)


## Tapasztalatok

Örülök annak, hogy egy számomra új stacken próbálhattam ki számomra új tesztelési metódusokat, úgy érzem sokat tanultam a feladat megoldása során. Az új környezet megismerésébe egész sok energiát kellett belefektetnem, azonban a csapattársaim nagyon segítőkészeknek bizonyultak.
