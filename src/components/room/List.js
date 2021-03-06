import React from 'react';
import {
  View,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Row from './Row';
import Layout from '../../configs/Layout';

export default class List extends React.Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.rooms),
    };

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.rooms){
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.rooms)
      });
    }
  }

  //declarer les fonctions sans les binder
  renderRow = (rowData,sectionID,rowID) => {
    return(
      <TouchableHighlight onPress={() => this.props.onPress(rowData)} underlayColor={'transparent'}>
        <View>
          <Row key={rowID} {...rowData}/>
        </View>
      </TouchableHighlight>
    )
  }

  renderSeparator = (sectionID, rowID) => {
    return(
      <View key={rowID} style={styles.separator}/>
    )
  }

  render (){
    return(
      <ListView
        style={styles.scrollView}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
        enableEmptySections={true}
        contentContainerStyle={{paddingTop: Layout.marginDefault}}
      />
    )
  }
}

List.defaultProps = {
  rooms: [],
  onPress: ()=>null,
}
List.propTypes = {
  rooms: React.PropTypes.array,
  onPress: React.PropTypes.func
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    height: 300,
    paddingHorizontal:15,
  },
  separator:{
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCC',
    marginVertical: 15,
  }
});
