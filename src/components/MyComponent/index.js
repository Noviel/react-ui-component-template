import React from 'react';

import styles from './styles.module.scss';

export default class Component extends React.Component {
  static defaultProps = {
    text: 'Hello',
  };

  render() {
    const { text } = this.props;
    return <div className={styles.main}>{text}</div>;
  }
}
