import React from 'react';

class Main extends React.Component {
	constructor(props){
		super(props);
		console.log(this.props.changeUsername)

	}
   render() {
      return (
         <div>
         <h2>Change username</h2>
         <button  onClick={this.props.changeUsername}>submit</button>
         </div>
      );
   }
}
export default Main;