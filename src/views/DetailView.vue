<template>
  <div class="detailView"> 
    <div class="detail-header">
      <div class="detail-header-back-container" @click="handleRoute">
        <image class="detail-header-back" src="https://uploader-assets.s3.ap-south-1.amazonaws.com/back-icon.png"></image>
      </div>
      <text class="detail-title">{{current.title}}</text>
    </div>
    <scroller>
      <div class="map">
        <a :href="url">
          <image class="detail-map" :src="mapurl"></image>
        </a>
      </div>
      <div class="detail-info">
          <a class="detail-apply" :href="current.source">
            <text class="detail-apply-text">Apply</text>
          </a>
          <text class="detail-info-text" >Title: {{current.title}}</text>
          <text class="detail-info-text" >Company Name : {{current.companyName}}</text>
          <text class="detail-info-text" >Job Description : {{current.jobDescription}}</text>
          <text  class="detail-info-text" v-if="current.website != ''" >Website : {{current.website}}</text>
          <text  class="detail-info-text" v-else>Website : N/A</text>
          <text  class="detail-info-text" v-if="current.experience != ''" >Experience : {{current.experience}}</text>
          <text  class="detail-info-text" v-else>Experience : N/A</text>
          <text  class="detail-info-text" v-if="current.qualification != ''" >Qualification : {{current.qualification}}</text>
          <text  class="detail-info-text" v-else>Qualification : N/A </text>    
          <text  class="detail-info-text" v-if="current.salary != ''" >Salary : {{current.salary}}</text>
          <text  class="detail-info-text" v-else>Salary : N/A</text>
          <text  class="detail-info-text" v-if="current.phone != ''" >Phone : {{current.phone.substring(0,20).match(/[\d, ]/g).join("")}} </text>
          <text  class="detail-info-text" v-else>Phone : N/A</text>
          <a class="detail-apply" :href="current.source">
            <text class="detail-apply-text">Apply</text>
          </a>
      </div>
    </scroller>  
  </div>
</template>

<style>
  .container{
    position: relative;
    flex:1; 
    background-color: #fff;
  }

  .detail-map{
    height: 500px;
  }

  .map{
    height: 500px;
    width: 750px;
  }

  .detail-header{
    height: 110px;
    width: 750px;
    background-color: #1976D2;
    color: white;
    position: relative;
  }

  .detail-header-back{
    height: 40px;
    width: 40px;
    color: #fff;
  }

  .detail-header-back-container { 
    position: absolute;
    top: 15px;
    left: 5px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    border-radius: 40px;
  }

  .detail-header-back-container:active {
    background-color: #1566b6;
  }

  .detail-title{
    font-size: 45px;
    color: white;
    text-align: center;
    width: 450px;
    padding-top: 25px;
    margin-left: 150px;
    margin-right: 150px;
    text-overflow: ellipsis;
    height: 77px;
    overflow: hidden;
  }

  .detail-info-text{      
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
    overflow: visible;
  }

  .detail-info{
    padding: 20px;
  }
  .bold{
    font-weight: bold;
    display: inline;
    font-size: 40px;
  }

  .detail-apply{
    margin-top: 40px;
    margin-bottom: 40px;
    /* width: 750px; */
    text-align: center;
    border: none;
    background-color: #1976D2;
    margin-left: 250px;
    margin-right: 250px;
  }

  .detail-apply:active {
    background-color: #1566b6;
  }

  .detail-apply-text{
    font-size: 30px;
    /*padding: 20px 30px;*/
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    color: white;
    /* width: 111px; */
    /* display: block; */
    text-align: center;
    /* margin-left: 275px; */
    /* margin-right: 275px; */
  }

</style>

<script>
  
  var stream = weex.requireModule('stream')
  export default {
    data : function() {
      return  {
        param : this.$route.params.jobId,
        maplat : '',
        maplong : '',
        url : '',
        mapurl : ''
      }
    },
    computed : {
      current : function() { 
      return this.$root.$data.temp[this.param];
      },
    },
    methods : {
      getlatlong : function() {
        var self = this;
        return stream.fetch({
          method: 'GET',
          type: 'json',
          url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.current.companyName+','+this.current.workLocation+'&key=AIzaSyCYvnTorY23mtCZNzQLpLxE2GdhuYBKMcM'
        },function(res){
          self.maplat = res.data.results[0].geometry.location.lat;
          self.maplong = res.data.results[0].geometry.location.lng;
          self.mapurl = "http://maps.googleapis.com/maps/api/staticmap?center="+self.maplat+","+self.maplong+"&zoom=15&size=750x400&maptype=roadmap&key=AIzaSyBMAtpMuPIgiMTnAdlh22w9ITb_BpkrlNc";
        })
      },
      handleRoute : function() {
        this.$router.replace('/');
      },
      doNothing : function(){
        this.$router.push('/applyhere/'+this.param+'');
      }
    },
    watch:{
      'current' : function(a,b){
      console.log(a);
      this.getlatlong();
      },
      'geo' : function(){
      this.url = 'geo:'+this.current.companyName+"?q="+''+this.maplat+','+this.maplong+'('+this.current.companyName+')'
      }
    },
    created : function() {
      this.current = this.$root.$data.temp[this.param];
      this.getlatlong();
      this.$root.$data.redirectFromDetail = true;
    },
    computed :{
      geo : function() {
        return 'geo:'+this.maplat+','+this.maplong+"?q=Norwich+Clinical";
      }
    }
  }  
  
</script>
