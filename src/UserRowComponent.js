import React, {Component} from 'react'

class UserRowComponent extends Component {
 
  render() {
   	return (
     	<li className='user-list-item'>
      		<div className='user-details'>
      			<p>{this.props.user.name}'s favorite movie is <b>{this.props.movie.name}</b></p>
      		</div>
      	</li>
    )
  }
}

export default UserRowComponent