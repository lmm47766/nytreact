import React from "react";

const styles = {
  border:{
    borderStyle: "groove",
  },
  header:{
    background: "darkgray",
    overflow: "auto"
  }
}


const Saved = (props) => {

    return(

        <div className='row' style={styles.border}>
          <div style={styles.header}>
           <h4 className="col s10">{props.headline} </h4>
            <button className='btn col s2 red' onClick={(event)=>

                {

                  event.preventDefault();
                  return props.delete(props.id)
                }

              }>Delete</button>
          </div>
          <div className='col s12'>
             <p>Author: {props.author===undefined? "No Author": props.author } </p> 
             <p>Web URL: <a target="_blank" href={props.url}>{props.url}</a></p>
             <p>Preview: {props.preview}</p>
           </div>
        </div>

    )};

export default Saved;