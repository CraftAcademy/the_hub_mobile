import React from "react";
import { GetArticle } from "../../Services/ArticlesApiService";
import { Text, View, Image } from "react-native";

export default class ArticleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: this.props.navigation.state.params.articleId,
      article: {
        id: 0,
        title: "",
        image: "",
        content: "",
        category: {
          name: ""
        }
      }
    };
  }
  
  componentDidMount() {
    GetArticle(this.state.articleId).then(article => {
      this.setState({
        article: {
          id: article.id,
          title: article.title,
          image: article.image,
          content: article.content,
          category: {
            name: article.category.name
          }
        }
      })
    });
  }

  render() {
    return (
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: this.state.article.image }}
        />
        <Text>{this.state.article.category.name}</Text>
        <Text>{this.state.article.title}</Text>
        <Text>{this.state.article.content}</Text>
      </View>
    );
  }
}