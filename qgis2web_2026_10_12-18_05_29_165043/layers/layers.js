var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nilamel_Ward_Boundary_1 = new ol.format.GeoJSON();
var features_Nilamel_Ward_Boundary_1 = format_Nilamel_Ward_Boundary_1.readFeatures(json_Nilamel_Ward_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nilamel_Ward_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nilamel_Ward_Boundary_1.addFeatures(features_Nilamel_Ward_Boundary_1);
var lyr_Nilamel_Ward_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nilamel_Ward_Boundary_1, 
                style: style_Nilamel_Ward_Boundary_1,
                popuplayertitle: 'Nilamel_Ward_Boundary',
                interactive: true,
    title: 'Nilamel_Ward_Boundary<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_0.png" /> BENGLAMKUNNU<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_1.png" /> CHERATTUKUZHY<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_2.png" /> COLLEGE<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_3.png" /> ELIKKUNNAMUKAL<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_4.png" /> KAITHODU<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_5.png" /> MULAYAKKONAM<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_6.png" /> MURUKKUMON<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_7.png" /> NEDUMPACHA<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_8.png" /> PUTHUSSERY<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_9.png" /> TOWN<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_10.png" /> VALIYAVAZHY<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_11.png" /> VELLAMPARA<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_12.png" /> VELLARY<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_13.png" /> VEYKAL<br />\
    <img src="styles/legend/Nilamel_Ward_Boundary_1_14.png" /> <br />' });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                popuplayertitle: 'Clipped',
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_2_0.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/Clipped_2_1.png" /> Migmatite Complex<br />' });
var format_geomorphologyclip_3 = new ol.format.GeoJSON();
var features_geomorphologyclip_3 = format_geomorphologyclip_3.readFeatures(json_geomorphologyclip_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphologyclip_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphologyclip_3.addFeatures(features_geomorphologyclip_3);
var lyr_geomorphologyclip_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphologyclip_3, 
                style: style_geomorphologyclip_3,
                popuplayertitle: 'geomorphology clip',
                interactive: true,
    title: 'geomorphology clip<br />\
    <img src="styles/legend/geomorphologyclip_3_0.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/geomorphologyclip_3_1.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/geomorphologyclip_3_2.png" /> Residual Mount<br />\
    <img src="styles/legend/geomorphologyclip_3_3.png" /> Valley Fill<br />\
    <img src="styles/legend/geomorphologyclip_3_4.png" /> <br />' });
var format_clippedroad_4 = new ol.format.GeoJSON();
var features_clippedroad_4 = format_clippedroad_4.readFeatures(json_clippedroad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedroad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedroad_4.addFeatures(features_clippedroad_4);
var lyr_clippedroad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedroad_4, 
                style: style_clippedroad_4,
                popuplayertitle: ' clipped road',
                interactive: true,
                title: '<img src="styles/legend/clippedroad_4.png" />  clipped road'
            });
var format_clipdrainage_5 = new ol.format.GeoJSON();
var features_clipdrainage_5 = format_clipdrainage_5.readFeatures(json_clipdrainage_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clipdrainage_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clipdrainage_5.addFeatures(features_clipdrainage_5);
var lyr_clipdrainage_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clipdrainage_5, 
                style: style_clipdrainage_5,
                popuplayertitle: 'clip drainage',
                interactive: true,
    title: 'clip drainage<br />\
    <img src="styles/legend/clipdrainage_5_0.png" /> 1<br />\
    <img src="styles/legend/clipdrainage_5_1.png" /> 2<br />\
    <img src="styles/legend/clipdrainage_5_2.png" /> 3<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Nilamel_Ward_Boundary_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_geomorphologyclip_3.setVisible(true);lyr_clippedroad_4.setVisible(true);lyr_clipdrainage_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Nilamel_Ward_Boundary_1,lyr_Clipped_2,lyr_geomorphologyclip_3,lyr_clippedroad_4,lyr_clipdrainage_5];
lyr_Nilamel_Ward_Boundary_1.set('fieldAliases', {'WARD_NO': 'WARD_NO', 'WARD_NAME': 'WARD_NAME', 'LOCALBODY': 'LOCALBODY', 'DISTRICT': 'DISTRICT', });
lyr_Clipped_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_geomorphologyclip_3.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_clippedroad_4.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_clipdrainage_5.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_Nilamel_Ward_Boundary_1.set('fieldImages', {'WARD_NO': 'Range', 'WARD_NAME': 'TextEdit', 'LOCALBODY': 'TextEdit', 'DISTRICT': 'TextEdit', });
lyr_Clipped_2.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_geomorphologyclip_3.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_clippedroad_4.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_clipdrainage_5.set('fieldImages', {'fid': 'TextEdit', 'ORDER1': 'Range', });
lyr_Nilamel_Ward_Boundary_1.set('fieldLabels', {'WARD_NO': 'no label', 'WARD_NAME': 'no label', 'LOCALBODY': 'no label', 'DISTRICT': 'no label', });
lyr_Clipped_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_geomorphologyclip_3.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_clippedroad_4.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_clipdrainage_5.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', });
lyr_clipdrainage_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});