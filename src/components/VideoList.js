import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoList extends Component {
  render() {
    return (
      <div className={`video-list ${this.props.className}`}>
        {this.props.videos.map(this.createListItem)}
      </div>
    );
  }

  createListItem(video) {
    return (
      <li key={video.id}>
        <Link to={`/video/${video.id}`}>{video.name}</Link>
      </li>
    )
  }
}

export default VideoList;
