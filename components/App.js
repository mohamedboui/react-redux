import React from 'react';
import Main from './Main.js';
import User from './User.js';
import {connect} from 'react-redux';
class App extends React.Component {
	constructor(props){
		super(props);
		this.changeUsername=this.changeUsername.bind(this);
		this.state={
			username:"med"
		}
	}
	changeUsername(username){
		this.setState({username:username});
	}
   render() {
      return (
         <div>
            <Main changeUsername={()=>this.props.setName("takhna")}/>
            <User user={this.props.user.name}/>
         </div>
      );
   }
}
const mapStateToProps=(state)=>{
	return{
		user:state.userReducer,
		math:state.mathReducer
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
	setName:(name)=>{
		dispatch((disptach)=>{
			var p= new Promise((resolve,reject)=>{
				resolve("mohaamed");
			});
			return p.then(res=>{
				disptach({type:"SET_NAME",payload:{name:res,age:20}})
			}).catch(err=>console.log(err))
		})

	}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);