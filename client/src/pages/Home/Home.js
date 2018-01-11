import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Results from "../../components/Results";
import Saved from "../../components/Saved";


class Home extends Component {
  state = {
    articles: [],
    savedArticles:[],
  };

  componentDidMount() {
      this.loadSavedBooks()
  }

  searchClick = (search, start, end) =>{
      var searchURL = search;

      if (start !== "") {
        searchURL = searchURL + "&begin_date=" + start + "0101";
      }

      if (end !== "") {
        searchURL = searchURL + "&begin_date=" + end + "0101";
      } 

      API.getArticles(searchURL)
      .then( res => this.setState({articles: res.data.response.docs }))
  

  };  

  saveArticle = (articleId) => {
      var index = parseInt(articleId, 10);
      var clickedArticle = this.state.articles[index];

      var newArticle ={
          headline: clickedArticle.headline.main,
          author: clickedArticle.byline===undefined? "No Author": clickedArticle.byline.original ,
          url: clickedArticle.web_url,
          preview: clickedArticle.snippet     
      }

      API.saveArticle(newArticle)
       .then( () => this.loadSavedBooks()  )

  };

  loadSavedBooks = () => {
      API.getSavedArticles()
       .then( res => this.setState({savedArticles: res.data}) )


  }; 

  deleteArticle = (articleId) => {

      API.deleteArticle(articleId)
       .then( () => this.loadSavedBooks() )

  };  



  render() {


    return (
        <div>
            <Header name='New York Times Search' color='black'/> 
            <Search click={this.searchClick}/> 
            <Header name='Results' color='darkblue'/> 
            { this.state.articles[0]===undefined? <Header name='' color='white'/> : 
              this.state.articles.map( (article,i) =>  <Results key={i} id={i} save={this.saveArticle} results={article}/>  ) }
            <Header name='Saved Articles' color='darkred'/> 
            { this.state.savedArticles[0]===undefined? <Header name='' color='white'/>: 
              this.state.savedArticles.map( (article) =>  
              <Saved key={article._id}  id={article._id} headline={article.headline}  author={article.author}  url={article.url}  preview={article.preview}  delete={this.deleteArticle}/>  
            ) }            
        </div>
    );
  }
}

export default Home;
