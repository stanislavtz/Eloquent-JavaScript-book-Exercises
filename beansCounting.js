const countChars = (string, char, counter=0) => {
    const index = string.indexOf(char);

    if(index === -1) {
        return counter;
    }

    counter++;

    return countChars(string.slice(index+1), char, counter);
}

console.log(countChars('knjkkgik', 'a'))