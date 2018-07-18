import React, { Component } from 'react';
import './PostCardList.scss';
import PostCard from '../PostCard/PostCard';

class PostCardList extends Component {
  timerId = null;

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.posts !== this.props.posts;
  }

  componentDidMount() {
    // 시간 업데이트를 위하여 1분 마다 강제 리렌더링
    this.timerId = setInterval(() => {
      this.forceUpdate();
    }, 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { posts, onRemove } = this.props;
    const postList = posts.map(post => (
      <PostCard key={post.id} post={post} onRemove={onRemove} />
    ));
    return <div className="PostCardList">{postList}</div>;
  }
}

export default PostCardList;
