import React, { Component } from "react";
import {connect} from 'react-redux'
import { TopicWrapper, TopicItem } from '../style';
class Topic extends Component {
    
  render() {
    const {list}=this.props;
    return(
        <div>
            <TopicWrapper>
                {
                    list.map((item)=>(
                        <TopicItem key={item.get('id')}>
                            	<img
								className='topic-pic'
								src={item.get('imgUrl')}
								alt=''/>
							{item.get('title')}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        </div>
    );
  }
}
const mapstate=(state)=>({
    list:state.getIn(['home','topicList'])
})

export default connect(mapstate,null)(Topic);
