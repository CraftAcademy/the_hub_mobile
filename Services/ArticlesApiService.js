import axios from "axios";

// const url = `http://192.168.1.178:3000`;  // whenever we want to make api calls to localhost we have to use the ip address not the keyword `localhost` since that can result in a network error.
const url = `http://10.0.2.2:3000`; // works only for Android Emulator

export const GetArticles = async () => {
  let response = await axios.get(url + "/api/v1/articles");
  const articles = response.data.articles;
  return articles

  try {
  } catch (error) {
    console.error(error);
  }
}; 