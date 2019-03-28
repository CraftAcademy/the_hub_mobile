import React from "react";
import { GetArticle } from "../../Services/ArticlesApiService";
import { Text, View, Image } from "react-native";

export default class ArticleScreen extends React.Component {

  componentDidMount() {
    const articleId = this.props.navigation.state.params.id
    GetArticle(articleId).then(res => {
      this.updateArticleStateHandler(res);
    });
  }

  updateArticleStateHandler(article) {
    this.setState({
      article: article
    });
  }

  render() {
      return (
        <View>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: article.image }}
          />
          <Text>{this.article.category.name}</Text>
          <Text>{this.article.title}</Text>
          <Text>{this.article.content}</Text>
        </View>
      );
    }
  }

}