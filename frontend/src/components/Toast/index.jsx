import * as React from "react";

import "./index.css";

class Toast extends React.Component {
  state = {
    show: false
  };
  componentDidMount() {
    const {error} = this.props;
    if (error) {
      this.show(error);
    }
  }

  componentDidUpdate(prevProps) {
    const {error} = this.props;
    if (prevProps.error !== error) {
      this.setState({
        show: true
      });
    }
  }

  hide = () => {
    this.setState({
      show: false
    });
  };

  show = () => {
    this.setState({
      show: true
    });
  };

  deley() {
    window.setTimeout(this.hide, 2000);
  }

  render() {
    const {error} = this.props;
    if (this.state.show) {
      this.deley();
      return <div className="notification">{error.userMessage}</div>;
    } else {
      return null;
    }
  }
}
export default Toast;
