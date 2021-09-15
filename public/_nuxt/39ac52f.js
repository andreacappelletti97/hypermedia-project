(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3,4,5],{209:function(e,t,n){"use strict";n.r(t);var r=n(1).a.extend({props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},link:{type:Object,required:!1,default:null}}}),l=n(10),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),n("p",{staticClass:"mt-1 text-xl text-gray-600 sm:mt-2"},[e._v("\n    "+e._s(e.subtitle)+"\n  ")]),e._v(" "),null!=e.link?n("NuxtLink",{staticClass:"\n      inline-flex\n      mt-3\n      items-center\n      px-4\n      py-1.5\n      text-sm\n      font-bold\n      text-blue-600\n      bg-white\n      border border-gray-300\n      rounded-md\n      shadow-sm\n      hover:bg-blue-600\n      hover:text-white\n      transition-all\n      duration-150\n      ease-in-out\n      focus:outline-none\n      focus:ring-2 focus:ring-offset-2 focus:ring-blue-500\n    ",attrs:{to:e.link.href}},[e._v("\n    "+e._s(e.link.label)+"\n  ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},210:function(e,t,n){"use strict";n.r(t);var r=n(1),l=[{name:"Home",href:"/"},{name:"Areas",href:"/areas"},{name:"People",href:"/people"},{name:"Products",href:"/products"},{name:"About us",href:"/aboutus"},{name:"Contact us",href:"/contactus"}],o=r.a.extend({props:{current:{type:String,required:!0}},data:function(){return{navigation:l,isOpen:!1}},methods:{linkSelectedClass:function(link){return this.current===link?"underline font-black":""},openMenu:function(){this.isOpen=!this.isOpen}}}),c=n(10),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"bg-white"},[n("nav",{staticClass:"px-0 mx-auto max-w-7xl sm:px-6 lg:px-8",attrs:{"aria-label":"Top"}},[n("div",{staticClass:"flex items-center justify-between hidden w-full py-6 border-b border-blue-500  lg:items-center lg:border-none lg:flex"},[n("div",{staticClass:"flex items-center flex-1"},[n("div",{staticClass:"hidden ml-4 space-x-8 lg:block"},e._l(e.navigation,(function(link){return n("NuxtLink",{key:link.name,staticClass:"text-base font-medium text-blue-900 hover:text-blue-700",class:e.linkSelectedClass(link.name),attrs:{to:link.href}},[e._v("\n            "+e._s(link.name)+"\n          ")])})),1)]),e._v(" "),n("div",{staticClass:"flex-none"},[n("section-social-nav")],1)]),e._v(" "),n("div",{staticClass:"px-4 py-6 lg:hidden"},[n("div",{staticClass:"flex items-center justify-end w-full"},[e._m(0),e._v(" "),n("div",{staticClass:"flex-none"},[n("button",{attrs:{type:"button"},on:{click:e.openMenu}},[n("svg",{staticClass:"w-8 h-8 text-blue-800",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])])])]),e._v(" "),e.isOpen?n("div",{staticClass:"flex flex-col justify-center py-4 space-y-3 text-lg text-center  lg:text-base lg:text-left lg:flex-wrap lg:space-x-6 lg:hidden"},e._l(e.navigation,(function(link){return n("NuxtLink",{key:link.name,staticClass:"text-base font-medium text-blue-600 hover:text-blue-800",class:e.linkSelectedClass(link.name),attrs:{to:link.href}},[e._v("\n          "+e._s(link.name)+"\n        ")])})),1):e._e()])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-1"},[n("span",{staticClass:"text-xl font-black tracking-tight text-blue-900"},[e._v("Rocket Inc.")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{SectionSocialNav:n(156).default})},213:function(e,t,n){"use strict";n.r(t);var r=n(1).a.extend({props:{section:{type:String,required:!0},link1:{type:String,required:!0},link2:{type:String,required:!0},href1:{type:String,required:!1,default:null},href2:{type:String,required:!1,default:null}}}),l=n(10),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col items-center gap-6 lg:flex-row lg:gap-10"},[n("div",{staticClass:"flex-1"},[n("span",{staticClass:"text-xl font-bold tracking-widest font-gray-800"},[e._v(e._s(e.section))])]),e._v(" "),n("div",{staticClass:"flex gap-8"},[null!=e.href1?n("NuxtLink",{staticClass:"\n        px-6\n        py-1.5\n        font-bold\n        text-sm text-blue-600\n        bg-white\n        border border-blue-400\n        rounded-md\n        shadow\n        hover:bg-blue-600\n        hover:text-white\n        transition-all\n        duration-150\n        ease-in-out\n      ",attrs:{to:e.href1}},[e._v(e._s(e.link1))]):e._e(),e._v(" "),null!=e.href2?n("NuxtLink",{staticClass:"\n        px-6\n        py-1.5\n        font-bold\n        text-sm text-blue-600\n        bg-white\n        border border-blue-400\n        rounded-md\n        shadow\n        hover:bg-blue-600\n        hover:text-white\n        transition-all\n        duration-150\n        ease-in-out\n      ",attrs:{to:e.href2}},[e._v(e._s(e.link2))]):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports},224:function(e,t,n){"use strict";n.r(t);var r=n(7),l=(n(37),n(45),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l,o,c,d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route,r=e.$supabase,l=n.params.singlemember,t.next=4,r.from("people").select().eq("id",l).single();case 4:return o=t.sent,c=o.data,t.next=8,r.from("people_data").select().eq("people_id",l).single();case 8:return d=t.sent,f=d.data,t.abrupt("return",{singleMember:c,linkData:f});case 11:case"end":return t.stop()}}),t)})))()},data:function(){return{singleMember:{},linkData:{}}},head:function(){return{title:this.headTitle,meta:[{hid:this.headHid,name:this.headName,content:this.headContent}]}},computed:{orientationLabel:function(){return"Member / "+this.singleMember.name+" "+this.singleMember.surname},myAreaLink:function(){return"View my working area: "+this.linkData.area_name},myProductLink:function(){return"View product I'm working on: "+this.linkData.product_name},myAreaHref:function(){return"/area/"+this.linkData.area_id},myProductHref:function(){return"/product/"+this.linkData.product_id},headTitle:function(){return this.singleMember.name+" - Rocket Inc."},headHid:function(){return"member "+this.singleMember.name},headName:function(){return"Rocket Inc. "+this.singleMember.name},headContent:function(){return"View all the details about "+this.singleMember.name+" working at Rocket Inc."}}}),o=n(10),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("layout-header-menu",{attrs:{current:"People"}}),e._v(" "),n("div",{staticClass:"px-8 pb-20 bg-white sm:px-12 lg:pt-10 lg:pb-28 lg:px-16"},[n("base-orientation-info",{attrs:{section:e.orientationLabel,link1:e.myAreaLink,link2:e.myProductLink,href1:e.myAreaHref,href2:e.myProductHref}}),e._v(" "),n("div",{staticClass:"my-10"},[n("div",{staticClass:"flex flex-col lg:flex-row"},[n("div",{staticClass:"\n            w-full\n            bg-gray-300 bg-cover\n            border border-gray-400\n            rounded-lg\n            shadow-lg\n            h-60\n            lg:w-60\n          ",style:{backgroundImage:"url("+e.singleMember.image_url+")"}}),e._v(" "),n("div",{staticClass:"pt-8 lg:p-10"},[n("h2",{staticClass:"text-5xl font-bold tracking-wider"},[e._v("\n            "+e._s(e.singleMember.name+" "+e.singleMember.surname)+"\n          ")]),e._v(" "),n("p",{staticClass:"text-lg font-medium"},[e._v(e._s(e.singleMember.role))]),e._v(" "),n("p",{staticClass:"font-light text-md"},[e._v(e._s(e.singleMember.quote))])])])]),e._v(" "),n("div",{staticClass:"flex flex-col gap-10"},[n("div",[n("base-section-title",{attrs:{title:"Bio",subtitle:e.singleMember.bio}})],1),e._v(" "),n("div",[n("base-section-title",{attrs:{title:"Education",subtitle:e.singleMember.education}})],1)])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LayoutHeaderMenu:n(210).default,BaseOrientationInfo:n(213).default,BaseSectionTitle:n(209).default})}}]);