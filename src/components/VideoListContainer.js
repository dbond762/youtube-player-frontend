import React, { Component } from 'react';

import VideoList from './VideoList';

class VideoListContainer extends Component {
  state = {
    videos: [],
  }

  componentDidMount() {
    /*
    fetch(`/search/${this.props.query}`).then((resp) => {
      console.log(resp);
    });
    */

    this.setState({
      videos: [
        { id: 1, name: 'Video 1' },
        { id: 2, name: 'Video 2' },
        { id: 3, name: 'Video 3' },
        { id: 4, name: 'Video 4' },
        { id: 5, name: 'Video 5' },
      ],
    });
  }

  render() {
    return (
      <VideoList videos={this.state.videos} className={this.props.className} />
    );
  }
}

export default VideoListContainer;
