<template>
	<view>
		<mc-lang dropMenu style="float: right; z-index: 999999999; cursor: pointer;"></mc-lang>
		<el-tabs v-model="activeTab" stretch>
			<el-tab-pane name="account">
				<span slot="label">
					<i class="el-icon-user margin-right-sm"></i>
					{{ i18n.accountLogin }}
				</span>
				<el-form ref="accountForm" :model="accountForm" :rules="accountRules" :validate-on-rule-change="validate" size="medium" label-width="75px" label-position="left">
					<el-form-item :label="i18n.account" prop="account"><el-input v-model="accountForm.account" :placeholder="i18n.please + i18n.account"></el-input></el-form-item>
					<el-form-item :label="i18n.password" prop="password">
						<el-input v-model="accountForm.password" type="password" :placeholder="i18n.please + i18n.password" show-password></el-input>
					</el-form-item>
				</el-form>
			</el-tab-pane>
			<el-tab-pane name="phone">
				<span slot="label">
					<i class="el-icon-mobile-phone margin-right-sm"></i>
					{{ i18n.phoneLogin }}
				</span>
				<el-form ref="phoneForm" :model="phoneForm" :rules="phoneRules" :validate-on-rule-change="validate" size="medium" label-width="75px" label-position="left">
					<el-form-item :label="i18n.phone" prop="phone"><el-input v-model="phoneForm.phone" :placeholder="i18n.please + i18n.phone"></el-input></el-form-item>
					<el-form-item :label="i18n.captcha" prop="smscode">
						<el-input v-model="phoneForm.smscode" :placeholder="i18n.please + i18n.smsCode">
							<el-button @click="getSmscode" :disabled="0 != smsCount" slot="suffix" type="text">{{ smsCount ? smsCount + i18n.reGetCode : i18n.getCode }}</el-button>
						</el-input>
					</el-form-item>
				</el-form>
			</el-tab-pane>
			<el-tab-pane v-if="!isXS" name="qrcode">
				<span slot="label">
					<i class="el-icon-full-screen margin-right-sm"></i>
					{{ i18n.scanLogin }}
				</span>
				<view class="flex flex-justify-center"><img :src="qrcode" /></view>
			</el-tab-pane>
		</el-tabs>
		<view v-show="'qrcode' != activeTab" class="flex">
			<el-button class="flex1" :type="theme" @click="login">{{ i18n.login }}</el-button>
		</view>
		<view class="footer flex flex-column flex-justify-center padding-bottom">
			<el-link href="https://www.undsky.com/" :underline="false" target="_blank">© 2019-2021 undsky MIT license</el-link>
			<el-link href="https://beian.miit.gov.cn/" :underline="false" target="_blank">鲁ICP备14024938号</el-link>
		</view>
	</view>
</template>

<script>
import keyboardJS from 'keyboardjs';
import QRCode from 'qrcode';

export default {
	name: 'mc-login',
	props: {
		theme: {
			type: String,
			default: 'primary',
			validator: function(value) {
				return ['primary', 'success', 'warning', 'danger', 'info'].indexOf(value) !== -1;
			}
		}
	},
	data() {
		return {
			deviceId: '',
			isXS: false,
			activeTab: 'account',
			validate: false,
			accountForm: {
				account: '',
				password: ''
			},
			accountRules: undefined,
			smsCount: 0,
			phoneForm: {
				phone: '',
				smscode: ''
			},
			phoneRules: undefined,
			colors: {
				primary: '#409EFF',
				success: '#67C23A',
				warning: '#E6A23C',
				danger: '#F56C6C',
				info: '#909399'
			},
			qrcode: null
		};
	},
	computed: {
		i18n() {
			return this.$t('login');
		}
	},
	watch: {
		i18n() {
			this.validate = true;
			this.changeLanguage();
		}
	},
	methods: {
		changeLanguage() {
			const { please, account, password, phone, realPhone, smsCode } = this.i18n;

			this.accountRules = {
				account: [
					{
						required: true,
						message: please + account,
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: please + password,
						trigger: 'blur'
					}
				]
			};

			this.phoneRules = {
				phone: [
					{
						required: true,
						message: please + phone,
						trigger: 'blur'
					},
					{
						pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
						message: please + realPhone,
						trigger: ['blur', 'change']
					}
				],
				smscode: [
					{
						required: true,
						message: please + smsCode,
						trigger: 'blur'
					}
				]
			};
		},
		getSmscode() {
			this.$refs.phoneForm.validateField('phone', err => {
				if (!err) {
					this.smsCount = 60;
					const interval = setInterval(() => {
						this.smsCount--;
						if (0 == this.smsCount) {
							clearInterval(interval);
						}
					}, 1000);
				}
			});
		},
		login: async function() {
			this.$refs[this.activeTab + 'Form'].validate(valid => {
				if (valid) {
					this.$store.commit('setToken', this.deviceId);
					uni.reLaunch({
						url: '/pages/index/index'
					});
				}
			});
		},
		handleEnter(e) {
			if ('qrcode' != this.activeTab) this.login();
		}
	},
	mounted: async function() {
		this.changeLanguage();
		this.qrcode = await QRCode.toDataURL('https://www.undsky.com');

		const { deviceId, isXS } = getApp().globalData.systemInfo;
		this.isXS = isXS;
		this.deviceId = deviceId || this.$utils.now();

		keyboardJS.bind('enter', this.handleEnter);

		this.$nextTick(() => {
			this.$el.style.setProperty('--color', this.colors[this.theme]);
		});
	},
	beforeDestroy: function() {
		keyboardJS.unbind('enter', this.handleEnter);
	}
};
</script>

<style lang="scss" scoped>
/deep/ .el-tabs__item.is-active {
	color: #{'var(--color)'} !important;
}

/deep/ .el-tabs__active-bar {
	background-color: #{'var(--color)'} !important;
}

.footer {
	position: fixed;
	width: 100%;
	left: 0;
	right: 0;
	bottom: 0;
	bottom: constant(safe-area-inset-bottom);
	bottom: env(safe-area-inset-bottom);
}
</style>
