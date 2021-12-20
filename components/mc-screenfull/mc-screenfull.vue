<template>
	<el-tooltip :content="isFullscreen ? i18n.exitFullScreen : i18n.fullScreen" placement="bottom">
		<i @click="toggle" :class="isFullscreen ? 'vxe-icon--zoomout' : 'el-icon-full-screen'"></i>
	</el-tooltip>
</template>

<script>
	import screenfull from 'screenfull';

	export default {
		name: "mc-screenfull",
		data() {
			return {
				isFullscreen: false,
			};
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
		},
		methods: {
			change() {
				this.isFullscreen = screenfull.isFullscreen
			},
			toggle() {
				screenfull.toggle();
			},
		},
		mounted: function() {
			screenfull.on('change', this.change)
		},
		beforeDestroy: function() {
			screenfull.off('change', this.change)
		}
	}
</script>

<style>

</style>
