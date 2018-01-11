import React from "react";


const Header = (props) => {

    const jumbotronStyle = {
      borderRadius: '10px',
      color: 'white',
      textAlign: 'center',
      background: props.color
    }



    return(

        <div className='row'>
          <div className="col s12" style={jumbotronStyle}>
              <h1>{props.name}</h1>
           </div>
        </div>

    )};

export default Header;