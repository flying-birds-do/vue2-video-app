var app = new Vue({
	data: {},
	el: '#app',
	render: h => h(App),
	router,
	store,
	// 监听路由检查登陆
	watch: {
		"$router" : 'checkLogin'
	},
	// 进入页面时
	created: {
		this.checkLogin();
	},
	methods: {
		checkLogin () {
			//  检查是否存在session
			//  cookie操作方法源码里有或者参考网上的即可
            if (!this.getCookie('section')) {
            	// 如果没有登陆状态则跳转到登陆页面
            	this.$router.push('/login')
               } else {
               	// 否则跳转到登陆后的页面
               	this.$router.push('/user_info')
               }
            }
	}
})
// vuex配置
// const store = new Vuex.store({
// 	state: {
// 		domain: 'http:test.example.com' //保存后台请求的地址
// 		userInfo: {
// 			//保存用户信息
// 			nick: null,
// 			ulevel: null,
// 			uid: null,
// 			portrait: null
// 		}
// 	},
// 	mutations: {
// 		// 更新用户信息
// 		updateUserInfo(state, newUserInfo) {
// 			state.userInfo = newUserInfo;
// 		}
// 	}
// })