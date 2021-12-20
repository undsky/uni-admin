import {
	RouterMount,
	createRouter
} from 'uni-simple-router';
import NProgress from 'nprogress'

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES]
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	if (to.path != from.path) {
		NProgress.start()
		console.log('路由开始')
		console.log(from)
		next();
	}
});

// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log('路由结束')
	console.log(to)
	NProgress.done()
})

export {
	router,
	RouterMount
}
