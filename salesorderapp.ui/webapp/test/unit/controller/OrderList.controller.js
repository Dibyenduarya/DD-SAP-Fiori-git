/*global QUnit*/

sap.ui.define([
	"salesorderapp/ui/controller/OrderList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("OrderList Controller");

	QUnit.test("I should test the OrderList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
