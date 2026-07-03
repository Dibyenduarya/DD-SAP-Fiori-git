sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("salesorderapp.ui.controller.DisplayProduct", {
        onInit: function () {
            
            var oSelectedProductModel = this.getOwnerComponent().getModel("SelectedProductModel");
            var oSelectedProductData = oSelectedProductModel.getData();
            debugger;
            this.getOwnerComponent().getRouter().getRoute("RouteProductDisplay").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            var oArgs = oEvent.getParameter("arguments");
            var sProductId = oArgs.ProductId;
            // Do something with the product ID
        }

    });
});
