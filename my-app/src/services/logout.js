import React from 'react'
import Auth from './authservice'
const auth = new Auth();

class Logout extends React.Component{
    componentDidMount(){
        auth.logout()
        this.props.history.push('/login')
    }
}

export default Logout;