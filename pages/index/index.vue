<template>
	<view class="padding">
		<view>deviceId：{{ deviceId }}</view>
		<view>fingerprint：{{ fingerprint }}</view>
		<view>model：{{ model }}</view>
		<view>platform：{{ platform }}</view>
		<view>system：{{ system }}</view>
		<view>env：{{ env }}</view>
		<view>ip：{{ ip }}</view>
		<view>version：{{ version }}</view>
		<view class="margin-top"><el-link type="primary" href="https://www.undsky.com" target="_blank">查看更多项目</el-link></view>
	</view>
</template>

<script>
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';

export default {
	name: 'index',
	data() {
		return {
			deviceId: '',
			fingerprint: '',
			model: '',
			platform: '',
			system: '',
			env: '',
			ip: '',
			version: ''
		};
	},
	methods: {
		guide() {
			const _i18n = this.$t('index');

			const driver = new Driver({
				prevBtnText: _i18n.prevBtnText,
				nextBtnText: _i18n.nextBtnText,
				doneBtnText: _i18n.doneBtnText,
				closeBtnText: _i18n.closeBtnText,
				onReset: ele => {
					uni.setStorageSync('guide', true);
				}
			});
			driver.defineSteps([
				{
					element: '#top-window',
					popover: {
						title: _i18n.navbar,
						description: _i18n.navbar,
						position: 'bottom'
					}
				},
				{
					element: '#left-window',
					popover: {
						title: _i18n.menubar,
						description: _i18n.menubar,
						position: 'right'
					}
				}
			]);
			driver.start();
		}
	},
	onLoad: async function() {
		const { deviceId, model, platform, system, env, screenWidth } = getApp().globalData.systemInfo;
		this.deviceId = deviceId;
		this.model = model;
		this.platform = platform;
		this.system = system;
		this.env = env;

		const fpPromise = FingerprintJS.load();
		const fp = await fpPromise;
		const result = await fp.get();
		this.fingerprint = result.visitorId;

		const { ip, version } = await this.$http.post(
			'/api/version',
			{
				deviceId,
				model,
				platform,
				system,
				env,
				fingerprint: this.fingerprint
			},
			false
		);
		this.ip = ip;
		this.version = version;

		if (screenWidth > 767) {
			const hasGuide = uni.getStorageSync('guide');
			if (!hasGuide) {
				this.guide();
			}
		}
	}
};
</script>

<style></style>
