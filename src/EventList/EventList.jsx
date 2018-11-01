import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const EventList = ({ classes, events }) => {
  return (
    <div className={classes.root}>
      <List>
        {
          events.map(e => {
            return (
              <ListItem key={e.id}>
                <ListItemText primary={e.title} secondary={e.dates.startDateTime} />
              </ListItem>
            )
          })
        }
      </List>
    </div>
  );
}

export default withStyles(styles)(EventList);