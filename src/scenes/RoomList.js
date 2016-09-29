import React from 'react';
import {
  View,
} from 'react-native';

import List from '../components/room/List';
import Backend from '../configs/Backend';

export default class RoomList extends React.Component{
  state = {
    rooms : [],
  }

  render(){
    return(
        <List
          rooms={this.state.rooms}
        />
    )
  }

  componentDidMount(){
    Backend.getRooms((room) => {
      this.setState({
        //rooms: this.state.rooms.push(room)
        rooms: this.state.rooms.concat(room),
      });
    });
  }

}
