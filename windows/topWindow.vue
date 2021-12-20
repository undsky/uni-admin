<template>
	<view id="top-window" class="top-window flex">
		<view v-if="!isXS" class="nav-header flex flex-justify-center flex-align-center"
			:style="{ minWidth: (isCollapse ? 64 : 230) + 'px' }">
			<el-avatar v-if="isCollapse" size="small" src="/static/logo.png"></el-avatar>
			<view v-else>uni-admin</view>
		</view>
		<view @click="toggleSidebar" class="toggle-sidebar flex flex-justify-center flex-align-center"><i
				:class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i></view>
		<view class="flex flex-align-end">
			<el-tabs :style="{ width: 'calc(100vw - ' + (isXS ? 80 : isCollapse ? 254 : 420) + 'px)' }"
				tab-position="bottom" v-model="activeTab" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
				<el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :name="item.name"
					:closable="item.closable"></el-tab-pane>
			</el-tabs>
		</view>
		<view class="nav-right flex flex-align-center">
			<template v-if="!isXS">
				<mc-message></mc-message>
				<mc-screenfull></mc-screenfull>
				<mc-screenlock></mc-screenlock>
				<mc-lang></mc-lang>
			</template>
			<el-dropdown trigger="click" @command="userCommand">
				<!-- <el-avatar size="small" icon="el-icon-user-solid"></el-avatar> -->
				<el-avatar size="small" src="/static/logo.png"></el-avatar>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item icon="el-icon-house" command="self">{{ i18n.self }}</el-dropdown-item>
					<template v-if="isXS">
						<mc-message ref="messageNotice"></mc-message>
						<mc-screenlock ref="screenLock"></mc-screenlock>
						<mc-lang ref="langSelect"></mc-lang>
					</template>
					<el-dropdown-item icon="el-icon-back" command="logout" divided>{{ i18n.logout }}</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			showLeftWindow: Boolean
		},
		data() {
			return {
				isXS: false,
				isCollapse: false,
				activeTab: 'home',
				tabs: [{
					title: this.$t('index').home,
					name: 'home',
					url: '/pages/index/index',
					closable: false
				}]
			};
		},
		computed: {
			i18n() {
				return this.$t('index');
			}
		},
		watch: {
			i18n() {
				this.changeLanguage();
			}
		},
		methods: {
			changeLanguage() {
				const _i18n = this.$t('index');
				this.tabs = this.$utils.map(this.tabs, tab => {
					tab.title = _i18n[tab.name];
					return tab;
				});
			},
			toggleSidebar() {
				this.isCollapse = !this.isCollapse;
				if (this.isXS) {
					if (this.showLeftWindow) {
						uni.hideLeftWindow();
					} else {
						uni.showLeftWindow();
					}
				} else {
					uni.$emit('collapseMenu', this.isCollapse);
				}
			},
			tabClick({
				name
			}) {
				const {
					url,
					keepAlive
				} = this.$utils.find(this.tabs, tab => tab.name === name);
				this.$utils.navigateTo(url, false === keepAlive ? null : this);
				uni.$emit('activeMenu', name);
			},
			tabRemove(name) {
				let tabs = this.tabs;
				let activeName = this.activeTab;
				if (activeName === name) {
					tabs.forEach((tab, index) => {
						if (tab.name === name) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if (nextTab) {
								activeName = nextTab.name;
							}
						}
					});
				}

				this.activeTab = activeName;

				this.tabClick({
					name: activeName
				});

				this.tabs = tabs.filter(tab => tab.name !== name);
				uni.$emit('activeMenu', activeName);
			},
			userCommand(command) {
				switch (command) {
					case 'self':
						break;
					case 'message':
						this.$refs.messageNotice.show()
						break;
					case 'lock':
						this.$refs.screenLock.lock();
						break;
					case 'fanyi':
						this.$refs.langSelect.selectLanguage()
						break;
					case 'logout':
						uni.reLaunch({
							url: '/pages/login/login'
						});
						break;
				}
			}
		},
		mounted: function() {
			this.$nextTick(() => {
				this.isXS = getApp().globalData.systemInfo.isXS;
			});

			uni.$on('activeTab', tab => {
				if (!this.$utils.find(this.tabs, _tab => _tab.name == tab.name)) {
					this.tabs.push(
						Object.assign({
								closable: true
							},
							tab
						)
					);
					this.changeLanguage();
				}
				this.activeTab = tab.name;
			});
		}
	};
</script>

<style lang="scss" scoped>
	.top-window {
		height: 40px;
		background-color: #ffffff;

		.toggle-sidebar {
			width: 40px;
			min-width: 40px;
			cursor: pointer;
		}

		@media only screen and (min-width: 768px) {
			.nav-header {
				background-color: #304156;
				color: #ffffff;
			}

			.nav-right {
				width: 150px;
				min-width: 150px;
				justify-content: space-around;

				&>* {
					cursor: pointer;
				}
			}
		}

		@media only screen and (max-width: 767px) {
			.nav-right {
				width: 40px;
				min-width: 40px;
				justify-content: center;
			}
		}
	}
</style>
