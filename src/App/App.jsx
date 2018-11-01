import React, { Component } from 'react'
import withRoot from '../withRoot'
import AppBar from '../AppBar'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import events from '../events'
import EventGrid from '../EventGrid'
import EventList from '../EventList'
import EventSelect from '../EventSelect'
import { Checkbox, TextField, FormControl, FormControlLabel } from '@material-ui/core'

class App extends Component {

  state = {
    filtered: false,
    filterText: '',
  }

  handleChange = event => {
    console.log('name', event.target.name)
    if (event.target.name === 'filter') {
      this.setState({
        filtered: event.target.checked
      })
    } else {
      this.setState({
        filterText: event.target.value
      })
    }
  }

  filterEvents = () => {
    const { filtered, filterText } = this.state

    if (filtered && filterText.length > 0) {
      return events.filter(e => e.title.startsWith(filterText))
    } else {
      return events
    }
  }

  render() {
    const { classes } = this.props
    const filteredEvents = this.filterEvents()
    return (
      <div className='App'>
        <AppBar />
        <Typography
          variant='h4'
          align='center'
        >
          Learn Material UI
        </Typography>
        <FormControl className={classes.formControl}>
          <FormControlLabel
            control={
              <Checkbox
                name='filter'
                checked={this.state.filtered}
                onChange={this.handleChange}
                value="filter"
              />
            }
            label='Filter'
          />
          {
            this.state.filtered
              ? <TextField
                  id="filter-text"
                  name='filterText'
                  label="Filter text"
                  className={classes.textField}
                  value={this.state.filterText}
                  onChange={this.handleChange}
                  margin="normal"
                />
              : null
          }

        </FormControl>
        <EventSelect events={filteredEvents} />
        <EventList events={filteredEvents} />
        <EventGrid events={filteredEvents} />

      </div>
    )
  }
}

const styles = {}

export default withStyles(styles)(withRoot(App))
