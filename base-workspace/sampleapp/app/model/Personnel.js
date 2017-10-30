
Ext.define('SampleApp.model.Personnel', {
	
	extend: 'Ext.data.Model',

	fields: ['name', 'email', 'phone'],

	proxy: {
		type: 'ajax',
		url: 'http://localhost:3000/personnel',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}

});