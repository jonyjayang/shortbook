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
    HomeRight,
    BackTop
} from './style';


class Home extends Component {
    // pureComponent在底层帮我们实现shouldComponentUpdate方法
    //由于项目是由pureComponent和immutable来进行数据管理的可以方便使用的
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
                        <Recommend></Recommend>
                        < Writer> </Writer>
                    </HomeRight>
               </HomeWrapper>
               {
                   this.props.showScroll?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null
               }
               
            </Fragment>
        )
    }
    
	handleScrollTop() {
		window.scrollTo(0, 0);
	}
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.props.showScrollchange)
    }
    bindEvents(){
       window.addEventListener("scroll",this.props.showScrollchange)
    }
    
}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})


const mapDispatch=(dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo())
    },
    showScrollchange(){
        if(document.documentElement.scrollTop>100){
            dispatch(actionCreators.changeScroll(true));
        }else{
            dispatch(actionCreators.changeScroll(false));
        }
    }
})

export default connect(mapState,mapDispatch)(Home);
