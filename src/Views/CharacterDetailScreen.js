// CharacterDetailScreen.js

import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import useGetCharacterInfo from '../hooks/useGetCharacterInfo'
import { useNavigation } from '@react-navigation/native'

const CharacterDetailScreen = ({ route }) => {
	const navigation = useNavigation()
	const characterId = route.params.characterId
	const { character, loading, error } = useGetCharacterInfo(characterId)

	const handleGoBack = () => {
		navigation.goBack()
	}

	if (loading) {
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
			</View>
		)
	}
	if (error) {
		return (
			<View style={styles.container}>
				<Text>Error</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleGoBack} style={styles.goBack}>
				<Text style={styles.goBackText}>Go back</Text>
			</TouchableOpacity>
			<Image style={styles.image} source={{ uri: character.image }} />
			<Text style={styles.name}>{character.name}</Text>
			<Text style={styles.detailText}>{`Status: ${character.status}`}</Text>
			<Text style={styles.detailText}>{`Species: ${character.species}`}</Text>
			<Text style={styles.detailText}>{`Gender: ${character.gender}`}</Text>
			<Text style={styles.detailText}>{`Type: ${
				character.type || 'N/A'
			}`}</Text>
			<Text
				style={
					styles.detailText
				}>{`Location: ${character.location.name}`}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',

		justifyContent: 'center',
		padding: 16,
		backgroundColor: '#fff',
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginBottom: 16,
	},
	goBack: {
		alignSelf: 'flex-start',
		marginBottom: 80,
	},
	goBackText: {
		fontSize: 18,
		color: '#555',
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	detailText: {
		fontSize: 16,
		marginBottom: 8,
	},
})

export default CharacterDetailScreen
