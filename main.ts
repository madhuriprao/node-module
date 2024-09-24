import { countChar, reverseString, verticalText} from "./stringUtilites"; // Remove the .ts extension
import fs from "fs";

const sentence = 'Learning Node.js is important because it enables developers to build efficient server-side applications, like using modules to reverse strings, count characters, and display text vertically, enhancing both performance and productivity.';

console.log(reverseString(sentence));
console.log(countChar(sentence));
verticalText("Vertical text");

const reversedSentence = reverseString(sentence);

fs.writeFileSync('reversed.txt', reversedSentence);
console.log("Reverse string is written successfully!")
