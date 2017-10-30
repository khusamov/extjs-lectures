
Ext.define('SampleApp.core.view.login.LoginController', {

    extend: 'Ext.app.ViewController',
	alias: 'controller.login',
	
	onLoginClick() {
		this.checkLoginAndPassword({ 
			login: this.getViewModel().get('login'), 
			password: this.getViewModel().get('password')
		}).then(result => {
			if (result.success) {
				this.onLoginSuccess();
			} else {
				this.onLoginFailure();
			}
		}).otherwise(console.error);
	},

	privates: {

		onLoginSuccess() {
			this.fireViewEvent('loginclose');
			this.getView().close();
		},
	
		onLoginFailure() {
			alert('Ошибка проверки логина')
		},
	
		checkLoginAndPassword({ login, password }) {
			return Ext.Ajax.request({
				method: 'post',
				url: 'http://localhost:3000/login',
				params: { login, password }
			}).then(response => {
				return Ext.decode(response.responseText);
			});
		}

	}

});