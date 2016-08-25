const CeaserPoly = {
	encrypt: (text, key) => {
		return text.split('').reduce(
			(memo, char, index) => {
				char = char.charCodeAt();
				return memo + String.fromCharCode(
					((char - 97 + key[index % key.length]) % 26) + 97
				);
			},
			""
		)
	},
	decrypt: (text, key) => {
		return text.split('').reduce(
			(memo, char, index) => {
				char = char.charCodeAt();
				return memo + String.fromCharCode(
					((char - 97 - key[index % key.length]) % 26) + 97
				);
			},
			""
		)
	}
};

export CeaserPoly;
