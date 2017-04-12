import React, { Component, PropTypes } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
    };
    this.getInputStyle = this.getInputStyle.bind(this);
  }

  togglePassword() {
    this.setState({ isPasswordVisible: !this.state.isPasswordVisible });
  }

  getInputStyle() {
    return this.props.primary ? 'input-primary' :
      this.props.success ? 'input-success' :
        this.props.info ? 'input-info' :
          this.props.warning ? 'input-warning' :
            this.props.danger ? 'input-danger' :
              'input-default';
  }

  render() {
    let { beforeIcon, afterIcon, type, disabled, inline, children, ...otherProps } = this.props;
    afterIcon = this.props.type === 'password' ? `${!this.state.isPasswordVisible ? 'eye' : 'eye-slash'} clickable` : afterIcon;
    return (
      <div className={`input-container ${this.getInputStyle()} ${inline ? 'input-container-inline' : ''} ${disabled ? 'disabled' : ''} ${beforeIcon ? 'has-before-icon' : ''} ${afterIcon ? 'has-after-icon' : ''}`}>
        <label>{otherProps.title}</label>
        <span className="input-wrapper">
          <span className="input-wrapper-input">
            <input {...otherProps} type={type === 'password' && this.state.isPasswordVisible ? 'text' : type} disabled={disabled} />
            {beforeIcon ? <i className={`before fa fa-${beforeIcon}`}></i> : null}
            {afterIcon ? <i className={`after fa fa-${afterIcon}`} onClick={() => this.props.type === 'password' ? this.togglePassword() : null}></i> : null}
            {children}
          </span>
          <small>{otherProps.hint}</small>
        </span>
      </div>
    );
  }
}

Input.propTypes = {
  beforeIcon: PropTypes.string,
  afterIcon: PropTypes.string,

  primary: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  default: PropTypes.bool,
}

export default Input;