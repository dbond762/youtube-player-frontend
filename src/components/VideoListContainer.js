import React, { Component } from 'react';

import VideoList from './VideoList';

class VideoListContainer extends Component {
  state = {
    videos: [],
  }

  componentDidMount() {
    fetch(`http://localhost:8080/search/${this.props.query}`).then((resp) => {
      return resp.json();
    }).then((videos) => {
      this.setState({
        videos: videos,
      });
    });
  }

  render() {
    return (
      <VideoList videos={this.state.videos} className={this.props.className} />
    );
  }
}

export default VideoListContainer;
