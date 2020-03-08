(this["webpackJsonpjax-wing-finder"]=this["webpackJsonpjax-wing-finder"]||[]).push([[0],{20:function(e,t,n){e.exports=n(43)},25:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),l=n.n(o),i=(n(25),n(19)),s=n(2),c=n(3),u=n(5),m=n(4),p=n(6),d=(n(8),n(18)),f=n.n(d),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleEvent=function(e){var t=n.props.markers.find((function(t){return t.title===e.venue.name}));window.google.maps.event.trigger(t,"click")},n.handleSearch=function(e){var t,a,r;for(t=document.getElementById("listInput").value.toUpperCase(),a=document.getElementById("UL").getElementsByTagName("li"),r=0;r<a.length;r++)a[r].getElementsByTagName("a")[0].innerHTML.toUpperCase().indexOf(t)>-1?a[r].style.display="":a[r].style.display="none";n.updateTheMarkers(e.target.value)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"updateTheMarkers",value:function(e){for(var t=document.getElementsByTagName("li"),n=Array.from(t).filter((function(e){return null!=e.offsetParent})).map((function(e){return e.getAttribute("id")})),a=0;a<n.length;a++)this.props.markers.forEach((function(t){t.title.toLowerCase().includes(e)?t.setVisible(!0):t.setVisible(!1)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"navbar"},r.a.createElement("input",{type:"search",id:"listInput","aria-label":"Filter location by name",tabIndex:"0",onChange:this.handleSearch,placeholder:"Filter..."}),r.a.createElement("ul",{id:"UL","aria-label":"Venue List"},this.props.venues.map((function(t){return r.a.createElement("li",{key:t.venue.id,onClick:function(){return e.handleEvent(t)},onKeyPress:function(){return e.handleEvent(t)},id:t.venue.id},r.a.createElement("a",{href:"#venue"},t.venue.name))}))))}}]),t}(a.Component),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).showHide=function(){document.getElementById("navbar").classList.toggle("hide")},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",{className:"jax"},"Jax Wing Finder"),r.a.createElement("div",{className:"menu",onClick:this.showHide,tabIndex:"1",onKeyPress:this.showHide},"\u2630"))}}]),t}(a.Component),g=[{featureType:"all",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{color:"#000000"},{lightness:13}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#144b53"},{lightness:14},{weight:1.4}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#08304b"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#0c4152"},{lightness:5}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#0b434f"},{lightness:25}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#0b3d51"},{lightness:16}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"transit",elementType:"all",stylers:[{color:"#146474"}]},{featureType:"water",elementType:"all",stylers:[{color:"#021019"}]}];function v(e){var t=window.document.getElementsByTagName("script")[0],n=window.document.createElement("script");n.defer=!0,n.async=!0,n.src=e,n.onerror=window.gm_authFailure,t.parentNode.insertBefore(n,t)}window.gm_authFailure=function(){alert("A GoogleMaps error occurred! Please try again later.")};var w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={venues:[],markers:[]},n.loadTheMap=function(){v("https://maps.googleapis.com/maps/api/js?key=AIzaSyCtz46pKs02Iip2O3Bal9hy5GMzFmaJoIY&callback=initMap"),window.initMap=n.initMap},n.getTheVenues=function(){f.a.get("https://api.foursquare.com/v2/venues/explore?"+new URLSearchParams({client_id:"0HWDBVRB2JSKVNZHY1PCJE0P2GQLV2U2ZD0BYKGS2RR125FW",client_secret:"2HIXLJWVN0BUHFCSUSJZCWJF0AHQNX3TMHFO0VW5C4DF35U2",query:"wings",near:"Jacksonville",v:"20181003"})).then((function(e){n.setState({venues:e.data.response.groups[0].items},n.loadTheMap())})).catch((function(e){alert("An error occurred fetching information from FourSquare! Please try again later!"),console.log("fetching problem "+e)}))},n.initMap=function(){var e=new window.google.maps.Map(document.getElementById("map"),{center:{lat:30.332184,lng:-81.655},zoom:10,styles:g}),t=new window.google.maps.InfoWindow;n.state.venues.map((function(a){console.log(a);var r='<div id="content-info" tabIndex="0">\n      <h3>'.concat(a.venue.name,"</h3>\n      <p>").concat(a.venue.location.formattedAddress[0],"<br>\n      ").concat(a.venue.location.formattedAddress[1],"</p>\n      </div>");var o=new window.google.maps.Marker({position:{lat:a.venue.location.lat,lng:a.venue.location.lng},map:e,title:a.venue.name});o.addListener("click",(function(n){var a;(a=this).setAnimation(window.google.maps.Animation.DROP),setTimeout((function(){a.setAnimation(null)}),1500),t.setContent(r),t.open(e,o)})),n.setState({markers:[].concat(Object(i.a)(n.state.markers),[o])})}))},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getTheVenues()}},{key:"updateTheMarkers",value:function(){var e=document.getElementsByTagName("li");Array.from(e).filter((function(e){return null!=e.offsetParent})).map((function(e){return e.getAttribute("id")}))}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(y,{venues:this.state.venues,map:this.state.theMap,markers:this.state.markers,changeState:this.updateTheMarkers}),r.a.createElement(h,null),r.a.createElement("div",{id:"map",role:"application","aria-label":"Map",tabIndex:"-1"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.d530eb7b.chunk.js.map