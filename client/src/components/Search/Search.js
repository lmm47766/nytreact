import React, { Component } from "react";


const styles = {
  button:{
    marginLeft:"35px",
  }
}

class Search extends Component {
  state = {
    search: "",
    startYear: "",
    endYear: ""
  };


  handleInputChange = event => {
     this.setState({ [event.target.name]: event.target.value })
  };


  searchClick = (event) =>{
      event.preventDefault();

      return  this.props.click(this.state.search,this.state.startYear,this.state.endYear)

  };

  clearClick = (event) =>{
      event.preventDefault();

      return  this.props.clear()

  }



  render() {

    return (

      <div className='row'>
        <form className="col s12">      
          <p>Search Term:</p>
          <input onChange={this.handleInputChange} name='search' type="text" placeholder='Obama'/> 

          <p>Start Year (Optional):</p> 
          <input onChange={this.handleInputChange} name='startYear' type="text" placeholder='1991'/>

          <p>End Year (Optional):</p>
          <input onChange={this.handleInputChange} name='endYear' type="text" placeholder='2000'/>  

          <button type="submit" className="btn btn-default blue" onClick={this.searchClick}>Search Results</button>
          <button style={styles.button} type="submit" className="btn btn-default green"onClick={this.clearClick}>Clear Results</button>     
        </form>
      </div>
  )}

}


export default Search;