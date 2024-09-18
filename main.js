const calculateDifference = (num1, num2) =>{
    return num1 - num2;
}

console.log(calculateDifference(10, 5));


const isOdd = (odd) =>{
    return odd % 2 !== 0;
}

console.log(isOdd(2));


const findMin = (arr) =>{
    return Math.min(...arr)
}

console.log(findMin([ , 2 , 3 , 5 , 1]));


const filterEvenNumber = (arr1) =>{
    return arr1.filter(num => num % 2 === 0 )
}

console.log(filterEvenNumber([2 , 3 , 5 , 6 , 7 ,8 , 9 ,10]))

const sortArrayDescending = (arr2) => {
    return arr2.sort((a , b) => b - a )
}

console.log(sortArrayDescending([ 8 , 5 ,2 , 10 ,3 ,6]));

const lowercaseFirstLetter = (str) => {
    if (str.length === 0) return str; 
    return str.charAt(0).toLowerCase() + str.slice(1); 
}
console.log(lowercaseFirstLetter("JavaScript"));

const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    return Array.from(str).filter(char => vowels.includes(char)).length;

}
console.log(countVowels("javascript"));

const findAverage = (arr) => {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

console.log(findAverage([10 , 20 , 40 , 30]));
