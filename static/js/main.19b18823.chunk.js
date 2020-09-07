(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{27:function(e,t,n){e.exports=n(70)},32:function(e,t,n){},33:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(6),c=n.n(i),r=(n(32),n(33),n(25)),l=n(3),s=n(22),m=n.n(s);n(57);var u=Object(l.b)(null,(function(e){return{fetchMovies:function(t){return e(function(e){return function(t){t({type:"FETCH_MOVIES_REQUEST"}),m.a.get("https://www.omdbapi.com/?i=tt3896198&apikey=".concat("1c46dc6c","&s=").concat(e,"&page=1")).then((function(e){var n=e.data;t({type:"FETCH_MOVIES_SUCCESS",payload:n.Search})})).catch((function(e){t({type:"FETCH_MOVIES_FAILURE",payload:e})}))}}(t))}}}))((function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){e.fetchMovies(i)}),[i]),o.a.createElement("div",{className:"search__container"},o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.fetchMovies(i)},className:"input__container"},o.a.createElement("input",{type:"text",value:i,onChange:function(e){c(e.target.value)},placeholder:"Search a movie by name"}),o.a.createElement("input",{type:"submit",value:"search",className:"input__button"})))}));n(58),n(59);var d=function(){return o.a.createElement("div",{className:"lds-dual-ring"})};var E=Object(l.b)((function(e){return{state:e.moviesList,countNominations:e.moviesList.countNominations,limit:e.moviesList.limit}}),(function(e){return{setNomination:function(t){return e(function(e){return{type:"SET_NOMINATE;",payload:{movietitle:e}}}(t))}}}))((function(e){var t=e.state.error.message,n=e.state.movies,a=e.state.loading,i=e.state.nominate,c=e.state.limit,r=e.state.countNominations,l=function(t){c-r>0?e.setNomination(t.currentTarget.dataset.div_id):alert("You can nominate movies upto ".concat(5," !!"))};return o.a.createElement("div",{className:"sidebar"},o.a.createElement("h2",null,"Results from Search :"),o.a.createElement("div",{className:"sidebar__body"},o.a.createElement("ul",{className:"sidebar__list"},a?o.a.createElement("h2",{className:"error"},o.a.createElement(d,null)):t?o.a.createElement("h3",{className:"error"},t):n&&n.map((function(e,t){return i&&i.some((function(t){return t.movietitle===e.Title}))?o.a.createElement("div",{className:"list__item",key:t},o.a.createElement("li",null,e.Title," "),o.a.createElement("button",{"data-div_id":e.Title,className:"item__btn",disabled:!0},"Nominateed!")):o.a.createElement("div",{className:"list__item",key:t},o.a.createElement("li",null,e.Title)," ",o.a.createElement("button",{"data-div_id":e.Title,className:"item__btn",onClick:l},"Nominate"))})))))})),v=(n(60),n(61),n(23)),_=n.n(v);var f=Object(l.b)((function(e){return{nominations:e.moviesList.nominate,countNominations:e.moviesList.countNominations}}),(function(e){return{removeNominate:function(t){return e(function(e){return console.log("fired"),{type:"REMOVE_NOMINATE;",payload:e}}(t))}}}))((function(e){var t,n,i,c,r=e.nominations,l=function(t){console.log(t.currentTarget.dataset.div_id),n=localStorage.getItem("Object"),n=JSON.parse(n),console.log(n),n=n.filter((function(e,n){return e.movietitle!==t.currentTarget.dataset.div_id})),localStorage.setItem("Object",JSON.stringify(n)),e.removeNominate(t.currentTarget.dataset.div_id)};return Object(a.useEffect)((function(){if(r.length>0)localStorage.setItem("Object",JSON.stringify(r)),t=localStorage.getItem("Object"),t=JSON.parse(t),i=t.map((function(e,t){return e.movietitle})),c=i.join(",");else{t=localStorage.getItem("Object"),t=JSON.parse(t),console.log(t),i=[].length<1?[]:t.map((function(e,t){return e.movietitle})),c=i.join(",")}}),[r]),o.a.createElement("div",{className:"nominations"},o.a.createElement("h2",null,"Nominations: ",r.length),o.a.createElement("div",{className:"nominations__body"},o.a.createElement("ul",{className:"nominations__list"},r.length>0?r.map((function(e,t){return o.a.createElement("div",{className:"list__item",key:t},o.a.createElement("li",null,e.movietitle),o.a.createElement("button",{className:"nomination_item__btn","data-div_id":e.movietitle,onClick:l},"Remove")," ")})):o.a.createElement("h4",{className:"nominations__title"},"You have no nominations")),o.a.createElement("div",{className:"share__buttons"},["facebook","twitter","google-plus","pinterest"].map((function(e,t){return o.a.createElement(_.a,{compact:!0,socialMedia:e,key:t,url:"",media:"https://imgs.xkcd.com/comics/error_code.png",text:"Hey I have made this cool nomination of 5 movies - ".concat(c," using movie nominator"),className:"share__button"})})))))}));var N=function(e){return o.a.createElement("div",{className:"results"},o.a.createElement(E,null),o.a.createElement(f,null))};var p=function(e){return o.a.createElement("div",{className:"app"},o.a.createElement("h2",{className:"title"}," Nominate Your Movie"),o.a.createElement(u,null),o.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(4),O=n(24),g=n(26),h=n(2),S={loading:!1,movies:[],nominate:JSON.parse(localStorage.getItem("Object"))?JSON.parse(localStorage.getItem("Object")):[],error:[],countNominations:0,limit:5},j=Object(b.c)({moviesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIES_REQUEST":return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case"FETCH_MOVIES_SUCCESS":return Object(h.a)(Object(h.a)({},e),{},{loading:!1,error:[],movies:t.payload});case"FETCH_MOVIES_FAILURE":return Object(h.a)(Object(h.a)({},e),{},{loading:!1,error:t.payload});case"SET_NOMINATE;":return Object(h.a)(Object(h.a)({},e),{},{countNominations:e.countNominations+1,nominate:[].concat(Object(g.a)(e.nominate),[t.payload])});case"REMOVE_NOMINATE;":return Object(h.a)(Object(h.a)({},e),{},{countNominations:e.countNominations-1,nominate:e.nominate.filter((function(e){return e.movietitle!==t.payload}))});default:return e}}}),y=[O.a],T=Object(b.e)(j,Object(b.d)(b.a.apply(void 0,y),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(o.a.createElement(l.a,{store:T},o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.19b18823.chunk.js.map