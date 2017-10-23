
Ext.define('SampleApp.view.main.Main', {

    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'SampleApp.view.main.MainController',
        'SampleApp.view.main.MainModel'
	],

	layout: 'fit',
	
	items: [{
		xtype: 'grid',
		title: 'Personnel',
		bind: '{personnelStore}',
		columns: [{ 
			text: 'Name',  
			dataIndex: 'name', 
			flex: 1,
			editor: 'textfield'
		}, { 
			text: 'Email', 
			dataIndex: 'email', 
			flex: 1,
			editor: 'textfield' 
		}, { 
			text: 'Phone', 
			dataIndex: 'phone', 
			flex: 1,
			editor: 'textfield'
		}],
		selModel: 'rowmodel',
		plugins: {
			 ptype: 'rowediting',
			 clicksToEdit: 1
		}
	}]

});