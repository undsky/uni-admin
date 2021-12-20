<template>
	<el-tabs value="layout" tab-position="left">
		<el-tab-pane name="layout">
			<span slot="label">布局<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/layout')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础布局</el-divider>
				<el-row>
					<el-col :span="24">
						<div class="grid-content bg-purple-dark"></div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
				</el-row>
				<el-divider content-position="left">分栏间隔</el-divider>
				<el-row :gutter="20">
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-divider content-position="left">混合布局</el-divider>
				<el-row :gutter="20">
					<el-col :span="16">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="8">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="4">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="16">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-divider content-position="left">分栏偏移</el-divider>
				<el-row :gutter="20">
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6" :offset="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="6" :offset="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6" :offset="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="12" :offset="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-divider content-position="left">对齐方式</el-divider>
				<el-row type="flex" class="row-bg">
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-row type="flex" class="row-bg" justify="center">
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-row type="flex" class="row-bg" justify="end">
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-row type="flex" class="row-bg" justify="space-between">
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-row type="flex" class="row-bg" justify="space-around">
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
					<el-col :span="6">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
				<el-divider content-position="left">响应式布局</el-divider>
				<el-row :gutter="10">
					<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
					<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
				</el-row>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="container">
			<span slot="label">布局容器<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/container')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">常见页面布局</el-divider>
				<el-container>
					<el-header>Header</el-header>
					<el-main>Main</el-main>
				</el-container>

				<el-container>
					<el-header>Header</el-header>
					<el-main>Main</el-main>
					<el-footer>Footer</el-footer>
				</el-container>

				<el-container>
					<el-aside width="200px">Aside</el-aside>
					<el-main>Main</el-main>
				</el-container>

				<el-container>
					<el-header>Header</el-header>
					<el-container>
						<el-aside width="200px">Aside</el-aside>
						<el-main>Main</el-main>
					</el-container>
				</el-container>

				<el-container>
					<el-header>Header</el-header>
					<el-container>
						<el-aside width="200px">Aside</el-aside>
						<el-container>
							<el-main>Main</el-main>
							<el-footer>Footer</el-footer>
						</el-container>
					</el-container>
				</el-container>

				<el-container>
					<el-aside width="200px">Aside</el-aside>
					<el-container>
						<el-header>Header</el-header>
						<el-main>Main</el-main>
					</el-container>
				</el-container>

				<el-container>
					<el-aside width="200px">Aside</el-aside>
					<el-container>
						<el-header>Header</el-header>
						<el-main>Main</el-main>
						<el-footer>Footer</el-footer>
					</el-container>
				</el-container>
				<el-divider content-position="left">实例</el-divider>
				<el-container style="height: 500px; border: 1px solid #eee">
					<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
						<el-menu :default-openeds="['1', '3']">
							<el-submenu index="1">
								<template slot="title"><i class="el-icon-message"></i>导航一</template>
								<el-menu-item-group>
									<template slot="title">分组一</template>
									<el-menu-item index="1-1">选项1</el-menu-item>
									<el-menu-item index="1-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="1-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="1-4">
									<template slot="title">选项4</template>
									<el-menu-item index="1-4-1">选项4-1</el-menu-item>
								</el-submenu>
							</el-submenu>
							<el-submenu index="2">
								<template slot="title"><i class="el-icon-menu"></i>导航二</template>
								<el-menu-item-group>
									<template slot="title">分组一</template>
									<el-menu-item index="2-1">选项1</el-menu-item>
									<el-menu-item index="2-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="2-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="2-4">
									<template slot="title">选项4</template>
									<el-menu-item index="2-4-1">选项4-1</el-menu-item>
								</el-submenu>
							</el-submenu>
							<el-submenu index="3">
								<template slot="title"><i class="el-icon-setting"></i>导航三</template>
								<el-menu-item-group>
									<template slot="title">分组一</template>
									<el-menu-item index="3-1">选项1</el-menu-item>
									<el-menu-item index="3-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="3-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="3-4">
									<template slot="title">选项4</template>
									<el-menu-item index="3-4-1">选项4-1</el-menu-item>
								</el-submenu>
							</el-submenu>
						</el-menu>
					</el-aside>

					<el-container>
						<el-header style="text-align: right; font-size: 12px">
							<el-dropdown>
								<i class="el-icon-setting" style="margin-right: 15px"></i>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>查看</el-dropdown-item>
									<el-dropdown-item>新增</el-dropdown-item>
									<el-dropdown-item>删除</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
							<span>王小虎</span>
						</el-header>

						<el-main>
							<el-table :data="tableData">
								<el-table-column prop="date" label="日期" width="140">
								</el-table-column>
								<el-table-column prop="name" label="姓名" width="120">
								</el-table-column>
								<el-table-column prop="address" label="地址">
								</el-table-column>
							</el-table>
						</el-main>
					</el-container>
				</el-container>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="button">
			<span slot="label">按钮<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/button')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">vxe-button<i
						@click="$utils.navigateTo('https://xuliangzhan_admin.gitee.io/vxe-table/#/table/module/button')"
						class="el-icon-question margin-left text-color-grey"></i></el-divider>
				<p>
					<vxe-button content="默认尺寸"></vxe-button>
					<vxe-button size="medium" content="中等尺寸"></vxe-button>
					<vxe-button size="small" content="小型尺寸"></vxe-button>
					<vxe-button size="mini" content="超小尺寸"></vxe-button>
				</p>

				<p>
					<vxe-button size="mini" content="超小下拉按钮">
						<template #dropdowns>
							<vxe-button type="text" content="下拉按钮1"></vxe-button>
							<vxe-button type="text" status="primary" content="下拉按钮2"></vxe-button>
							<vxe-button type="text" content="下拉按钮3"></vxe-button>
						</template>
					</vxe-button>
					<vxe-button size="small" content="小型下拉按钮">
						<template #dropdowns>
							<vxe-button type="text" content="下拉按钮1"></vxe-button>
							<vxe-button type="text" status="success" content="下拉按钮2"></vxe-button>
							<vxe-button type="text" content="下拉按钮3"></vxe-button>
						</template>
					</vxe-button>
					<vxe-button size="medium" content="固定向上" placement="top">
						<template #dropdowns>
							<vxe-button type="text" content="下拉按钮1"></vxe-button>
							<vxe-button type="text" status="warning" content="下拉按钮2"></vxe-button>
							<vxe-button type="text" content="下拉按钮3"></vxe-button>
						</template>
					</vxe-button>
					<vxe-button content="固定向下" placement="bottom">
						<template #dropdowns>
							<vxe-button type="text" content="下拉按钮1"></vxe-button>
							<vxe-button type="text" status="danger" content="下拉按钮2"></vxe-button>
							<vxe-button type="text" content="下拉按钮3"></vxe-button>
						</template>
					</vxe-button>
				</p>

				<p>
					<vxe-button type="text" content="默认颜色"></vxe-button>
					<vxe-button type="text" status="primary" content="主要颜色"></vxe-button>
					<vxe-button type="text" status="success" content="信息颜色"></vxe-button>
					<vxe-button type="text" status="info" content="信息颜色"></vxe-button>
					<vxe-button type="text" status="warning" content="警告颜色"></vxe-button>
					<vxe-button type="text" status="danger" content="危险颜色"></vxe-button>
				</p>

				<p>
					<vxe-button type="text" content="默认禁用颜色" disabled></vxe-button>
					<vxe-button type="text" status="primary" content="主要禁用颜色" disabled></vxe-button>
					<vxe-button type="text" status="success" content="成功禁用颜色" disabled></vxe-button>
					<vxe-button type="text" status="info" content="信息禁用颜色" disabled></vxe-button>
					<vxe-button type="text" status="warning" content="警告禁用颜色" disabled></vxe-button>
					<vxe-button type="text" status="danger" content="危险禁用颜色" disabled></vxe-button>
				</p>

				<p>
					<vxe-button type="text" content="默认颜色" loading></vxe-button>
					<vxe-button type="text" status="primary" content="主要颜色" loading></vxe-button>
					<vxe-button type="text" status="success" content="成功颜色" loading></vxe-button>
					<vxe-button type="text" status="info" content="信息颜色" loading></vxe-button>
					<vxe-button type="text" status="warning" content="警告颜色" loading></vxe-button>
					<vxe-button type="text" status="danger" content="危险颜色" loading></vxe-button>
				</p>

				<p>
					<vxe-button content="默认颜色"></vxe-button>
					<vxe-button status="primary" content="主要颜色"></vxe-button>
					<vxe-button status="success" content="成功颜色"></vxe-button>
					<vxe-button status="info" content="信息颜色"></vxe-button>
					<vxe-button status="warning" content="警告颜色"></vxe-button>
					<vxe-button status="danger" content="危险颜色"></vxe-button>
				</p>

				<p>
					<vxe-button content="默认禁用颜色" disabled></vxe-button>
					<vxe-button status="primary" content="主要禁用颜色" disabled></vxe-button>
					<vxe-button status="success" content="成功禁用颜色" disabled></vxe-button>
					<vxe-button status="info" content="信息禁用颜色" disabled></vxe-button>
					<vxe-button status="warning" content="警告禁用颜色" disabled></vxe-button>
					<vxe-button status="danger" content="危险禁用颜色" disabled></vxe-button>
				</p>

				<p>
					<vxe-button content="默认颜色" loading></vxe-button>
					<vxe-button status="primary" content="主要颜色" loading></vxe-button>
					<vxe-button status="success" content="成功颜色" loading></vxe-button>
					<vxe-button status="info" content="信息颜色" loading></vxe-button>
					<vxe-button status="warning" content="警告颜色" loading></vxe-button>
					<vxe-button status="danger" content="危险颜色" loading></vxe-button>
				</p>

				<p>
					<vxe-button transfer>
						<template #default>默认颜色</template>
						<template #dropdowns>
							<vxe-button type="text">下拉按钮1</vxe-button>
							<vxe-button type="text">下拉按钮2</vxe-button>
							<vxe-button type="text">下拉按钮3</vxe-button>
						</template>
					</vxe-button>
					<vxe-button status="primary" transfer>
						<template #default>主要颜色</template>
						<template #dropdowns>
							<vxe-button type="text">下拉按钮1</vxe-button>
							<vxe-button type="text" status="primary">下拉按钮2</vxe-button>
							<vxe-button type="text">下拉按钮3</vxe-button>
						</template>
					</vxe-button>
					<vxe-button status="success" transfer>
						<template #default>成功颜色</template>
						<template #dropdowns>
							<vxe-button type="text">下拉按钮1</vxe-button>
							<vxe-button type="text" status="success">下拉按钮2</vxe-button>
							<vxe-button type="text">下拉按钮3</vxe-button>
						</template>
					</vxe-button>
					<vxe-button status="info" transfer>
						<template #default>信息颜色</template>
						<template #dropdowns>
							<vxe-button type="text">下拉按钮1</vxe-button>
							<vxe-button type="text" status="my-purple">下拉按钮2</vxe-button>
							<vxe-button type="text">下拉按钮3</vxe-button>
						</template>
					</vxe-button>
					<vxe-button status="warning" transfer placement="top">
						<template #default>固定向上</template>
						<template #dropdowns>
							<vxe-button type="text">下拉按钮1</vxe-button>
							<vxe-button type="text" status="warning">下拉按钮2</vxe-button>
							<vxe-button type="text">下拉按钮3</vxe-button>
						</template>
					</vxe-button>
					<vxe-button status="danger" transfer placement="bottom">
						<template #default>固定向下</template>
						<template #dropdowns>
							<vxe-button type="text">下拉按钮1</vxe-button>
							<vxe-button type="text" status="danger">下拉按钮2</vxe-button>
							<vxe-button type="text">下拉按钮3</vxe-button>
						</template>
					</vxe-button>
				</p>

				<p>
					<vxe-button icon="fa fa-plus">使用第三方图标</vxe-button>
					<vxe-button status="primary" icon="fa fa-save">主要图标颜色</vxe-button>
					<vxe-button status="success" icon="fa fa-check">成功图标颜色</vxe-button>
					<vxe-button status="info" icon="fa fa-info">信息图标颜色</vxe-button>
					<vxe-button status="warning" icon="fa fa-warning">警告图标颜色</vxe-button>
					<vxe-button status="danger" icon="fa fa-trash-o">危险图标颜色</vxe-button>
				</p>

				<p>
					<vxe-button icon="fa fa-download">默认图标颜色</vxe-button>
					<vxe-button icon="fa fa-save my-primary">主要图标颜色</vxe-button>
					<vxe-button icon="fa fa-check my-success">成功图标颜色</vxe-button>
					<vxe-button icon="fa fa-info my-info">信息图标颜色</vxe-button>
					<vxe-button icon="fa fa-warning my-warning">警告图标颜色</vxe-button>
					<vxe-button icon="fa fa-trash-o my-danger">危险图标颜色</vxe-button>
				</p>

				<p>
					<vxe-button round>圆角按钮</vxe-button>
					<vxe-button loading round>圆角按钮</vxe-button>
					<vxe-button status="primary" round>主要颜色</vxe-button>
					<vxe-button status="success" round>成功颜色</vxe-button>
					<vxe-button status="info" round>信息颜色</vxe-button>
					<vxe-button status="warning" round>警告颜色</vxe-button>
					<vxe-button status="danger" round>危险颜色</vxe-button>
				</p>

				<p>
					<vxe-button icon="fa fa-plus" circle></vxe-button>
					<vxe-button loading circle></vxe-button>
					<vxe-button status="primary" icon="fa fa-save" circle></vxe-button>
					<vxe-button status="success" icon="fa fa-check" circle></vxe-button>
					<vxe-button status="info" icon="fa fa-info" circle></vxe-button>
					<vxe-button status="warning" icon="fa fa-warning" circle></vxe-button>
					<vxe-button status="danger" icon="fa fa-trash-o" circle></vxe-button>
				</p>

				<p>
					<vxe-button icon="fa fa-plus"></vxe-button>
					<vxe-button loading></vxe-button>
					<vxe-button status="primary" icon="fa fa-save"></vxe-button>
					<vxe-button status="success" icon="fa fa-check"></vxe-button>
					<vxe-button status="info" icon="fa fa-info"></vxe-button>
					<vxe-button status="warning" icon="fa fa-warning"></vxe-button>
					<vxe-button status="danger" icon="fa fa-trash-o"></vxe-button>
				</p>

				<p>
					<vxe-button type="text" icon="fa fa-plus">使用第三方图标</vxe-button>
					<vxe-button type="text" status="primary" icon="fa fa-save">主要图标颜色</vxe-button>
					<vxe-button type="text" status="success" icon="fa fa-check">成功图标颜色</vxe-button>
					<vxe-button type="text" status="info" icon="fa fa-info">信息图标颜色</vxe-button>
					<vxe-button type="text" status="warning" icon="fa fa-warning">警告图标颜色</vxe-button>
					<vxe-button type="text" status="danger" icon="fa fa-trash-o">危险图标颜色</vxe-button>
				</p>

				<p>
					<vxe-button type="text" icon="fa fa-plus"></vxe-button>
					<vxe-button type="text" icon="fa fa-refresh"></vxe-button>
					<vxe-button status="primary" icon="fa fa-download">图标按钮</vxe-button>
					<vxe-button status="my-purple" icon="fa fa-save">自定义按钮颜色</vxe-button>
					<vxe-button icon="fa fa-graduation-cap my-green">自定义图标颜色</vxe-button>
				</p>
				<el-divider content-position="left">基础用法</el-divider>
				<el-row>
					<el-button>默认按钮</el-button>
					<el-button type="primary">主要按钮</el-button>
					<el-button type="success">成功按钮</el-button>
					<el-button type="info">信息按钮</el-button>
					<el-button type="warning">警告按钮</el-button>
					<el-button type="danger">危险按钮</el-button>
				</el-row>

				<el-row>
					<el-button plain>朴素按钮</el-button>
					<el-button type="primary" plain>主要按钮</el-button>
					<el-button type="success" plain>成功按钮</el-button>
					<el-button type="info" plain>信息按钮</el-button>
					<el-button type="warning" plain>警告按钮</el-button>
					<el-button type="danger" plain>危险按钮</el-button>
				</el-row>

				<el-row>
					<el-button round>圆角按钮</el-button>
					<el-button type="primary" round>主要按钮</el-button>
					<el-button type="success" round>成功按钮</el-button>
					<el-button type="info" round>信息按钮</el-button>
					<el-button type="warning" round>警告按钮</el-button>
					<el-button type="danger" round>危险按钮</el-button>
				</el-row>

				<el-row>
					<el-button icon="el-icon-search" circle></el-button>
					<el-button type="primary" icon="el-icon-edit" circle></el-button>
					<el-button type="success" icon="el-icon-check" circle></el-button>
					<el-button type="info" icon="el-icon-message" circle></el-button>
					<el-button type="warning" icon="el-icon-star-off" circle></el-button>
					<el-button type="danger" icon="el-icon-delete" circle></el-button>
				</el-row>
				<el-divider content-position="left">禁用状态</el-divider>
				<el-row>
					<el-button disabled>默认按钮</el-button>
					<el-button type="primary" disabled>主要按钮</el-button>
					<el-button type="success" disabled>成功按钮</el-button>
					<el-button type="info" disabled>信息按钮</el-button>
					<el-button type="warning" disabled>警告按钮</el-button>
					<el-button type="danger" disabled>危险按钮</el-button>
				</el-row>

				<el-row>
					<el-button plain disabled>朴素按钮</el-button>
					<el-button type="primary" plain disabled>主要按钮</el-button>
					<el-button type="success" plain disabled>成功按钮</el-button>
					<el-button type="info" plain disabled>信息按钮</el-button>
					<el-button type="warning" plain disabled>警告按钮</el-button>
					<el-button type="danger" plain disabled>危险按钮</el-button>
				</el-row>
				<el-divider content-position="left">文字按钮</el-divider>
				<el-button type="text">文字按钮</el-button>
				<el-button type="text" disabled>文字按钮</el-button>
				<el-divider content-position="left">图标按钮</el-divider>
				<el-button type="primary" icon="el-icon-edit"></el-button>
				<el-button type="primary" icon="el-icon-share"></el-button>
				<el-button type="primary" icon="el-icon-delete"></el-button>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
				<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
				<el-divider content-position="left">按钮组</el-divider>
				<el-button-group>
					<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
					<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
				</el-button-group>
				<el-button-group>
					<el-button type="primary" icon="el-icon-edit"></el-button>
					<el-button type="primary" icon="el-icon-share"></el-button>
					<el-button type="primary" icon="el-icon-delete"></el-button>
				</el-button-group>
				<el-divider content-position="left">加载中</el-divider>
				<el-button type="primary" :loading="true">加载中</el-button>
				<el-divider content-position="left">不同尺寸</el-divider>
				<el-row>
					<el-button>默认按钮</el-button>
					<el-button size="medium">中等按钮</el-button>
					<el-button size="small">小型按钮</el-button>
					<el-button size="mini">超小按钮</el-button>
				</el-row>
				<el-row>
					<el-button round>默认按钮</el-button>
					<el-button size="medium" round>中等按钮</el-button>
					<el-button size="small" round>小型按钮</el-button>
					<el-button size="mini" round>超小按钮</el-button>
				</el-row>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="link">
			<span slot="label">文字链接<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/link')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
				<el-link type="primary">主要链接</el-link>
				<el-link type="success">成功链接</el-link>
				<el-link type="warning">警告链接</el-link>
				<el-link type="danger">危险链接</el-link>
				<el-link type="info">信息链接</el-link>
				<el-divider content-position="left">禁用状态</el-divider>
				<el-link disabled>默认链接</el-link>
				<el-link type="primary" disabled>主要链接</el-link>
				<el-link type="success" disabled>成功链接</el-link>
				<el-link type="warning" disabled>警告链接</el-link>
				<el-link type="danger" disabled>危险链接</el-link>
				<el-link type="info" disabled>信息链接</el-link>
				<el-divider content-position="left">下划线</el-divider>
				<el-link :underline="false">无下划线</el-link>
				<el-link>有下划线</el-link>
				<el-divider content-position="left">图标</el-divider>
				<el-link icon="el-icon-edit">编辑</el-link>
				<el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="tag">
			<span slot="label">标签<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/tag')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-tag>标签一</el-tag>
				<el-tag type="success">标签二</el-tag>
				<el-tag type="info">标签三</el-tag>
				<el-tag type="warning">标签四</el-tag>
				<el-tag type="danger">标签五</el-tag>
				<el-divider content-position="left">可移除标签</el-divider>
				<el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
					{{tag.name}}
				</el-tag>
				<el-divider content-position="left">动态编辑标签</el-divider>
				<el-tag :key="index" v-for="(tag,index) in dynamicTags" closable :disable-transitions="false"
					@close="handleClose(tag)">
					{{tag}}
				</el-tag>
				<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
					@keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
				</el-input>
				<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
				<el-divider content-position="left">不同尺寸</el-divider>
				<el-tag closable>默认标签</el-tag>
				<el-tag size="medium" closable>中等标签</el-tag>
				<el-tag size="small" closable>小型标签</el-tag>
				<el-tag size="mini" closable>超小标签</el-tag>
				<el-divider content-position="left">不同主题</el-divider>
				<div class="tag-group">
					<span class="tag-group__title">Dark</span>
					<el-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
						{{ item.label }}
					</el-tag>
				</div>
				<div class="tag-group">
					<span class="tag-group__title">Plain</span>
					<el-tag v-for="item in items" :key="item.label" :type="item.type" effect="plain">
						{{ item.label }}
					</el-tag>
				</div>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="progress">
			<span slot="label">进度条<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/progress')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">线形进度条</el-divider>
				<el-progress :percentage="50"></el-progress>
				<el-progress :percentage="100" :format="format"></el-progress>
				<el-progress :percentage="100" status="success"></el-progress>
				<el-progress :percentage="100" status="warning"></el-progress>
				<el-progress :percentage="50" status="exception"></el-progress>
				<el-divider content-position="left">百分比内显</el-divider>
				<el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
				<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
				<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
				<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
				<el-divider content-position="left">自定义颜色</el-divider>
				<el-progress :percentage="percentage" :color="customColor"></el-progress>

				<el-progress :percentage="percentage" :color="customColorMethod"></el-progress>

				<el-progress :percentage="percentage" :color="customColors"></el-progress>
				<div>
					<el-button-group>
						<el-button icon="el-icon-minus" @click="decrease"></el-button>
						<el-button icon="el-icon-plus" @click="increase"></el-button>
					</el-button-group>
				</div>
				<el-divider content-position="left">环形进度条</el-divider>
				<el-progress type="circle" :percentage="0"></el-progress>
				<el-progress type="circle" :percentage="25"></el-progress>
				<el-progress type="circle" :percentage="100" status="success"></el-progress>
				<el-progress type="circle" :percentage="70" status="warning"></el-progress>
				<el-progress type="circle" :percentage="50" status="exception"></el-progress>
				<el-divider content-position="left">仪表盘形进度条</el-divider>
				<el-progress type="dashboard" :percentage="percentage" :color="customColors"></el-progress>
				<div>
					<el-button-group>
						<el-button icon="el-icon-minus" @click="decrease"></el-button>
						<el-button icon="el-icon-plus" @click="increase"></el-button>
					</el-button-group>
				</div>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="tree">
			<span slot="label">树<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/tree')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
				<el-divider content-position="left">可选择</el-divider>
				<el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange">
				</el-tree>
				<el-divider content-position="left">懒加载自定义叶子节点</el-divider>
				<el-tree :props="lazyProps" :load="loadLazyNode" lazy show-checkbox>
				</el-tree>
				<el-divider content-position="left">默认展开和默认选中</el-divider>
				<el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]"
					:default-checked-keys="[5]" :props="defaultProps">
				</el-tree>
				<el-divider content-position="left">禁用状态</el-divider>
				<el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]"
					:default-checked-keys="[5]">
				</el-tree>
				<el-divider content-position="left">树节点的选择</el-divider>
				<el-tree :data="data" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current
					:props="defaultProps">
				</el-tree>

				<div class="buttons">
					<el-button @click="getCheckedNodes">通过 node 获取</el-button>
					<el-button @click="getCheckedKeys">通过 key 获取</el-button>
					<el-button @click="setCheckedNodes">通过 node 设置</el-button>
					<el-button @click="setCheckedKeys">通过 key 设置</el-button>
					<el-button @click="resetChecked">清空</el-button>
				</div>
				<el-divider content-position="left">自定义节点内容</el-divider>
				<div class="flex">
					<div class="block">
						<p>使用 render-content</p>
						<el-tree :data="data" show-checkbox node-key="id" default-expand-all
							:expand-on-click-node="false" :render-content="renderContent">
						</el-tree>
					</div>
					<div class="block margin-left-lg">
						<p>使用 scoped slot</p>
						<el-tree :data="data" show-checkbox node-key="id" default-expand-all
							:expand-on-click-node="false">
							<span class="custom-tree-node" slot-scope="{ node, data }">
								<span>{{ node.label }}</span>
								<span>
									<el-button type="text" size="mini" @click="() => append(data)">
										Append
									</el-button>
									<el-button type="text" size="mini" @click="() => remove(node, data)">
										Delete
									</el-button>
								</span>
							</span>
						</el-tree>
					</div>
				</div>
				<el-divider content-position="left">节点过滤</el-divider>
				<el-input placeholder="输入关键字进行过滤" v-model="filterText">
				</el-input>

				<el-tree class="filter-tree" :data="data" :props="defaultProps" default-expand-all
					:filter-node-method="filterNode" ref="tree">
				</el-tree>
				<el-divider content-position="left">手风琴模式</el-divider>
				<el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick">
				</el-tree>
				<el-divider content-position="left">可拖拽节点</el-divider>
				<el-tree :data="data" node-key="id" default-expand-all @node-drag-start="handleDragStart"
					@node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave"
					@node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop" draggable
					:allow-drop="allowDrop" :allow-drag="allowDrag">
				</el-tree>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="badge">
			<span slot="label">标记<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/badge')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-badge :value="12" class="item">
					<el-button size="small">评论</el-button>
				</el-badge>
				<el-badge :value="3" class="item">
					<el-button size="small">回复</el-button>
				</el-badge>
				<el-badge :value="1" class="item" type="primary">
					<el-button size="small">评论</el-button>
				</el-badge>
				<el-badge :value="2" class="item" type="warning">
					<el-button size="small">回复</el-button>
				</el-badge>

				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
						点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item class="clearfix">
							评论
							<el-badge class="mark" :value="12" />
						</el-dropdown-item>
						<el-dropdown-item class="clearfix">
							回复
							<el-badge class="mark" :value="3" />
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-divider content-position="left">最大值</el-divider>
				<el-badge :value="200" :max="99" class="item">
					<el-button size="small">评论</el-button>
				</el-badge>
				<el-badge :value="100" :max="10" class="item">
					<el-button size="small">回复</el-button>
				</el-badge>
				<el-divider content-position="left">自定义内容</el-divider>
				<el-badge value="new" class="item">
					<el-button size="small">评论</el-button>
				</el-badge>
				<el-badge value="hot" class="item">
					<el-button size="small">回复</el-button>
				</el-badge>
				<el-divider content-position="left">小红点</el-divider>
				<el-badge is-dot class="item">数据查询</el-badge>
				<el-badge is-dot class="item">
					<el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
				</el-badge>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="avatar">
			<span slot="label">头像<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/avatar')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基本用法</el-divider>
				<el-row class="demo-avatar demo-basic">
					<el-col :span="12">
						<div class="sub-title">circle</div>
						<div class="demo-basic--circle">
							<div class="block">
								<el-avatar :size="50" :src="circleUrl"></el-avatar>
							</div>
							<div class="block" v-for="size in sizeList" :key="size">
								<el-avatar :size="size" :src="circleUrl"></el-avatar>
							</div>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="sub-title">square</div>
						<div class="demo-basic--circle">
							<div class="block">
								<el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
							</div>
							<div class="block" v-for="size in sizeList" :key="size">
								<el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
							</div>
						</div>
					</el-col>
				</el-row>
				<el-divider content-position="left">展示类型</el-divider>
				<div>
					<el-avatar icon="el-icon-user-solid"></el-avatar>
				</div>
				<div>
					<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
				</div>
				<div>
					<el-avatar> user </el-avatar>
				</div>
				<el-divider content-position="left">图片加载失败的 fallback 行为</el-divider>
				<el-avatar :size="60" src="https://empty" @error="errorHandler">
					<img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
				</el-avatar>
				<el-divider content-position="left">图片如何适应容器框</el-divider>
				<div class="block" v-for="fit in fits" :key="fit">
					<span class="title">{{ fit }}</span>
					<el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
				</div>
				<el-badge :value="200" :max="99">
					<el-avatar icon="el-icon-user-solid"></el-avatar>
				</el-badge>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="skeleton">
			<span slot="label">骨架屏<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/skeleton')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-skeleton />
				<el-divider content-position="left">更多参数</el-divider>
				<el-skeleton :rows="6" />
				<el-divider content-position="left">动画效果</el-divider>
				<el-skeleton :rows="6" animated />
				<el-divider content-position="left">自定义样式</el-divider>
				<el-skeleton style="width: 240px">
					<template slot="template">
						<el-skeleton-item variant="image" style="width: 240px; height: 240px;" />
						<div style="padding: 14px;">
							<el-skeleton-item variant="p" style="width: 50%" />
							<div style="display: flex; align-items: center; justify-items: space-between;">
								<el-skeleton-item variant="text" style="margin-right: 16px;" />
								<el-skeleton-item variant="text" style="width: 30%;" />
							</div>
						</div>
					</template>
				</el-skeleton>
				<el-divider content-position="left">Loading 状态</el-divider>
				<div style="width: 240px">
					<p>
						<label style="margin-right: 16px;">切换 Loading</label>
						<el-switch v-model="loading" />
					</p>
					<el-skeleton style="width: 240px" :loading="loading" animated>
						<template slot="template">
							<el-skeleton-item variant="image" style="width: 240px; height: 240px;" />
							<div style="padding: 14px;">
								<el-skeleton-item variant="h3" style="width: 50%;" />
								<div
									style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
									<el-skeleton-item variant="text" style="margin-right: 16px;" />
									<el-skeleton-item variant="text" style="width: 30%;" />
								</div>
							</div>
						</template>
						<template>
							<el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
								<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
									class="image" />
								<div style="padding: 14px;">
									<span>好吃的汉堡</span>
									<div class="bottom card-header">
										<span class="time">{{ currentDate }}</span>
										<el-button type="text" class="button">操作按钮</el-button>
									</div>
								</div>
							</el-card>
						</template>
					</el-skeleton>
				</div>
				<el-divider content-position="left">渲染多条数据</el-divider>
				<div style="width: 400px">
					<p>
						<el-button @click="setLoading">点我重新加载</el-button>
					</p>
					<el-skeleton style="width:400px" :loading="loading" animated :count="3">
						<template slot="template">
							<el-skeleton-item variant="image" style="width: 400px; height: 267px;" />
							<div style="padding: 14px;">
								<el-skeleton-item variant="h3" style="width: 50%;" />
								<div
									style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
									<el-skeleton-item variant="text" style="margin-right: 16px;" />
									<el-skeleton-item variant="text" style="width: 30%;" />
								</div>
							</div>
						</template>
						<template>
							<el-card :body-style="{ padding: '0px', marginBottom: '1px' }" v-for="item in lists"
								:key="item.name">
								<img :src="item.imgUrl" class="image multi-content" />
								<div style="padding: 14px;">
									<span>{{ item.name }}</span>
									<div class="bottom card-header">
										<span class="time">{{ currentDate }}</span>
										<el-button type="text" class="button">操作按钮</el-button>
									</div>
								</div>
							</el-card>
						</template>
					</el-skeleton>
				</div>
				<el-divider content-position="left">防止渲染抖动</el-divider>
				<div style="width: 240px">
					<p>
						<label style="margin-right: 16px;">切换 Loading</label>
						<el-switch v-model="loading" />
					</p>
					<el-skeleton style="width: 240px" :loading="loading" animated :throttle="500">
						<template slot="template">
							<el-skeleton-item variant="image" style="width: 240px; height: 240px;" />
							<div style="padding: 14px;">
								<el-skeleton-item variant="h3" style="width: 50%;" />
								<div
									style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
									<el-skeleton-item variant="text" style="margin-right: 16px;" />
									<el-skeleton-item variant="text" style="width: 30%;" />
								</div>
							</div>
						</template>
						<template>
							<el-card :body-style="{ padding: '0px', marginBottom: '1px'}">
								<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
									class="image" />
								<div style="padding: 14px;">
									<span>好吃的汉堡</span>
									<div class="bottom card-header">
										<span class="time">{{ currentDate }}</span>
										<el-button type="text" class="button">操作按钮</el-button>
									</div>
								</div>
							</el-card>
						</template>
					</el-skeleton>
				</div>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="empty">
			<span slot="label">空状态<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/empty')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-empty description="描述文字"></el-empty>
				<el-divider content-position="left">自定义图片</el-divider>
				<el-empty
					image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
				</el-empty>
				<el-divider content-position="left">图片尺寸</el-divider>
				<el-empty :image-size="200"></el-empty>
				<el-divider content-position="left">底部内容</el-divider>
				<el-empty>
					<el-button type="primary">按钮</el-button>
				</el-empty>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="menu">
			<span slot="label">导航菜单<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/menu')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">顶栏</el-divider>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">处理中心</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的工作台</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项1</el-menu-item>
							<el-menu-item index="2-4-2">选项2</el-menu-item>
							<el-menu-item index="2-4-3">选项3</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="3" disabled>消息中心</el-menu-item>
					<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
				</el-menu>
				<div class="line"></div>
				<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
					background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="1">处理中心</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的工作台</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项1</el-menu-item>
							<el-menu-item index="2-4-2">选项2</el-menu-item>
							<el-menu-item index="2-4-3">选项3</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="3" disabled>消息中心</el-menu-item>
					<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
				</el-menu>
				<el-divider content-position="left">侧栏</el-divider>
				<el-row class="tac">
					<el-col :span="12">
						<h5>默认颜色</h5>
						<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleMenuOpen"
							@close="handleMenuClose">
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>导航一</span>
								</template>
								<el-menu-item-group>
									<template slot="title">分组一</template>
									<el-menu-item index="1-1">选项1</el-menu-item>
									<el-menu-item index="1-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="1-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="1-4">
									<template slot="title">选项4</template>
									<el-menu-item index="1-4-1">选项1</el-menu-item>
								</el-submenu>
							</el-submenu>
							<el-menu-item index="2">
								<i class="el-icon-menu"></i>
								<span slot="title">导航二</span>
							</el-menu-item>
							<el-menu-item index="3" disabled>
								<i class="el-icon-document"></i>
								<span slot="title">导航三</span>
							</el-menu-item>
							<el-menu-item index="4">
								<i class="el-icon-setting"></i>
								<span slot="title">导航四</span>
							</el-menu-item>
						</el-menu>
					</el-col>
					<el-col :span="12">
						<h5>自定义颜色</h5>
						<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleMenuOpen"
							@close="handleMenuClose" background-color="#545c64" text-color="#fff"
							active-text-color="#ffd04b">
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>导航一</span>
								</template>
								<el-menu-item-group>
									<template slot="title">分组一</template>
									<el-menu-item index="1-1">选项1</el-menu-item>
									<el-menu-item index="1-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="1-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="1-4">
									<template slot="title">选项4</template>
									<el-menu-item index="1-4-1">选项1</el-menu-item>
								</el-submenu>
							</el-submenu>
							<el-menu-item index="2">
								<i class="el-icon-menu"></i>
								<span slot="title">导航二</span>
							</el-menu-item>
							<el-menu-item index="3" disabled>
								<i class="el-icon-document"></i>
								<span slot="title">导航三</span>
							</el-menu-item>
							<el-menu-item index="4">
								<i class="el-icon-setting"></i>
								<span slot="title">导航四</span>
							</el-menu-item>
						</el-menu>
					</el-col>
				</el-row>
				<el-divider content-position="left">折叠</el-divider>
				<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
					<el-radio-button :label="false">展开</el-radio-button>
					<el-radio-button :label="true">收起</el-radio-button>
				</el-radio-group>
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
					:collapse="isCollapse">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span slot="title">导航一</span>
						</template>
						<el-menu-item-group>
							<span slot="title">分组一</span>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<span slot="title">选项4</span>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">导航二</span>
					</el-menu-item>
					<el-menu-item index="3" disabled>
						<i class="el-icon-document"></i>
						<span slot="title">导航三</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">导航四</span>
					</el-menu-item>
				</el-menu>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="tabs">
			<span slot="label">标签页<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/tabs')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
					<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
				</el-tabs>
				<el-divider content-position="left">选项卡样式</el-divider>
				<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
					<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
					<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
				</el-tabs>
				<el-divider content-position="left">卡片化</el-divider>
				<el-tabs type="border-card">
					<el-tab-pane label="用户管理">用户管理</el-tab-pane>
					<el-tab-pane label="配置管理">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
				</el-tabs>
				<el-divider content-position="left">位置</el-divider>
				<el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
					<el-radio-button label="top">top</el-radio-button>
					<el-radio-button label="right">right</el-radio-button>
					<el-radio-button label="bottom">bottom</el-radio-button>
					<el-radio-button label="left">left</el-radio-button>
				</el-radio-group>

				<el-tabs :tab-position="tabPosition" style="height: 200px;">
					<el-tab-pane label="用户管理">用户管理</el-tab-pane>
					<el-tab-pane label="配置管理">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
				</el-tabs>
				<el-divider content-position="left">自定义标签页</el-divider>
				<el-tabs type="border-card">
					<el-tab-pane>
						<span slot="label"><i class="el-icon-date"></i> 我的行程</span>
						我的行程
					</el-tab-pane>
					<el-tab-pane label="消息中心">消息中心</el-tab-pane>
					<el-tab-pane label="角色管理">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
				</el-tabs>
				<el-divider content-position="left">动态增减标签页</el-divider>
				<el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
					<el-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.title"
						:name="item.name">
						{{item.content}}
					</el-tab-pane>
				</el-tabs>
				<el-divider content-position="left">自定义增加标签页触发器</el-divider>
				<div style="margin-bottom: 20px;">
					<el-button size="small" @click="addTab(editableTabsValue)">
						add tab
					</el-button>
				</div>
				<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
					<el-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title"
						:name="item.name">
						{{item.content}}
					</el-tab-pane>
				</el-tabs>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="transition">
			<span slot="label">过渡动画<i
					@click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/transition')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">fade 淡入淡出</el-divider>
				<el-button @click="show = !show">Click Me</el-button>

				<div style="display: flex; margin-top: 20px; height: 100px;">
					<transition name="el-fade-in-linear">
						<div v-show="show" class="transition-box">.el-fade-in-linear</div>
					</transition>
					<transition name="el-fade-in">
						<div v-show="show" class="transition-box">.el-fade-in</div>
					</transition>
				</div>
				<el-divider content-position="left">zoom 缩放</el-divider>
				<el-button @click="show2 = !show2">Click Me</el-button>

				<div style="display: flex; margin-top: 20px; height: 100px;">
					<transition name="el-zoom-in-center">
						<div v-show="show2" class="transition-box">.el-zoom-in-center</div>
					</transition>

					<transition name="el-zoom-in-top">
						<div v-show="show2" class="transition-box">.el-zoom-in-top</div>
					</transition>

					<transition name="el-zoom-in-bottom">
						<div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
					</transition>
				</div>
				<el-divider content-position="left">collapse 展开折叠</el-divider>
				<el-button @click="show3 = !show3">Click Me</el-button>

				<div style="margin-top: 20px; height: 200px;">
					<el-collapse-transition>
						<div v-show="show3">
							<div class="transition-box">el-collapse-transition</div>
							<div class="transition-box">el-collapse-transition</div>
						</div>
					</el-collapse-transition>
				</div>
			</scroll-view>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	let id = 1000;

	export default {
		data() {
			const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				show: true,
				show2: true,
				show3: true,
				editableTabsValue: '2',
				editableTabs: [{
					title: 'Tab 1',
					name: '1',
					content: 'Tab 1 content'
				}, {
					title: 'Tab 2',
					name: '2',
					content: 'Tab 2 content'
				}],
				tabIndex: 2,
				tabPosition: 'left',
				activeName: 'first',
				isCollapse: true,
				activeIndex: '1',
				activeIndex2: '1',
				lists: [],
				loading: true,
				currentDate: '2021-06-01',
				tableData: Array(20).fill(item),
				fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
				url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
				sizeList: ["large", "medium", "small"],
				lazyProps: {
					label: 'name',
					children: 'zones',
					isLeaf: 'leaf'
				},
				props: {
					label: 'name',
					children: 'zones'
				},
				count: 1,
				filterText: '',
				data: [{
					id: 1,
					label: '一级 1',
					children: [{
						id: 4,
						label: '二级 1-1',
						children: [{
							id: 9,
							label: '三级 1-1-1'
						}, {
							id: 10,
							label: '三级 1-1-2'
						}]
					}]
				}, {
					id: 2,
					label: '一级 2',
					children: [{
						id: 5,
						label: '二级 2-1',
						disabled: true
					}, {
						id: 6,
						label: '二级 2-2'
					}]
				}, {
					id: 3,
					label: '一级 3',
					children: [{
						id: 7,
						label: '二级 3-1',
						disabled: true
					}, {
						id: 8,
						label: '二级 3-2'
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				tags: [{
						name: '标签一',
						type: ''
					},
					{
						name: '标签二',
						type: 'success'
					},
					{
						name: '标签三',
						type: 'info'
					},
					{
						name: '标签四',
						type: 'warning'
					},
					{
						name: '标签五',
						type: 'danger'
					}
				],
				dynamicTags: ['标签一', '标签二', '标签三'],
				inputVisible: false,
				inputValue: '',
				items: [{
						type: '',
						label: '标签一'
					},
					{
						type: 'success',
						label: '标签二'
					},
					{
						type: 'info',
						label: '标签三'
					},
					{
						type: 'danger',
						label: '标签四'
					},
					{
						type: 'warning',
						label: '标签五'
					}
				],
				percentage: 20,
				customColor: '#409eff',
				customColors: [{
						color: '#f56c6c',
						percentage: 20
					},
					{
						color: '#e6a23c',
						percentage: 40
					},
					{
						color: '#5cb87a',
						percentage: 60
					},
					{
						color: '#1989fa',
						percentage: 80
					},
					{
						color: '#6f7ad3',
						percentage: 100
					}
				]
			}
		},
		watch: {
			filterText(val) {
				this.$refs.tree.filter(val);
			}
		},
		methods: {
			addTab(targetName) {
				let newTabName = ++this.tabIndex + '';
				this.editableTabs.push({
					title: 'New Tab',
					name: newTabName,
					content: 'New Tab content'
				});
				this.editableTabsValue = newTabName;
			},
			removeTab(targetName) {
				let tabs = this.editableTabs;
				let activeName = this.editableTabsValue;
				if (activeName === targetName) {
					tabs.forEach((tab, index) => {
						if (tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if (nextTab) {
								activeName = nextTab.name;
							}
						}
					});
				}

				this.editableTabsValue = activeName;
				this.editableTabs = tabs.filter(tab => tab.name !== targetName);
			},
			handleTabsEdit(targetName, action) {
				if (action === 'add') {
					let newTabName = ++this.tabIndex + '';
					this.editableTabs.push({
						title: 'New Tab',
						name: newTabName,
						content: 'New Tab content'
					});
					this.editableTabsValue = newTabName;
				}
				if (action === 'remove') {
					let tabs = this.editableTabs;
					let activeName = this.editableTabsValue;
					if (activeName === targetName) {
						tabs.forEach((tab, index) => {
							if (tab.name === targetName) {
								let nextTab = tabs[index + 1] || tabs[index - 1];
								if (nextTab) {
									activeName = nextTab.name;
								}
							}
						});
					}

					this.editableTabsValue = activeName;
					this.editableTabs = tabs.filter(tab => tab.name !== targetName);
				}
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleMenuOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleMenuClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			setLoading() {
				this.loading = true
				setTimeout(() => (this.loading = false), 2000)
			},
			errorHandler() {
				return true
			},
			handleDragStart(node, ev) {
				console.log('drag start', node);
			},
			handleDragEnter(draggingNode, dropNode, ev) {
				console.log('tree drag enter: ', dropNode.label);
			},
			handleDragLeave(draggingNode, dropNode, ev) {
				console.log('tree drag leave: ', dropNode.label);
			},
			handleDragOver(draggingNode, dropNode, ev) {
				console.log('tree drag over: ', dropNode.label);
			},
			handleDragEnd(draggingNode, dropNode, dropType, ev) {
				console.log('tree drag end: ', dropNode && dropNode.label, dropType);
			},
			handleDrop(draggingNode, dropNode, dropType, ev) {
				console.log('tree drop: ', dropNode.label, dropType);
			},
			allowDrop(draggingNode, dropNode, type) {
				if (dropNode.data.label === '二级 3-1') {
					return type !== 'inner';
				} else {
					return true;
				}
			},
			allowDrag(draggingNode) {
				return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
			},
			filterNode(value, data) {
				if (!value) return true;
				return data.label.indexOf(value) !== -1;
			},
			append(data) {
				const newChild = {
					id: id++,
					label: 'testtest',
					children: []
				};
				if (!data.children) {
					this.$set(data, 'children', []);
				}
				data.children.push(newChild);
			},

			remove(node, data) {
				const parent = node.parent;
				const children = parent.data.children || parent.data;
				const index = children.findIndex(d => d.id === data.id);
				children.splice(index, 1);
			},

			renderContent(h, {
				node,
				data,
				store
			}) {
				return (
			          <span class="custom-tree-node">
			            <span>{node.label}</span>
			            <span>
			              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
			              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
			            </span>
			          </span>);
			},
			getCheckedNodes() {
				console.log(this.$refs.tree.getCheckedNodes());
			},
			getCheckedKeys() {
				console.log(this.$refs.tree.getCheckedKeys());
			},
			setCheckedNodes() {
				this.$refs.tree.setCheckedNodes([{
					id: 5,
					label: '二级 2-1'
				}, {
					id: 9,
					label: '三级 1-1-1'
				}]);
			},
			setCheckedKeys() {
				this.$refs.tree.setCheckedKeys([3]);
			},
			resetChecked() {
				this.$refs.tree.setCheckedKeys([]);
			},
			handleCheckChange(data, checked, indeterminate) {
				console.log(data, checked, indeterminate);
			},
			handleNodeClick(data) {
				console.log(data);
			},
			loadLazyNode(node, resolve) {
				if (node.level === 0) {
					return resolve([{
						name: 'region'
					}]);
				}
				if (node.level > 1) return resolve([]);

				setTimeout(() => {
					const data = [{
						name: 'leaf',
						leaf: true
					}, {
						name: 'zone'
					}];

					resolve(data);
				}, 500);
			},
			loadNode(node, resolve) {
				if (node.level === 0) {
					return resolve([{
						name: 'region1'
					}, {
						name: 'region2'
					}]);
				}
				if (node.level > 3) return resolve([]);

				var hasChild;
				if (node.data.name === 'region1') {
					hasChild = true;
				} else if (node.data.name === 'region2') {
					hasChild = false;
				} else {
					hasChild = Math.random() > 0.5;
				}

				setTimeout(() => {
					var data;
					if (hasChild) {
						data = [{
							name: 'zone' + this.count++
						}, {
							name: 'zone' + this.count++
						}];
					} else {
						data = [];
					}

					resolve(data);
				}, 500);
			},
			handleNodeClick(data) {
				console.log(data);
			},
			customColorMethod(percentage) {
				if (percentage < 30) {
					return '#909399';
				} else if (percentage < 70) {
					return '#e6a23c';
				} else {
					return '#67c23a';
				}
			},
			increase() {
				this.percentage += 10;
				if (this.percentage > 100) {
					this.percentage = 100;
				}
			},
			decrease() {
				this.percentage -= 10;
				if (this.percentage < 0) {
					this.percentage = 0;
				}
			},
			format(percentage) {
				return percentage === 100 ? '满' : `${percentage}%`;
			},
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},

			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},

			handleInputConfirm() {
				let inputValue = this.inputValue;
				if (inputValue) {
					this.dynamicTags.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = '';
			}
		},
		mounted: function() {
			this.$utils.loadResources(['//lib.baomitu.com/font-awesome/4.7.0/css/font-awesome.min.css'], () => {
				console.log('font-awesome loaded')
			})

			this.loading = false
			this.lists = [{
					imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
					name: '鹿',
				},
				{
					imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					name: '马',
				},
				{
					imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
					name: '山狮',
				},
			]
		}
	}
</script>

<style scoped lang="scss">
	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.vxe-button.type--button.theme--my-purple,
	.vxe-button.type--button.theme--my-purple:hover {
		color: #fff;
	}

	.vxe-button.type--button.theme--my-purple {
		background-color: #800080;
	}

	.vxe-button.type--button.theme--my-purple:active {
		background-color: #a50aa5;
	}

	.my-green {
		color: #008000;
	}

	.my-primary {
		color: #3196ff;
	}

	.my-success {
		color: #67c23a;
	}

	.my-info {
		color: #909399;
	}

	.my-warning {
		color: #e6a23c;
	}

	.my-danger {
		color: #f56c6c;
	}

	.el-tag+.el-tag {
		margin-left: 10px;
	}

	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}

	.custom-tree-node {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		padding-right: 8px;
	}

	.item {
		margin-top: 10px;
		margin-right: 40px;
	}

	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}

	.transition-box {
		margin-bottom: 10px;
		width: 200px;
		height: 100px;
		border-radius: 4px;
		background-color: #409EFF;
		text-align: center;
		color: #fff;
		padding: 40px 20px;
		box-sizing: border-box;
		margin-right: 20px;
	}
</style>
