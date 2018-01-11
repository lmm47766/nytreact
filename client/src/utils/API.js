import axios from "axios";

export default {
  // Gets all articles
  getArticles: function(searchQuery) {
    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
    var newSearchQuery = queryURLBase+searchQuery;    
    return axios.get(newSearchQuery);
  },

  // Saves a book to the database
  saveArticle: function(article) {
  	// console.log(article);
    return axios.post("/api/articles", article);
  },

  getSavedArticles: function() {
    return axios.get("/api/articles");
  },

  deleteArticle: function(id) {
    return axios.delete("/api/articles/"+id);

  }      
};
