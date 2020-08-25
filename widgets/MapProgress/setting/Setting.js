///////////////////////////////////////////////////////////////////////////
// Robert Scheitlin - Map Progress Indicator Settings
///////////////////////////////////////////////////////////////////////////

define([
    'dojo/_base/declare',
    'dojo/_base/html',
    'dojo/_base/lang',
    'dojo/on',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/dom-attr',
    'jimu/BaseWidgetSetting',
    'jimu/dijit/ImageChooser',
    'esri/dijit/util/busyIndicator',
    'jimu/utils',
    'dijit/registry',
    'dojo/dom-style',
    'dojo/query'
  ],
  function(
    declare,
    html,
    lang,
    on,
    _WidgetsInTemplateMixin,
    domAttr,
    BaseWidgetSetting,
    ImageChooser,
    busyUtil,
    utils,
    registry,
    domStyle,
    query
  ) {
    return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {
      //these two properties is defined in the BaseWidget
      baseClass: 'mapprogress-setting',
      imageChooser: null,

      postCreate: function(){
        this.inherited(arguments);
        this.imageChooser = new ImageChooser({
          cropImage: false,
          displayImg: this.showImageChooser,
          showSelfImg: false,
          format: [ImageChooser.GIF, ImageChooser.JPEG, ImageChooser.PNG],
          goldenWidth: 100,
          goldenHeight: 60
        });
        this.imageChooser.startup();
        html.addClass(this.imageChooser.domNode, 'img-chooser');
        html.place(this.imageChooser.domNode, this.imageChooserBase, 'replace');
        domAttr.set(this.mappreview, 'src', this.folderUrl + "images/Map.jpg");
        this.own(on(this.imageChooser, 'imageChange', lang.hitch(this, this.updateMapBusyImg)));
      },

      updateMapBusyImg: function(imageData, fileProperty){
        if(this.handle){
          this.handle.destroy();
        }
        this.handle = busyUtil.create({
          target: this.mappreview,
          imageUrl: imageData,
          backgroundOpacity: 0.01
        });
        this.handle.show();
      },

      startup: function() {
        this.inherited(arguments);
        if(this.handle){
          this.handle.destroy();
        }
        this.setConfig(this.config);
      },

      setConfig: function(config) {
        this.config = config;
        if (this.config.mapprogressimage){
          var thumbnailValue = utils.processUrlInWidgetConfig(this.config.mapprogressimage, this.folderUrl);
          html.setAttr(this.showImageChooser, 'src', thumbnailValue);
          this.imageChooser.imageData = thumbnailValue;
        }
        if(query('[id^="dojox_widget_Standby_"]')[0]){
          query('[id^="dojox_widget_Standby_"]').forEach(function(node){
            html.destroy(node);
          });
        }
        this.handle = busyUtil.create({
          target: this.mappreview,
          imageUrl: this.imageChooser.imageData,
          backgroundOpacity: 0.01
        });
        this.handle.show();
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

      getConfig: function() {
        this.config.mapprogressimage = this.imageChooser.imageData;
        if(this.handle){
          this.handle.destroy();
        }
        return this.config;
      }
    });
  });
