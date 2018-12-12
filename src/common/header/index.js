import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import * as actionCreator from './store/actionCreator';
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
import { bindActionCreators } from 'redux';
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
		focused:state.header.focused
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