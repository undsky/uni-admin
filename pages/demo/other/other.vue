<template>
	<el-tabs value="countto" tab-position="left">
		<el-tab-pane name="countto">
			<span slot="label">数字滚动<i @click="$utils.navigateTo('https://github.com/PanJiaChen/vue-countTo')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<div class='countto-container'>
					<div class="countto-example-item">
						<el-divider content-position="left">simple example</el-divider>
						<code>&lt;count-to :startVal=&#x27;0&#x27; :endVal=&#x27;2018&#x27;
							:duration=4000&gt;&lt;/count-to&gt;</code>
						<count-to ref='example1' class='countto-example1' :start-val=startVal1 :end-val='endVal1'
							:duration=4000></count-to>
						<div class='countto-example-btn' @click='start1'>start</div>
						<div class='countto-example-btn' @click='changeExampleEndVal'>change end-val</div>
						<div class='countto-example-btn' @click='incrementalUpdate'>incremental update</div>
					</div>
					<div class="countto-example-item">
						<el-divider content-position="left">count down example</el-divider>
						<code> &lt;count-to :startVal=&#x27;2017&#x27; :endVal=&#x27;0&#x27;
							:duration=8000&gt;&lt;/count-to&gt;</code>
						<count-to ref='example2' class='countto-example2' :start-val='2017' :end-val=0 :duration=8000>
						</count-to>
						<div class='countto-example-btn' @click='start2'>start</div>
					</div>
					<div class="countto-example-item">
						<el-divider content-position="left">custom example</el-divider>
						<count-to ref='example3' class='countto-example3' :start-val='_startVal' :end-val='_endVal'
							:duration='_duration' :decimals='_decimals' :separator='_separator' :prefix='_prefix'
							:suffix='_suffix' :autoplay=false>
						</count-to>
						<div>
							<label class="countto-label" for="startValInput">startVal: <input class="countto-input"
									type="number" v-model.number='setStartVal' name='startValInput' /></label>
							<label class="countto-label" for="endValInput">endVal: <input class="countto-input"
									type="number" v-model.number='setEndVal' name='endVaInput' /></label>
							<label class="countto-label" for="durationInput">duration: <input class="countto-input"
									type="number" v-model.number='setDuration' name='durationInput' /></label>
							<div class="countto-startBtn countto-example-btn" @click='start3'>start</div>
							<div class="countto-pause-resume-btn countto-example-btn" @click='pauseResume'>pause/resume
							</div>
							<br />
							<label class="countto-label" for="decimalsInput">decimals: <input class="countto-input"
									type="number" v-model.number='setDecimals' name='decimalsInput' /></label>
							<label class="countto-label" for="separatorInput">separator: <input class="countto-input"
									v-model='setSeparator' name='separatorInput' /></label>
							<label class="countto-label" for="prefixInput">prefix: <input class="countto-input"
									v-model='setPrefix' name='prefixInput' /></label>
							<label class="countto-label" for="suffixInput">suffix: <input class="countto-input"
									v-model='setSuffix' name='suffixInput' /></label>
						</div>
						<code>&lt;count-to :start-val=&#x27;{{_startVal}}&#x27; :end-val=&#x27;{{_endVal}}&#x27;
							:duration=&#x27;{{_duration}}&#x27; :decimals=&#x27;{{_decimals}}&#x27;
							:separator=&#x27;{{_separator}}&#x27; :prefix=&#x27;{{_prefix}}&#x27;
							:suffix=&#x27;{{_suffix}}&#x27; :autoplay=false&gt;</code>
					</div>
				</div>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="breadcrumb">
			<span slot="label">面包屑<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/breadcrumb')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
					<el-breadcrumb-item>活动列表</el-breadcrumb-item>
					<el-breadcrumb-item>活动详情</el-breadcrumb-item>
				</el-breadcrumb>
				<el-divider content-position="left">图标分隔符</el-divider>
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>活动管理</el-breadcrumb-item>
					<el-breadcrumb-item>活动列表</el-breadcrumb-item>
					<el-breadcrumb-item>活动详情</el-breadcrumb-item>
				</el-breadcrumb>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="pageheader">
			<span slot="label">页头<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/page-header')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础</el-divider>
				<el-page-header @back="goBack" content="详情页面">
				</el-page-header>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="dropdown">
			<span slot="label">下拉菜单<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/dropdown')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-dropdown>
					<span class="el-dropdown-link">
						下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item disabled>双皮奶</el-dropdown-item>
						<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-divider content-position="left">触发对象</el-divider>
				<el-dropdown>
					<el-button type="primary">
						更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-dropdown split-button type="primary" @click="handleClick">
					更多菜单
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-divider content-position="left">触发方式</el-divider>
				<el-row class="block-col-2">
					<el-col :span="12">
						<span class="demonstration">hover 激活</span>
						<el-dropdown>
							<span class="el-dropdown-link">
								下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
								<el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
					<el-col :span="12">
						<span class="demonstration">click 激活</span>
						<el-dropdown trigger="click">
							<span class="el-dropdown-link">
								下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
								<el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
				</el-row>
				<el-divider content-position="left">菜单隐藏方式</el-divider>
				<el-dropdown :hide-on-click="false">
					<span class="el-dropdown-link">
						下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item disabled>双皮奶</el-dropdown-item>
						<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-divider content-position="left">指令事件</el-divider>
				<el-dropdown @command="handleCommand">
					<span class="el-dropdown-link">
						下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="a">黄金糕</el-dropdown-item>
						<el-dropdown-item command="b">狮子头</el-dropdown-item>
						<el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
						<el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
						<el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-divider content-position="left">不同尺寸</el-divider>
				<el-dropdown split-button type="primary">
					默认尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

				<el-dropdown size="medium" split-button type="primary">
					中等尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

				<el-dropdown size="small" split-button type="primary">
					小型尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

				<el-dropdown size="mini" split-button type="primary">
					超小尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="step">
			<span slot="label">步骤条<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/steps')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-steps :active="active" finish-status="success">
					<el-step title="步骤 1"></el-step>
					<el-step title="步骤 2"></el-step>
					<el-step title="步骤 3"></el-step>
				</el-steps>

				<el-button style="margin-top: 12px;" @click="next">下一步</el-button <el-divider content-position="left">
				</el-divider>
				<el-divider content-position="left">含状态步骤条</el-divider>
				<el-steps :space="200" :active="1" finish-status="success">
					<el-step title="已完成"></el-step>
					<el-step title="进行中"></el-step>
					<el-step title="步骤 3"></el-step>
				</el-steps>
				<el-divider content-position="left">有描述的步骤条</el-divider>
				<el-steps :active="1">
					<el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
					<el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
					<el-step title="步骤 3" description="这段就没那么长了"></el-step>
				</el-steps>
				<el-divider content-position="left">居中的步骤条</el-divider>
				<el-steps :active="2" align-center>
					<el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
					<el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
					<el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
					<el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
				</el-steps>
				<el-divider content-position="left">带图标的步骤条</el-divider>
				<el-steps :active="1">
					<el-step title="步骤 1" icon="el-icon-edit"></el-step>
					<el-step title="步骤 2" icon="el-icon-upload"></el-step>
					<el-step title="步骤 3" icon="el-icon-picture"></el-step>
				</el-steps>
				<el-divider content-position="left">竖式步骤条</el-divider>
				<div style="height: 300px;">
					<el-steps direction="vertical" :active="1">
						<el-step title="步骤 1"></el-step>
						<el-step title="步骤 2"></el-step>
						<el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
					</el-steps>
				</div>
				<el-divider content-position="left">简洁风格的步骤条</el-divider>
				<el-steps :active="1" simple>
					<el-step title="步骤 1" icon="el-icon-edit"></el-step>
					<el-step title="步骤 2" icon="el-icon-upload"></el-step>
					<el-step title="步骤 3" icon="el-icon-picture"></el-step>
				</el-steps>

				<el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
					<el-step title="步骤 1"></el-step>
					<el-step title="步骤 2"></el-step>
					<el-step title="步骤 3"></el-step>
				</el-steps>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="card">
			<span slot="label">卡片<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/card')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>卡片名称</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<div v-for="o in 4" :key="o" class="text item">
						{{'列表内容 ' + o }}
					</div>
				</el-card>
				<el-divider content-position="left">简单卡片</el-divider>
				<el-card class="box-card">
					<div v-for="o in 4" :key="o" class="text item">
						{{'列表内容 ' + o }}
					</div>
				</el-card>
				<el-divider content-position="left">带图片</el-divider>
				<el-row>
					<el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
						<el-card :body-style="{ padding: '0px' }">
							<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
								class="image">
							<div style="padding: 14px;">
								<span>好吃的汉堡</span>
								<div class="bottom clearfix">
									<time class="time">{{ currentDate }}</time>
									<el-button type="text" class="button">操作按钮</el-button>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
				<el-divider content-position="left">卡片阴影</el-divider>
				<el-row :gutter="12">
					<el-col :span="8">
						<el-card shadow="always">
							总是显示
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover">
							鼠标悬浮时显示
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="never">
							从不显示
						</el-card>
					</el-col>
				</el-row>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="carousel">
			<span slot="label">走马灯<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/carousel')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-row :gutter="24">
					<el-col :span="12">
						<span class="demonstration">默认 Hover 指示器触发</span>
						<el-carousel :autoplay="false" height="150px">
							<el-carousel-item v-for="item in 4" :key="item">
								<h3 class="small">{{ item }}</h3>
							</el-carousel-item>
						</el-carousel>
					</el-col>
					<el-col :span="12">
						<span class="demonstration">Click 指示器触发</span>
						<el-carousel trigger="click" height="150px">
							<el-carousel-item v-for="item in 4" :key="item">
								<h3 class="small">{{ item }}</h3>
							</el-carousel-item>
						</el-carousel>
					</el-col>
				</el-row>
				<el-divider content-position="left">指示器</el-divider>
				<el-carousel indicator-position="outside">
					<el-carousel-item v-for="item in 4" :key="item">
						<h3>{{ item }}</h3>
					</el-carousel-item>
				</el-carousel>
				<el-divider content-position="left">切换箭头</el-divider>
				<el-carousel :interval="5000" arrow="always">
					<el-carousel-item v-for="item in 4" :key="item">
						<h3>{{ item }}</h3>
					</el-carousel-item>
				</el-carousel>
				<el-divider content-position="left">卡片化</el-divider>
				<el-carousel :interval="4000" type="card" height="200px">
					<el-carousel-item v-for="item in 6" :key="item">
						<h3 class="medium">{{ item }}</h3>
					</el-carousel-item>
				</el-carousel>
				<el-divider content-position="left">方向</el-divider>
				<el-carousel height="200px" direction="vertical" :autoplay="false">
					<el-carousel-item v-for="item in 3" :key="item">
						<h3 class="medium">{{ item }}</h3>
					</el-carousel-item>
				</el-carousel>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="collapse">
			<span slot="label">折叠面板<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/collapse')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-collapse v-model="activeNames" @change="handleChange">
					<el-collapse-item title="一致性 Consistency" name="1">
						<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
						<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
					</el-collapse-item>
					<el-collapse-item title="反馈 Feedback" name="2">
						<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
						<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
					</el-collapse-item>
					<el-collapse-item title="效率 Efficiency" name="3">
						<div>简化流程：设计简洁直观的操作流程；</div>
						<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
						<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
					</el-collapse-item>
					<el-collapse-item title="可控 Controllability" name="4">
						<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
						<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
					</el-collapse-item>
				</el-collapse>
				<el-divider content-position="left">手风琴效果</el-divider>
				<el-collapse v-model="activeName" accordion>
					<el-collapse-item title="一致性 Consistency" name="1">
						<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
						<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
					</el-collapse-item>
					<el-collapse-item title="反馈 Feedback" name="2">
						<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
						<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
					</el-collapse-item>
					<el-collapse-item title="效率 Efficiency" name="3">
						<div>简化流程：设计简洁直观的操作流程；</div>
						<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
						<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
					</el-collapse-item>
					<el-collapse-item title="可控 Controllability" name="4">
						<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
						<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
					</el-collapse-item>
				</el-collapse>
				<el-divider content-position="left">自定义面板标题</el-divider>
				<el-collapse accordion>
					<el-collapse-item>
						<template slot="title">
							一致性 Consistency<i class="header-icon el-icon-info"></i>
						</template>
						<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
						<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
					</el-collapse-item>
					<el-collapse-item title="反馈 Feedback">
						<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
						<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
					</el-collapse-item>
					<el-collapse-item title="效率 Efficiency">
						<div>简化流程：设计简洁直观的操作流程；</div>
						<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
						<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
					</el-collapse-item>
					<el-collapse-item title="可控 Controllability">
						<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
						<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
					</el-collapse-item>
				</el-collapse>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="timeline">
			<span slot="label">时间线<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/timeline')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<div class="radio">
					排序：
					<el-radio-group v-model="reverse">
						<el-radio :label="true">倒序</el-radio>
						<el-radio :label="false">正序</el-radio>
					</el-radio-group>
				</div>

				<el-timeline :reverse="reverse">
					<el-timeline-item v-for="(activity, index) in activities" :key="index"
						:timestamp="activity.timestamp">
						{{activity.content}}
					</el-timeline-item>
				</el-timeline>
				<el-divider content-position="left">⾃定义节点样式</el-divider>
				<el-timeline>
					<el-timeline-item v-for="(activity, index) in activities1" :key="index" :icon="activity.icon"
						:type="activity.type" :color="activity.color" :size="activity.size"
						:timestamp="activity.timestamp">
						{{activity.content}}
					</el-timeline-item>
				</el-timeline>
				<el-divider content-position="left">⾃定义时间戳</el-divider>
				<el-timeline>
					<el-timeline-item timestamp="2018/4/12" placement="top">
						<el-card>
							<h4>更新 Github 模板</h4>
							<p>王小虎 提交于 2018/4/12 20:46</p>
						</el-card>
					</el-timeline-item>
					<el-timeline-item timestamp="2018/4/3" placement="top">
						<el-card>
							<h4>更新 Github 模板</h4>
							<p>王小虎 提交于 2018/4/3 20:46</p>
						</el-card>
					</el-timeline-item>
					<el-timeline-item timestamp="2018/4/2" placement="top">
						<el-card>
							<h4>更新 Github 模板</h4>
							<p>王小虎 提交于 2018/4/2 20:46</p>
						</el-card>
					</el-timeline-item>
				</el-timeline>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="divider">
			<span slot="label">分割线<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/divider')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<div>
					<span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
					<el-divider></el-divider>
					<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
				</div>
				<el-divider content-position="left">设置文案</el-divider>
				<div>
					<span>头上一片晴天，心中一个想念</span>
					<el-divider content-position="left">少年包青天</el-divider>
					<span>饿了别叫妈, 叫饿了么</span>
					<el-divider><i class="el-icon-mobile-phone"></i></el-divider>
					<span>为了无法计算的价值</span>
					<el-divider content-position="right">阿里云</el-divider>
				</div>
				<el-divider content-position="left">垂直分割</el-divider>
				<div>
					<span>雨纷纷</span>
					<el-divider direction="vertical"></el-divider>
					<span>旧故里</span>
					<el-divider direction="vertical"></el-divider>
					<span>草木深</span>
				</div>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="backtop">
			<span slot="label">回到顶部<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/backtop')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main scroll-backtop" scroll-y>
				<div style="height: 2000px;">
					Scroll down to see the bottom-right button.
				</div>
				<el-backtop target=".scroll-backtop>.uni-scroll-view>.uni-scroll-view"></el-backtop>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="drawer">
			<span slot="label">抽屉<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/drawer')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基本用法</el-divider>
				<el-radio-group v-model="direction">
					<el-radio label="ltr">从左往右开</el-radio>
					<el-radio label="rtl">从右往左开</el-radio>
					<el-radio label="ttb">从上往下开</el-radio>
					<el-radio label="btt">从下往上开</el-radio>
				</el-radio-group>

				<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
					点我打开
				</el-button>

				<el-drawer append-to-body title="我是标题" :visible.sync="drawer" :direction="direction"
					:before-close="handleClose1">
					<span>我来啦!</span>
				</el-drawer>
				<el-divider content-position="left">不添加 Title</el-divider>
				<el-button @click="drawer1 = true" type="primary" style="margin-left: 16px;">
					点我打开
				</el-button>

				<el-drawer append-to-body title="我是标题" :visible.sync="drawer1" :with-header="false">
					<span>我来啦!</span>
				</el-drawer>
				<el-divider content-position="left">自定义内容</el-divider>
				<el-button type="text" @click="table = true">打开嵌套表格的 Drawer</el-button>
				<el-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</el-button>
				<el-drawer append-to-body title="我嵌套了表格!" :visible.sync="table" direction="rtl" size="50%">
					<el-table :data="gridData">
						<el-table-column property="date" label="日期" width="150"></el-table-column>
						<el-table-column property="name" label="姓名" width="200"></el-table-column>
						<el-table-column property="address" label="地址"></el-table-column>
					</el-table>
				</el-drawer>

				<el-drawer append-to-body title="我嵌套了 Form !" :before-close="handleClose" :visible.sync="dialog"
					direction="ltr" custom-class="demo-drawer" ref="drawer">
					<div class="demo-drawer__content">
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
						<div class="demo-drawer__footer">
							<el-button @click="cancelForm">取 消</el-button>
							<el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">
								{{ loading ? '提交中 ...' : '确 定' }}
							</el-button>
						</div>
					</div>
				</el-drawer>
				<el-divider content-position="left">多层嵌套</el-divider>
				<el-button @click="drawer2 = true" type="primary" style="margin-left: 16px;">
					点我打开
				</el-button>

				<el-drawer append-to-body title="我是外面的 Drawer" :visible.sync="drawer2" size="50%">
					<div>
						<el-button @click="innerDrawer = true">打开里面的!</el-button>
						<el-drawer append-to-body title="我是里面的" :append-to-body="true" :before-close="handleClose2"
							:visible.sync="innerDrawer">
							<p>_(:зゝ∠)_</p>
						</el-drawer>
					</div>
				</el-drawer>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="descriptions">
			<span slot="label">描述列表<i
					@click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/descriptions')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-descriptions title="用户信息">
					<el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
					<el-descriptions-item label="手机号">18100000000</el-descriptions-item>
					<el-descriptions-item label="居住地">苏州市</el-descriptions-item>
					<el-descriptions-item label="备注">
						<el-tag size="small">学校</el-tag>
					</el-descriptions-item>
					<el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
				</el-descriptions>
				<el-divider content-position="left">不同尺寸</el-divider>
				<el-radio-group v-model="size">
					<el-radio label="">默认</el-radio>
					<el-radio label="medium">中等</el-radio>
					<el-radio label="small">小型</el-radio>
					<el-radio label="mini">超小</el-radio>
				</el-radio-group>

				<el-descriptions class="margin-top" title="带边框列表" :column="3" :size="size" border>
					<template slot="extra">
						<el-button type="primary" size="small">操作</el-button>
					</template>
					<el-descriptions-item>
						<template slot="label">
							<i class="el-icon-user"></i>
							用户名
						</template>
						kooriookami
					</el-descriptions-item>
					<el-descriptions-item>
						<template slot="label">
							<i class="el-icon-mobile-phone"></i>
							手机号
						</template>
						18100000000
					</el-descriptions-item>
					<el-descriptions-item>
						<template slot="label">
							<i class="el-icon-location-outline"></i>
							居住地
						</template>
						苏州市
					</el-descriptions-item>
					<el-descriptions-item>
						<template slot="label">
							<i class="el-icon-tickets"></i>
							备注
						</template>
						<el-tag size="small">学校</el-tag>
					</el-descriptions-item>
					<el-descriptions-item>
						<template slot="label">
							<i class="el-icon-office-building"></i>
							联系地址
						</template>
						江苏省苏州市吴中区吴中大道 1188 号
					</el-descriptions-item>
				</el-descriptions>

				<el-descriptions class="margin-top" title="无边框列表" :column="3" :size="size">
					<template slot="extra">
						<el-button type="primary" size="small">操作</el-button>
					</template>
					<el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
					<el-descriptions-item label="手机号">18100000000</el-descriptions-item>
					<el-descriptions-item label="居住地">苏州市</el-descriptions-item>
					<el-descriptions-item label="备注">
						<el-tag size="small">学校</el-tag>
					</el-descriptions-item>
					<el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
				</el-descriptions>
				<el-divider content-position="left">垂直列表</el-divider>
				<el-descriptions title="垂直带边框列表" direction="vertical" :column="4" border>
					<el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
					<el-descriptions-item label="手机号">18100000000</el-descriptions-item>
					<el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
					<el-descriptions-item label="备注">
						<el-tag size="small">学校</el-tag>
					</el-descriptions-item>
					<el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
				</el-descriptions>

				<el-descriptions class="margin-top" title="垂直无边框列表" :column="4" direction="vertical">
					<el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
					<el-descriptions-item label="手机号">18100000000</el-descriptions-item>
					<el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
					<el-descriptions-item label="备注">
						<el-tag size="small">学校</el-tag>
					</el-descriptions-item>
					<el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
				</el-descriptions>
				<el-divider content-position="left">自定义样式</el-divider>
				<el-descriptions title="自定义样式列表" :column="3" border>
					<el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">
						kooriookami</el-descriptions-item>
					<el-descriptions-item label="手机号">18100000000</el-descriptions-item>
					<el-descriptions-item label="居住地">苏州市</el-descriptions-item>
					<el-descriptions-item label="备注">
						<el-tag size="small">学校</el-tag>
					</el-descriptions-item>
					<el-descriptions-item label="联系地址" :contentStyle="{'text-align': 'right'}">江苏省苏州市吴中区吴中大道 1188 号
					</el-descriptions-item>
				</el-descriptions>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="result">
			<span slot="label">结果<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/result')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-row>
					<el-col :sm="12" :lg="6">
						<el-result icon="success" title="成功提示" subTitle="请根据提示进行操作">
							<template slot="extra">
								<el-button type="primary" size="medium">返回</el-button>
							</template>
						</el-result>
					</el-col>
					<el-col :sm="12" :lg="6">
						<el-result icon="warning" title="警告提示" subTitle="请根据提示进行操作">
							<template slot="extra">
								<el-button type="primary" size="medium">返回</el-button>
							</template>
						</el-result>
					</el-col>
					<el-col :sm="12" :lg="6">
						<el-result icon="error" title="错误提示" subTitle="请根据提示进行操作">
							<template slot="extra">
								<el-button type="primary" size="medium">返回</el-button>
							</template>
						</el-result>
					</el-col>
					<el-col :sm="12" :lg="6">
						<el-result icon="info" title="信息提示" subTitle="请根据提示进行操作">
							<template slot="extra">
								<el-button type="primary" size="medium">返回</el-button>
							</template>
						</el-result>
					</el-col>
				</el-row>
				<el-divider content-position="left">自定义内容</el-divider>
				<el-result title="404" subTitle="抱歉，请求错误">
					<template slot="icon">
						<el-image
							src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
						</el-image>
					</template>
					<template slot="extra">
						<el-button type="primary" size="medium">返回</el-button>
					</template>
				</el-result>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="calendar">
			<span slot="label">日历<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/calendar')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基本</el-divider>
				<el-calendar v-model="value">
				</el-calendar>
				<el-divider content-position="left">自定义内容</el-divider>
				<el-calendar>
					<template slot="dateCell" slot-scope="{date, data}">
						<p :class="data.isSelected ? 'is-selected' : ''">
							{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
						</p>
					</template>
				</el-calendar>
				<el-divider content-position="left">自定义范围</el-divider>
				<el-calendar :range="['2019-03-04', '2019-03-24']">
				</el-calendar>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="image">
			<span slot="label">图片<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/image')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<div class="block" v-for="fit in fits" :key="fit">
					<span class="demonstration">{{ fit }}</span>
					<el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
				</div>
				<el-divider content-position="left">占位内容</el-divider>
				<div class="block">
					<span class="demonstration">默认</span>
					<el-image :src="src"></el-image>
				</div>
				<div class="block">
					<span class="demonstration">自定义</span>
					<el-image :src="src">
						<div slot="placeholder" class="image-slot">
							加载中<span class="dot">...</span>
						</div>
					</el-image>
				</div>
				<el-divider content-position="left">加载失败</el-divider>
				<div class="block">
					<span class="demonstration">默认</span>
					<el-image></el-image>
				</div>
				<div class="block">
					<span class="demonstration">自定义</span>
					<el-image>
						<div slot="error" class="image-slot">
							<i class="el-icon-picture-outline"></i>
						</div>
					</el-image>
				</div>
				<el-divider content-position="left">懒加载</el-divider>
				<el-image v-for="(url,idx) in urls" :key="url" :src="url"></el-image>
				<el-divider content-position="left">大图预览</el-divider>
				<el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList">
				</el-image>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="transfer">
			<span slot="label">穿梭框<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/transfer')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">分页搜索</el-divider>
				<mc-transfer-paging width="300px" :props="tfProps" :currentPage="currentPage" :totalResult="totalResult"
					v-model="tfValue" :data="tfData" @search="tfSearch" @save="tfSave" :titles="tfTitles">
				</mc-transfer-paging>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="dragselect">
			<span slot="label">拖拽选择器<i
					@click="$utils.navigateTo('https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/DragSelect/index.vue')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<mc-drag-select v-model="dsValue" style="width:500px;" multiple placeholder="请选择">
					<el-option v-for="item in dsOptions" :key="item.value" :label="item.label" :value="item.value" />
				</mc-drag-select>

				<div style="margin-top:30px;">
					<el-tag v-for="item of dsValue" :key="item" style="margin-right:15px;">
						{{ item }}
					</el-tag>
				</div>
			</scroll-view>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	import countTo from 'vue-count-to';

	export default {
		components: {
			countTo
		},
		data() {
			return {
				dsValue: ['Apple', 'Banana', 'Orange'],
				dsOptions: [{
					value: 'Apple',
					label: 'Apple'
				}, {
					value: 'Banana',
					label: 'Banana'
				}, {
					value: 'Orange',
					label: 'Orange'
				}, {
					value: 'Pear',
					label: 'Pear'
				}, {
					value: 'Strawberry',
					label: 'Strawberry'
				}],
				tfProps: {
					key: 'key',
					label: 'label'
				},
				tfTitles: ['列表 1', '列表 2'],
				currentPage: 1,
				totalResult: 0,
				tfValue: [],
				tfData: [],
				src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
				srcList: [
					'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
					'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
				],
				urls: [
					'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
					'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
					'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
					'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
					'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
					'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
				],
				fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
				url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				value: new Date(),
				size: '',
				drawer2: false,
				innerDrawer: false,
				table: false,
				dialog: false,
				loading: false,
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
				formLabelWidth: '80px',
				timer: null,
				drawer1: false,
				drawer: false,
				direction: 'rtl',
				activities1: [{
					content: '支持使用图标',
					timestamp: '2018-04-12 20:46',
					size: 'large',
					type: 'primary',
					icon: 'el-icon-more'
				}, {
					content: '支持自定义颜色',
					timestamp: '2018-04-03 20:46',
					color: '#0bbd87'
				}, {
					content: '支持自定义尺寸',
					timestamp: '2018-04-03 20:46',
					size: 'large'
				}, {
					content: '默认样式的节点',
					timestamp: '2018-04-03 20:46'
				}],
				reverse: true,
				activities: [{
					content: '活动按期开始',
					timestamp: '2018-04-15'
				}, {
					content: '通过审核',
					timestamp: '2018-04-13'
				}, {
					content: '创建成功',
					timestamp: '2018-04-11'
				}],
				activeName: '1',
				activeNames: ['1'],
				active: 0,
				setStartVal: 0,
				setEndVal: 2017,
				setDuration: 4000,
				setDecimals: 0,
				setSeparator: ',',
				setSuffix: ' rmb',
				setPrefix: '¥ ',
				startVal1: 0,
				endVal1: 2017,
				currentDate: this.$utils.toDateString(new Date(), 'yyyy-MM-dd')
			}
		},
		computed: {
			_startVal() {
				if (this.setStartVal) {
					return this.setStartVal
				} else {
					return 0
				}
			},
			_endVal() {
				if (this.setEndVal) {
					return this.setEndVal
				} else {
					return 0
				}
			},
			_duration() {
				if (this.setDuration) {
					return this.setDuration
				} else {
					return 100
				}
			},
			_decimals() {
				if (this.setDecimals) {
					if (this.setDecimals < 0 || this.setDecimals > 20) {
						alert('digits argument must be between 0 and 20')
						return 0
					}
					return this.setDecimals
				} else {
					return 0
				}
			},
			_separator() {
				return this.setSeparator
			},
			_suffix() {
				return this.setSuffix
			},
			_prefix() {
				return this.setPrefix
			},
		},
		methods: {
			tfLoad: async function() {
				const data = [];
				const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
				cities.forEach((city, index) => {
					data.push({
						label: city,
						key: index
					});
				});

				this.tfData = data
				this.tfValue = [1, 3, 5]
			},
			tfSearch: async function({
				keyword,
				currentPage,
				pageSize
			}) {
				const {
					rows,
					total
				} = await this.$http.post('/ai', {
					keyword,
					currentPage,
					pageSize
				})
				this.currentPage = currentPage
				this.totalResult = result.total
				const {
					key
				} = this.tfProps

				this.tfData = rows.concat(this.tfData.filter(val => this.tfValue.includes(val[key]) && !this.$utils
					.find(rows, row => row[key] == val[key])))
			},
			tfSave: async function() {
				console.log(this.tfValue)
			},
			handleClose2(done) {
				this.$confirm('还有未保存的工作哦确定关闭吗？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			handleClose(done) {
				if (this.loading) {
					return;
				}
				this.$confirm('确定要提交表单吗？')
					.then(_ => {
						this.loading = true;
						this.timer = setTimeout(() => {
							done();
							// 动画关闭需要一定的时间
							setTimeout(() => {
								this.loading = false;
							}, 400);
						}, 2000);
					})
					.catch(_ => {});
			},
			cancelForm() {
				this.loading = false;
				this.dialog = false;
				clearTimeout(this.timer);
			},
			handleClose1(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			handleChange(val) {
				console.log(val);
			},
			next() {
				if (this.active++ > 2) this.active = 0;
			},
			handleCommand(command) {
				this.$message('click on item ' + command);
			},
			handleClick() {
				alert('button click');
			},
			goBack() {
				console.log('go back');
			},
			changeExampleEndVal() {
				this.endVal1 = this.endVal1 + 1000
			},
			incrementalUpdate() {
				this.startVal1 = this.endVal1
				this.endVal1 = this.endVal1 + 1000
			},
			callback() {
				console.log('callback')
			},
			start1() {
				this.$refs.example1.start();
			},
			start2() {
				this.$refs.example2.start();
			},
			start3() {
				this.$refs.example3.start();
			},
			pauseResume() {
				this.$refs.example3.pauseResume();
			}
		},
		onLoad: async function() {
			await this.tfLoad()
		}
	}
</script>

<style scoped>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 480px;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.demonstration {
		display: block;
		color: #8492a6;
		font-size: 14px;
		margin-bottom: 20px;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.el-dropdown {
		vertical-align: top;
	}

	.el-dropdown+.el-dropdown {
		margin-left: 15px;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.countto-container {
		width: 100%;
		margin-right: auto;
		margin-left: auto;
	}

	.countto-example-btn {
		display: inline-block;
		margin-bottom: 0;
		font-weight: 500;
		text-align: center;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		background-image: none;
		border: 1px solid transparent;
		white-space: nowrap;
		line-height: 1.5;
		padding: 4px 15px;
		font-size: 12px;
		border-radius: 4px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
		transition: all .3s cubic-bezier(.645, .045, .355, 1);
		position: relative;
		color: rgba(0, 0, 0, .65);
		background-color: #fff;
		border-color: #d9d9d9;
	}

	.countto-example-btn:hover {
		color: #4AB7BD;
		background-color: #fff;
		border-color: #4AB7BD;
	}

	.countto-example-item {
		margin-bottom: 80px;
	}

	.countto-example1 {
		font-size: 40px;
		color: #30B08F;
		display: block;
		margin: 10px 0;
	}

	.countto-example2 {
		font-size: 40px;
		color: #E65D6E;
		display: block;
		margin: 10px 0;
	}

	.countto-example3 {
		font-size: 50px;
		color: #F6416C;
		display: block;
		margin: 10px 0;
		text-align: center;
		font-size: 80px;
		font-weight: 500;
	}

	.countto-label {
		color: #2f4f4f;
		font-size: 16px;
		display: inline-block;
		margin: 15px 30px 15px 0;
	}

	.countto-input {
		position: relative;
		display: inline-block;
		padding: 4px 7px;
		width: 50px;
		height: 28px;
		cursor: text;
		font-size: 12px;
		line-height: 1.5;
		color: rgba(0, 0, 0, .65);
		background-color: #fff;
		background-image: none;
		border: 1px solid #d9d9d9;
		border-radius: 4px;
		-webkit-transition: all .3s;
		transition: all .3s;
	}

	.countto-startBtn {
		margin-left: 20px;
		font-size: 20px;
		color: #30B08F;
		background-color: #fff;
	}

	.countto-startBtn:hover {
		background-color: #30B08F;
		color: #fff;
		border-color: #30B08F;
	}

	.countto-pause-resume-btn {
		font-size: 20px;
		color: #E65D6E;
		background-color: #fff;
	}

	.countto-pause-resume-btn:hover {
		background-color: #E65D6E;
		color: #fff;
		border-color: #E65D6E;
	}

	.my-label {
		background: #E1F3D8;
	}

	.my-content {
		background: #FDE2E2;
	}

	.is-selected {
		color: #1989FA;
	}
</style>
