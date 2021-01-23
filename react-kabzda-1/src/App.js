import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer';
import store from './redux/redux-store'


const DialogsContainer = React.lazy(() => import('./components/Dialogs / DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))



class App extends React.Component {
  catchAllUnhandledErrors = () => {
    alert('Some error occured')
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors
    )
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors
    )
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper' >
        <HeaderContainer />
        {/* <Navbar state={props.store.getState().sideBar} /> */}
        <Navbar />


        < div className='app-wrapper-content' >
          <Switch>

            <Route exact path='/'
              render={() => { <Redirect to='/profile' /> }} />

            <Route path='/dialogs'
              render={withSuspense(DialogsContainer)} />
            <Route path='/profile/:userId?'
              render={withSuspense(ProfileContainer)} />
            <Route path='/users'
              render={() => <UsersContainer />} />
            <Route path='/login'
              render={() => <LoginPage />} />
            <Route path='*'
              render={() => <div>404 NOT FOUND</div>} />

            <Route path='/news'
              component={News} />
            <Route path='/music'
              component={Music} />
            <Route path='/settings'
              component={Settings} />
          </Switch>
        </div >
      </div >
    );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

let SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <AppContainer />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp
