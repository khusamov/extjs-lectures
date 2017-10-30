
Ext.define('SampleApp.view.main.Main', {

	extend: 'Ext.grid.Panel',
	requires: ['SampleApp.view.main.MainModel'],
	viewModel: 'main',

	title: 'Personnel',

	bind: '{personnelStore}',

	columns: [{ 
		text: 'Name',  
		dataIndex: 'name', 
		flex: 2,
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

});