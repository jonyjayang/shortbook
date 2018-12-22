import React, { Component } from "react";
import {connect} from 'react-redux';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';
import {Link} from 'react-router-dom'
import {actionCreators} from '../store';
class List extends Component {

  render() {
      const {
        list,getMorepage,page
      } = this.props;
    return(
        <div>
          {
           list.map((item,index)=>(
            <Link key={index} to={'/detail/' + item.get('id')}>
             <ListItem key={index}>
               <img alt='' className='pic' src={item.get('imgUrl')} />
               <ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
             </ListItem>
             </Link>
           )) 
          }
            <LoadMore onClick={()=>getMorepage(page)}>加载更多</LoadMore>
        </div>
    );
  }
}
const mapState=(state)=>({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'totalpage'])
})
const mapDispatch=(dispatch)=>({
    getMorepage(page){
      dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState, mapDispatch)(List);
