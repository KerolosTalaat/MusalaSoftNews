import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import moment from 'moment';

import { MSNText } from '../../Components';

import styles from './NewsDetails.Style';

class NewsDetails extends Component {
  onLinkPress = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Invalid Link`);
    };
  };

  render() {
    const { route } = this.props;
    const {
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
    } = route ?.params ?.news;
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer} >
        <Image style={styles.image} source={{ uri: urlToImage }} />
        <View style={styles.textContainer} >
          <MSNText text={title} style={styles.titleText} />
            {author ? <MSNText text={`By ${author}`} style={styles.details} color='detailsText' /> : null}
            <MSNText text={moment(publishedAt).format('DD/MM/YYYY HH:mm')} style={styles.details} color='detailsText' />
          <MSNText text={description} style={styles.descriptionText} />
          <TouchableOpacity onPress={() => this.onLinkPress(url)} >
            <MSNText text={'Go to article'} style={styles.linkText} color='primary' />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
};

export default NewsDetails;