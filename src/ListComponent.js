import React, {Component} from 'react'
import UserRowComponent from './UserRowComponent'

class ListComponent extends Component {
 
  render() {
  	return (
    	<ol className='user-list'>
      		{this.props.profiles.map((profile) => {
                return (
                	<UserRowComponent user={this.props.users[profile.userID]} movie={this.props.movies[profile.favoriteMovieID]} />
            	)	
            })}
      	</ol>
    )
  }
}

export default ListComponent