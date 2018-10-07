import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button,
         Tooltip, 
         Typography} from '@material-ui/core';
import { Create } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  createIcon: {
    marginRight: "8px",
    fontSize: "3em",
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class CreateButton extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Tooltip title="Create Transaction">
        <Button color="secondary" variant="extendedFab" aria-label="Delete" className={classes.fab}>
            <Create className={classes.createIcon} />
            <Typography variant="title">
              Create
            </Typography>
        </Button>
      </Tooltip>
    );
  }
}

CreateButton.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CreateButton);