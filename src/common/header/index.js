import React from 'react';
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
const getListArea=(show)=>{
	if(show){
		return (
			< SearchInfo >
					< SearchInfoTitle>
						热门搜索
						< SearchInfoSwitch > 换一批 </SearchInfoSwitch>
					</SearchInfoTitle>
					< div > 
						<SearchInfoItem >
							教育
						</SearchInfoItem >
						<SearchInfoItem >
							文化
						</SearchInfoItem >
						<SearchInfoItem >
							小说
						</SearchInfoItem >
						<SearchInfoItem >
							教育
						</SearchInfoItem >
						<SearchInfoItem >
							文化
						</SearchInfoItem >
						<SearchInfoItem >
							小说
						</SearchInfoItem >
					</div>
				</SearchInfo>
		)
	}else{
		return null
	}
}
const Header=(props)=>{
	const {focused}=props;
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
					<NavSearch className={focused?'focused':''} onFocus={props.handlefocuse} onBlur={props.handleBlur}></NavSearch>
				</CSSTransition>
				<i className={focused?'focused iconfont zoom':'iconfont zoom'}>
					&#xe614;
				</i>
				{
					getListArea(focused)
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
};

const mapStateToProps=(state)=>{
	return {
		//getIn方法
		focused: state.getIn(['header', 'focused'])
	}
};
const mapDispatchToProps=(dispach)=>{
	return {			
		handlefocuse(){
			dispach(actionCreator.searchFocus());
		},
		handleBlur(){
			dispach(actionCreator.searchBlur());
		}
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);