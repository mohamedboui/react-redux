import React from 'react';

class User extends React.Component {
   render() {
      return (
         <div>
         	<h2>{this.props.user}</h2>
         </div>
      );
   }
}
export default User;