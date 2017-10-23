
Ext.define('SampleApp.Application', {

   extend: 'Ext.app.Application',
	name: 'SampleApp',
	requires: [
		'SampleApp.view.main.Main', 
		'SampleApp.view.login.Login'
	],

	launch() {
		Ext.create('SampleApp.view.login.Login', {
			listeners: {
				loginclose: 'onLoginClose',
				scope: this
			}
		});
	},

	onLoginClose() {
		this.setMainView('SampleApp.view.main.Main');
	}

});