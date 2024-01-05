import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Card = ({ character, navigation }) => {
	const handlePress = () => {
		navigation.navigate('CharacterDetail', { characterId: character.id })
	}
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={styles.cardContainer}
			onPress={handlePress}>
			<Image style={styles.image} source={{ uri: character.image }} />
			<View style={styles.textContainer}>
				<Text style={styles.name}>{character.name}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 16,
		margin: 8,
		borderRadius: 8,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginRight: 16,
	},
	textContainer: {
		flex: 1,
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	status: {
		fontSize: 16,
		color: '#555',
	},
	gender: {
		fontSize: 16,
		color: '#555',
	},
})

export default Card
