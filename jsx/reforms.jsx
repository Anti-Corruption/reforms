/**
 * @jsx React.DOM
 */

var Reforms = React.createClass({
  getInitialState: function() {
    var apiVersion = 'b1';
    var reformsURL = '/us/' + apiVersion;

    $.ajax({
      url: reformsURL,
      success: function(data) {
        console.log(data);
      }.bind(this)
    });

    return { reforms: [] };
  },
  render: function() {
    return (
      <div className="ac-reforms">
        <div className="row">
          <div className="medium-6 columns">
            <ReformsList reforms={this.state.reforms} />
          </div>
        </div>
      </div>
    );
  }
});

var ReformsList = React.createClass({
  getInitialState: function() {
    return { reforms: [] }
  },
  componentWillReceiveProps: function(props) {
  },
  render: function() {
    var reformNodes = [];
    /*
    var reformNodes = this.props.reforms.map(function (reform) {
      return <Reform
        key={reform.id}
        title={reform.title}
        />
    });
    */
    return (
      <div className="ac-reform-list">
        {reformNodes}
      </div>
    );
  }
});

var Reform = React.createClass({
  render: function() {
    return (
      <div>
        <p>Reform</p>
      </div>
    );
  }
});

React.renderComponent(
    <Reforms />,
    document.getElementById('ac-reforms')
);
