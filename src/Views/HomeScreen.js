import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { useGetAllCharacters } from '../hooks/useGetAllCharacters'
import Card from '../components/Card'

const HomeScreen = ({ navigation }) => {
	const {
		characters,
		error,
		fetchNextPage,
		fetchPrevPage,
		isFirstPage,
		isLastPage,
	} = useGetAllCharacters()

	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<ScrollView style={{ marginTop: 20 }}>
				{error && <Text>Error</Text>}

				{characters?.map((character) => (
					<Card
						key={character.id}
						character={character}
						navigation={navigation}
					/>
				))}
			</ScrollView>
			<View style={styles.footer}>
				<TouchableOpacity
					onPress={!isFirstPage ? fetchPrevPage : null}
					activeOpacity={isFirstPage && 1}>
					<Text style={[styles.paginationText, isFirstPage && styles.disabled]}>
						Previous
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={!isLastPage ? fetchNextPage : null}
					activeOpacity={isLastPage && 1}>
					<Text style={[styles.paginationText, isLastPage && styles.disabled]}>
						Next
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f2f2f2',
		paddingTop: 40,
		flex: 1,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: 16,
		borderTopWidth: 4,
		borderTopColor: '#ddd',
		backgroundColor: '#fff',
	},
	paginationText: {
		fontSize: 18,
		color: '#555',
	},
	disabled: {
		color: '#ccc',
	},
})

export default HomeScreen
