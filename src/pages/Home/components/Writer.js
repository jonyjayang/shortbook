import React, { Component } from "react";
import {
  WriterWrapper,
  WriterItem
} from '../style'
import {connect} from 'react-redux';
class Writer extends Component {
  render() {
    const {list}=this.props;
    return(
        <div>
            <WriterWrapper>
              {
                list.map((item)=>(
                  <WriterItem key={item.get('id')}>
                      <a className='avatar'>
                          <img src={item.get('imgUrl')} alt=""></img>
                      </a>
                      <a className="name">{item.get('name')}</a>
                      < p > {item.get('introduce')} </p>
                  </WriterItem>
                ))
              }
            </WriterWrapper>
        </div>
    );
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})
export default connect(mapState, null)(Writer);
