
Ext.define('SampleApp.view.main.Main', {

	extend: 'Ext.tab.Panel',
	requires: [
		'SampleApp.view.main.MainModel',
		'SampleApp.view.personnel.Personnel',
		'SampleApp.view.main.MainController'
	],
	viewModel: 'main',
	controller: 'main',

	title: 'Управление компанией',

	items: [{
		title: 'Персонал компании',
		xtype: 'personnel',
		listeners: {
			itemclick: 'onPersonnelItemClick'
		}
	}, {
		title: 'Отдел кадров'
	}]
	
});