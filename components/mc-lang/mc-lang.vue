<template>
	<el-dropdown-item v-if="isXS" icon="iconfont icon-fanyi" command="fanyi">{{ i18n.changLanguage }}</el-dropdown-item>
	<el-dropdown v-else trigger="click" @command="changeLanguage">
		<el-tooltip :content="i18n.changLanguage" placement="bottom"><i class="iconfont icon-fanyi"></i></el-tooltip>
		<el-dropdown-menu slot="dropdown">
			<el-dropdown-item v-for="(item, index) in langs" :key="item.id" :disabled="language === item.id"
				:command="item.id">{{ item.text }}</el-dropdown-item>
		</el-dropdown-menu>
	</el-dropdown>
</template>

<script>
	export default {
		name: 'mc-lang',
		props: {
			dropMenu: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				isXS: false,
				langs: [{
						id: 'zh',
						text: '中文'
					},
					{
						id: 'en',
						text: 'English'
					}
				]
			};
		},
		computed: {
			language() {
				return this.$store.state.i18n.language;
			},
			i18n() {
				return this.$t('index');
			}
		},
		methods: {
			changeLanguage(command) {
				if (this.$utils.isNumber(command)) {
					command = this.langs[command].id;
				}
				this.$i18n.locale = command;
				this.$store.commit('setLanguage', command);
			},
			selectLanguage() {
				uni.showActionSheet({
					itemList: this.$utils.map(this.langs, lang => lang.text),
					success: res => {
						this.changeLanguage(res.tapIndex);
					}
				});
			}
		},
		mounted: function() {
			if (true !== this.dropMenu) {
				this.$nextTick(() => {
					this.isXS = getApp().globalData.systemInfo.isXS;
				});
			}
		}
	};
</script>

<style></style>
