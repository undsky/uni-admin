<template>
	<view>
		<vxe-input :style="{width:width}" class="margin-bottom-sm" v-model="keyword" placeholder="请输入搜索内容" type="search"
			clearable @search-click="search"></vxe-input>
		<el-transfer v-model="tfValue" :props="props" :data="data" :titles="titles">
			<vxe-pager slot="left-footer" align="right" :layouts="['PrevPage', 'Number', 'NextPage']" :pager-count="5"
				:current-page="currentPage" :total="totalResult" @page-change="pageChange">
			</vxe-pager>
			<view slot="right-footer" class="flex flex-justify-end flex-align-center margin-right"
				style="height: 100%;">
				<el-button size="mini" type="primary" @click="save">保存</el-button>
			</view>
		</el-transfer>
	</view>
</template>

<script>
	export default {
		name: "mc-transfer-paging",
		props: {
			value: {
				type: Array
			},
			width: {
				type: String,
				default: '200px'
			},
			currentPage: {
				type: Number,
				default: 1
			},
			totalResult: {
				type: Number,
				default: 0
			},
			titles: {
				type: Array,
				default: ['列表 1', '列表 2']
			},
			data: {
				type: Array,
				default: []
			},
			props: {
				type: Object,
				default: undefined
			}
		},
		data() {
			return {
				keyword: '',
				tfValue: this.value
			};
		},
		watch: {
			value(val) {
				this.tfValue = val
			}
		},
		methods: {
			search() {
				this.$emit('search', {
					keyword: this.keyword
				})
			},
			save() {
				this.$emit('input', this.tfValue)
				this.$nextTick(() => {
					this.$emit('save')
				})
			},
			pageChange({
				type,
				currentPage,
				pageSize,
				$event
			}) {
				this.$emit('search', {
					keyword: this.keyword,
					currentPage,
					pageSize
				})
			}
		},
		mounted: function() {
			this.$nextTick(() => {
				this.$el.style.setProperty("--width", this.width);
			})
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .el-transfer-panel {
		width: #{'var(--width)'} !important;
	}
</style>
