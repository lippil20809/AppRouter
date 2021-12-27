import React from 'react';

const ErrorInterceptor = Component => {
  return class extends React.Component {
    srate = { error: false, message: '' };
    componentDidCatch(error) {
      this.setState({ error: true, message: error.message });
    }
    render() {
      if (this.srate.error) {
        return <span>{this.state.message}</span>;
      }

      return <Component {...this.props} />;
    }
  };
};

export default ErrorInterceptor;
