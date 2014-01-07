/**
 * @jsx React.DOM
 */

var Reforms = React.createClass({
  getInitialState: function() {
    var apiVersion = 'b2';
    var reformsURL = '/us/' + apiVersion;

    $.ajax({
      url: reformsURL,
      success: function(data) {
        this.setState({ reforms: data.reforms });
      }.bind(this)
    });

    return { reforms: [] };
  },
  render: function() {
    return (
      <div className="ac-reforms">
        <div className="row">
          <div className="large-6 large-offset-3 medium-10 medium-offset-1 columns">
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
    var reformNodes = this.props.reforms.map(function (reform) {
      var version = reform['1.0'];
      return <Reform
        key={reform.id}
        title={version.title}
        description={version.description}
        sponsor={version.sponsor}
        billId={version.bill_id}
        url={version.url}
        />
    });
    return (
      <div className="ac-reform-list">
        <h4 className="subheader text-center">Reforms</h4>
        {reformNodes}
      </div>
    );
  }
});

var Reform = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>
          <strong>
            {this.props.description}.{' '}
          </strong>
          {this.props.sponsor.name ? "Sponsored by " + this.props.sponsor.name + '.'  : ''}{' '}
          <a href={this.props.url}>
            {this.props.url ? "Learn More" : ''}
          </a>
            {this.props.url ? "." : ''}
        </p>
        <hr/>
      </div>
    );
  }
});

React.renderComponent(
    <Reforms />,
    document.getElementById('ac-reforms')
);
