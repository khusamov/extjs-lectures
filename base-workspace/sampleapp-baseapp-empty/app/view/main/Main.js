
Ext.define('SampleApp.view.main.Main', {

    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'SampleApp.view.main.MainController',
        'SampleApp.view.main.MainModel',
        'SampleApp.view.main.List'
	],
	
	items: [{
		
	}]

});