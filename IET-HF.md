# Projekt célja

A projekt egy egyszerű növény nyilvántartó rendszer, 
amely egy szerver (backend), és egy klines (frontend) résszből áll.

A felhasználó vagy felhasználók a frontend segítségével tudnak növényeket létrehozni,
és azokat öntözni.

Egy növény objektum a következő adatokat tartalmazza:
- Név
- Öntözési intervallum (napokban)
- Öntözések listája

A frontend képes listázni az összes növényt, és megjeleníti, hogy mikor volt utoljára öntözve.
Valamint egy növény adatlapját is meg tudja jeleníteni, ahol látható a növény neve, öntözési intervalluma,
és egy öntözés gomb, amivel az adott növényt meg lehet öntözni.
A növény utolsó öntözésének ideje alapján egy százalékos mutatót is megjelenít, ami azt mutatja meg,
hogy mennyi idő telt el az utolsó öntözés óta.

A backend képes a növények listáját tárolni, egy növényt létrehozni, 
illetve az adott növény öntözéseit is tárolni.

---

## Technikai részletek

### Frontend
- React
- Typescript
- Chakra UI
- Apollo Client
- Docker

A frontend és backend közti kommunikációt egy GraphQL API biztosítja.

### Backend
- NestJS
- Typescript
- Prisma
- PostgreSQL
- GraphQL Code Generator
- Apollo Server
- Docker