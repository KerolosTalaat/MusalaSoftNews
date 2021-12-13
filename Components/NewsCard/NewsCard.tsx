import React from 'react';
import {
	View,
	Image,
	TouchableWithoutFeedback
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import moment from 'moment';

import MSNText from '../MSNText';

import styles from './NewsCard.Styles'

export interface newsProps {
	title?: string;
	urlToImage?: string;
	publishedAt?: string;
}

export type Props = {
	news: newsProps;
  onPress(): null|void;
};

const NewsCard: React.FC<Props> = ({ onPress = () => null, news = {} }) => {
	const { colors } = useTheme();
	const {
		title,
		urlToImage,
		publishedAt
	} = news;

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.cardContainer(colors)}>
				<Image source={{ uri: urlToImage }} style={styles.image} />
				<View style={styles.textContainer}>
					<View style={styles.title}>
						<MSNText style={styles.titleText} text={title} />
					</View>
					<View style={styles.details}>
						<MSNText style={styles.detailsText} text={moment(publishedAt).format('DD/MM/YYYY HH:mm')} color='detailsText' />
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default NewsCard;


