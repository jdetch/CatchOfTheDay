var React = require('react');
var ReactDOM = require('react-dom');

/*
  StorePicker
  This will let us make the <StorePicker/> component
*/

var StorePicker = React.createClass({

  render : function() {
    return (
      <p>hello</p>
    )
  }

});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
