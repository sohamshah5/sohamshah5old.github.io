///////////////////////////////////////////////////////////////////////////
// Robert Scheitlin - Map Progress Indicator
///////////////////////////////////////////////////////////////////////////
/*global define, setTimeout, clearTimeout*/
define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/on',
    'jimu/BaseWidget',
    'esri/dijit/util/busyIndicator',
    'jimu/utils',
    'dojo/dom-style',
    'dojo/query'
  ],
  function(
    declare,
    lang,
    on,
    BaseWidget,
    busyUtil,
    utils,
    domStyle,
    query) {
    var clazz = declare([BaseWidget], {
      handle: null,
      name: 'MapProgress',
      timer: null,
      wabLoadingIndi: null,

      startup: function() {
        this.inherited(arguments);
        this.wabLoadingIndi = query('.map-loading')[0];
        domStyle.set(this.wabLoadingIndi, 'z-index', -1);
        var busyURL = utils.processUrlInWidgetConfig(this.config.mapprogressimage, this.folderUrl);
        this.handle = busyUtil.create({
          target: "map",
          imageUrl: busyURL,
          backgroundOpacity: 0.01
        });

        this.own(on(this.map, 'update-start', lang.hitch(this, function(){
          this.timer = setTimeout(lang.hitch(this, function () {
            this.timeoutClose();
          }), 5000);
          this.handle.show();
        })));

        this.own(on(this.map, 'update-end', lang.hitch(this, function(){
          clearTimeout(this.timer);
          this.handle.hide();
        })));
        if(query('[id^="dojox_widget_Standby_"]')[0]){
          var busyDoms = query('[id^="dojox_widget_Standby_"]');
          var busyDom = busyDoms[busyDoms.length - 1];
          if(busyDom.childNodes[0]){
            domStyle.set(busyDom.childNodes[0], 'cursor', 'default');
          }
          if(busyDom.childNodes[1]){
            domStyle.set(busyDom.childNodes[1], 'cursor', 'default');
          }
        }
      },

      onClose: function(){
        if(this.handle){
          this.handle.destroy();
        }
      },

      /*In case the map hangs and the update-end never fires*/
      timeoutClose: function(){
        if(this.handle){
          this.handle.hide();
        }
      },

      destroy: function() {
        this.inherited(arguments);
        if(this.wabLoadingIndi){
          domStyle.set(this.wabLoadingIndi, 'z-index', 'initial');
        }
      }

    });

    return clazz;
  });
