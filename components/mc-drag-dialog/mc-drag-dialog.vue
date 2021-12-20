<template>
	<el-dialog v-drag-dialog v-bind="$attrs" v-on="$listeners">
		<slot />
	</el-dialog>
</template>

<script>
	// https://github.com/PanJiaChen/vue-element-admin/blob/master/src/directive/el-drag-dialog/index.js

	import DragDialog from './directive'
	export default {
		name: "mc-drag-dialog",
		directives: {
			DragDialog
		},
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
