// Configure the asset path to your desired directory for components and core
import { setArcgisAssetPath as setMapAssetPath } from '@arcgis/map-components/dist/components';
import esriConfig from "@arcgis/core/config.js";

setMapAssetPath("./assets");
esriConfig.assetsPath = "./assets";