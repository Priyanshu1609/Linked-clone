import React, {useEffect} from 'react';
import './App.css';
import Feed from './app/Feed';
import Header from './app/Header';
import Sidebar from './app/Sidebar';
import { login, logout, selectUser } from './features/userSlice'
import { useSelector, useDispatch } from 'react-redux';
import Login from './app/Login';
import { auth } from './app/Firebase';
import Widgets  from './app/Widjets';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
          dispatch(login({
            email: userAuth.email,
            uid : userAuth.uid,
            displayName: userAuth.displayName,
            // url: userAuth.url
          }))
      }
      else{
          dispatch(logout({

          }))
      }
    } )
  }, [])

  return (

    <div className="app">
      {/* Header */}
      <Header />
      {
        !user ? (<Login />) : (<div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
        )}
    </div>

  );
}

export default App;
