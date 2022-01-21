/**
The task is to write a program that prints two numbers: 
the numbers of cows and chickens on a farm, 
with the words Cows and Chickens after them and 
zeros padded before both numbers so that they are always three digits long.

* Followed below is shown a code who gave a possibilities to print quantities of animals in whole farm.
* To add new animal to "farm".
*/

const farm = ['Cow', 'Chicken', 'Horse', 'Dog', 'Cat', 'beAr']

function printInfo() {
    const result = [...arguments].map((count, index) => {
        if (index >= farm.length) {
            return;
        }

        // Converts animal type string to to start with to start with Capital case.
        const kind = convertAnimalType(count, farm[index]);

        return `${stringifyCounter(count)} ${kind}`;
    });

    console.log(result.join('\n'));
}

function stringifyCounter(num) {
    if (isNaN(num) || num == null) {
        num = '000'
    }

    let value = `${num}`;
    while (value.length < 3) {
        value = `0${value}`;
    }

    return value;
}

function convertAnimalType(x, type) {
    type = type[0].toUpperCase() + type.substring(1).toLowerCase();
    let kind = x > 1 || x == 0 ? `${type}s` : type;
    return kind;
}

function addAnimal(type) {
    return farm.push(type);
}

printInfo(9, 7,2);