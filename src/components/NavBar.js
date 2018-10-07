import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, 
         IconButton,
         Toolbar,
         Typography,
         Tooltip } from '@material-ui/core';
import { Menu as MenuIcon, 
         AccountCircle,
         History } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const styles = {
  title: {
    fontSize: "1.5em",
    flexGrow: "1",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: "Fetching Address",
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
          <Typography style={styles.title} classNamevariant="title" color="inherit">
            Cubi
          </Typography>
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
      /*<Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Cubi</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              <Link to="/history">History</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <Button bsStyle="primary">
                Create
              </Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>*/
    );
  }
}

NavBar.contextTypes = {
   web3: PropTypes.object
};

export default NavBar;

