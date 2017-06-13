import React from "react";
import PropTypes from 'prop-types';
import cx from 'classNames';

/**
 * Overlay component adds a 'shadowbox' to screen. Mostly used internally in the lib on the `<Dialog>` component.
 */
class Overlay extends React.Component {
  render() {
    const {
      className,
      active,
      invisible,
      children,
      onClick,
      ...other
    } = this.props;

    const classes = cx({
      "inactive": !active,
      active,
      invisible,
      [`${className}`]: className
    });

    const overlayClasses = cx({
      "overlayActive": active,
      "overlayInactive": !active
    });

    return(
      <div styleName={classes}>
        <div styleName={overlayClasses} onClick={onClick}>
          {children}
        </div>
      </div>
    );
  }
}

Overlay.propTypes = {
  "active": PropTypes.bool,
  "children": PropTypes.node,
  "className": PropTypes.string,
  "invisible": PropTypes.bool,
  "onClick": PropTypes.func
};

Overlay.defaultProps = {
  "invisible": false
};

Overlay.styleguide = {
  "category": "Layout",
  "index": "3.6",
  "wrappedExample": true,
  "example": 
    `
// Internal Methods {
class App extends React.Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({
      active: !this.state.active
    });
  };
// }
  render () {
    return (
      <section>
        <h5>Overlay Example</h5>
        <Button onClick={this.handleToggle}>Show Overlay</Button>
        <Overlay active={this.state.active} onClick={this.handleToggle} />
      </section>
    );
  }
// Mount Component {
}

ReactDOM.render(<App/>, mountNode);
// }
  `
  
};

export default Overlay;
