import * as React from "react";

import "./index.css";
import {i18nContext} from "../../i18n/i18nContext";

class Toast extends React.Component {
  state = {
    show: false
  };

  static contextType = i18nContext;

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
    window.setTimeout(this.hide, 8000);
  }
  render() {
    const {error} = this.props;
    if (this.state.show) {
      this.deley();
      return (
        <div className="notification">
          {this.context.t(`ERROR_${error.errorCode}`)}
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Toast;
