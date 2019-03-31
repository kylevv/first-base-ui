import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostsAndPhotos } from '../actions'
import { Card, StyledBody, StyledThumbnail } from 'baseui/card'

class Surfaces extends Component {
  componentDidMount () {
    this.props.getPostsAndPhotos()
  }

  render () {
    return (
      <div>
        {this.props.posts.map((post, i) => {
          return (
            <Card key={i} overrides={{ Root: { style: { width: '328px' } } }} title={post.title}>
              {this.props.photos[post.userId] && <StyledThumbnail src={this.props.photos[post.userId].thumbnailUrl} />}
              <StyledBody>
                {post.body}
              </StyledBody>
            </Card>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { posts: state.posts, photos: state.photos }
}

export default connect(mapStateToProps, { getPostsAndPhotos })(Surfaces)
