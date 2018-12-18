import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import  {actionCreator} from './store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style';

class Header extends Component{


	 getListArea=()=>{
		const {
			focused,
			list,
			page,
			pagetotal,
			handleEnter,
			handleLeave,
			mouseIn,
			handlePage
		  } = this.props;
		
		// console.log(list)
		const newList = list.toJS();
		//将list从immutable对象转换成普通对象
		const pageList = [];
		//由于函数在render阶段就会执行所以当page=1时数组为空，空数组进行循环时会报错，所以需要进行判断
		//仅在数组不为空的时候进行
		if(newList.length){
			for(let i=(page-1)*10;i<page*10;i++){
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}
		//该mouseIn应为mapStateToProps内获取的mouseIn而不是直接从父组件reducer的mouseIn
		//因为reducer内的state其并不能被改变，我们改变的仅仅是通过immutable合并的'state'对象，直接获取reducer内的mouseIn并无意义
		if(focused||mouseIn){
			
			return (
				< SearchInfo onMouseEnter={handleEnter} onMouseLeave={handleLeave} >
						< SearchInfoTitle>
							热门搜索
							< SearchInfoSwitch onClick={()=>handlePage(page,pagetotal)}> 换一批 </SearchInfoSwitch>
						</SearchInfoTitle>
						< div > 
							{
								pageList
							}
						</div>
					</SearchInfo>
			)
		}else{
			return null
		}
	}



	render(){
		const {focused,handlefocuse,handleBlur}=this.props;
		return(
			<HeaderWrapper>
			<Logo></Logo>
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载App</NavItem>
				<NavItem className='right'>
					<i className="iconfont">&#xe636;</i>
				</NavItem>
		
				<SearchWrapper>
					<CSSTransition in={focused} timeout={200} classNames="slide">
						<NavSearch className={focused?'focused':''} onFocus={handlefocuse} onBlur={handleBlur}></NavSearch>
					</CSSTransition>
					<i className={focused?'focused iconfont zoom':'iconfont zoom'}>
						&#xe614;
					</i>
					{
						this.getListArea()
					}
				</SearchWrapper>
			</Nav>
			<Addition>
				
					<Button className='writting'>
						<i className="iconfont">&#xe615;</i>
						写文章
					</Button>
				
				<Button className='reg'>注册</Button>
			</Addition>
		
		</HeaderWrapper>
		)
	}
}





const mapStateToProps=(state)=>{
	return {
		//getIn方法
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page:state.getIn(['header', 'page']),
		pagetotal:state.getIn(['header', 'pagetotal']),
		mouseIn:state.getIn(['header', 'mouseIn'])
	}
};
const mapDispatchToProps=(dispatch)=>{
	return {			
		handlefocuse(){
			dispatch(actionCreator.searchFocus());
			dispatch(actionCreator.getList());
		},
		handleBlur(){
			dispatch(actionCreator.searchBlur());
		},
		handleEnter(){
			dispatch(actionCreator.searchEnter());
		},
		handleLeave(){
			dispatch(actionCreator.searchLeave())
		},
		handlePage(page,pagetotal){
			if(page<pagetotal){
				dispatch(actionCreator.changepage(page+1))
			}else{
				dispatch(actionCreator.changepage(1))
			}
		}
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);