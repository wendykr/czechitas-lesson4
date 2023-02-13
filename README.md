# Objekty - Lekce 4

Cvičení do breakrooms pro kurz JavaScript 1 od Czechitas.

## 1. Realitka

Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

```javascript
const apartment = {
	type: 'rent',
	disposition: '3+1',
	area: {
		floorage: 100,
		balcony: 2,
		units: 'sqm',
	},
	city: 'Prague',
	district: 'Old Town',
	price: {
		rent: 28000,
		fees: {
			water: 1000,
			energy: 2500,
			services: 560,
		},
		currency: 'czk',
	},
	ownership: 'personal',
	condition: 'renovated',
	status: 'free',
	floor: 3,
}
```

- Pomocí tečkové notace vypište do stránky dispozici bytu.
- Vypište do stránky čistý nájem bez poplatků.
- Vypište do stránky celý objekt představující výměru bytu.
- Pomocí destrukturování si do separátních proměnných uložte město a městskou část. Vypište je do stránky.
- Změňte stav inzerátu z `'free'` na `'taken'`.


## 2. Knihovna

- V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
- Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.


## 3. Očkování - objekty

- Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.
Vytvořte objekt `person`, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu

```javascript
{
  name: 'Květoslav Voňavý',
  age: 67,
}
```

- Poté, co uživatel zadá všechny údaje, vypište do stránky objekt `person` v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.