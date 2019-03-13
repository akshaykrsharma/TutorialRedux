const boldFont = (fontSize = 14) => ({
	//fontFamily: 'AvenirLTStd-Medium',
	fontSize: fontSize
});

const extraBoldFont = (fontSize = 14) => ({
	//fontFamily: 'AvenirLTStd-Heavy',
	fontSize: fontSize
});

const regularFont = (fontSize = 12) => ({
	//fontFamily: 'AvenirLTStd-Light',
	fontSize: fontSize
});

const italicFont = (fontSize = 12) => ({
	//fontFamily: 'AvenirLTStd-Light',
	fontSize: fontSize,
	fontStyle: 'italic'
});

const italicBoldFont = (fontSize = 14) => ({
	//fontFamily: 'AvenirLTStd-Medium',
	fontSize: fontSize,
	fontStyle: 'italic'
});

module.exports = {
	extraBoldFont,
	boldFont,
	regularFont,
	italicFont,
	italicBoldFont
};
