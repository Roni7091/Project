sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/Fragment"
 ], function (Controller, MessageToast, JSONModel, ResourceModel, Fragment ) {
    "use strict";
    return Controller.extend("com.example.project.controller.Main", {
      onInit : function () {
          
          var oData = {
             recipient : {
                name : "World"
             }
          };
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel);
         
          var i18nModel = new ResourceModel({
             bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
          });
          this.getView().setModel(i18nModel, "i18n");
       },
       onShowHello : function () {
          
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
          var sMsg = oBundle.getText([sRecipient]);
          
          MessageToast.show(sMsg);
       },
       nav: function(oEvent){
          var oRouter=this.getOwnerComponent().getRouter();
          oRouter.navTo("Nav");
       },
       onOpenDialog : function () {

			// create dialog lazily
			if (!this.pDialog) {
				this.pDialog = this.loadFragment({
					name: "com.example.project.view.HelloDialog"
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
		},

		onCloseDialog : function () {
			// note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		}
    });
 });