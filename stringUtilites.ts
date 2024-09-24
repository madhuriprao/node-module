//creating a reverseStringfunction

export const reverseString = (str: string): string => str.split('').reverse().join('');


//countCharacter funtion
export const countChar = (str:string):number => {
    return str.replace(/\s/g, '').length;  // all the \s \g are replaced with empty string.
};

//Vertical text funtion using for, of loop
//with each for iteration, char holds the current character from the string.
//of loop will go through each character of the string one by one. 
export const verticalText = (str:string):void=>{
    for (const char of str) {
        console.log(char);
}
};



