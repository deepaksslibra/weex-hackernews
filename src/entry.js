
// import Vue from 'vue'
import App from './App.vue'
import router from './router'

// sync the router with the vuex store.
// this registers `store.state.route`

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
// new Vue(Vue.util.extend({ el: '#root', router}, App))
var stream = weex.requireModule('stream')
var location = weex.requireModule('mylocationmodule')
var bus = new Vue();

new Vue ({
	el : '#root',
	data : {
		temp : [],
		lat : '',
		long : '',
		page : 1,
		isDataOver : false,
		query : '',
		complete: true,
		redirectFromDetail : false,
		currentSearchTerm : '',
		isDataLoadedInitially : false,
		hideLoader : false,
		bus: bus
	},
	computed: {
		latitude : function(){
			return this.lat;
		},
		longitude : function(){
			return this.long;
		} 
	},
	render : h => h(App),
	router : router,
	methods : {
		getLocation(){
			var self = this;
			location.getLocation(function(data){
				// var loc = JSON.parse(data);
				self.lat = JSON.parse(data).latitude;
				console.log("Deepak",self.lat)
				self.long = JSON.parse(data).longitude;	
				console.log("Deepak 2",self.long)			
				self.populateData();
			});
		},
		populateData(repo) {
        var self = this;
        console.log("function being called",this.lat);
        console.log("function being called 2",self.lat);
        return stream.fetch({
          method: 'GET',
          type: 'json',
          url: 'https://walkin.asiatrotter.org/api/v1/nearby?lat='+self.latitude+'&lng='+self.longitude+'&radius=15&query='+this.query+'&limit=15&page='+self.page+'&categoryId=1&city='
        },function(res){
        	if(res.data.length == 0){
        		self.isDataOver = true;
        		console.log("is dataOver is set to true");
        		self.hideLoader = true;
        	}
        	else if(res.data.length > 0 && res.data.length < 15){
        		for(var i = 0 ; i < res.data.length ; i ++){
        			self.temp.push(res.data[i]);
        			console.log("data less than 10");        		}
        		self.isDataOver = true;
        		self.isDataLoadedInitially = true;
        	}
        	else {
        		for (var i = 0; i < res.data.length; i++) {
        			self.temp.push(res.data[i]);
        		}
        		self.isDataOver = false;
        		self.isDataLoadedInitially = true;
        	}
        	console.log("REZPONSE",res.data);
        	self.bus.$emit("data-fetched");
        })
      }
	},
	created : function() {
		console.log("created!!");
		this.getLocation();
		this.$on('get-next-data',function(){
			this.page++;
			console.log("current page : " + this.page)
			if(this.isDataLoadedInitially==true)
			this.populateData();
		})
		this.$on('get-query-data',function(value){
			this.query = value;
			if(this.query == '')
			this.page = 1;
			else
			this.page = ''
			this.temp = [];
			if(this.isDataLoadedInitially)
			this.populateData();	
		})
	}
})

router.push('/')
