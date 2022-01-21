const animals = ['Cow', 'Chicken', 'Horse', 'Dog', 'Cat', 'beAr']

function printInfo() {
    const result = [...arguments].map((x, i) => {
        if(i >= animals.length) {
            return;
        }

        const animalType = convertAnimalType(animals[i]);

        let kind = x > 1 || x == 0 ? `${animalType}s` : animalType;

        return `${stringifyCounter(x)} ${kind}`;
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

function convertAnimalType(type) {
    return type[0].toUpperCase() + type.substring(1).toLowerCase();
}

printInfo(9, 5, 1, 6);