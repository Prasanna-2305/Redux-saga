import React, { Component } from 'react'
import { connect } from 'react-redux';
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
        <table border="2"className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.users && this.props.users.map((user, i) => (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    users:state.sagas.users,
    error: state.sagas.error
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
