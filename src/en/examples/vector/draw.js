import 'ol/ol.css';
import DragDrop from 'ol/interaction/DragAndDrop';
//! [import-draw]
import Draw from 'ol/interaction/draw';
//! [import-draw]
import GeoJSON from 'ol/format/geojson';
import Map from 'ol/map';
import Modify from 'ol/interaction/modify';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import View from 'ol/view';

const map = new Map({
  target: 'map-container',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

const source = new VectorSource();

const layer = new VectorLayer({
  source: source
});
map.addLayer(layer);

map.addInteraction(new DragDrop({
  source: source,
  formatConstructors: [GeoJSON]
}));

map.addInteraction(new Modify({
  source: source
}));

//! [draw]
map.addInteraction(new Draw({
  type: 'Polygon',
  source: source
}));
//! [draw]
