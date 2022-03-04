require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/FeatureLayer",
  "esri/request",
  "esri/widgets/Legend",
  "esri/widgets/Home",
  "esri/Graphic",
  "esri/geometry/Point",
  "esri/symbols/WebStyleSymbol",
  "esri/core/watchUtils",
  "esri/Camera",
  "esri/widgets/Expand",
  "esri/Basemap",
  "esri/widgets/BasemapGallery",
], function (
  Map,
  SceneView,
  FeatureLayer,
  esriRequest,
  Legend,
  Home,
  Graphic,
  Point,
  WebStyleSymbol,
  watchUtils,
  Camera,
  Expand,
  Basemap,
  BasemapGallery
) {
  $(document).ready(function () {
    // esriConfig.apiKey =
    //   "AAPKf949cbed369a44f39b69331b84532678kT3yB459KwCoIHLYpEz5u7_opDdHxBxwFe1fNnlGUlOhSXaiJ9RakzhlTMsSCs7U";
    const uniqueValueInfos = [
      {
        value: "Platane",
        symbol: {
          type: "web-style",
          name: "Platanus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Hêtre",
        symbol: {
          type: "web-style",
          name: "Fagus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Chêne",
        symbol: {
          type: "web-style",
          name: "Quercus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Marronnier",
        symbol: {
          type: "web-style",
          name: "Aesculus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Arbre aux quarante écus",
        symbol: {
          type: "web-style",
          name: "Hamamelis",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Cèdre",
        symbol: {
          type: "web-style",
          name: "Sequoiadendron",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Noisetier de Byzance",
        symbol: {
          type: "web-style",
          name: "Castanea",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Pterocarya",
        symbol: {
          type: "web-style",
          name: "Castanea",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Sequoia",
        symbol: {
          type: "web-style",
          name: "Sequoiadendron",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Erable",
        symbol: {
          type: "web-style",
          name: "Acer",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Plaqueminier",
        symbol: {
          type: "web-style",
          name: "Prunus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "If",
        symbol: {
          type: "web-style",
          name: "Rosa",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Orme de Sibérie",
        symbol: {
          type: "web-style",
          name: "Quercus Rubra",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Pin",
        symbol: {
          type: "web-style",
          name: "Pinus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Tulipier",
        symbol: {
          type: "web-style",
          name: "Prunus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Catalpa",
        symbol: {
          type: "web-style",
          name: "Philodendron",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Cyprès Chauve",
        symbol: {
          type: "web-style",
          name: "Taxodium",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Lilas de Perse",
        symbol: {
          type: "web-style",
          name: "Cornus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Magnolia",
        symbol: {
          type: "web-style",
          name: "Magnolia",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Micocoulier",
        symbol: {
          type: "web-style",
          name: "Aralia",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Arbre à Gutta-Percha",
        symbol: {
          type: "web-style",
          name: "Frangula",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Chicot du Canada",
        symbol: {
          type: "web-style",
          name: "Quercus Rubra",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Figuier",
        symbol: {
          type: "web-style",
          name: "Ficus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Libocèdre",
        symbol: {
          type: "web-style",
          name: "Liquidambar",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Mûrier",
        symbol: {
          type: "web-style",
          name: "Aralia",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Orme",
        symbol: {
          type: "web-style",
          name: "Ulmus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Saule",
        symbol: {
          type: "web-style",
          name: "Salix",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Sophora",
        symbol: {
          type: "web-style",
          name: "Juglans",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Amandier",
        symbol: {
          type: "web-style",
          name: "Prunus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Araucaria",
        symbol: {
          type: "web-style",
          name: "Pinus Sylvestris",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Arbre aux mouchoirs",
        symbol: {
          type: "web-style",
          name: "Crataegus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Aulne",
        symbol: {
          type: "web-style",
          name: "Alnus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Bouleau",
        symbol: {
          type: "web-style",
          name: "Betula",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Cedrele",
        symbol: {
          type: "web-style",
          name: "Cornus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Cryptomeria",
        symbol: {
          type: "web-style",
          name: "Pinus Sylvestris",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Frêne",
        symbol: {
          type: "web-style",
          name: "Fraxinus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Grenadier",
        symbol: {
          type: "web-style",
          name: "Rosa",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Metaséquoia",
        symbol: {
          type: "web-style",
          name: "Abies",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Noyer",
        symbol: {
          type: "web-style",
          name: "Parkinsonia",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Oranger des Osages",
        symbol: {
          type: "web-style",
          name: "Crataegus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Paulownia",
        symbol: {
          type: "web-style",
          name: "Cornus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Pistachier",
        symbol: {
          type: "web-style",
          name: "Rhododendron",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Robinier",
        symbol: {
          type: "web-style",
          name: "Acer Saccharum",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Savonnier",
        symbol: {
          type: "web-style",
          name: "Prunus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Sterculier",
        symbol: {
          type: "web-style",
          name: "Chilopsis",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Tamaris",
        symbol: {
          type: "web-style",
          name: "Cornus",
          styleName: "EsriRealisticTreesStyle"
        }
      },
      {
        value: "Tilleul",
        symbol: {
          type: "web-style",
          name: "Prunus",
          styleName: "EsriRealisticTreesStyle"
        }
      }
    ];
    const renderer = {
      type: "unique-value",
      field: "Nom",
      defaultSymbol: {
        type: "web-style",
        name: "Other",
        styleName: "EsriRealisticTreesStyle"
      },
      uniqueValueInfos: uniqueValueInfos,
      visualVariables: [
        {
          type: "size",
          field: "Hauteur",
          axis: "height",
          valueUnit: "meters",
          minSize: "24px",
          maxSize: "256px"
        }
        // {
        //   type: "size",
        //   field: "Circumference",
        //   axis: "depth",
        //   valueUnit: "centimeters",
        //   minSize: 120,
        //   maxSize: 600
        // }
      ]
    };
    const simpleRenderer = {
      type: "simple",
      symbol: {
        type: "simple-marker",
        size: 10,
        color: "#00796b",
        outline: {
          width: 1,
          color: "white"
        }
      }
    };

    const url =
      "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&q=&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";
    // Define the 'options' for the request
    const options = {
      query: {
        f: "json"
      },
      responseType: "json"
    };
    const map = new Map({
      basemap: "osm",
      ground: "world-elevation"
    });
    const view = new SceneView({
      container: "viewDiv",
      map: map,
      center: [2.235656468220481, 48.856610041966704],
      zoom: 12,
      highlightOptions: {
        color: "cyan"
      },
      qualityProfile: "high",
      environment: {
        atmosphere: {
          quality: "high"
        },
        weather: {
          type: "cloudy",
          cloudCover: 0.4
        }
      }
    });
    const homeWidget = new Home({
      view: view
    });
    view.ui.add(homeWidget, "top-right");
    const basemapGallery = new BasemapGallery({
      view: view,
      container: document.createElement("div"),
      source: [
        Basemap.fromId("streets-relief-vector"),
        Basemap.fromId("topo-vector"),
        Basemap.fromId("streets-navigation-vector"),
        Basemap.fromId("gray-vector"),
        Basemap.fromId("dark-gray-vector"),
        Basemap.fromId("osm"),
        Basemap.fromId("satellite"),
        Basemap.fromId("hybrid")
      ],
      activeBasemap: "osm"
    });
    const bgExpand = new Expand({
      view: view,
      content: basemapGallery
    });
    view.ui.add(bgExpand, "bottom-right");
    view.ui.remove("attribution");
    view.ui.move(["navigation-toggle", "compass", "zoom"], "top-right");
    const infoExpand = $("#info");
    const infoDiv = $("#infoDiv");
    infoExpand.click(function(){
      console.log("info");
      $(this).toggleClass("esri-icon-description");
      $(this).toggleClass("esri-icon-collapse");
      infoDiv.toggle();
    })
    const sunnyBtn = $("#Sunny");
    const cloudyBtn = $("#Cloudy");
    const rainyBtn = $("#Rainy");
    const foggyBtn = $("#Foggy");
    const btnWeather = $(".btn-weather");
    sunnyBtn.click(function() {
      console.log("Sunny");
      btnWeather.removeClass("active");
      $(this).addClass("active");
      view.environment.weather = {
         type: "sunny",
         cloudCover:  0
      }
    });
    cloudyBtn.click(function() {
      console.log("Cloudy");
      btnWeather.removeClass("active");
      $(this).addClass("active");
      view.environment.weather = {
         type: "cloudy",
         cloudCover:  0.4
      }  
    });
    rainyBtn.click(function() {
      console.log("Rainy");
      btnWeather.removeClass("active");
      $(this).addClass("active");
      view.environment.weather = {
         type: "rainy",
         cloudCover:  0.4
      }   
    });
    foggyBtn.click(function() {
      console.log("Foggy");
      btnWeather.removeClass("active");
      $(this).addClass("active");
      view.environment.weather = {
         type: "foggy",
         cloudCover:  0.6
      }   
    });
    const properties = [
      "resolution",
      "scale",
      "zoom",
      "camera.position.x",
      "camera.position.y",
      "camera.position.z",
      "camera.tilt",
      "camera.heading"
    ];
    const leftPanel = $("#leftPanel");
    const treeAtt = $("#treeAtt");
    const Msg = $("#Msg");
    const td1 = $("#tdNom");
    const td2 = $("#tdGenre");
    const td3 = $("#tdEspece");
    const td4 = $("#tdHauteur");
    const td5 = $("#tdCirconference");
    const td6 = $("#tdDate");
    const td7 = $("#tdArr");
    const td8 = $("#tdAdresse");
    const td9 = $("#tdDom");
    const lacInf = $("#lacInf");
    const ileBercy = $("#ileBercy");
    const parcBagatelle = $("#parcBagatelle");
    const buttesChaum = $("#buttesChaum");
    const squareLseMichel = $("#squareLseMichel");
    const squareChPeguy = $("#squareChPeguy");
    const parcMontsouris = $("#parcMontsouris");
    const pereLachaise = $("#pereLachaise");
    const sqEdVaillant = $("#sqEdVaillant");
    const sqButteChapRge = $("#sqButteChapRge");
    const sqBatignolles = $("#sqBatignolles");
    const pelousesGlCatroux = $("#pelousesGlCatroux");
    const preCatelan = $("#preCatelan");
    const grandeCascade = $("#grandeCascade");
    const sqTourStJac = $("#sqTourStJac");
    const jardChMars = $("#jardChMars");
    const jardTrocadero = $("#jardTrocadero");
    const jarSerresAut = $("#jarSerresAut");
    const sqStLamb = $("#sqStLamb");
    const sqReneGall = $("#sqReneGall");
    const sqJean23 = $("#sqJean23");
    const btnsFilter = $("#tab2 > .btn-small");
    const camLacInf = new Camera({
      position: {
        x: 251399.4352,
        y: 6250825.6195,
        z: 71.2675,
        spatialReference: 3857
      },
      heading: 359.9334,
      tilt: 80.7934
    });
    const camIleBercy = new Camera({
      position: {
        x: 268735.4721,
        y: 6247330.9459,
        z: 175.2942,
        spatialReference: 3857
      },
      heading: 186.8118,
      tilt: 84.5849
    });
    const camParcBagatelle = new Camera({
      position: {
        x: 249800.3447,
        y: 6252498.5632,
        z: 90.5557,
        spatialReference: 3857
      },
      heading: 43.6015,
      tilt: 82.5739
    });
    const camButtesChaum = new Camera({
      position: {
        x: 265717.4111,
        y: 6255539.274,
        z: 176.8517,
        spatialReference: 3857
      },
      heading: 190.8839,
      tilt: 80.5497
    });
    const CamSquareLseMichel = new Camera({
      position: {
        x: 261287.4377,
        y: 6254899.9561,
        z: 144.586,
        spatialReference: 3857
      },
      heading: 314.0757,
      tilt: 83.7261
    });
    const camSquareChPeguy = new Camera({
      position: {
        x: 267856.6939,
        y: 6247494.9663,
        z: 65.7765,
        spatialReference: 3857
      },
      heading: 17.6822,
      tilt: 74.5252
    });
    const camParcMontsouris = new Camera({
      position: {
        x: 260067.7775,
        y: 6244049.2304,
        z: 147.5504,
        spatialReference: 3857
      },
      heading: 359.3087,
      tilt: 83.9353
    });
    const camPereLachaise = new Camera({
      position: {
        x: 268059.9085,
        y: 6252664.8748,
        z: 815.796,
        spatialReference: 3857
      },
      heading: 213.8816,
      tilt: 60.0134
    });
    const camSqEdVaillant = new Camera({
      position: {
        x: 267354.9664,
        y: 6251849.0747,
        z: 121.284,
        spatialReference: 3857
      },
      heading: 318.1875,
      tilt: 81.1632
    });
    const camSqButteChapRge = new Camera({
      position: {
        x: 267167.2587,
        y: 6254596.8557,
        z: 151.6494,
        spatialReference: 3857
      },
      heading: 313.86521,
      tilt: 69.781
    });
    const camSqBatignolles = new Camera({
      position: {
        x: 257984.4447,
        y: 6255348.0611,
        z: 153.3112,
        spatialReference: 3857
      },
      heading: 338.4306,
      tilt: 71.7561
    });
    const camPelousesGlCatroux = new Camera({
      position: {
        x: 257158.6032,
        y: 6254827.3031,
        z: 88.6513,
        spatialReference: 3857
      },
      heading: 359.7725,
      tilt: 67.8019
    });
    const camPreCatelan = new Camera({
      position: {
        x: 250609.9052,
        y: 6251625.8991,
        z: 98.242,
        spatialReference: 3857
      },
      heading: 2.6811,
      tilt: 79.6605
    });
    const camGrandeCascade = new Camera({
      position: {
        x: 249502.0479,
        y: 6251392.4672,
        z: 123.8877,
        spatialReference: 3857
      },
      heading: 347.8155,
      tilt: 69.7763
    });
    const camSqTourStJac = new Camera({
      position: {
        x: 261296.592,
        y: 6250694.258,
        z: 62.5754,
        spatialReference: 3857
      },
      heading: 42.9762,
      tilt: 76.7302
    });
    const camJardChMars = new Camera({
      position: {
        x: 256983.2193,
        y: 6249212.6948,
        z: 296.2397,
        spatialReference: 3857
      },
      heading: 305.937,
      tilt: 78.8002
    });
    const camJardTrocadero = new Camera({
      position: {
        x: 255198.1768,
        y: 6251281.8637,
        z: 78.407,
        spatialReference: 3857
      },
      heading: 304.9402,
      tilt: 78.6231
    });
    const camJarSerresAut = new Camera({
      position: {
        x: 250573.6085,
        y: 6248688.884,
        z: 75.6567,
        spatialReference: 3857
      },
      heading: 20.1502,
      tilt: 76.6375
    });
    const camSqStLamb = new Camera({
      position: {
        x: 255727.6334,
        y: 6247733.7549,
        z: 168.3349,
        spatialReference: 3857
      },
      heading: 344.0692,
      tilt: 61.2573
    });
    const camSqReneGall = new Camera({
      position: {
        x: 261594.655,
        y: 6246322.3779,
        z: 94.1905,
        spatialReference: 3857
      },
      heading: 359.2913,
      tilt: 73.7107
    });
    const camSqJean23 = new Camera({
      position: {
        x: 261834.2192,
        y: 6249526.5388,
        z: 143.3772,
        spatialReference: 3857
      },
      heading: 333.5953,
      tilt: 62.1965
    });
    const deletBtn = $("#deletBtn");
    const tabsMaterialize = $(".tabs").tabs();
    const slider = $(".slider");
    const slides = $(".slides");
    const MsgNoPhoto = $("#MsgNoPhoto");
    let urlPhotoApi = "pixabay";
    const flickrIcon = $("#flickr_icon");
    const pxIcon = $("#px_icon");
    let featureName = "";

    function doRequest() {
      return esriRequest(url, options);
    }
    function getRecords(response) {
      return response.data.records;
    }
    function createGraphics(records) {
      let graphics = [];
      // console.log("records in getGraphics", records);
      records.forEach(function (item) {
        // console.log("item.fields", item.fields);
        let point = {
          type: "point",
          longitude: item.geometry.coordinates[0],
          latitude: item.geometry.coordinates[1]
        };
        let ptAtt = {
          Nom: item.fields.libellefrancais,
          Genre: item.fields.genre,
          Espece: item.fields.espece,
          Hauteur: item.fields.hauteurenm,
          Circonference: item.fields.circonferenceencm,
          DatePlantation: item.fields.dateplantation.substring(0, 4),
          Arrondissement: item.fields.arrondissement,
          Adresse: item.fields.adresse,
          Domanialite: item.fields.domanialite
        };
        let pointGraphic = new Graphic({
          geometry: point,
          attributes: ptAtt
        });
        // console.log("pointGraphic", pointGraphic);
        graphics.push(pointGraphic);
      });
      // console.log("graphics", graphics);
      return graphics;
    }
    function createLayer(graphics) {
      // console.log("graphics in createLayer", graphics);
      return new FeatureLayer({
        source: graphics,
        objectIdField: "OBJECTID",
        elevationInfo: {
          mode: "on-the-ground"
        },
        renderer: simpleRenderer,
        fields: [
          {
            name: "OBJECTID",
            type: "oid"
          },
          {
            name: "Nom",
            alias: "Nom",
            type: "string"
          },
          {
            name: "Genre",
            alias: "Genre",
            type: "string"
          },
          {
            name: "Espece",
            alias: "Espèce",
            type: "string"
          },
          {
            name: "Hauteur",
            alias: "Hauteur",
            type: "double"
          },
          {
            name: "Circonference",
            alias: "Circonférence",
            type: "double"
          },
          {
            name: "DatePlantation",
            alias: "Date plantation",
            type: "string"
          },
          {
            name: "Arrondissement",
            alias: "Arrondissement",
            type: "string"
          },
          {
            name: "Adresse",
            alias: "Adresse",
            type: "string"
          },
          {
            name: "Domanialite",
            alias: "Domanialité",
            type: "string"
          }
        ],
        outFields: ["*"]
      });
    }
    function addToView(layer) {
      view.map.add(layer);
      return layer;
    }
    function createTables() {
      const propertiesTable = document.getElementById("properties");
      content = propertiesTable.innerHTML;
      for (let i = 0; i < properties.length; i++) {
        content +=
          '<div class="property" id="' +
          properties[i] +
          '">' +
          properties[i] +
          " = </div>";
      }
      propertiesTable.innerHTML = content;
    }
    function setupPropertiesListener(view, name) {
      const propertiesRow = document.getElementById(name);
      view.watch(name, function (value) {
        propertiesRow.className = "property active";
        propertiesRow.innerHTML = propertiesRow.innerHTML.substring(
          0,
          propertiesRow.innerHTML.indexOf(" = ")
        );
        const formattedValue =
          typeof value === "number" ? value.toFixed(4) : value;
        propertiesRow.innerHTML += " = " + formattedValue.toString();
        if (propertiesRow.highlightTimeout) {
          clearTimeout(propertiesRow.highlightTimeout);
        }
        propertiesRow.highlightTimeout = setTimeout(function () {
          propertiesRow.className = "property inactive";
        }, 1000);
      });
    }
    function createAttTable(att) {
      // console.log("att", att);
      td1.text(att.Nom);
      td2.text(att.Genre);
      td3.text(att.Espece);
      td4.text(att.Hauteur);
      td5.text(att.Circonference);
      td6.text(att.DatePlantation);
      td7.text(att.Arrondissement);
      td8.text(att.Adresse);
      td9.text(att.Domanialite);
    }
    function goTo() {
      lacInf.click(function () {
        view.goTo(camLacInf, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      ileBercy.click(function () {
        view.goTo(camIleBercy, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      parcBagatelle.click(function () {
        view.goTo(camParcBagatelle, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      buttesChaum.click(function () {
        view.goTo(camButtesChaum, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      squareLseMichel.click(function () {
        view.goTo(CamSquareLseMichel, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      squareChPeguy.click(function () {
        view.goTo(camSquareChPeguy, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      parcMontsouris.click(function () {
        view.goTo(camParcMontsouris, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      pereLachaise.click(function () {
        view.goTo(camPereLachaise, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      sqEdVaillant.click(function () {
        view.goTo(camSqEdVaillant, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      sqButteChapRge.click(function () {
        view.goTo(camSqButteChapRge, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      sqBatignolles.click(function () {
        view.goTo(camSqBatignolles, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      pelousesGlCatroux.click(function () {
        view.goTo(camPelousesGlCatroux, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      preCatelan.click(function () {
        view.goTo(camPreCatelan, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      grandeCascade.click(function () {
        view.goTo(camGrandeCascade, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      sqTourStJac.click(function () {
        view.goTo(camSqTourStJac, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      jardChMars.click(function () {
        view.goTo(camJardChMars, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      jardTrocadero.click(function () {
        view.goTo(camJardTrocadero, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      jarSerresAut.click(function () {
        view.goTo(camJarSerresAut, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      sqStLamb.click(function () {
        view.goTo(camSqStLamb, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      sqReneGall.click(function () {
        view.goTo(camSqReneGall, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
      sqJean23.click(function () {
        view.goTo(camSqJean23, {
          duration: 3000,
          easing: "out-cubic"
        });
      });
    }
    function filterTree(layer) {
      btnsFilter.each(function () {
        $(this).click(function () {
          deletBtn.prop("disabled", false);
          btnsFilter.removeClass("isActive").addClass("grey darken-4");
          $(this).removeClass("grey darken-4").addClass("isActive");
          layer.definitionExpression = "Nom=" + "'" + $(this).text() + "'";
        });
      });
    }
    function deleteFilter(layer) {
      deletBtn.click(function () {
        deletBtn.prop("disabled", true);
        btnsFilter.removeClass("isActive").addClass("grey darken-4");
        layer.definitionExpression = "1=1";
      });
    }
    function getPhotoFlickr(search, slides) {
      let settings = {
        async: true,
        crossDomain: true,
        url:
          "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0bd7e65ca562af6035967574512b6d97&sort=relevance&media=photos&content_type=1&dimension_search_mode=min&advanced=1&text=" +
          search +
          "+arbre&format=json&nojsoncallback=1",
        method: "GET",
        headers: {}
      };
      //console.log("url", settings.url);
      $.ajax(settings).done(function (data) {
        //console.log(data.photos.photo);
        if (data.photos.photo.length == 0) {
          console.log("data.photos.photo.length", data.photos.photo.length);
          slides.hide();
          $(".indicators").hide();
          MsgNoPhoto.show();
          return false;
        } else {
          MsgNoPhoto.hide();
          $(".indicators").show();
          slides.empty();
          $.each(data.photos.photo, function (i, gp) {
            if (i == 6) {
              return false;
            }
            let farmId = gp.farm;
            let serverId = gp.server;
            let id = gp.id;
            let secret = gp.secret;
            slides.append(
              '<li><img src="https://farm' +
                farmId +
                ".staticflickr.com/" +
                serverId +
                "/" +
                id +
                "_" +
                secret +
                '.jpg"/></img></li>'
            );
          });
          slides.show();
          slider.slider();
        }
      });
    }
    function getPhotoPixabay(search, slides) {
      let settings = {
        async: true,
        url:
          "https://pixabay.com/api/?key=11383012-87b876a262f654f65a395ac4d&q=" +
          search +
          "+arbre&image_type=photo",
        method: "GET",
        dataType: "jsonp"
      };
      $.ajax(settings).done(function (data) {
        if (data.hits.length == 0) {
          slides.hide();
          $(".indicators").hide();
          MsgNoPhoto.show();
          return false;
        } else {
          MsgNoPhoto.hide();
          $(".indicators").show();
          slides.empty();
          $.each(data.hits, function (i, p) {
            if (i == 6) {
              return false;
            }
            slides.append("<li>" + '<img src="' + p.webformatURL + '"/></li>');
          });
        }
        slides.show();
        slider.slider();
      });
    }
    function switchPixabayFlickr() {
      pxIcon.click(function () {
        $(this).toggleClass("gray");
        flickrIcon.toggleClass("gray");
        urlPhotoApi = "pixabay";
        getPhotoPixabay(featureName, slides);
      });
      flickrIcon.click(function () {
        $(this).toggleClass("gray");
        pxIcon.toggleClass("gray");
        urlPhotoApi = "flickr";
        getPhotoFlickr(featureName, slides);
      });
    }

    view
      .when(function () {
        leftPanel.show();
        goTo();
      })
      .then(doRequest)
      .then(getRecords)
      .then(createGraphics)
      .then(createLayer)
      .then(addToView)
      .then(function (layer) {
        view.watch("scale", function (newValue) {
          layer.renderer = newValue <= 6598.7164 ? renderer : simpleRenderer;
        });
        filterTree(layer);
        deleteFilter(layer);
        switchPixabayFlickr();
        view.whenLayerView(layer).then(function (featureLayerView) {
          let highlightSelect;
          view.on("click", function (event) {
            view.hitTest(event).then(function (response) {
              if (response.results.length > 0) {
                // console.log("urlPhotoApi", urlPhotoApi);
                let feature = response.results[0].graphic;
                let featureAtt = feature.attributes;
                featureName = feature.attributes.Nom;
                if (highlightSelect) {
                  highlightSelect.remove();
                }
                highlightSelect = featureLayerView.highlight(feature);
                createAttTable(featureAtt);
                if (urlPhotoApi == "pixabay") {
                  getPhotoPixabay(featureName, slides);
                }
                if (urlPhotoApi == "flickr") {
                  getPhotoFlickr(featureName, slides);
                }
                Msg.hide();
                treeAtt.show();
                slider.show();
                tabsMaterialize.tabs("select", "tab3");
              } else {
                if (highlightSelect) {
                  highlightSelect.remove();
                  treeAtt.hide();
                  slider.hide();
                  Msg.show();
                }
              }
            });
          });
        });
      });
  });
});
