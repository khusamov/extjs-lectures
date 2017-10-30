
Ext.define('SampleApp.view.main.MainModel', {
	
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.main',
	requires: ['SampleApp.model.Personnel'],

	stores: {
		personnelStore: {
			model: 'SampleApp.model.Personnel',
			autoLoad: true,
			autoSync: true
		}
	}

});