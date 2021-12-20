<template>
	<view class="login">
		<el-row>
			<el-col class="container padding" :xs="{ span: 20, offset: 2 }" :sm="{ span: 20, offset: 2 }"
				:md="{ span: 12, offset: 6 }" :lg="{ span: 8, offset: 8 }" :xl="{ span: 8, offset: 8 }">
				<view class="title">
					uni-admin
				</view>
				<mc-login></mc-login>
			</el-col>
		</el-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	};
</script>

<style lang="scss" scoped>
	.login {
		width: 100vw;
		height: 100vh;
		background: url(../../static/bg.jpeg) center center fixed no-repeat;
		background-size: cover;

		.container {
			background-color: #ffffff;
			border-radius: 10px;
			position: relative;
			margin-top: calc((100vh - 500px) / 2);

			.title {
				font-size: 30px;
				padding-bottom: 30px;
				text-align: center;
			}
		}
	}
</style>
