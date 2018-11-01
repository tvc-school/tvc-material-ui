import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

class SimpleSelect extends React.Component {
  state = {
    eventId: '',
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { events, classes } = this.props

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="event-title">Event</InputLabel>
          <Select
            value={this.state.eventId}
            onChange={this.handleChange}
            inputProps={{
              name: 'eventId',
              id: 'event-title',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              events.map(e => {
                return (
                  <MenuItem key={e.id} value={e.id}>{e.title}</MenuItem>
                  )
              })
            }
          </Select>
        </FormControl>
      </form>
    )
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleSelect)