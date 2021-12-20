<script>
export default {
	onLaunch: function() {
		let systemInfo = uni.getSystemInfoSync();
		// #ifdef APP-PLUS
		systemInfo.env = 'app';
		// #endif
		// #ifdef H5
		if ('micromessenger' == window.navigator.userAgent.toLowerCase().match(/micromessenger/i)) {
			systemInfo.env = 'gh';
		} else {
			systemInfo.env = 'h5';
		}
		// #endif
		// #ifdef MP-360
		systemInfo.env = '360';
		// #endif
		// #ifdef MP-ALIPAY
		systemInfo.env = 'alipay';
		// #endif
		// #ifdef MP-BAIDU
		systemInfo.env = 'baidu';
		// #endif
		// #ifdef MP-QQ
		systemInfo.env = 'qq';
		// #endif
		// #ifdef MP-TOUTIAO
		systemInfo.env = 'toutiao';
		// #endif
		// #ifdef MP-WEIXIN
		systemInfo.env = 'weixin';
		// #endif
		systemInfo.isXS = systemInfo.screenWidth < 768;
		this.globalData.systemInfo = systemInfo;
		console.log(systemInfo);
		this.globalData.launchPage = this.$Route.path;
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
@import '@/common/common.scss';
@import 'nprogress/nprogress.css';

html,
body {
	user-select: text !important;
}

@media only screen and (min-width: 992px) {
	::-webkit-scrollbar-thumb:horizontal {
		width: 5px;
		background-color: #cccccc;
		border-radius: 6px;
	}

	::-webkit-scrollbar-track-piece {
		background-color: #ffffff;
		border-radius: 0;
	}

	::-webkit-scrollbar {
		width: 10px;
		height: 8px;
	}

	::-webkit-scrollbar-thumb:vertical {
		height: 50px;
		background-color: #999;
		border-radius: 4px;
		outline: 2px solid #ffffff;
		outline-offset: -2px;
		border: 2px solid #ffffff;
	}

	::-webkit-scrollbar-thumb:hover {
		height: 50px;
		background-color: #9f9f9f;
		border-radius: 4px;
	}
}

.main {
	height: calc(100vh - 40px);
}

#nprogress .spinner {
	top: 40px !important;
}

.cool-lightbox .cool-lightbox-button {
	background: 0 0;
	border: none;
	cursor: pointer;
	outline: 0;
}

.uni-body .driver-fix-stacking {
	z-index: 999999999 !important;
}

.el-carousel__indicator.is-active .el-carousel__button {
	opacity: 1;
}

.el-carousel__indicators--outside .el-carousel__button {
	background-color: #c0c4cc;
	opacity: 0.24;
}
</style>
