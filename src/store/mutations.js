import {
	HEAD_SHOW_SUCCESS,
	HEAD_SHOW_FAIL,
	HIDE_LOADING,
	SHOW_LOADING,
	FOOTER_HIDE,
	FOOTER_SHOW
} from './type'

const state={
	// header: true,
	headShow:true,    //一开始是显示的
	loadings:false,
	footerShow:true
};

const mutations={
    
    showHeader(state){
    	state.headShow=true
    },
    hideHeader(state){
    	state.headShow=false
    },
    showLoading(state){
    	state.loadings=true
    },
    hideLoading(state){
    	state.loadings=false
    },

	/*头部*/
	[HEAD_SHOW_SUCCESS](state){
		state.headShow=true;
	},
	[HEAD_SHOW_FAIL](state){
		state.headShow=false;
		//console.log(state.headShow);
	},
	/*loading*/
	[HIDE_LOADING](state){
		state.loading=false;
	},
	[SHOW_LOADING](state){
		state.loading=true;
	},
	/*footer*/
	[FOOTER_HIDE](state){
		state.footerShow=false;
	},
	[FOOTER_SHOW](state){
		state.footerShow=true;
	}
};



const getters={      //获取vue中get的值
	headShow(state){
		return state.headShow;
	},
	loadings(state){
		return state.loadings;
	},
	footerShow(state){
		return state.footerShow;
	}
};

export default{
	state,
	mutations,
	getters
}