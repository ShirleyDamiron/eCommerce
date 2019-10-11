(window.webpackJsonpreactecommerce=window.webpackJsonpreactecommerce||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=(a(28),a(20)),i=a(15),s=a(16),m=a(21),u=a(17),d=a(22),h=a(6),p=a(5);var E=function(){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-ul"},r.a.createElement("li",{className:"plaidLogo nav-ul__li"},r.a.createElement("img",{src:"img/plaid-shirt.svg",alt:"Plaid Shirt Icon"})),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement(h.b,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement(h.b,{to:"/products"},"Our Sets Of Styles")),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement(h.b,{to:"/contact"},"Contact")))))};var f=function(e){var t=e.images,a=e.currentIndex,n=e.goToNextSlide,l=e.goToPrevSlide,o={background:"linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(t[a],") 25% 85% / cover")};return r.a.createElement("div",{className:"slider"},r.a.createElement("button",{className:"slider__next",onClick:n},"\u276f"),r.a.createElement("button",{className:"slider__prev",onClick:l},"\u276e"),r.a.createElement("ul",{className:"slider__slides"},r.a.createElement("li",{style:o},0===a?"Plaid Me":"")))};var g=function(e){var t=e.images,a=e.currentIndex,n=e.goToNextSlide,l=e.goToPrevSlide;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{images:t,currentIndex:a,goToNextSlide:n,goToPrevSlide:l}),r.a.createElement("h1",{className:"winterh1"},"How To Get Ready With Plaid For This Winter's Fashion Season!"),r.a.createElement("div",{className:"fashion"},r.a.createElement("h2",{className:"top-story"}," The Top Story"),r.a.createElement("p",{className:"content"},"\u201cOnce you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy,\u201d Albert Einstein, the greatest nuclear physicist of the 20th century and an unlikely fashion muse, once averred. Turns out Al, who had his own distinctive brand of disheveled chic, was on to something beyond a mere theory of relativity. (Which is not, by the way, a treatise on how to get along with your family at dinner next week.) Far beyond its association with detested school uniforms, plaid, worn with or without stripes, has a rich backstory: Though usually associated with kilt-wearing Scottish Highlanders, there is a much older history. A shard of the fabric was found buried with the remains of \u201cthe Cherchen Man,\u201d a 3,000-year-old mummy uncovered in the western Chinese desert.")),r.a.createElement("div",{className:"fashion"},r.a.createElement("h2",null," Some Options To Add To Your Closet!"),r.a.createElement("p",{className:"content"},"Mulberry Sophia jacket, $1,415, mulberry.com; Mulberry Marianne skirt, $625, mulberry.com"),r.a.createElement("p",{className:"content"},"Topshop Boutique check peg pants, $150, topshop.com"),r.a.createElement("p",{className:"content"},"Nicole Saldan\xf1a Deborah plaid pumps, $357, farfetch.com"),r.a.createElement("p",{className:"content"},"House of Dagmar beata cardigan, $243, houseofdagmar.com; House of Dagmar teja skirt, $298, houseofdagmar.com")))};var v=function(e){var t;return t=e.filteredProducts.length>0?e.filteredProducts:e.products,r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Plaid Me"),r.a.createElement("h2",null,"The New Set Of Vinatge Fashion"),r.a.createElement("h3",null,"Filter Your Choice Down Below!"),r.a.createElement("div",{className:"filter-container"},r.a.createElement("select",{id:"filter",className:"filterType",onChange:e.filterProductsFunc},r.a.createElement("option",{value:"none"},"Filter By Type"),r.a.createElement("option",{value:"Bottoms"},"Bottoms"),r.a.createElement("option",{value:"Overlay"},"Overlay"),r.a.createElement("option",{value:"Shoes"},"Shoes"),r.a.createElement("option",{value:"Dresses"},"Dresses"),r.a.createElement("option",{value:"Skirts"},"Skirts")),r.a.createElement("select",{className:"filterPrice",onChange:e.filterProductsFunc},r.a.createElement("option",{value:"none"},"Filter By Price"),r.a.createElement("option",{value:"high"},"Highest to Lowest"),r.a.createElement("option",{value:"low"},"Lowest to Highest"))),r.a.createElement("div",{className:"products-container"},t.map(function(e){return r.a.createElement("figure",{className:"image-container"},r.a.createElement("img",{src:e.IMG_SRC,alt:e.Product_Name}),r.a.createElement("figcaption",null,e.Product_Name),r.a.createElement("p",null,"$",e.Price))})))};var y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Plaid Me"),r.a.createElement("h2",null,"Let's Chat About Your Order!"),r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"sform"},r.a.createElement("form",{action:"",class:"contact-page-form"},r.a.createElement("label",{for:"fname"},"First Name"),r.a.createElement("input",{type:"text",id:"fname",name:"firstname",placeholder:"First Name",required:!0}),r.a.createElement("label",{for:"lname"},"Last Name"),r.a.createElement("input",{type:"text",id:"lname",name:"lastname",placeholder:"Last Name",required:!0}),r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement("label",{for:"country"},"Country"),r.a.createElement("select",{id:"country",name:"country",required:!0,className:"country-select"},r.a.createElement("option",{value:"uk"},"UK"),r.a.createElement("option",{value:"canada"},"Canada"),r.a.createElement("option",{value:"usa"},"USA")),r.a.createElement("label",{for:"comments"},"Comments"),r.a.createElement("textarea",{id:"comments",name:"comments",placeholder:"Write Something.."}),r.a.createElement("input",{type:"submit",value:"Submit"})))))};var N=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-ul"},r.a.createElement("li",{className:"plaidLogo nav-ul__li"},r.a.createElement("img",{src:"/img/plaid-shirt.svg",alt:"Plaid Shirt Icon"})),r.a.createElement("p",{className:"plaidPhrase"},"Plaid Me: A New Set Of Vinatge Fashion!"),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement("a",{href:"https://twitter.com/?lang=en",target:"_blank",rel:"noopener noreferrer"}," Our Twitter")),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer"},"Our Facebook")),r.a.createElement("li",{className:"nav-ul__li"},r.a.createElement("a",{href:"https://www.instagram.com/?hl=en",target:"_blank",rel:"noopener noreferrer"},"Our Instagram")))))},w=(a(34),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],filteredProducts:[],images:["/img/fashionWeek.jpg","/img/modelsWeek.jpg","/img/plaidWeek.jpg","/img/versaceWeek.jpg"],currentIndex:0},a.goToPrevSlide=function(){0!==a.state.currentIndex&&a.setState({currentIndex:a.state.currentIndex-1})},a.goToNextSlide=function(){if(console.log(a.state.currentIndex),a.state.currentIndex===a.state.images.length-1)return a.setState({currentIndex:0});a.setState({currentIndex:a.state.currentIndex+1})},a.filterProducts=function(){var e=Object(c.a)(a.state.products),t=document.querySelector(".filterType").value,n=document.querySelector(".filterPrice").value;"none"!==t&&(e=e.filter(function(e){return e.Category===t})),"none"!==n&&("low"===n?e.sort(function(e,t){return Number(e.Price)-Number(t.Price)}):"high"===n&&e.sort(function(e,t){return Number(t.Price)-Number(e.Price)})),a.setState({filteredProducts:e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://shirley-api.herokuapp.com/products").then(function(e){return e.json()}).then(function(t){return e.setState({products:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{basename:"/"},r.a.createElement(E,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(g,{images:e.state.images,currentIndex:e.state.currentIndex,goToNextSlide:e.goToNextSlide,goToPrevSlide:e.goToPrevSlide})}}),r.a.createElement(p.a,{path:"/products",render:function(){return r.a.createElement(v,{products:e.state.products,filterProductsFunc:e.filterProducts,filteredProducts:e.state.filteredProducts})}}),r.a.createElement(p.a,{path:"/contact",component:y})),r.a.createElement(N,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.f0d5d402.chunk.js.map