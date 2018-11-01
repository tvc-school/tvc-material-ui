import React, { Component } from 'react'
import { white } from 'ansi-colors';

const styles = {
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    // backgroundColor: 'black',
    alignItems: 'stretch',
    color: 'white',
    height: '100%',
    width: '100%',
  },
  controlArea: {
    display: 'flex',
    flexFlow: 'row wrap',
    minHeight: 50,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  filterCheck: {
    backgroundColor: 'blue',
    flexBasis: '20%',
  },
  filterText: {
    backgroundColor: 'green',
    flexBasis: '40%',
  },
  selectbox: {
    backgroundColor: 'pink',
    flexBasis: '40%',
  },
  content: {
    display: 'flex',
    flexFlow: 'row wrap',
    backgroundColor: 'green',
    // paddingTop: 100,
    // paddingBottom: 100,
    alignItems: 'stretch',
  },
  left: {
    backgroundColor: 'blue',
    flexBasis: '30%',
    height: 200,
  },
  right: {
    backgroundColor: 'orange',
    flexBasis: '70%',
  },
  title: {
    textAlign: 'center',
    backgroundColor: 'red',
    marginBottom: 20,
  }
}

class App extends Component {
  render() {
    return (
      <div className='App' style={styles.wrapper}>
        <div style={styles.title}>
          <h1>Learn Material UI</h1>
        </div>
        <div style={styles.controlArea}>
          <div style={styles.filterCheck}>
            filterCheck
          </div>
          <div style={styles.filterText}>
            filterText
          </div>
          <div style={styles.selectbox}>
            selectbox
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.left}>left</div>
          <div style={styles.right}>right</div>
        </div>
      </div>
    )
  }
}

export default App
