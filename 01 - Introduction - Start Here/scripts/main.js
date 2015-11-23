var React = require('react');
var ReactDOM = require('react-dom');

/*
  StorePicker
  This will let us make the <StorePicker/> component
*/

var StorePicker = React.createClass({

  render : function() {
    return (
      <form>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId"/>
        <input type="Submit"/>
      </form>
    )
  }

});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
