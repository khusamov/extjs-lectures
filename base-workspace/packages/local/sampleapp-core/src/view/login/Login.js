
Ext.define('SampleApp.core.view.login.Login', {

	extend: 'Ext.window.Window',
	controller: 'login',
	viewModel: 'login',
	requires: [
        'SampleApp.core.view.login.LoginModel',
        'SampleApp.core.view.login.LoginController'
    ],

	title: 'Аутентификация',
	closable: false,
	bodyPadding: 10,
	autoShow: true,

	items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'login',
            fieldLabel: 'Login',
            allowBlank: false,
            bind: '{login}'
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            bind: '{password}'
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }

});