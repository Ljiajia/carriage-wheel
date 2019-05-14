export default{
		callbackIndex: 0,
		callbackPrefix: '__MCL_CALLBACK_',
		schema: 'chelunJSBridge',
		invoke: function (namespace, api, param) {
			namespace = String(namespace);
			api = String(api);
			//拼接请求地址
			var url = this.schema + '://' + namespace + '/' + api;
			//拼接查询参数
			if (param && typeof param === 'object') {
				url += this._buildQuery(param);
			}
			//发送请求
			this._sendRequest(url);
		},
		_buildQuery: function (param) {
			var seg = [], frag = '', uriSeg = '';
			for (var attr in param) {
				if (param.hasOwnProperty(attr)) {
					if (param[attr] && typeof param[attr] === 'function') {
						var callbackNo = this._createCallbackNo(param[attr]);
						if (attr === 'callback') {
							frag = '#' + callbackNo;
						} else {
							seg.push(encodeURIComponent(attr) + '=' + callbackNo);
						}

					} else {
						var paramValue = String(param[attr]);
						seg.push(encodeURIComponent(attr) + '=' + encodeURIComponent(paramValue));
					}
				}
			}

			seg.length && (uriSeg += '?' + seg.join('&'));
			return uriSeg += frag;

		},
		//生成回调号
		_createCallbackNo: function (fn) {
			var callbackNo = this.callbackIndex;
			window[this.callbackPrefix + callbackNo] = fn;
			this.callbackIndex += 1;
			return callbackNo;
		},
		//发送客户端调用请求
		_sendRequest: function (uri) {
			var i = document.createElement('iframe');
			i.style.display = 'none';
			i.onload = function () {
				i.parentNode.removeChild(i);
			};
			i.src = uri;
			document.body.appendChild(i);
		}
	};

