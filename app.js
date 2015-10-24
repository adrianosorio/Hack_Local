var dojoConfig = { parseOnLoad: true };

var map;
    webMapId = "c592d579d0e548b29a743bee10478603";
    
require(["esri/map", "esri/arcgis/utils","esri/dijit/Search","esri/geometry/Extent","esri/graphic","esri/symbols/SimpleMarkerSymbol","esri/geometry/screenUtils","dojo/dom", "dojo/dom-construct","dojo/query", "dojo/_base/Color","dojo/domReady!"], function(Map, arcgisUtils, Search, Extent, Graphic, SimpleMarkerSymbol, screenUtils, dom, domConstruct, query, Color) {
  arcgisUtils.createMap(webMapId, "mapDiv").then(function (response) {
        map = response.map;
   
  //Search application function from arcgis 
  var search = new Search({
      map: map,
    }, dom.byId("search"));

    search.startup();
  
  });
});
