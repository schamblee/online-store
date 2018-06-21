import React from 'react';

export default class Modal extends React.Component {
    onClose(){
        this.props.reference.remove()
    }
  render() {
    const { text } = this.props;
    return (
            <div className="modal-wrapper">
                <div className="modal">
                     <button className="close" onClick={() => this.onClose()}>&times;</button>
                    <div className="text">{text}</div>
                </div>
            </div>
    );
  }
}
