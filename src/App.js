import React, { Component } from 'react'
import { connect, connet } from 'react-redux';
import { fetchData } from './action';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
    this.handlefetchData = this.handlefetchData.bind(this)
  }
  handlefetchData(){
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <center><button className='btn btn-primary' onClick={this.handlefetchData}>Fetch</button></center> 
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    users:state.fetchUser.users,
    error: state.fetchUser.error
  }
}

const mapDispatchToProp=(dispatch) => {
  return{
    fetchData:()=>{
      dispatch(fetchData())
    }
 }
}
export default connect(mapStateToProps , mapDispatchToProp)(App);
