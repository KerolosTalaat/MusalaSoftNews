import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { useTheme } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";

import styles from './SearchBar.Styles';

export type Props = {
	onSearch(searchText: string): null|void;
  };
  
const SearchBar: React.FC<Props> = ({ onSearch = () => null }) => {
	const [searchText, setSearchText] = useState("");
	
	const { colors } = useTheme();

	return (
		<View style={styles.container}>
			<Icon
				name="search"
				size={20}
				color={searchText ? colors.primary : 'dimgrey'}
				style={styles.searchIcon}
				onPress={() => {
					if (searchText) { onSearch(searchText) }
				}}
			/>
			<TextInput
				style={styles.input}
				placeholder="Search"
				value={searchText}
				onChangeText={setSearchText}
			/>
			{searchText ? (
				<Icon name="close" size={20} color="black" style={styles.closeIcon} onPress={() => {
					onSearch("")
					setSearchText("")
				}} />
			) : null}
		</View>
	);
};

export default SearchBar;
