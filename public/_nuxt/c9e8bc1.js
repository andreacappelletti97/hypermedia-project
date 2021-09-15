(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4,5],{209:function(t,e,l){"use strict";l.r(e);var n=l(1).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},link:{type:Object,required:!1,default:null}}}),r=l(10),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),l("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[t._v("\n    "+t._s(t.subtitle)+"\n  ")]),t._v(" "),null!=t.link?l("NuxtLink",{staticClass:"\n      inline-flex\n      mt-3\n      items-center\n      px-4\n      py-1.5\n      text-sm\n      font-bold\n      text-blue-600\n      bg-white\n      border border-gray-300\n      rounded-md\n      shadow-sm\n      hover:bg-blue-600\n      hover:text-white\n      transition-all\n      duration-150\n      ease-in-out\n      focus:outline-none\n      focus:ring-2 focus:ring-offset-2 focus:ring-blue-500\n    ",attrs:{to:t.link.href}},[t._v("\n    "+t._s(t.link.label)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},210:function(t,e,l){"use strict";l.r(e);var n=l(1),r=[{name:"Home",href:"/"},{name:"Areas",href:"/areas"},{name:"People",href:"/people"},{name:"Products",href:"/products"},{name:"About us",href:"/aboutus"},{name:"Contact us",href:"/contactus"}],o=n.a.extend({props:{current:{type:String,required:!0}},data:function(){return{navigation:r,isOpen:!1}},methods:{linkSelectedClass:function(link){return this.current===link?"underline font-black":""},openMenu:function(){this.isOpen=!this.isOpen}}}),c=l(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"bg-white"},[l("nav",{staticClass:"px-0 mx-auto max-w-7xl sm:px-6 lg:px-8",attrs:{"aria-label":"Top"}},[l("div",{staticClass:"flex items-center justify-between hidden w-full py-6 border-b border-blue-500  lg:items-center lg:border-none lg:flex"},[l("div",{staticClass:"flex items-center flex-1"},[l("div",{staticClass:"hidden ml-4 space-x-8 lg:block"},t._l(t.navigation,(function(link){return l("NuxtLink",{key:link.name,staticClass:"text-base font-medium text-blue-900 hover:text-blue-700",class:t.linkSelectedClass(link.name),attrs:{to:link.href}},[t._v("\n            "+t._s(link.name)+"\n          ")])})),1)]),t._v(" "),l("div",{staticClass:"flex-none"},[l("section-social-nav")],1)]),t._v(" "),l("div",{staticClass:"px-4 py-6 lg:hidden"},[l("div",{staticClass:"flex items-center justify-end w-full"},[t._m(0),t._v(" "),l("div",{staticClass:"flex-none"},[l("button",{attrs:{type:"button"},on:{click:t.openMenu}},[l("svg",{staticClass:"w-8 h-8 text-blue-800",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])])])]),t._v(" "),t.isOpen?l("div",{staticClass:"flex flex-col justify-center py-4 space-y-3 text-lg text-center  lg:text-base lg:text-left lg:flex-wrap lg:space-x-6 lg:hidden"},t._l(t.navigation,(function(link){return l("NuxtLink",{key:link.name,staticClass:"text-base font-medium text-blue-600 hover:text-blue-800",class:t.linkSelectedClass(link.name),attrs:{to:link.href}},[t._v("\n          "+t._s(link.name)+"\n        ")])})),1):t._e()])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex-1"},[l("span",{staticClass:"text-xl font-black tracking-tight text-blue-900"},[t._v("Rocket Inc.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionSocialNav:l(156).default})},219:function(t,e,l){"use strict";l.r(e);var n=l(1).a.extend({head:function(){return{title:"Contact us - Rocket Inc.",meta:[{hid:"contactus",content:"Are you looking for more about Rocket Inc.? You can easily contact us from our website",name:"Rocket Inc. contact us"}]}}}),r=l(10),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("layout-header-menu",{attrs:{current:"Contact us"}}),t._v(" "),l("div",{staticClass:"px-8 pt-8 pb-20 bg-white sm:px-12 lg:pt-16 lg:pb-28 lg:px-16"},[l("div",[l("base-section-title",{attrs:{title:"Contact us",subtitle:"Use the online form to send us your message"}}),t._v(" "),l("div",{staticClass:"flex flex-col p-10 mt-8 space-y-8 border border-gray-200 rounded-md shadow-md "},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),l("div",[l("button",{staticClass:"w-full py-3 text-lg font-black tracking-tight text-center text-blue-800 transition-all duration-150 ease-in-out border-2 border-blue-700 cursor-not-allowed  opacity-30 rounded-2xl",attrs:{type:"submit",disabled:!0,title:"Not implemented"}},[t._v("\n            Send message\n          ")])])])],1),t._v(" "),l("div",{staticClass:"mt-16"},[l("base-section-title",{attrs:{title:"Company information",subtitle:"Here you can find all the contact information about the company"}}),t._v(" "),t._m(3)],1)])],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col space-y-2"},[l("label",{staticClass:"label",attrs:{for:"fullname"}},[t._v("Full name")]),t._v(" "),l("input",{staticClass:"input",attrs:{id:"fullname",type:"text",name:"fullname",placeholder:"Insert full name",required:""}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col space-y-2"},[l("label",{staticClass:"label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),l("input",{staticClass:"input",attrs:{id:"email",type:"email",name:"email",placeholder:"Insert email",required:""}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col space-y-2"},[l("label",{staticClass:"label",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),l("textarea",{staticClass:"input",attrs:{id:"message",name:"message",rows:"10",placeholder:"Write here your message",required:""}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"grid grid-cols-1 gap-8 mt-6 md:grid-cols-2 lg:grid-cols-3"},[l("div",{staticClass:"flex flex-col p-6 space-y-1 border border-gray-100 shadow"},[l("span",{staticClass:"label"},[t._v("Email")]),t._v(" "),l("p",{staticClass:"text-2xl font-light"},[t._v("info@rocketinc.com")])]),t._v(" "),l("div",{staticClass:"flex flex-col p-6 space-y-1 border border-gray-100 shadow"},[l("span",{staticClass:"label"},[t._v("Address")]),t._v(" "),l("p",{staticClass:"text-2xl font-light"},[t._v("Via Roma, 41, Milano")])]),t._v(" "),l("div",{staticClass:"flex flex-col p-6 space-y-1 border border-gray-100 shadow"},[l("span",{staticClass:"label"},[t._v("CEO")]),t._v(" "),l("p",{staticClass:"text-2xl font-light"},[t._v("Mattia Libralato")])]),t._v(" "),l("div",{staticClass:"flex flex-col p-6 space-y-1 border border-gray-100 shadow"},[l("span",{staticClass:"label"},[t._v("Tel.")]),t._v(" "),l("p",{staticClass:"text-2xl font-light"},[t._v("335-1928922928")])]),t._v(" "),l("div",{staticClass:"flex flex-col p-6 space-y-1 border border-gray-100 shadow"},[l("span",{staticClass:"label"},[t._v("Fax")]),t._v(" "),l("p",{staticClass:"text-2xl font-light"},[t._v("335-99827282")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutHeaderMenu:l(210).default,BaseSectionTitle:l(209).default})}}]);