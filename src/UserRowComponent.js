import React, {Component} from 'react'

class UserRowComponent extends Component {
 
  render() {
   	return (
     	<li className='user-list-item'>
      		<div className='user-details'>
      			<p>{this.props.user.name}</p>
				<p>{this.props.movie.name}</p>
      		</div>
      	</li>
    )
  }
}

export default UserRowComponent