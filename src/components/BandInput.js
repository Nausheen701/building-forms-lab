// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      text: "",
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="add band" 
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(BandInput);

// 

// class BandInput extends Component {
//   render() {
//     return(
//       <div>
//         Band Input
//       </div>
//     )
//   }
// }

// export default BandInput
