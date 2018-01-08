import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
 
/*
//redux -test-1
const userReducer=(state,action)=>{
	switch(action.type){
		case "ADD_USER":
		state=state+action.payload;
		break;
	}
			return state;
}
const store=createStore(userReducer,1);

store.subscribe(()=>{
	console.log("store updated ",store.getState())
})
store.dispatch({type:"ADD_USER",payload:100});
store.dispatch({type:"ADD_USER",payload:40});*/
//redux -test-2-immutabilié
/*const initialState={val:0,lastValues:[]};
const userReducer=(state=initialState,action)=>{
	switch(action.type){
		case "ADD_USER":
		state={
			...state,
			val:state.val+action.payload,
			lastValues:[...state.lastValues,action.payload]
		}
		break;
	}
	return state;
}
const store=createStore(userReducer);

store.subscribe(()=>{
	console.log("store updated ",store.getState())
})
store.dispatch({type:"ADD_USER",payload:100});
store.dispatch({type:"ADD_USER",payload:40});*/

//redux -test-combine Reducers
/*const initialState={val:0,lastValues:[]};
const mathReducer=(state=initialState,action)=>{
	switch(action.type){
		case "ADD_USER":
		state={
			...state,
			val:state.val+action.payload,
			lastValues:[...state.lastValues,action.payload]
		}
		break;
	}
	return state;
}
const userReducer=(state={name:"bouillis",age:10},action)=>{
	switch(action.type){
		case "SET_NAME":
		state={
			...state,
			name:action.payload.name,
			age:action.payload.age
		}
		break;
	}
	return state;
}
const store=createStore(combineReducers({userReducer,mathReducer}));

store.subscribe(()=>{
	console.log("store updated ",store.getState())
})
store.dispatch({type:"ADD_USER",payload:100});
store.dispatch({type:"ADD_USER",payload:40});
store.dispatch({type:"SET_NAME",payload:{name:"basma",age:20}});*/
//redux -test-middleware
/*const initialState={val:0,lastValues:[]};
const mathReducer=(state=initialState,action)=>{
	switch(action.type){
		case "ADD_USER":
		state={
			...state,
			val:state.val+action.payload,
			lastValues:[...state.lastValues,action.payload]
		}
		break;
	}
	return state;
}
const userReducer=(state={name:"bouillis",age:10},action)=>{
	switch(action.type){
		case "SET_NAME":
		state={
			...state,
			name:action.payload.name,
			age:action.payload.age
		}
		break;
	}
	return state;
}
const myLogger=(store)=>(next)=>(action)=>{
console.log("called middelware",action);
next(action);
}
const store=createStore(combineReducers({userReducer,mathReducer}),{},applyMiddleware(logger));

store.subscribe(()=>{
	console.log("store updated ",store.getState())
})
store.dispatch({type:"ADD_USER",payload:100});
store.dispatch({type:"ADD_USER",payload:40});
store.dispatch({type:"SET_NAME",payload:{name:"basma",age:20}});*/
// connect react Redux
/*
const initialState={val:0,lastValues:[]};
const mathReducer=(state=initialState,action)=>{
	switch(action.type){
		case "ADD_USER":
		state={
			...state,
			val:state.val+action.payload,
			lastValues:[...state.lastValues,action.payload]
		}
		break;
	}
	return state;
}
const userReducer=(state={name:"bouillis55",age:10},action)=>{
	switch(action.type){
		case "SET_NAME":
		state={
			...state,
			name:action.payload.name,
			age:action.payload.age
		}
		break;
	}
	return state;
}
const store=createStore(combineReducers({userReducer,mathReducer}),{},applyMiddleware(logger));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));*/
//async functions
const initialState={val:0,lastValues:[]};
const mathReducer=(state=initialState,action)=>{
	switch(action.type){
		case "ADD_USER":
		state={
			...state,
			val:state.val+action.payload,
			lastValues:[...state.lastValues,action.payload]
		}
		break;
	}
	return state;
}
const userReducer=(state={name:"bouillis55",age:10},action)=>{
	switch(action.type){
		case "SET_NAME":
		state={
			...state,
			name:action.payload.name,
			age:action.payload.age
		}
		break;
	}
	return state;
}
const store=createStore(combineReducers({userReducer,mathReducer}),{},applyMiddleware(logger,thunk));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

