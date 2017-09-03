<template>
    <div class="amap-page-container">
     <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>

      <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="mapCenter" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">

           <el-amap-marker v-for="marker in markers" :position="marker" ></el-amap-marker>

      </el-amap>

      <div class="toolbar">
        <!-- <mt-button @click="getMap()" type="parmary">get map</mt-button> -->
        <input  v-model="province" />
      </div>
     
     <div class="back">
       <router-link to="/home">
         <span>返回</span>
       </router-link>
     </div>
    </div>
  </template>

  <style scoped>
    .back{
      position: fixed;
      right: 15px;
      bottom: 185px;
      width: 35px;
      height: 40px;
      background-color: #26a2ff;
      text-align: center;
      margin-bottom: 5px;
    }
    .back span{
      color: #fff;
      line-height: 40px;
    }
    .toolbar input{
         width: 100%;
    }
    .amap-page-container{
      height: 600px;
    }
    .amap-demo {
      height: 600px;
    }
    .search-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
    }
    .amap-page-container {
      position: relative;
    }
  </style>

  <script>
    // NPM 方式
    // import { AMapManager } from 'vue-amap';
    // CDN 方式
    let amapManager = new VueAMap.AMapManager()

    export default  {
      data: function() {
        return {
          province: '',
          markers: [
            [112.48088, 23.005],
            [112.48888, 23.005],
            [112.48088, 23.002]
          ],
          searchOption: {
            city: '肇庆',
            citylimit: true
          },
          mapCenter: [112.48, 23.005],
          address: '',
          resizeEnable: true,
          amapManager,
          zoom: 12,
          center: [112.48, 23.005],
          events: {
            init: (o) => {
              console.log(o.getCenter())
              console.log(this.$refs.map.$$getInstance())
              o.getCity(result => {
                console.log(result)
                this.province = "当前区域："+result.province + ":" + result.city + ":" + result.district
               })
            },
            'moveend': () => {
            },
            'zoomchange': () => {
            },
            'click': (e) => {
            }
          },
          plugin: ['ToolBar', {
            pName: 'MapType',
            defaultType: 0,
            events: {
              init(instance) {
                console.log(instance);
              },

            }
          }]
        }
      },

      methods: {
        // getMap() {
        //   // amap vue component
        //   console.log(amapManager._componentMap);
        //   // gaode map instance
        //   console.log(amapManager._map);
        // },
         addMarker: function() {
          let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
          let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
          this.markers.push([lng, lat]);
        },
        onSearchResult(pois) {
          let latSum = 0;
          let lngSum = 0;
          if (pois.length > 0) {
            pois.forEach(poi => {
              let {lng, lat} = poi;
              lngSum += lng;
              latSum += lat;
              this.markers.push([poi.lng, poi.lat]);
            });
            let center = {
              lng: lngSum / pois.length,
              lat: latSum / pois.length
            };
            this.mapCenter = [center.lng, center.lat];
          }
        }
      }


    };
</script>