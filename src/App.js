import React from 'react';
import HomePage from './pages/homepage/homepage'
import { Switch, Route } from 'react-router-dom'
import Header from './component/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css';



class App extends React.Component {
  constructor(){
    super()

    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: userAuth.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        })
      } else{
        this.setState({
          currentUser: userAuth
        })
      }

      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path ='/' component ={ HomePage }/>
          <Route exact path ='/signin' component ={ SignInAndSignUpPage }/>
        </Switch>
      </div>
    )
  }
}

export default App;
