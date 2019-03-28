import React from "react";
import { Text, View } from "react-native";

export default class ArticleScreen extends React.Component {
  renderArticles({ item }) {
    const article = item;
    return (
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: article.image }}
        />
        <Text>{article.category.name}</Text>
        <Text>{article.title}</Text>
        <Text>{article.description}</Text>
        <Button
          title="View Article"
          onPress={() => this.showArticle()}
        />
      </View>
    );
  }
  showArticle() {
    this.props.navigation.navigate("Article");
  }
}