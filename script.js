function rot13(encryptedString) {
	var lookup = {
	  A: "N",
	  B: "O",
	  C: "P",
	  D: "Q",
	  E: "R",
	  F: "S",
	  G: "T",
	  H: "U",
	  I: "V",
	  J: "W",
	  K: "X",
	  L: "Y",
	  M: "Z",
	  N: "A",
	  O: "B",
	  P: "C",
	  Q: "D",
	  R: "E",
	  S: "F",
	  T: "G",
	  U: "H",
	  V: "I",
	  W: "J",
	  X: "K",
	  Y: "L",
	  Z: "M",
	  "?": "?",
	  ",": ",",
	};
}

var words = encodedString.split(" ");
let decodedArr = [];
for(let i=0; i<words.length; i++)
{
	const word = words[i];
	let decodedWord = "";
	for(let j=0; j<word.length; j++)
	{
		var char = word.charAt(j);
		var decodedChar = lookup[char];
		decoded_word += decodedChar;
	}
	decodedArr.push(decodedWord);
}
return decodedArr.join(" ");