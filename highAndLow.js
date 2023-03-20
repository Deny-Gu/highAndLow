function highAndLow(numbers){
    let result = '';

    arr = numbers.split(' ');

    result = Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr)

    return result;
}


console.log(highAndLow("1 2 3 4 5"));