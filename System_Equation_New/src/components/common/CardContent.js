import React from 'react';
import { View } from 'react-native';

const CardContent = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: 'white',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
		flex: 1
	}
};

export { CardContent };
