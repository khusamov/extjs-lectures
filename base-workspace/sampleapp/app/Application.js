
Ext.define('SampleApp.Application', {

	extend: 'Ext.app.Application',
	requires: [
		'SampleApp.core.view.login.Login',
		'SampleApp.view.main.Main'
	],

	launch() {
		const loginWin = Ext.create('SampleApp.core.view.login.Login');
		loginWin.on('loginclose', 'onLoginClose', this);

	},

	onLoginClose() {
		this.setMainView('SampleApp.view.main.Main');
	}

});