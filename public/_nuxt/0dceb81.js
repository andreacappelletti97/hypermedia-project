(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,5],{209:function(t,e,n){"use strict";n.r(e);var l=n(1).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},link:{type:Object,required:!1,default:null}}}),r=n(10),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")]),t._v(" "),null!=t.link?n("NuxtLink",{staticClass:"\n      inline-flex\n      mt-3\n      items-center\n      px-4\n      py-1.5\n      text-sm\n      font-bold\n      text-blue-600\n      bg-white\n      border border-gray-300\n      rounded-md\n      shadow-sm\n      hover:bg-blue-600\n      hover:text-white\n      transition-all\n      duration-150\n      ease-in-out\n      focus:outline-none\n      focus:ring-2 focus:ring-offset-2 focus:ring-blue-500\n    ",attrs:{to:t.link.href}},[t._v("\n    "+t._s(t.link.label)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},210:function(t,e,n){"use strict";n.r(e);var l=n(1),r=[{name:"Home",href:"/"},{name:"Areas",href:"/areas"},{name:"People",href:"/people"},{name:"Products",href:"/products"},{name:"About us",href:"/aboutus"},{name:"Contact us",href:"/contactus"}],c=l.a.extend({props:{current:{type:String,required:!0}},data:function(){return{navigation:r,isOpen:!1}},methods:{linkSelectedClass:function(link){return this.current===link?"underline font-black":""},openMenu:function(){this.isOpen=!this.isOpen}}}),o=n(10),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bg-white"},[n("nav",{staticClass:"px-0 mx-auto max-w-7xl sm:px-6 lg:px-8",attrs:{"aria-label":"Top"}},[n("div",{staticClass:"flex items-center justify-between hidden w-full py-6 border-b border-blue-500  lg:items-center lg:border-none lg:flex"},[n("div",{staticClass:"flex items-center flex-1"},[n("div",{staticClass:"hidden ml-4 space-x-8 lg:block"},t._l(t.navigation,(function(link){return n("NuxtLink",{key:link.name,staticClass:"text-base font-medium text-blue-900 hover:text-blue-700",class:t.linkSelectedClass(link.name),attrs:{to:link.href}},[t._v("\n            "+t._s(link.name)+"\n          ")])})),1)]),t._v(" "),n("div",{staticClass:"flex-none"},[n("section-social-nav")],1)]),t._v(" "),n("div",{staticClass:"px-4 py-6 lg:hidden"},[n("div",{staticClass:"flex items-center justify-end w-full"},[t._m(0),t._v(" "),n("div",{staticClass:"flex-none"},[n("button",{attrs:{type:"button"},on:{click:t.openMenu}},[n("svg",{staticClass:"w-8 h-8 text-blue-800",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])])])]),t._v(" "),t.isOpen?n("div",{staticClass:"flex flex-col justify-center py-4 space-y-3 text-lg text-center  lg:text-base lg:text-left lg:flex-wrap lg:space-x-6 lg:hidden"},t._l(t.navigation,(function(link){return n("NuxtLink",{key:link.name,staticClass:"text-base font-medium text-blue-600 hover:text-blue-800",class:t.linkSelectedClass(link.name),attrs:{to:link.href}},[t._v("\n          "+t._s(link.name)+"\n        ")])})),1):t._e()])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-1"},[n("span",{staticClass:"text-xl font-black tracking-tight text-blue-900"},[t._v("Rocket Inc.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionSocialNav:n(156).default})},218:function(t,e,n){"use strict";n.r(e);var l=n(7),r=(n(45),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$supabase,e.next=3,n.from("area").select();case 3:return l=e.sent,r=l.data,e.abrupt("return",{postsAreas:r});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{postsAreas:[]}},head:function(){return{title:"Areas - Rocket Inc.",meta:[{hid:"areas",content:"View all the areas in which Rocket Inc. is specialized",name:"Rocket Inc. areas"}]}},methods:{hrefLink:function(t){return"area/"+t}}}),c=n(10),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("layout-header-menu",{attrs:{current:"Areas"}}),t._v(" "),n("div",{staticClass:"px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16"},[n("base-section-title",{attrs:{title:"Areas",subtitle:"All the areas in which Rocket Inc. is working on"}}),t._v(" "),n("div",{staticClass:"flex flex-col gap-8 mt-10"},t._l(t.postsAreas,(function(area){return n("div",{key:area.id,staticClass:"\n          relative\n          flex\n          items-center\n          justify-center\n          py-16\n          bg-cover\n          border border-gray-400\n          rounded-lg\n          shadow-lg\n          bg-gray-50\n        ",style:{backgroundImage:"url("+area.image_url+")"}},[n("div",{staticClass:"absolute inset-0 bg-blue-900 rounded-lg opacity-75"}),t._v(" "),n("div",{staticClass:"z-50 text-center"},[n("NuxtLink",{staticClass:"text-white hover:underline",attrs:{to:t.hrefLink(area.id)}},[n("h2",{staticClass:"text-6xl font-bold tracking-wider text-white"},[t._v("\n              "+t._s(area.name)+"\n            ")]),t._v(" "),n("p",{staticClass:"text-2xl font-medium text-white"},[t._v("\n              "+t._s(area.description)+"\n            ")])])],1)])})),0)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutHeaderMenu:n(210).default,BaseSectionTitle:n(209).default})}}]);