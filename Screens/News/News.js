import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator }  from 'react-native';

import { getAllNews, searchNewsTitle } from '../../Services/newsService';
import { NewsCard, SearchBar } from '../../Components';

class News extends Component {
  state = {
    newsList: null
  };

  componentDidMount() {
   this.getAllNews();
  };

  getAllNews = async () => {
    const news = await getAllNews();
    this.setState({ newsList: news.articles });
  };

  searchNews = async (keyWord) => {
    this.keyWord = keyWord;
    const news = await searchNewsTitle(keyWord);
    this.setState({ newsList: news.articles });
  };

  onRefresh = () => {
    if (this.keyWord) {
      this.searchNews(this.keyWord);
    } else {
      this.getAllNews();
    };
  };

  onNewsPress = (news) => {
    const { navigation } = this.props;
    navigation.navigate('NewsDetails', {news});
  };

  render() {
    const { newsList } = this.state;
    return (
      <View style={{alignItems: 'center', paddingHorizontal: 15, marginTop: 50}} >
        <SearchBar onSearch={this.searchNews} />
        <FlatList 
          data={newsList}
          onRefresh={this.onRefresh}
          refreshing={false}
          renderItem={({ item, index }) => (
            <NewsCard news={item} onPress={() => this.onNewsPress(item)} />
          )}
          style={{ width: '100%' }}
          ListEmptyComponent={!!newsList ? null : <ActivityIndicator /> }
          ItemSeparatorComponent={() => (<View style={{ margin: 5 }} />)}
          contentContainerStyle={{ paddingBottom: 90 }}
        />
      </View>
    );
  };
};

export default News;