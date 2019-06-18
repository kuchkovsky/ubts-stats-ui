import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class ProgressLink extends React.Component {
  static propTypes = {
    delay: PropTypes.number,
    to: PropTypes.string,
    contentLoading: PropTypes.func,
    contentLoaded: PropTypes.func,
    history: PropTypes.object,
    staticContext: PropTypes.object,
  };

  static defaultProps = {
    delay: 0,
  };

  constructor(props) {
    super(props);
    this.timeout = null;
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  handleClick = (e) => {
    const { to, delay, contentLoading, contentLoaded } = this.props;
    const { history } = this.props;

    if (history.location.pathname === to) {
      return;
    }

    contentLoading();

    if (e.defaultPrevented) {
      return;
    }
    e.preventDefault();

    this.timeout = setTimeout(() => {
      history.push(to);
      contentLoaded();
    }, delay);
  };

  render() {
    const { delay, contentLoading, contentLoaded, staticContext, ...rest } = this.props;

    return (
      <Link {...rest} onClick={this.handleClick}/>
    );
  }
}

export default withRouter(ProgressLink);
