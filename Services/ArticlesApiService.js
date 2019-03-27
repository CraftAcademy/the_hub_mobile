import axios from "axios";

const url = `http://10.0.2.2:3000`; // works only for Android Emulator

export const GetArticles = async () => {
  let response = await axios.get(url + "/api/v1/articles");
  const articles = response.data.articles;
  return articles
}; 