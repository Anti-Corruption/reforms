/**
 * @jsx React.DOM
 */

var Reforms = React.createClass({
  render: function() {
    return (
      <div className="ac-reforms">
        <div className="row">
          <div className="medium-6 columns">
          </div>
        </div>
      </div>
    );
  }
});

React.renderComponent(
    <Reforms />,
    document.getElementById('ac-reforms')
);
