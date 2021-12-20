<template>
	<view>
		<el-dropdown-item v-if="isXS" icon="el-icon-message" command="message">
			<el-badge :value="messageNum" :max="99">
				{{ i18n.message }}
			</el-badge>
		</el-dropdown-item>
		<el-tooltip v-else :content="i18n.message" placement="bottom">
			<el-badge :value="messageNum" :max="99"><i @click="show" class="el-icon-message"></i></el-badge>
		</el-tooltip>
	</view>
</template>

<script>
	export default {
		name: "mc-message",
		data() {
			return {
				isXS: false,
				messageNum: 0
			};
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		methods: {
			show() {
				console.log('message notice')
				this.$emit('notice')
			}
		},
		mounted: function() {
			this.$nextTick(() => {
				this.isXS = getApp().globalData.systemInfo.isXS;
			});
		}
	}
</script>

<style>

</style>
