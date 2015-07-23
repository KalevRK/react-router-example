var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var About = React.createClass({
  render: function() {
    return <h2>About</h2>;
  }
});

var Inbox = React.createClass({
  render: function() {
    return <h2>Inbox</h2>;
  }
});

var Home = React.createClass({
  render: function() {
    return <h2>Home</h2>;
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h1>App</h1>
        <div className="nav">
          <Link to="app">Home</Link><br/>
          <Link to="about">About</Link><br/>
          <Link to="inbox">Inbox</Link>
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

// Declare our routes and their hierarchy
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" path="/about" handler={About}/>
    <Route name="inbox" path="/inbox" handler={Inbox}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

// function render() {
//   var route = window.location.hash.substr(1);
//   React.render(<App route={route} />, document.body);
// }

// window.addEventListener('hashchange', render);
// render();