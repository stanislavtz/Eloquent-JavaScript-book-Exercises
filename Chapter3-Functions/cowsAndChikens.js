/**
The task is to write a program that prints two numbers: 
the numbers of cows and chickens on a farm, 
with the words Cows and Chickens after them and 
zeros padded before both numbers so that they are always three digits long.

Followed below is shown a code who gave a possibilities to:
* Print quantities of animals in whole farm.
* Add new animal to "farm".
*/

const farm = ['Cow', 'Chicken', 'Horse', 'Dog', 'Cat', 'beAr'];

function printInfo() {
    const result = [...arguments].map((count, index) => {
        if (index >= farm.length) {
            return;
        }

        // Converts animal type string to start with to start with Capital case.
        const kind = transformAnimalKindString(count, farm[index]);

        return `${stringifyCounter(count)} ${kind}`;
    });

    console.log(result.join('\n'));
}

function stringifyCounter(num) {
    if (isNaN(num) || num == null) {
        num = '000';
    }

    let value = `${num}`;
    while (value.length < 3) {
        value = `0${value}`;
    }

    return value;
}

function transformAnimalKindString(x, animalKind) {
    animalKind = animalKind[0].toUpperCase() + animalKind.substring(1).toLowerCase();
    let kind = x > 1 || x == 0 ? `${animalKind}s` : animalKind;
    return kind;
}

function addAnimal(kind) {
    return farm.push(kind);
}

printInfo(9, 7, 2);