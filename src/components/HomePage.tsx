import React, { Component, createRef } from 'react';
import Navigation from './navigation'
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
interface Props {}
interface State {}

export default class HomePage extends Component<Props, State> {
  // public ch: React.RefObject<booktable>;
  // private ch: React.RefObject<HTMLElement>;
  constructor(props: Props) {
    super(props);
    this.state = {};
    // this.ch = React.createRef<booktable>();
    // ref={this.ch}
  }
  // showbook() {
  // //  this.ch.current?.click();

  // }
  render() {
    return (
        <div>
          <Navigation></Navigation>
        </div>
    );
  }
}
