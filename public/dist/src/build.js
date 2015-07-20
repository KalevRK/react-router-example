(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/kalevrk/Documents/code/projects/react-router-example/public/src/js/app.js":[function(require,module,exports){
var About = React.createClass({displayName: "About",
  render: function() {
    return React.createElement("h2", null, "About");
  }
});

var Inbox = React.createClass({displayName: "Inbox",
  render: function() {
    return React.createElement("h2", null, "Inbox");
  }
});

var Home = React.createClass({displayName: "Home",
  render: function() {
    return React.createElement("h2", null, "Home");
  }
});

var App = React.createClass({displayName: "App",
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
      React.createElement("div", null, 
        React.createElement("h1", null, "App"), 
        React.createElement(Child, null)
      )
    )
  }
});

function render() {
  var route = window.location.hash.substr(1);
  React.render(React.createElement(App, {route: route}), document.body);
}

window.addEventListener('hashchange', render);
render();

},{}]},{},["/Users/kalevrk/Documents/code/projects/react-router-example/public/src/js/app.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2FsZXZyay9Eb2N1bWVudHMvY29kZS9wcm9qZWN0cy9yZWFjdC1yb3V0ZXItZXhhbXBsZS9wdWJsaWMvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksMkJBQTJCLHFCQUFBO0VBQzdCLE1BQU0sRUFBRSxXQUFXO0lBQ2pCLE9BQU8sb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSxPQUFVLENBQUEsQ0FBQztHQUN2QjtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILElBQUksMkJBQTJCLHFCQUFBO0VBQzdCLE1BQU0sRUFBRSxXQUFXO0lBQ2pCLE9BQU8sb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSxPQUFVLENBQUEsQ0FBQztHQUN2QjtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILElBQUksMEJBQTBCLG9CQUFBO0VBQzVCLE1BQU0sRUFBRSxXQUFXO0lBQ2pCLE9BQU8sb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSxNQUFTLENBQUEsQ0FBQztHQUN0QjtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILElBQUkseUJBQXlCLG1CQUFBO0VBQzNCLE1BQU0sRUFBRSxXQUFXO0lBQ2pCLElBQUksS0FBSyxDQUFDO0lBQ1YsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7TUFDdEIsS0FBSyxPQUFPLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMxQixNQUFNO01BQ1IsS0FBSyxPQUFPLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMxQixNQUFNO01BQ1IsU0FBUyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQzVCLEtBQUs7O0lBRUQ7TUFDRSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO1FBQ0gsb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSxLQUFRLENBQUEsRUFBQTtRQUNaLG9CQUFDLEtBQUssRUFBQSxJQUFBLENBQUcsQ0FBQTtNQUNMLENBQUE7S0FDUDtHQUNGO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsU0FBUyxNQUFNLEdBQUc7RUFDaEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzNDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxFQUFBLENBQUEsQ0FBQyxLQUFBLEVBQUssQ0FBRSxLQUFNLENBQUEsQ0FBRyxDQUFBLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JELENBQUM7O0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxNQUFNLEVBQUUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEFib3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiA8aDI+QWJvdXQ8L2gyPjtcbiAgfVxufSk7XG5cbnZhciBJbmJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gPGgyPkluYm94PC9oMj47XG4gIH1cbn0pO1xuXG52YXIgSG9tZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gPGgyPkhvbWU8L2gyPjtcbiAgfVxufSk7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIENoaWxkO1xuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5yb3V0ZSkge1xuICAgICAgY2FzZSAnYWJvdXQnOiBDaGlsZCA9IEFib3V0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luYm94JzogQ2hpbGQgPSBJbmJveDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBDaGlsZCA9IEhvbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5BcHA8L2gxPlxuICAgICAgICA8Q2hpbGQgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIHJvdXRlID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpO1xuICBSZWFjdC5yZW5kZXIoPEFwcCByb3V0ZT17cm91dGV9IC8+LCBkb2N1bWVudC5ib2R5KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCByZW5kZXIpO1xucmVuZGVyKCk7Il19
