import React, { Component } from 'react';


class ErrorPage extends Component {
    state = {  }
    render() {
        const wrong_path=this.props.location.pathname; 
        return ( <div className="text-center"><h2>An Error Occured. There is no <em className="text-danger"> {wrong_path}</em>  </h2> </div> );
    }
}
 
export default ErrorPage;