import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Modal from '../modal/index.jsx';
import Icon from '../icon/index.jsx';

import IconClose from '../../assets/icons/icon-close.svg';

import './styles.scss';

class Panel extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    panelType: PropTypes.oneOf(['name','item']),
    panelName: PropTypes.string,
    panelProject: PropTypes.string,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

  }

  closeModal() {
    document.body.classList.remove('overflow-hidden'),
    this.setState({
      isModalOpen: false
    })
  }

  openModal() {
    document.body.classList.add('overflow-hidden'),
    this.setState({
      isModalOpen: true
    })
  }

  panelClasses() {
    const panelClass = this.props.panelName ? 'name' : 'item';

    return classNames(
      'panel',
      `panel-${ panelClass }`,
      this.props.className
    );
  }

  renderClose() {
    return (
      <div className='modal-wrapper-close' onClick={this.closeModal}>
        <Icon imageLink={ IconClose } size='large'/>
      </div>
    )
  }

  render() {
    const panelName = <h5>{ this.props.panelName }</h5>
    const panelProject = <div>{ this.props.panelProject }</div>

    return (
      <div className={ this.panelClasses() }>
        <div onClick={this.openModal} className='panel-content'>
          { this.props.panelName ? panelName : null }
          { this.props.panelProject ? panelProject : null }
        </div>
        <Modal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}>
          { this.renderClose() }
          { this.props.children }
        </Modal>
      </div>
    );
  }

}

export default Panel
