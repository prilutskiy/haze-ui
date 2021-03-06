import React, { Component } from 'react';
import { Stories } from './../library';
import { hashHistory } from 'react-router';

class StoriesDemo extends Component {
  render() {
    return (
      <div>
        <Stories>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Very long story Title will hide behind ellipses"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="One"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Two"/>
          <Stories.Story onClick={() => hashHistory.push('/')} image="http://webapplayers.com/inspinia_admin-v2.7/css/patterns/shattered.png" href="/" title="Three"/>
        </Stories>
      </div>
    );
  }
}

export default StoriesDemo;