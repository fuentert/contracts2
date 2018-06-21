import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Home from '@material-ui/icons/Home';
import './tile.css';
import Avatar from '@material-ui/core/Avatar';
import { ListItemIcon } from '@material-ui/core';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 325,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  header: {
    fontSize:18,
  },
  content: {
    display: 'inline-flex',
    paddingBottom: '0px !important',
  },
  iconContainer: {
    marginRight: 20,
    marginBottom: 10,
    height: 44,
    width: 44,
  },
  icon: {
    color: "#fff",
    fontSize: 26,
  },
  avatar: {
    margin: 0,
    height:48,
    width: 48,
    backgroundColor: '#6ec6ff',
  },

};

function ContractTitle(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <div className={classes.iconContainer}>
            <Avatar className={classes.avatar}>
              <Home className={classes.icon}></Home>
            </Avatar>
          </div>
          <div>
            <Typography variant="headline" component="h3" className={classes.header}>
              Residential Sales Contract 
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Virginia
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small">Create Contract</Button>
        </CardActions>
      </Card>
    </div>
  );
}

ContractTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContractTitle);