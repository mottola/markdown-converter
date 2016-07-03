import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {

  // called after component renders to screen
  componentDidMount() {
    // render the Blaze accounts form | find the div we just rendered in the 'render' method | place the Blaze accounts form in that div

    // this.view is saving a reference to this view template
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));

  }

  // called when component is about to be removed
  componentWillUnmount() {
    // go find forms we created and destroy them

    // we need to clean up those forms ourselves
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref='container'></div>
    );
  }
}

export default Accounts;
