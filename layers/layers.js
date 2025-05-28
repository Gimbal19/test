var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PerhutananSosial_1 = new ol.format.GeoJSON();
var features_PerhutananSosial_1 = format_PerhutananSosial_1.readFeatures(json_PerhutananSosial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerhutananSosial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerhutananSosial_1.addFeatures(features_PerhutananSosial_1);
var lyr_PerhutananSosial_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerhutananSosial_1, 
                style: style_PerhutananSosial_1,
                popuplayertitle: 'Perhutanan Sosial',
                interactive: true,
                title: '<img src="styles/legend/PerhutananSosial_1.png" /> Perhutanan Sosial'
            });
var format_KPHLBalikpapan_2 = new ol.format.GeoJSON();
var features_KPHLBalikpapan_2 = format_KPHLBalikpapan_2.readFeatures(json_KPHLBalikpapan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KPHLBalikpapan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KPHLBalikpapan_2.addFeatures(features_KPHLBalikpapan_2);
var lyr_KPHLBalikpapan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KPHLBalikpapan_2, 
                style: style_KPHLBalikpapan_2,
                popuplayertitle: 'KPHL Balikpapan',
                interactive: true,
                title: '<img src="styles/legend/KPHLBalikpapan_2.png" /> KPHL Balikpapan'
            });
var format_BatasKelurahan_3 = new ol.format.GeoJSON();
var features_BatasKelurahan_3 = format_BatasKelurahan_3.readFeatures(json_BatasKelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_3.addFeatures(features_BatasKelurahan_3);
var lyr_BatasKelurahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_3, 
                style: style_BatasKelurahan_3,
                popuplayertitle: 'Batas Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_3.png" /> Batas Kelurahan'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_PerhutananSosial_1.setVisible(true);lyr_KPHLBalikpapan_2.setVisible(true);lyr_BatasKelurahan_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_PerhutananSosial_1,lyr_KPHLBalikpapan_2,lyr_BatasKelurahan_3];
lyr_PerhutananSosial_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODE_PROV': 'KODE_PROV', 'KODE_KAB': 'KODE_KAB', 'PS_ID': 'PS_ID', 'SKEMA': 'SKEMA', 'NAMA_PROV': 'NAMA_PROV', 'NAMA_KAB': 'NAMA_KAB', 'NAMA_KEC': 'NAMA_KEC', 'NAMA_DESA': 'NAMA_DESA', 'LEMBAGA': 'LEMBAGA', 'NO_SK': 'NO_SK', 'TGL_SK': 'TGL_SK', 'Luas_HK': 'Luas_HK', 'LUAS_HL': 'LUAS_HL', 'LUAS_HPT': 'LUAS_HPT', 'LUAS_HP': 'LUAS_HP', 'LUAS_HPK': 'LUAS_HPK', 'LUAS_SK': 'LUAS_SK', 'Luas_Poli': 'Luas_Poli', 'Jml_KK': 'Jml_KK', 'KETERANGAN': 'KETERANGAN', 'Ket_Kode_P': 'Ket_Kode_P', 'Keliling': 'Keliling', 'Status': 'Status', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'foto': 'foto', });
lyr_KPHLBalikpapan_2.set('fieldAliases', {'PROV_UNIT': 'PROV_UNIT', 'ID_SPASIAL': 'ID_SPASIAL', 'JENIS_KPH': 'JENIS_KPH', 'ORGANISASI': 'ORGANISASI', 'UNIT_KPH': 'UNIT_KPH', 'KODEPROV': 'KODEPROV', 'NSKTAP': 'NSKTAP', 'TGLTAP': 'TGLTAP', 'LSTAP': 'LSTAP', 'NSKPROV': 'NSKPROV', 'TGLPROV': 'TGLPROV', 'NPERGUB': 'NPERGUB', 'TGLPERGUB': 'TGLPERGUB', 'NSKRPHJP': 'NSKRPHJP', 'TGLRPHJP': 'TGLRPHJP', 'REMARK': 'REMARK', });
lyr_BatasKelurahan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PerhutananSosial_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'KODE_PROV': 'TextEdit', 'KODE_KAB': 'TextEdit', 'PS_ID': 'TextEdit', 'SKEMA': 'TextEdit', 'NAMA_PROV': 'TextEdit', 'NAMA_KAB': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_DESA': 'TextEdit', 'LEMBAGA': 'TextEdit', 'NO_SK': 'TextEdit', 'TGL_SK': 'DateTime', 'Luas_HK': 'TextEdit', 'LUAS_HL': 'TextEdit', 'LUAS_HPT': 'TextEdit', 'LUAS_HP': 'TextEdit', 'LUAS_HPK': 'TextEdit', 'LUAS_SK': 'TextEdit', 'Luas_Poli': 'TextEdit', 'Jml_KK': 'TextEdit', 'KETERANGAN': 'TextEdit', 'Ket_Kode_P': 'TextEdit', 'Keliling': 'TextEdit', 'Status': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'foto': 'ExternalResource', });
lyr_KPHLBalikpapan_2.set('fieldImages', {'PROV_UNIT': 'TextEdit', 'ID_SPASIAL': 'TextEdit', 'JENIS_KPH': 'TextEdit', 'ORGANISASI': 'TextEdit', 'UNIT_KPH': 'TextEdit', 'KODEPROV': 'TextEdit', 'NSKTAP': 'TextEdit', 'TGLTAP': 'DateTime', 'LSTAP': 'TextEdit', 'NSKPROV': 'TextEdit', 'TGLPROV': 'DateTime', 'NPERGUB': 'TextEdit', 'TGLPERGUB': 'DateTime', 'NSKRPHJP': 'TextEdit', 'TGLRPHJP': 'DateTime', 'REMARK': 'TextEdit', });
lyr_BatasKelurahan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PerhutananSosial_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'KODE_PROV': 'hidden field', 'KODE_KAB': 'hidden field', 'PS_ID': 'no label', 'SKEMA': 'no label', 'NAMA_PROV': 'no label', 'NAMA_KAB': 'no label', 'NAMA_KEC': 'no label', 'NAMA_DESA': 'no label', 'LEMBAGA': 'no label', 'NO_SK': 'no label', 'TGL_SK': 'no label', 'Luas_HK': 'no label', 'LUAS_HL': 'hidden field', 'LUAS_HPT': 'hidden field', 'LUAS_HP': 'hidden field', 'LUAS_HPK': 'hidden field', 'LUAS_SK': 'no label', 'Luas_Poli': 'no label', 'Jml_KK': 'no label', 'KETERANGAN': 'no label', 'Ket_Kode_P': 'hidden field', 'Keliling': 'no label', 'Status': 'no label', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'foto': 'no label', });
lyr_KPHLBalikpapan_2.set('fieldLabels', {'PROV_UNIT': 'hidden field', 'ID_SPASIAL': 'hidden field', 'JENIS_KPH': 'hidden field', 'ORGANISASI': 'no label', 'UNIT_KPH': 'no label', 'KODEPROV': 'no label', 'NSKTAP': 'no label', 'TGLTAP': 'no label', 'LSTAP': 'no label', 'NSKPROV': 'no label', 'TGLPROV': 'no label', 'NPERGUB': 'no label', 'TGLPERGUB': 'no label', 'NSKRPHJP': 'no label', 'TGLRPHJP': 'no label', 'REMARK': 'no label', });
lyr_BatasKelurahan_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BatasKelurahan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});