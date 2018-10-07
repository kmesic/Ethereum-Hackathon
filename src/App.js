import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar.js';
import CreateButton from './components/CreateButton.js';
import HomeView from './routes/HomeView.js';
import TransactionView from './routes/TransactionView.js';
import CreateView from './routes/CreateView.js';
import HistoryView from './routes/HistoryView.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: amber,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
              <div>
                <NavBar/>
                <Switch>
                  <Route exact path="/" component={HomeView} />
                  <Route path="/create" component={CreateView} />
                  <Route path="/transaction" component={TransactionView} />
                  <Route path="/history" component={HistoryView} />
                </Switch>
                <CreateButton/>
              </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
