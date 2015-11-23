var React = require('react');
var ReactDOM = require('react-dom');

/*
  App
*/

var App = React.createClass({
  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
});

/*
  Header
*/

var Header = React.createClass({
  render : function() {
    return (
      <header className="top">
        <h1>Catch of the Day</h1>
        <h3 className="tagline">{this.props.tagline}</h3>
      </header>
    )
  }
});

/*
  Order
*/

var Order = React.createClass({
  render : function() {
    return (
      <p>Order</p>
    )
  }
});

/*
  Inventory
*/
var Inventory = React.createClass({
  render : function() {
    return (
      <p>Inventory</p>
    )
  }
});

/*
  StorePicker
  This will let us make the <StorePicker/> component
*/

var StorePicker = React.createClass({

  render : function() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId"/>
        <input type="Submit"/>
      </form>
    )
  }

});

ReactDOM.render(<App/>, document.querySelector('#main'));
