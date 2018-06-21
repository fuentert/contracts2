import React, { PureComponent } from 'react';
import './menu.css'
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LeftArrow from '@material-ui/icons/ChevronRight';
import Help from '@material-ui/icons/Help';
import Contract from '@material-ui/icons/Pageview';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

class Menu extends PureComponent {
  constructor(props) {
    super(props)
    let classes = this.props;
  }

  render() {  
    return (
      <div className="menu-container">
        <menu className="menu">
          <div className="menu-header">
            <div className="logo-placeholder">
              Meta Contracts
            </div>
          </div>
          <div className="menu-body">
          <MenuList>
              <MenuItem className="menu-item" style={{
                padding: '6px 10px'
              }}>
                <div className="menu-item-title">
                <ListItemIcon>
                    <Contract></Contract>
                  </ListItemIcon>
                  <ListItemText primary="View your contracts"/>
                </div>
                <div className="menu-item-arrow">
                  <ListItemIcon>
                      <LeftArrow></LeftArrow>
                  </ListItemIcon>
                </div>
              </MenuItem>            
              <MenuItem className="menu-item" style={{
                 padding: '6px 10px'
                }}>
                <div className="menu-item-title">
                  <ListItemIcon>
                    <AccountCircle></AccountCircle>
                  </ListItemIcon>
                  <ListItemText primary="Account Settings"/>
                </div>
                <div className="menu-item-arrow">
                  <ListItemIcon>
                    <LeftArrow></LeftArrow>
                  </ListItemIcon>
                </div>
              </MenuItem>                     
              <MenuItem className="menu-item" style={{
                 padding: '6px 10px'
                }}>
                <div className="menu-item-title">
                <ListItemIcon>
                    <Help></Help>
                  </ListItemIcon>
                  <ListItemText primary="Help Center"/>
                </div>
                <div className="menu-item-arrow">
                <ListItemIcon>
                    <LeftArrow></LeftArrow>
                  </ListItemIcon>
                </div>
              </MenuItem>
            </MenuList>
          </div>
        </menu>
      </div>
    );
  }

}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);