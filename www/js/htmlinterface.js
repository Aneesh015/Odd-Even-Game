window.org = {
  ekstep: {}
};
var RendererInterface = function() {
  var _parent = window.parent,
    _telemetryService = _parent.TelemetryService;
  return this.htmlInterfaceObj = {},
    this.htmlInterfaceObj.parent = _parent, this.htmlInterfaceObj.EkstepRendererAPI = _parent.EkstepRendererAPI, this.htmlInterfaceObj.dispatchEvent = function(eventName) {
      this.EkstepRendererAPI.dispatchEvent(eventName)
    }, this.htmlInterfaceObj.getcontentMetadata = function(contentId, cb) {
      this.EkstepRendererAPI.getContentMetadata(contentId, function() {
        cb && cb()
      })
    }, this.htmlInterfaceObj.getConfig = function() {
      this.EkstepRendererAPI.getGlobalConfig()
    }, this.htmlInterfaceObj.gotoEndPage = function() {
      this.dispatchEvent("renderer:content:end")
    }, this.htmlInterfaceObj.isMobile = function() {
      return !!window.cordova
    }, this.htmlInterfaceObj.exit = function() {
      this.parent.exitApp()
    }, this.htmlInterfaceObj.getTelemetryService = function() {
      return this.telemetryService
    }, this.htmlInterfaceObj.telemetryService = {
      interact: function(data) {
        _telemetryService.interact(data.type, data.id, data.extype, data.eks)
      },
      exdata: function(data) {
        _telemetryService.xapi(data)
      },
      response: function(data) {
        _telemetryService.interact(data.type, data.id, data.extype, data.eks)
      },
      assessmentStart: function(data) {
        return _telemetryService.assess(data.qid, data.subj, data.qlevel, data.data)
      },
      assess: function(event, data) {
        _telemetryService.assessEnd(event, data)
      },
      impression: function(data) {
        _telemetryService.navigate(data.stageid, data.stageto, data.data)
      }
    }, this.htmlInterfaceObj
};


var RendererInterface2=function(){return this.htmlInterfaceObj2={},this.htmlInterfaceObj2.gotoEndPage=function(){window.close()},this.htmlInterfaceObj2.telemetryService={interact:function(data){},exdata:function(data){},response:function(data){},assessmentStart:function(data){},assess:function(event,data){},impression:function(data){}},this.htmlInterfaceObj2};try{org.ekstep.contentrenderer=window.parent.org.ekstep.contentrenderer,org.ekstep.contentrenderer.interface=window.RI=new RendererInterface}catch(error){window.RI=new RendererInterface2}