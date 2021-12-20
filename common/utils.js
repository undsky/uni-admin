import XEUtils from 'xe-utils'

XEUtils.mixin({
	navigateTo(url, that) {
		if (0 == url.indexOf('http')) {
			window.open(url);
			return false;
		} else if (that) {
			that.$router.push(url);
		} else {
			uni.navigateTo({
				url
			})
		}
		return true;
	},
	timeago(diffDate, currDate) {
		let dateDiff = XEUtils.getDateDiff(diffDate, currDate || XEUtils.now())
		if (dateDiff.done) {
			if (dateDiff.time < 31536000000) {
				if (dateDiff.time < 2592000000) {
					if (dateDiff.time < 86400000) {
						if (dateDiff.time < 360000) {
							if (dateDiff.time < 60000) {
								return '刚刚'
							}
							return `${dateDiff.mm}分钟之前`
						}
						return `${dateDiff.HH}小时之前`
					}
					return `${dateDiff.dd}天之前`
				}
				return `${dateDiff.MM}个月之前`
			}
			return `${dateDiff.yyyy}年之前`
		}
		return diffDate
	},
	loadResources(array, callback) {
		const head = document.getElementsByTagName('head')[0];
		const loader = function(src, handler) {
			const exist = document.getElementById(src)
			if (exist) {
				handler()
			} else {
				const type = src.substr(src.lastIndexOf('.') + 1)
				let resource = document.createElement('js' == type ? 'script' : 'link');
				resource.id = src
				if ('js' == type) {
					resource.src = src
				} else {
					resource.media = 'all';
					resource.href = src;
					if ('css' == type) {
						resource.rel = 'stylesheet';
						resource.type = 'text/css';
					}
				}
				(head || document.body).appendChild(resource);
				resource.onload = resource.onreadystatechange = function() {
					resource.onreadystatechange = resource.onload = null;
					handler();
				}
			}
		};
		(function run() {
			if (array.length != 0) {
				loader(array.shift(), run);
			} else {
				callback && callback();
			}
		})();
	}
})

export default XEUtils
