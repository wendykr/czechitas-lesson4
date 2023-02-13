// REALITKA

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

let dispozice = document.querySelector('.dispozice');
dispozice.innerHTML = '<strong>Dispozice bytu</strong> ' + apartment.disposition;

let najem = document.querySelector('.najem');
najem.innerHTML = '<strong>Čistý nájem</strong> ' + apartment.price.rent + apartment.price.currency.toUpperCase();

let vymera = document.querySelector('.vymera');
vymera.innerHTML = '<strong>Výměra bytu</strong> ' + apartment.area.floorage + apartment.area.balcony + apartment.area.units;

const mesto = {
    city: 'Prague',
	district: 'Old Town',
}

const { city, district } = mesto;

let vypisMesto = document.querySelector('.mesto');
vypisMesto.innerHTML = '<strong>Město</strong> ' + mesto.city + ' ' + '<strong>Část</strong> ' + mesto.district; 

apartment.status = 'taken';
let newStatus = document.querySelector('.status');
newStatus.innerHTML = '<strong>Status</strong> ' + apartment.status;


// KNIHOVNA

const item1 = {
    title: 'Umění nemoci',
    author: {
		name: 'Jan',
		surname: 'Vojáček',
	},
    pages: 232,
    vydavatel: 'CPress',
	address: {
		streetName: 'Příkop',
		number: 4,
		city: 'Brno',
		postalCode: '602 00',
	},
}

const item2 = {
    title: 'CSS Moderní layout',
    author: {
		name: 'Martin',
		surname: 'Michálek',
	},
    pages: 440,
    vydavatel: 'Martin Michálek – Vzhůru dolů',
	address: {
		streetName: 'Jurkovičova',
		number: 988 + '/' + 14,
		city: 'Praha 11',
		postalCode: '149 00',
	},
}


// OČKOVÁNÍ

let button = document.querySelector('.button');

button.addEventListener('click',
  function() {
	let vstupJmeno = String(prompt('Jméno:'));

	if (vstupJmeno == '') {
        alert('Jméno je povinný údaj');
    } else {
		let vstupVek = Number(prompt('Věk:'));

		if (vstupVek == '') {
            alert('Věk je povinný údaj');
        } else {
	
		const person = {
			name: vstupJmeno,
			age: vstupVek,
		}
		
		let osoba = document.querySelector('.osoba');
		osoba.innerHTML = '<strong>' + person.name + '</strong>' + ' ' + person.age + ' ' + 'let';
		
		button.classList.add('hidden');
		}
	}
  }
);
