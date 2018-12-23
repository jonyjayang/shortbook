import React, { Component } from 'react';
import { connect } from "react-redux";
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';

class Detail extends Component {
    render() {
        const {detail}=this.props
        return (
         <DetailWrapper>
             asdasd
            <Header>{detail.title}</Header>
				<Content 
					dangerouslySetInnerHTML={{__html:detail.content}}
				/>
         </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState=(state)=>({
    detail: state.getIn(['detail', 'detailList'])

})
const mapDispatch=(dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetailList(id))
    }

})
export default connect(mapState, mapDispatch)(Detail);
