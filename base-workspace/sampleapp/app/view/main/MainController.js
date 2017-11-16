
Ext.define('SampleApp.view.main.MainController', {

    extend: 'Ext.app.ViewController',
	alias: 'controller.main',
	requires: ['SampleApp.view.personnelCard.PersonnelCard'],
	
	onPersonnelItemClick(gridView, record) {
		let tabPanel = this.getView();

		let searchPersonnelCardTab = tabPanel.query(`personnelcard[personnelId=${record.get('id')}]`)[0];

		if (searchPersonnelCardTab) {
			tabPanel.setActiveTab(searchPersonnelCardTab);
		} else {
			// http://docs.sencha.com/extjs/6.2.0/classic/Ext.tab.Panel.html#method-add
			tabPanel.setActiveTab(tabPanel.add({
				xtype: 'personnelcard',
				personnelId: record.get('id'),
				closable: true
			}));
		}

	}

});