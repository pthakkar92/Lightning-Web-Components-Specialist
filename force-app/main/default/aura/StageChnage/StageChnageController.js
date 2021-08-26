({
	doInit : function(component, event, helper) {
         if(component.get("v.LeadObj.Status") == 'Working - Contacted'){
            	component.set("v.isShow", true);
         }
	}
})