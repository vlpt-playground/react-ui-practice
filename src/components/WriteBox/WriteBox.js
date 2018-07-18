import React, { Component } from 'react';
import CloseIcon from 'react-icons/lib/md/close';

import './WriteBox.scss';
import Button from '../Button/Button';

class WriteBox extends Component {
  state = {
    value: '',
  };

  componentDidMount() {
    document.body.style.overflowY = 'hidden';
  }
  componentWillUnmount() {
    document.body.style.overflowY = 'auto';
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleWrite = () => {
    const { onWrite } = this.props;
    onWrite(this.state.value);
  };

  render() {
    const { onClose } = this.props;
    const { value } = this.state;

    return (
      <div className="WriteBox">
        <div className="dark" onClick={onClose} />
        <div className="modal">
          <div className="head">
            <h3>새 글 작성</h3>
            <div className="exit" onClick={onClose}>
              <CloseIcon />
            </div>
          </div>
          <textarea
            value={value}
            onChange={this.handleChange}
            rows={4}
            placeholder="무슨 생각 하고 계세요?"
          />
          <div className="right">
            <Button theme="outline" onClick={this.handleWrite}>
              작성하기
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default WriteBox;
