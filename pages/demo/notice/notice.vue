<template>
	<el-tabs value="alert" tab-position="left">
		<el-tab-pane name="alert">
			<span slot="label">警告<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/alert')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基本用法</el-divider>
				<el-alert title="成功提示的文案" type="success">
				</el-alert>
				<el-alert title="消息提示的文案" type="info">
				</el-alert>
				<el-alert title="警告提示的文案" type="warning">
				</el-alert>
				<el-alert title="错误提示的文案" type="error">
				</el-alert>
				<el-divider content-position="left">主题</el-divider>
				<el-alert title="成功提示的文案" type="success" effect="dark">
				</el-alert>
				<el-alert title="消息提示的文案" type="info" effect="dark">
				</el-alert>
				<el-alert title="警告提示的文案" type="warning" effect="dark">
				</el-alert>
				<el-alert title="错误提示的文案" type="error" effect="dark">
				</el-alert>
				<el-divider content-position="left">自定义关闭按钮</el-divider>
				<el-alert title="不可关闭的 alert" type="success" :closable="false">
				</el-alert>
				<el-alert title="自定义 close-text" type="info" close-text="知道了">
				</el-alert>
				<el-alert title="设置了回调的 alert" type="warning" @close="hello">
				</el-alert>
				<el-divider content-position="left">带有 icon</el-divider>
				<el-alert title="成功提示的文案" type="success" show-icon>
				</el-alert>
				<el-alert title="消息提示的文案" type="info" show-icon>
				</el-alert>
				<el-alert title="警告提示的文案" type="warning" show-icon>
				</el-alert>
				<el-alert title="错误提示的文案" type="error" show-icon>
				</el-alert>
				<el-divider content-position="left">文字居中</el-divider>
				<el-alert title="成功提示的文案" type="success" center show-icon>
				</el-alert>
				<el-alert title="消息提示的文案" type="info" center show-icon>
				</el-alert>
				<el-alert title="警告提示的文案" type="warning" center show-icon>
				</el-alert>
				<el-alert title="错误提示的文案" type="error" center show-icon>
				</el-alert>
				<el-divider content-position="left">带有辅助性文字介绍</el-divider>
				<el-alert title="带辅助性文字介绍" type="success"
					description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
				</el-alert>
				<el-divider content-position="left">带有 icon 和辅助性文字介绍</el-divider>
				<el-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
				</el-alert>
				<el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
				</el-alert>
				<el-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
				</el-alert>
				<el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
				</el-alert>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="loading">
			<span slot="label">加载<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/loading')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">区域加载</el-divider>
				<el-table v-loading="loading" :data="tableData" style="width: 100%">
					<el-table-column prop="date" label="日期" width="180">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="180">
					</el-table-column>
					<el-table-column prop="address" label="地址">
					</el-table-column>
				</el-table>
				<el-divider content-position="left">自定义</el-divider>
				<el-table v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
					element-loading-background="rgba(0, 0, 0, 0.8)" :data="tableData" style="width: 100%">
					<el-table-column prop="date" label="日期" width="180">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="180">
					</el-table-column>
					<el-table-column prop="address" label="地址">
					</el-table-column>
				</el-table>
				<el-divider content-position="left">整页加载</el-divider>
				<el-button type="primary" @click="openFullScreen1" v-loading.fullscreen.lock="fullscreenLoading">
					指令方式
				</el-button>
				<el-button type="primary" @click="openFullScreen2">
					服务方式
				</el-button>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="message">
			<span slot="label">消息提示<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/message')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-button :plain="true" @click="open">打开消息提示</el-button>
				<el-button :plain="true" @click="openVn">VNode</el-button>
				<el-divider content-position="left">不同状态</el-divider>
				<el-button :plain="true" @click="open2">成功</el-button>
				<el-button :plain="true" @click="open3">警告</el-button>
				<el-button :plain="true" @click="open1">消息</el-button>
				<el-button :plain="true" @click="open4">错误</el-button>
				<el-divider content-position="left">可关闭</el-divider>
				<el-button :plain="true" @click="open1c">消息</el-button>
				<el-button :plain="true" @click="open2c">成功</el-button>
				<el-button :plain="true" @click="open3c">警告</el-button>
				<el-button :plain="true" @click="open4c">错误</el-button>
				<el-divider content-position="left">文字居中</el-divider>
				<el-button :plain="true" @click="openCenter">文字居中</el-button>
				<el-divider content-position="left">使用 HTML 片段</el-divider>
				<el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="messagebox">
			<span slot="label">弹窗<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/message-box')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">消息提示</el-divider>
				<el-button type="text" @click="mbopen">点击打开 Message Box</el-button>
				<el-divider content-position="left">确认消息</el-divider>
				<el-button type="text" @click="mbopen1">点击打开 Message Box</el-button>
				<el-divider content-position="left">提交内容</el-divider>
				<el-button type="text" @click="mbopen2">点击打开 Message Box</el-button>
				<el-divider content-position="left">自定义</el-divider>
				<el-button type="text" @click="mbopen3">点击打开 Message Box</el-button>
				<el-divider content-position="left">使用 HTML 片段</el-divider>
				<el-button type="text" @click="mbopen4">点击打开 Message Box</el-button>
				<el-divider content-position="left">区分取消与关闭</el-divider>
				<el-button type="text" @click="mbopen5">点击打开 Message Box</el-button>
				<el-divider content-position="left">居中布局</el-divider>
				<el-button type="text" @click="mbopen6">点击打开 Message Box</el-button>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="notification">
			<span slot="label">通知<i
					@click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/notification')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基本用法</el-divider>
				<el-button plain @click="ntopen1">
					可自动关闭
				</el-button>
				<el-button plain @click="ntopen2">
					不会自动关闭
				</el-button>
				<el-divider content-position="left">带有倾向性</el-divider>
				<el-button plain @click="nt1open1">
					成功
				</el-button>
				<el-button plain @click="nt1open2">
					警告
				</el-button>
				<el-button plain @click="nt1open3">
					消息
				</el-button>
				<el-button plain @click="nt1open4">
					错误
				</el-button>
				<el-divider content-position="left">自定义弹出位置</el-divider>
				<el-button plain @click="nt2open1">
					右上角
				</el-button>
				<el-button plain @click="nt2open2">
					右下角
				</el-button>
				<el-button plain @click="nt2open3">
					左下角
				</el-button>
				<el-button plain @click="nt2open4">
					左上角
				</el-button>
				<el-divider content-position="left">带有偏移</el-divider>
				<el-button plain @click="nt3open">
					偏移的消息
				</el-button>
				<el-divider content-position="left">使用 HTML 片段</el-divider>
				<el-button plain @click="nt4open">
					使用 HTML 片段
				</el-button>
				<el-divider content-position="left">隐藏关闭按钮</el-divider>
				<el-button plain @click="nt5open">
					隐藏关闭按钮
				</el-button>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="dialog">
			<span slot="label">对话框<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/dialog')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<!-- ios 中如果不设置 append-to-body 弹窗会被遮罩遮挡。手机中弹窗默认 50% 宽度太窄，可设置为 90% -->
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基本用法</el-divider>
				<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
				<el-dialog title="提示" append-to-body :visible.sync="dialogVisible" width="30%"
					:before-close="handleClose">
					<span>这是一段信息</span>
					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
					</span>
				</el-dialog>
				<el-divider content-position="left">自定义内容</el-divider>
				<el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

				<el-dialog title="收货地址" width="90%" append-to-body :visible.sync="dialogTableVisible">
					<el-table :data="gridData">
						<el-table-column property="date" label="日期" width="150"></el-table-column>
						<el-table-column property="name" label="姓名" width="200"></el-table-column>
						<el-table-column property="address" label="地址"></el-table-column>
					</el-table>
				</el-dialog>
				<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

				<el-dialog title="收货地址" append-to-body :visible.sync="dialogFormVisible">
					<el-form :model="form">
						<el-form-item label="活动名称" :label-width="formLabelWidth">
							<el-input v-model="form.name" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="活动区域" :label-width="formLabelWidth">
							<el-select v-model="form.region" placeholder="请选择活动区域">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogFormVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
					</div>
				</el-dialog>
				<el-divider content-position="left">嵌套的 Dialog</el-divider>
				<el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>

				<el-dialog title="外层 Dialog" append-to-body :visible.sync="outerVisible">
					<el-dialog width="30%" title="内层 Dialog" append-to-body :visible.sync="innerVisible">
					</el-dialog>
					<div slot="footer" class="dialog-footer">
						<el-button @click="outerVisible = false">取 消</el-button>
						<el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
					</div>
				</el-dialog>
				<el-divider content-position="left">居中布局</el-divider>
				<el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

				<el-dialog title="提示" append-to-body :visible.sync="centerDialogVisible" width="30%" center>
					<span>需要注意的是内容是默认不居中的</span>
					<span slot="footer" class="dialog-footer">
						<el-button @click="centerDialogVisible = false">取 消</el-button>
						<el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
					</span>
				</el-dialog>
				<el-divider content-position="left">拖拽</el-divider>
				<el-button type="text" @click="dragDialogVisible = true">点击打开可拖拽 Dialog</el-button>
				<mc-drag-dialog title="提示" append-to-body :visible.sync="dragDialogVisible">
					<span>长按标题栏拖拽</span>
				</mc-drag-dialog>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="tooltip">
			<span slot="label">文字提示<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/tooltip')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<div class="box">
					<div class="top">
						<el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
							<el-button>上左</el-button>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
							<el-button>上边</el-button>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
							<el-button>上右</el-button>
						</el-tooltip>
					</div>
					<div class="left">
						<el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
							<el-button>左上</el-button>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
							<el-button>左边</el-button>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
							<el-button>左下</el-button>
						</el-tooltip>
					</div>

					<div class="right">
						<el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
							<el-button>右上</el-button>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
							<el-button>右边</el-button>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
							<el-button>右下</el-button>
						</el-tooltip>
					</div>
					<div class="bottom">
						<el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
							<el-button>下左</el-button>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
							<el-button>下边</el-button>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
							<el-button>下右</el-button>
						</el-tooltip>
					</div>
				</div>
				<el-divider content-position="left">主题</el-divider>
				<el-tooltip content="Top center" placement="top">
					<el-button>Dark</el-button>
				</el-tooltip>
				<el-tooltip content="Bottom center" placement="bottom" effect="light">
					<el-button>Light</el-button>
				</el-tooltip>
				<el-divider content-position="left">更多 Content</el-divider>
				<el-tooltip placement="top">
					<div slot="content">多行信息<br />第二行信息</div>
					<el-button>Top center</el-button>
				</el-tooltip>
				<el-divider content-position="left">高级扩展</el-divider>
				<el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
					<el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
				</el-tooltip>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="popover">
			<span slot="label">弹出框<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/popover')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-popover placement="top-start" title="标题" width="200" trigger="hover"
					content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<el-button slot="reference">hover 激活</el-button>
				</el-popover>

				<el-popover placement="bottom" title="标题" width="200" trigger="click"
					content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<el-button slot="reference">click 激活</el-button>
				</el-popover>

				<el-popover ref="popover" placement="right" title="标题" width="200" trigger="focus"
					content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				</el-popover>
				<el-button v-popover:popover>focus 激活</el-button>

				<el-popover placement="bottom" title="标题" width="200" trigger="manual"
					content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" v-model="visible">
					<el-button slot="reference" @click="visible = !visible">手动激活</el-button>
				</el-popover>
				<el-divider content-position="left">嵌套信息</el-divider>
				<el-popover placement="right" width="400" trigger="click">
					<el-table :data="gridData">
						<el-table-column width="150" property="date" label="日期"></el-table-column>
						<el-table-column width="100" property="name" label="姓名"></el-table-column>
						<el-table-column width="300" property="address" label="地址"></el-table-column>
					</el-table>
					<el-button slot="reference">click 激活</el-button>
				</el-popover>
				<el-divider content-position="left">嵌套操作</el-divider>
				<el-popover placement="top" width="160" v-model="visible1">
					<p>这是一段内容这是一段内容确定删除吗？</p>
					<div style="text-align: right; margin: 0">
						<el-button size="mini" type="text" @click="visible1 = false">取消</el-button>
						<el-button type="primary" size="mini" @click="visible1 = false">确定</el-button>
					</div>
					<el-button slot="reference">删除</el-button>
				</el-popover>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="popconfirm">
			<span slot="label">气泡确认框<i
					@click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/popconfirm')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-popconfirm title="这是一段内容确定删除吗？">
					<el-button slot="reference">删除</el-button>
				</el-popconfirm>
				<el-divider content-position="left">自定义</el-divider>
				<el-popconfirm confirm-button-text='好的' cancel-button-text='不用了' icon="el-icon-info" icon-color="red"
					title="这是一段内容确定删除吗？">
					<el-button slot="reference">删除</el-button>
				</el-popconfirm>
			</scroll-view>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	export default {
		data() {
			return {
				visible1: false,
				visible: false,
				disabled: false,
				centerDialogVisible: false,
				dragDialogVisible: false,
				outerVisible: false,
				innerVisible: false,
				gridData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px',
				dialogVisible: false,
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				loading: true,
				fullscreenLoading: false
			}
		},
		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			nt5open() {
				this.$notify.success({
					title: 'Info',
					message: '这是一条没有关闭按钮的消息',
					showClose: false
				});
			},
			nt4open() {
				this.$notify({
					title: 'HTML 片段',
					dangerouslyUseHTMLString: true,
					message: '<strong>这是 <i>HTML</i> 片段</strong>'
				});
			},
			nt3open() {
				this.$notify({
					title: '偏移',
					message: '这是一条带有偏移的提示消息',
					offset: 100
				});
			},
			nt2open1() {
				this.$notify({
					title: '自定义位置',
					message: '右上角弹出的消息'
				});
			},

			nt2open2() {
				this.$notify({
					title: '自定义位置',
					message: '右下角弹出的消息',
					position: 'bottom-right'
				});
			},

			nt2open3() {
				this.$notify({
					title: '自定义位置',
					message: '左下角弹出的消息',
					position: 'bottom-left'
				});
			},

			nt2open4() {
				this.$notify({
					title: '自定义位置',
					message: '左上角弹出的消息',
					position: 'top-left'
				});
			},
			nt1open1() {
				this.$notify({
					title: '成功',
					message: '这是一条成功的提示消息',
					type: 'success'
				});
			},

			nt1open2() {
				this.$notify({
					title: '警告',
					message: '这是一条警告的提示消息',
					type: 'warning'
				});
			},

			nt1open3() {
				this.$notify.info({
					title: '消息',
					message: '这是一条消息的提示消息'
				});
			},

			nt1open4() {
				this.$notify.error({
					title: '错误',
					message: '这是一条错误的提示消息'
				});
			},
			ntopen1() {
				const h = this.$createElement;

				this.$notify({
					title: '标题名称',
					message: h('i', {
						style: 'color: teal'
					}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
				});
			},

			ntopen2() {
				this.$notify({
					title: '提示',
					message: '这是一条不会自动关闭的消息',
					duration: 0
				});
			},
			mbopen6() {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			mbopen5() {
				this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
						distinguishCancelAndClose: true,
						confirmButtonText: '保存',
						cancelButtonText: '放弃修改'
					})
					.then(() => {
						this.$message({
							type: 'info',
							message: '保存修改'
						});
					})
					.catch(action => {
						this.$message({
							type: 'info',
							message: action === 'cancel' ?
								'放弃保存并离开页面' : '停留在当前页面'
						})
					});
			},
			mbopen4() {
				this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
					dangerouslyUseHTMLString: true
				});
			},
			mbopen3() {
				const h = this.$createElement;
				this.$msgbox({
					title: '消息',
					message: h('p', null, [
						h('span', null, '内容可以是 '),
						h('i', {
							style: 'color: teal'
						}, 'VNode')
					]),
					showCancelButton: true,
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					beforeClose: (action, instance, done) => {
						if (action === 'confirm') {
							instance.confirmButtonLoading = true;
							instance.confirmButtonText = '执行中...';
							setTimeout(() => {
								done();
								setTimeout(() => {
									instance.confirmButtonLoading = false;
								}, 300);
							}, 3000);
						} else {
							done();
						}
					}
				}).then(action => {
					this.$message({
						type: 'info',
						message: 'action: ' + action
					});
				});
			},
			mbopen2() {
				this.$prompt('请输入邮箱', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
					inputErrorMessage: '邮箱格式不正确'
				}).then(({
					value
				}) => {
					this.$message({
						type: 'success',
						message: '你的邮箱是: ' + value
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					});
				});
			},
			mbopen1() {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			mbopen() {
				this.$alert('这是一段内容', '标题名称', {
					confirmButtonText: '确定',
					callback: action => {
						this.$message({
							type: 'info',
							message: `action: ${ action }`
						});
					}
				});
			},
			openHTML() {
				this.$message({
					dangerouslyUseHTMLString: true,
					message: '<strong>这是 <i>HTML</i> 片段</strong>'
				});
			},
			openCenter() {
				this.$message({
					message: '居中的文字',
					center: true
				});
			},
			open1c() {
				this.$message({
					showClose: true,
					message: '这是一条消息提示'
				});
			},

			open2c() {
				this.$message({
					showClose: true,
					message: '恭喜你，这是一条成功消息',
					type: 'success'
				});
			},

			open3c() {
				this.$message({
					showClose: true,
					message: '警告哦，这是一条警告消息',
					type: 'warning'
				});
			},

			open4c() {
				this.$message({
					showClose: true,
					message: '错了哦，这是一条错误消息',
					type: 'error'
				});
			},
			open1() {
				this.$message('这是一条消息提示');
			},
			open2() {
				this.$message({
					message: '恭喜你，这是一条成功消息',
					type: 'success'
				});
			},

			open3() {
				this.$message({
					message: '警告哦，这是一条警告消息',
					type: 'warning'
				});
			},

			open4() {
				this.$message.error('错了哦，这是一条错误消息');
			},
			open() {
				this.$message('这是一条消息提示');
			},

			openVn() {
				const h = this.$createElement;
				this.$message({
					message: h('p', null, [
						h('span', null, '内容可以是 '),
						h('i', {
							style: 'color: teal'
						}, 'VNode')
					])
				});
			},
			openFullScreen1() {
				this.fullscreenLoading = true;
				setTimeout(() => {
					this.fullscreenLoading = false;
				}, 2000);
			},
			openFullScreen2() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				setTimeout(() => {
					loading.close();
				}, 2000);
			}
		}
	}
</script>

<style scoped>
	.box {
		width: 400px;

		.top {
			text-align: center;
		}

		.left {
			float: left;
			width: 60px;
		}

		.right {
			float: right;
			width: 60px;
		}

		.bottom {
			clear: both;
			text-align: center;
		}

		.item {
			margin: 4px;
		}

		.left .el-tooltip__popper,
		.right .el-tooltip__popper {
			padding: 8px 10px;
		}
	}
</style>
