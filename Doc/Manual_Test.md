# A manuális tesztek előkészülete

A manuális tesztek tervezéséhez és végrehajtásához először is a felületre volt szükség, ahol a teszteket végezni lehet majd. A projektet csak a specifikáció, és az elérhető jegyzetei alapján próbáltam meg beüzemelni, hogy azt is ellenőrizzem menet közben, hogy mennyire felelnek meg azok a leírások. 

![](/Doc/images/manual_tests/requirements.png)

A megadott programokat minden féle probléma nélkül lehetett telepíteni, a linkek jó helyre vezettek, és egyértelműek voltak a telepítések is.

A sikeres telepítések után következett a projekt buildelése. Itt is a főoldalon megtalálható markdown fájl leírását követtem.

![](/Doc/images/manual_tests/backend_instructions.png)

Ezek futtatása után a backend már üzemképes is volt, a docker container-emben már futott is. Ezután a frontend rész beüzemelése következett. 

![](/Doc/images/manual_tests/frontend_instructions.png)

A program alapvetően nem fordult, a ugyanis a `yarn start` kiadása előtt még szükség van egy `yarn install` parancs futtatására is. A kiadott parancsok után megjelent a felhasználói felület is.



# A manuális tesztek tervezése

A manuális teszteket a specifikáció alapján készítettem el. Fontos hogy azokat a funkciókat ellenőrizzük, amelyek meg lettek határozva a leírásba. A szöveg alapján megterveztem a teszteseteket.

![](/Doc/images/manual_tests/description.png)

## Növények megjelenítése

A szöveg szerint, megjelennek a weboldalon a növények, és az utolsó locsolásuk óta eltelt idő. A weboldal betöltésekor az alábbi képernyő fogadott. 

![](/Doc/images/manual_tests/webscreen1.png)

Mint látható, a képernyőn megjelentek az egyes növények, a nevükkel, illetve az eltelt idővel. 

## Növény hozzáadása

A következő teszt, hogy tudunk-e egy új növényt hozzáadni, ehhez a listához. A középen látható nagy gomb intuitívan arra enged következtetni, hogy használatával fel tudunk venni egy új növényt. A gombra kattintva az alábbi felugró ablak fogad

![](/Doc/images/manual_tests/webscreen2.png)

Egy nevet és egy locsolási gyakoriságot megadva létre is tudunk hozni egy új növényt. A név tetszőleges karaktersorozat lehet, míg a gyakoriságnak egy egész számot kell tartalmaznia. Ha nem megfelelő bemenetet próbálok megadni a második mezőbe, akkor nem történik semmi, esetleg egy jelzés a felhasználónak jó lehet, hogy tudassuk vele, miért nem történt meg a növény létrehozása. Ha megfelelő adatokat adtunk meg, akkor létre is jön az új növényünk. Ellenőrizhető, hogy az általam megadott név, megegyezik-e a megjelenített névvel, és itt nincs eltérés.

![](/Doc/images/manual_tests/webscreen3.png)

## Növény módosítása

Ha egy növényre rákattintunk, egy részletesebb nézetet kapunk. 

![](/Doc/images/manual_tests/webscreen4.png)

Ennél láthatóak a növény neve, locsolási frekvenciája, az utolsó locsolás ideje, és egy gomb is látható, amellyel a növényt meg tudjuk locsolni. A jobb felső sarokban egy csavarkulcs van, ez feltehetőleg a módosítást hivatott megvalósítani. Az ikonra kattintva, az alábbi felugró ablak fogad.

![](/Doc/images/manual_tests/webscreen5.png)

A felső mezőbe betölti a nevet, míg az alsóba a számot, mindegyiken egy kis módosítást végezve ellenőrizni tudjuk, hogy változni fog-e a megjelenített érték. 
A szám mezőnél továbbra is csak szám értéket fogad el, ezt is egyszerűen ellenőrzni lehetett, viszont, ha nem megfelelő a bemenet formátuma, sajnos nincs visszajelzés a felhasználónak itt se. A módosítások után, a frissített adatok jelennek meg. 

![](/Doc/images/manual_tests/webscreen6.png)

## Locsolás funkciójának ellenőrzése

A `Water Now` gombra kattintva, a növényt virtuálisan meglocsoljuk. Ennek hatására, a `Last watered` attribútum, most lesz, továbbá az indikátor, ami a vízszintet hivatott reprezentálni 100%-ra ugrik (animáció kíséretében, de azt képekről nem lehetséges megmutatni).

![](/Doc/images/manual_tests/webscreen7.png)

A főmenübe visszatérve, az érték ott is frissült, és a mostani locsolást mutatja már. 

![](/Doc/images/manual_tests/webscreen8.png)

## Növény törlése

Az utolsó teszt azt hivatott ellenőrzni, hogy a növényt lehetőségünk van-e törölni. Intuíciót követve, a növényeknél, a kis kuka ikon feltehetőleg annak a törlését jelenti. Rákattintáskor egy megerősítő ablak ugrik fel, hogy megerősítsük törlési szándékunkat. 

![](/Doc/images/manual_tests/webscreen9.png)

Ha megerősítjük, akkor a növényünk eltűnik a listából, és nem látható többé, így a törlés funkció is megvalósult. 

![](/Doc/images/manual_tests/webscreen10.png)

# Konklúzió

Összességében azt lehet mondani, hogy a webes alkalmazás a CRUD műveleteket teljes mértékben megvalósítja, ugyanis van lehetőség új hozzáadására, megjelenítése, szerkesztésre, és törlésre is, viszont néhány felugró ablak esetén előnyös lehet, hogy a hibákat a felhasználó számára is megjelenítsük, hogy ő is könnyebben eligazodjon, hogy miért nem úgy működik a program ahogy ő azt gondolja. 