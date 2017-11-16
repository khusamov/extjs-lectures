

Ext.define('SampleApp.view.personnel.PersonnelModel', {
	
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.personnel',
	requires: ['SampleApp.model.Personnel'],

	stores: {
		personnelStore: {
			model: 'SampleApp.model.Personnel',
			autoLoad: true,
			autoSync: true,
			pageSize: 100
		}
	}

});