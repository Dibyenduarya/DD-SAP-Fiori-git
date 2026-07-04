sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("salesorderapp.ui.controller.OrderList", {
        onInit: function () {
            this._loadProducts();
        },

        _loadProducts: function () {
           
            var oODataModel= this.getOwnerComponent().getModel();
            var oProductModel = this.getOwnerComponent().getModel("ProductModel");
            
            oODataModel.read("/I_Product", {
                success: function (oData) {
                    oProductModel.setData(oData);
                },
                error: function (oError) {
                    console.error("Error loading products:", oError);
                }
            });
        },

        onItemPress: function (oEvent) {
             debugger;
            var oSelectedProductModel = this.getOwnerComponent().getModel("SelectedProductModel");
            var oItem=oEvent.getParameter("listItem");
            var oBindingContext = oItem.getBindingContext("ProductModel");
            var sProductId = oBindingContext.getProperty("Product");
           
            // In case you need the whole selected Object, you can retrieve it like this:

            var oSelectedObject=oBindingContext.getObject();
            oSelectedProductModel.setData(oSelectedObject);
            oSelectedProductModel.refresh(true);
debugger;
           // var sProductId = oSelectedObject.Product;

            // Navigate to the detail view with the selected product ID
            this.getOwnerComponent().getRouter().navTo("RouteProductDisplay", {
                ProductId: sProductId
            });
        }



    });
});
