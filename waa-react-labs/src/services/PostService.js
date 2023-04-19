import axios from "axios";

export function getPosts() {
    return axios
      .get("http://localhost:8080/users/1/posts")
      .then((response) => response.data)
      .catch((error) => console.error(error));
}