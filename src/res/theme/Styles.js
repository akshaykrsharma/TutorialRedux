import Colors from './Colors';
import Fonts from './Fonts';
import Utils from '../../Utility/Utils';
const Styles = {
	button: {
		minWidth: 200,
		minHeight: 40,
		width: '80%',
		margin: 10,
		alignSelf: 'center',
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		shadowColor: Colors.BLACK_COLOR,
		//shadowOffset: { width: 0, height: 5 },
		backgroundColor: Colors.buttonBackground,
		shadowOpacity: 0.05,
		shadowRadius: 1
	},

	buttonTitleStyle: {
		fontWeight: 'bold',
		color: Colors.WHITE_COLOR,
		alignSelf: 'center',
		...Fonts.boldFont(16)
	},

	footerButton: {
		...this.button,
		borderRadius: 0,
		marginVertical: 0,
		width: '100%',
		minHeight: Utils.isIphoneX() ? 54 : 49,
		paddingBottom: Utils.isIphoneX() ? 15 : undefined
	},

	inputContainerStyle: {
		height: 45,
		...Fonts.regularFont(16)
	}
};

export default Styles;
