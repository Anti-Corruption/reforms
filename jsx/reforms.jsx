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

        // Organize the reforms by type
        var reforms_by_type = {};

        data.reforms.forEach(function(element, index, array) {
          var version = element['1.0'];
          var type = version.reform_type;

          // Create an object to hold reforms for this type
          if (!reforms_by_type.hasOwnProperty(type)) {
            reforms_by_type[type] = { type: type, reforms: [] }
          }

          reforms_by_type[type].reforms.push(element);

        });

        // Turn the Object back into a plain array
        var reforms = [];
        for (key in reforms_by_type) {
          reforms.push(reforms_by_type[key]);
        }

        this.setState({ reforms: reforms });
      }.bind(this)
    });

    return { reforms: [] };
  },
  render: function() {
    var reformsListNodes = this.state.reforms.map(function (reformList) {
      return <ReformsList key={reformList.type} reforms={reformList.reforms} />
    });
    return (
      <div className="ac-reforms">
        <div className="row">
          <div className="large-8 large-offset-2 medium-10 medium-offset-1 columns">
            {reformsListNodes}
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
        type={version.reform_type}
        status={version.reform_status}
        />
    });
    return (
      <div className="ac-reform-list">
        <h4 className="subheader text-center">{this.props.key}</h4>
        {reformNodes}
      </div>
    );
  }
});

var Reform = React.createClass({
  render: function() {
    statusStyle = {
      textTransform: "uppercase",
    };
    return (
      <div>
        <h3>
          {this.props.title}
          {' '}
          <small style={statusStyle}>
            {this.props.status}
          </small>
        </h3>
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
