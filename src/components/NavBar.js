import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, 
         IconButton,
         Toolbar,
         Typography,
         Tabs,
         Tab,
         Tooltip } from '@material-ui/core';
import { AccountCircle,
         Schedule,
         NewReleases,
         ThumbsUpDown,
         History } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import logo from '../Cubi.svg';

const styles = {
  title: {
    fontSize: "1.5em",
  },
  tabs: {
    flexGrow: "1",
  },
  iconSize: {
    fontSize: "1.5em"
  },
  tabSize: {
    fontSize: "1em",
    textDecoration: "inherit",
    outline: "none",
    outlineOffset: "0px",
  },
  logoStyle: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  }
};

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: "Fetching Address",
      tabId: 0,
    }
  }

  accountName() {
    const { web3 } = this.context;
    this.setState({
      account: web3.accounts[0]
    });
  }

  componentDidMount() {
    this.accountName();
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <img style={styles.logoStyle} src={logo} className="App-logo" alt="logo" />
          <Typography style={styles.title} variant="title" color="inherit">
            Cubi
          </Typography>
          <Tabs
            value={this.state.tabId}
            onChange={(e, v) => {
              this.setState({tabId:v});
            }}
            scrollable
            scrollButtons="on"
            indicatorColor="secondary"
            textColor="secondary"
            style={styles.tabs}
          >
            <Tab label="New" 
                 style={styles.tabSize}
                 icon={<NewReleases style={styles.iconSize} />}
                 component={Link} 
                 to={"/new"}>
            </Tab>
            <Tab label="In Progess" 
                 style={styles.tabSize}
                 icon={<Schedule style={styles.iconSize}/>} />
            <Tab label="Decision Needed"
                 style={styles.tabSize}
                 icon={<ThumbsUpDown style={styles.iconSize} />} />
          </Tabs>
          <Tooltip title="History">
            <IconButton
              color="inherit">
              <History />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton
              color="inherit">
              <AccountCircle />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.contextTypes = {
   web3: PropTypes.object
};

export default NavBar;

