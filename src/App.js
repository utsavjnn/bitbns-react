import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {generateCodeChallenge, generateRandomString} from "./utils";
import axios from 'axios';

function App() {
  useEffect(async () => {
    let code_verifier = generateRandomString();
    let code = await generateCodeChallenge(code_verifier);
    console.log({code});
    let url = `https://oauth.bitbns.com/oauth/dialog/authorize?response_type=code&
            redirect_uri=http://127.0.0.1:3000/&
            scope=TRADE%20CANCEL%20QUICK_SWAP&
            code_challenge=${code}&
            code_challenge_method=S256&
            state=377f36a4557ab5935b36&
            client_id=526F4DB9B80A3C1FE082D24901F9C850`
    axios.get(url).then(()=> {
      console.log("done")
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
