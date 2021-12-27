<template>
	<scroll-view id="left-window" scroll-y class="main left-window" :class="{ 'left-window-unfold': !isCollapse }">
		<el-menu
			:default-active="activeMenu"
			:default-openeds="openeds"
			:collapse="isCollapse"
			:collapse-transition="false"
			background-color="#304156"
			text-color="#FFFFFF"
			class="side-menu"
		>
			<el-menu-item index="home" @click="navigateTo('home', i18n.home, '/pages/index/index')">
				<i class="el-icon-s-home"></i>
				<span slot="title">{{ i18n.home }}</span>
			</el-menu-item>
			<template v-for="menu in menus">
				<el-submenu v-if="!menu.pid" :index="menu.id" :key="menu.id">
					<template slot="title">
						<i v-if="menu.icon" :class="menu.icon"></i>
						<span>{{ i18n[menu.id] }}</span>
					</template>
					<el-menu-item-group>
						<template v-for="child in menus">
							<el-menu-item v-if="child.pid == menu.id" :index="child.id" :key="child.id" @click="navigateTo(child.id, i18n[child.id], child.url, child.keepAlive)">
								{{ i18n[child.id] }}
							</el-menu-item>
						</template>
					</el-menu-item-group>
				</el-submenu>
			</template>
		</el-menu>
	</scroll-view>
</template>

<script>
export default {
	props: {
		showLeftWindow: Boolean
	},
	data() {
		return {
			isCollapse: false,
			activeMenu: 'home',
			openeds: ['demo'],
			menus: [
				{
					id: 'demo',
					pid: '',
					icon: 'el-icon-s-help'
				},
				{
					id: 'basic',
					pid: 'demo',
					icon: '',
					url: '/pages/demo/basic/basic',
					keepAlive: true
				},
				{
					id: 'notice',
					pid: 'demo',
					icon: '',
					url: '/pages/demo/notice/notice',
					keepAlive: true
				},
				{
					id: 'other',
					pid: 'demo',
					icon: '',
					url: '/pages/demo/other/other',
					keepAlive: true
				},
				{
					id: 'signaturepad',
					pid: 'demo',
					icon: '',
					url: '/pages/demo/signaturepad/signaturepad',
					keepAlive: true
				}
			]
		};
	},
	computed: {
		i18n() {
			return this.$t('index');
		}
	},
	methods: {
		navigateTo(name, title, url, keepAlive) {
			this.activeMenu = name;
			if (this.showLeftWindow) uni.hideLeftWindow();
			if (this.$utils.navigateTo(url, false === keepAlive ? null : this)) {
				uni.$emit('activeTab', {
					name,
					title,
					url,
					keepAlive
				});
			}
		}
	},
	mounted: async function() {
		try {
			if (this.$store.state.auth.token) this.menus = await this.$http.post('/admin/menu');
		} catch (e) {}
		uni.$on('activeMenu', name => (this.activeMenu = name));
		uni.$on('collapseMenu', isCollapse => (this.isCollapse = isCollapse));

		this.$nextTick(() => {
			const { launchPage } = getApp().globalData;

			if (launchPage && -1 == this.$utils.indexOf(['/pages/index/index', '/pages/login/login'], launchPage)) {
				const { id, text, url, keepAlive } = this.$utils.find(this.menus, menu => launchPage == menu.url);
				if (id) {
					this.navigateTo(id, text, url, keepAlive);
				}
			}
		});
	}
};
</script>

<style lang="scss" scoped>
.left-window-unfold {
	width: 230px;
}

.left-window {
	background-color: #304156;

	.side-menu {
		height: 100%;
		border: 0 !important;

		.iconfont {
			margin-right: 5px;
			width: 24px;
			text-align: center;
			font-size: 18px;
			vertical-align: middle;
		}
	}
}
</style>
