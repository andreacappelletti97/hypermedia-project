(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,4,5,7,8],{209:function(t,e,n){"use strict";n.r(e);var l=n(1).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},link:{type:Object,required:!1,default:null}}}),r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")]),t._v(" "),null!=t.link?n("NuxtLink",{staticClass:"\n      inline-flex\n      mt-3\n      items-center\n      px-4\n      py-1.5\n      text-sm\n      font-bold\n      text-blue-600\n      bg-white\n      border border-gray-300\n      rounded-md\n      shadow-sm\n      hover:bg-blue-600\n      hover:text-white\n      transition-all\n      duration-150\n      ease-in-out\n      focus:outline-none\n      focus:ring-2 focus:ring-offset-2 focus:ring-blue-500\n    ",attrs:{to:t.link.href}},[t._v("\n    "+t._s(t.link.label)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},210:function(t,e,n){"use strict";n.r(e);var l=n(1),r=[{name:"Home",href:"/"},{name:"Areas",href:"/areas"},{name:"People",href:"/people"},{name:"Products",href:"/products"},{name:"About us",href:"/aboutus"},{name:"Contact us",href:"/contactus"}],o=l.a.extend({props:{current:{type:String,required:!0}},data:function(){return{navigation:r,isOpen:!1}},methods:{linkSelectedClass:function(link){return this.current===link?"underline font-black":""},openMenu:function(){this.isOpen=!this.isOpen}}}),c=n(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bg-white"},[n("nav",{staticClass:"px-0 mx-auto max-w-7xl sm:px-6 lg:px-8",attrs:{"aria-label":"Top"}},[n("div",{staticClass:"flex items-center justify-between hidden w-full py-6 border-b border-blue-500  lg:items-center lg:border-none lg:flex"},[n("div",{staticClass:"flex items-center flex-1"},[n("div",{staticClass:"hidden ml-4 space-x-8 lg:block"},t._l(t.navigation,(function(link){return n("NuxtLink",{key:link.name,staticClass:"text-base font-medium text-blue-900 hover:text-blue-700",class:t.linkSelectedClass(link.name),attrs:{to:link.href}},[t._v("\n            "+t._s(link.name)+"\n          ")])})),1)]),t._v(" "),n("div",{staticClass:"flex-none"},[n("section-social-nav")],1)]),t._v(" "),n("div",{staticClass:"px-4 py-6 lg:hidden"},[n("div",{staticClass:"flex items-center justify-end w-full"},[t._m(0),t._v(" "),n("div",{staticClass:"flex-none"},[n("button",{attrs:{type:"button"},on:{click:t.openMenu}},[n("svg",{staticClass:"w-8 h-8 text-blue-800",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])])])]),t._v(" "),t.isOpen?n("div",{staticClass:"flex flex-col justify-center py-4 space-y-3 text-lg text-center  lg:text-base lg:text-left lg:flex-wrap lg:space-x-6 lg:hidden"},t._l(t.navigation,(function(link){return n("NuxtLink",{key:link.name,staticClass:"text-base font-medium text-blue-600 hover:text-blue-800",class:t.linkSelectedClass(link.name),attrs:{to:link.href}},[t._v("\n          "+t._s(link.name)+"\n        ")])})),1):t._e()])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-1"},[n("span",{staticClass:"text-xl font-black tracking-tight text-blue-900"},[t._v("Rocket Inc.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionSocialNav:n(156).default})},211:function(t,e,n){"use strict";n.r(e);var l={props:{name:{type:String,required:!0},imageUrl:{type:String,required:!0}}},r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex-shrink-0 transition-transform duration-150 ease-in-out transform  hover:scale-105"},[n("img",{staticClass:"object-cover w-full h-48 border border-gray-300 rounded shadow-xl ",attrs:{src:t.imageUrl,alt:"Grid container image"}})]),t._v(" "),n("div",{staticClass:"flex flex-col justify-between flex-1 px-2 py-3 bg-white"},[n("div",{staticClass:"flex-1"},[n("p",{staticClass:"text-xl font-semibold text-gray-900"},[t._v("\n        "+t._s(t.name)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},212:function(t,e,n){"use strict";n.r(e);var l={props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},link:{type:Object,required:!1,default:null},posts:{type:Array,required:!0},subhref:{type:String,required:!1,default:"#"},externalLink:{type:Boolean,require:!1,default:!1}},methods:{subhrefLink:function(t){return this.externalLink?t:this.subhref+"/"+t}}},r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-4 pt-16 pb-20 bg-white border border-blue-500 shadow-md  sm:px-12 lg:pt-18 lg:pb-20 lg:px-16"},[n("div",{staticClass:"relative max-w-lg mx-auto lg:max-w-7xl"},[n("base-section-title",{attrs:{title:t.title,subtitle:t.subtitle,link:t.link}}),t._v(" "),n("div",{staticClass:"grid gap-16 pt-12 mt-6 border-t border-gray-200  lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"},t._l(t.posts,(function(e){return n("div",{key:e.id},[t.externalLink?n("a",{staticClass:"block",attrs:{href:t.subhrefLink(e.website_url)}},[n("base-grid-container",{attrs:{"image-url":e.image_url,name:e.name}})],1):n("NuxtLink",{staticClass:"block",attrs:{to:t.subhrefLink(e.id)}},[n("base-grid-container",{attrs:{"image-url":e.image_url,name:e.name}})],1)],1)})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseSectionTitle:n(209).default,BaseGridContainer:n(211).default})},216:function(t,e,n){"use strict";n.r(e);var l=n(10),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col overflow-hidden bg-white md:flex-row"},[n("div",{staticClass:"flex-1 mx-auto max-w-7xl"},[n("div",{staticClass:"relative z-10 pb-8 bg-white  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"},[n("main",{staticClass:"px-4 mx-auto mt-10  max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[n("div",{staticClass:"sm:text-center lg:text-left"},[n("h2",{staticClass:"text-xl font-black text-blue-900"},[t._v("Rocket Inc.")]),t._v(" "),n("h1",{staticClass:"mt-3 text-4xl font-extrabold tracking-tight text-gray-900  sm:text-5xl md:text-6xl"},[n("span",{staticClass:"block xl:inline"},[t._v("We are the company")]),t._v("\n            "+t._s(" ")+"\n            "),n("span",{staticClass:"block text-blue-600 xl:inline"},[t._v("you are looking for")])]),t._v(" "),t._m(0)])])])]),t._v(" "),n("div",{staticClass:"flex-1 bg-cover",style:{backgroundImage:"url(https://pbllp.com/wp-content/uploads/2018/04/AdobeStock_106606376.jpg)"}})])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mt-3 text-base text-gray-600  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0"},[t._v("\n            We provide products and services for your business. We are\n            "),n("b",[t._v("the best")]),t._v(" at what we do, contact us to find out more about\n            what we offer.\n          ")])}],!1,null,null,null);e.default=component.exports},226:function(t,e,n){"use strict";n.r(e);var l=n(7),r=(n(45),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,r,o,c,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(n=t.$supabase)){e.next=15;break}return e.next=4,n.from("area").select();case 4:return l=e.sent,r=l.data,e.next=8,n.from("people").select();case 8:return o=e.sent,c=o.data,e.next=12,n.from("product").select();case 12:return d=e.sent,f=d.data,e.abrupt("return",{postsAreas:r,postsPeople:c,postsProducts:f});case 15:case"end":return e.stop()}}),e)})))()},data:function(){return{postsAreas:[],postsPeople:[],postsProducts:[]}},head:function(){return{title:"Rocket Inc. - Solutions to your everyday problems",meta:[{hid:"index",content:"We at Rocket Inc. provide solutions for every type of digital business to help you in your journey",name:"Rocket Inc. website"}]}}}),o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("layout-header-menu",{attrs:{current:"Home"}}),t._v(" "),n("section-hero-section"),t._v(" "),n("section-grid-section",{attrs:{title:"Main areas",subtitle:"List of all the main areas we are working on",subhref:"/area",posts:t.postsAreas,link:{href:"/areas",label:"View all the areas"}}}),t._v(" "),n("section-grid-section",{attrs:{title:"Top People",subtitle:"List of the main figures working in our company",subhref:"/member",posts:t.postsPeople,link:{href:"/people",label:"View all the people"}}}),t._v(" "),n("section-grid-section",{attrs:{title:"Top Products",subtitle:"Main products the company is working on",subhref:"/product",posts:t.postsProducts,link:{href:"/products",label:"View all the products"}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutHeaderMenu:n(210).default,SectionHeroSection:n(216).default,SectionGridSection:n(212).default})}}]);