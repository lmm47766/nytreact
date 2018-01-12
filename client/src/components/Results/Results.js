import React from "react";

const styles = {
  border:{
    borderStyle: "groove",
    borderRadius: '10px'
  },
  header:{
    background: "darkgray",
    overflow: "auto"
  },
  button:{
    width:"10%",
    marginLeft:"50px",
    marginTop:"10px"
  }
}



const Results = (props) => {

    return(

        <div className='row' id={props.id} style={styles.border}>
          <div style={styles.header}>
           <h4 className="col s10">{props.results.headline.main} </h4>
            <button className='btn col s2' style={styles.button} onClick={(event) =>{ 
              event.preventDefault();
              return props.save(props.id)
            }}>Save</button>
          </div>
          <div className='col s12'>
             <p>Author: {props.results.byline===undefined? "No Author": props.results.byline.original } </p> 
             <p>Web URL: <a target="_blank" href={props.results.web_url}>{props.results.web_url}</a></p>
             <p>Preview: {props.results.snippet}</p>
           </div>
        </div>

    )};

export default Results;