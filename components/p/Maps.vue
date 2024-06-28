<template>
  <div id="map" class="w-full h-96"></div>
</template>

<script setup>
import L from 'leaflet';
import useCasesStore from '~/stores/CasesStore';

const casesStore = useCasesStore();
const { maps } = storeToRefs(casesStore);

let map;
let markersLayer = L.layerGroup();

const initializeMap = () => {
  map = L.map('map').setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  markersLayer.addTo(map);
};

const updateMarkers = () => {
  markersLayer.clearLayers();

  if (!maps.value) return;
  maps.value.forEach(country => {
    const { confirmed, deaths, recovered, region } = country;
    const { name, lat, long } = region;

    const marker = L.marker([lat, long]);
    marker.bindPopup(`
      <strong>${name}</strong><br>
      Total Confirmed: ${confirmed}<br>
      Total Deaths: ${deaths}<br>
      Total Recovered: ${recovered}
    `);

    markersLayer.addLayer(marker);
  });
};

onMounted(async () => {
  initializeMap();
  await casesStore.getAllCovidCase();
  updateMarkers();
});

watch(maps, updateMarkers);
</script>
