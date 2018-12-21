import React,{Component,Fragment} from  'react';
import { connect } from "react-redux";
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import { actionCreators } from './store';
import Writer from './components/Writer';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';
import { actionCreator } from '../../common/header/store';

class Home extends Component {
    render(){
        return (
            <Fragment>
               <HomeWrapper>
                    <HomeLeft>
                    <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic />
					<List />
                    </HomeLeft>
                    <HomeRight>
                    </HomeRight>
               </HomeWrapper>
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
    
}


const mapDispatch=(dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo())
    }
})

export default connect(null,mapDispatch)(Home);
