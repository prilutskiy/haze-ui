import React, { Component } from 'react';
import { Progress } from './../library';

class ProgressDemo extends Component {
  render() {
    return (
      <div className="page">
        <Progress animated value={16}/>
        <Progress value={32} primary />
        <Progress animated value={48} success />
        <Progress value={64} info />
        <Progress animated value={81} warning />
        <Progress value={100} danger />
      </div>
    );
  }
}

export default ProgressDemo;