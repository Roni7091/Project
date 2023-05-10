/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/example/customers/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});