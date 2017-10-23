
Ext.define('SampleApp.view.login.Login', {

	extend: 'Ext.window.Window',
	controller: 'login',
	requires: ['SampleApp.view.login.LoginController'],

	title: 'Аутентификация',
	closable: false,
	bodyPadding: 10,
	autoShow: true,

	items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
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