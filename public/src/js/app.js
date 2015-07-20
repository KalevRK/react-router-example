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
    var Child;
    switch (this.props.route) {
      case 'about': Child = About;
        break;
      case 'inbox': Child = Inbox;
        break;
      default: Child = Home;
    }

    return (
      <div>
        <h1>App</h1>
        <Child />
      </div>
    )
  }
});

function render() {
  var route = window.location.hash.substr(1);
  React.render(<App route={route} />, document.body);
}

window.addEventListener('hashchange', render);
render();