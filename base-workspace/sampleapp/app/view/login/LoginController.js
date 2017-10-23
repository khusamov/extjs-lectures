
Ext.define('SampleApp.view.login.LoginController', {

    extend: 'Ext.app.ViewController',
	alias: 'controller.login',
	
	onLoginClick() {
		this.fireViewEvent('loginclose');
		this.getView().close();
	}

});