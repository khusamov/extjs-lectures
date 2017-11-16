
Ext.define('SampleApp.view.personnel.Personnel', {
	
		extend: 'Ext.grid.Panel',
		xtype: 'personnel',
		requires: [
			'Ext.toolbar.Paging',
			'SampleApp.view.personnel.PersonnelModel'
		],
		viewModel: 'personnel',
	
		bind: '{personnelStore}',
	
		columns: [{ 
			text: 'Name',  
			dataIndex: 'name', 
			flex: 2
		}, { 
			text: 'Email', 
			dataIndex: 'email',
			flex: 1
		}, { 
			text: 'Phone', 
			dataIndex: 'phone', 
			flex: 1
		}],
	
		bbar: {
			xtype: 'pagingtoolbar',
			displayInfo: true
		}
	
	});