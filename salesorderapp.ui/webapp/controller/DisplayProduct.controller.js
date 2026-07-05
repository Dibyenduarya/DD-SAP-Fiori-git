sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
],
function (Controller, MessageToast, MessageBox) {
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
        },

        onUpdateProduct: function () {
            debugger;
            var oSelectedProductModel = this.getOwnerComponent().getModel("SelectedProductModel");
            var oSelectedProductData = oSelectedProductModel.getData();

        if (oSelectedProductData.Product_Text=="") {
            MessageBox.warning("Product Name can not be blank. Cannot update product.");
            MessageToast.show("Product Name can not be blank. Cannot update product.");
            return; 
        
        }
        
        
        },

        onMaxCapacityChange: function (oEvent) {
            var sValue = oEvent.getParameter("value");
            let iMaxLength = 7; // Set the maximum length to 7 digits
            if (sValue.length > iMaxLength) {
                MessageBox.warning("Maximum Capacity cannot exceed " + iMaxLength + " digits.");
                MessageToast.show("Maximum Capacity cannot exceed " + iMaxLength + " digits.");
                //oEvent.getSource().setValue(sValue.substring(0, iMaxLength)); // Trim the value to the maximum length
            } else
            if (sValue.length < 0) {
                MessageBox.warning("Maximum Capacity cannot be negative.");
                MessageToast.show("Maximum Capacity cannot be negative.");
                //oEvent.getSource().setValue(0); // Reset to 0 or any other default value
            }
        },

        onMaxCapacityLiveChange: function (oEvent) {
            var sValue = oEvent.getParameter("value");
            let iMaxLength = 7; // Set the maximum length to 7 digits
            if (sValue.length > iMaxLength) {
                MessageBox.warning("Maximum Capacity cannot exceed " + iMaxLength + " digits.");
                MessageToast.show("Maximum Capacity cannot exceed " + iMaxLength + " digits.");
                //oEvent.getSource().setValue(sValue.substring(0, iMaxLength)); // Trim the value to the maximum length
            } else
            {
                MessageToast.show("Maximum Capacity is within the limit of" + iMaxLength + " digits.");
                //oEvent.getSource().setValue(0); // Reset to 0 or any other default value
            }
        }   

    });
});
