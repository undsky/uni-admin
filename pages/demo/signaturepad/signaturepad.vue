<template>
	<view>
		<VueSignaturePad height="500px" ref="signaturePad" :options="{ backgroundColor : 'lightgray' }">
		</VueSignaturePad>
		<el-row type="flex" justify="center" class="margin-top">
			<el-button type="primary" @click="save">保存</el-button>
			<el-button @click="undo">撤销</el-button>
		</el-row>
	</view>
</template>

<script>
	import {
		VueSignaturePad
	} from 'vue-signature-pad';

	export default {
		name: 'signaturepad',
		components: {
			VueSignaturePad
		},
		data() {
			return {

			}
		},
		methods: {
			undo() {
				this.$refs.signaturePad.undoSignature();
			},
			save() {
				const {
					isEmpty,
					data
				} = this.$refs.signaturePad.saveSignature();
				console.log(`isEmpty:${isEmpty}`);
				console.log(data);
			}
		}
	}
</script>

<style>

</style>
