(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{PfA6:function(e,b,t){"use strict";t.r(b),t.d(b,"_frontmatter",(function(){return a})),t.d(b,"default",(function(){return p}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var c=t("7ljp"),r=t("XbGe"),n=t("Drr0");t("qKvR");function d(){return(d=Object.assign||function(e){for(var b=1;b<arguments.length;b++){var t=arguments[b];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e}).apply(this,arguments)}var a={},i={_frontmatter:a},o=r.a;function p(e){var b=e.components,t=function(e,b){if(null==e)return{};var t,c,r={},n=Object.keys(e);for(c=0;c<n.length;c++)t=n[c],b.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(c.b)(o,d({},i,t,{components:b,mdxType:"MDXLayout"}),Object(c.b)("p",null,"An ECDN server."),Object(c.b)(n.k,{mdxType:"GQLCodeSnippet"},Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.d,{mdxType:"GQLKeyword"},"type")," Server ",Object(c.b)(n.h,{mdxType:"GQLOpen"})),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# ID of ECDN server.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"id"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-scalars/ID",mdxType:"GQLLink"},"ID"),Object(c.b)(n.i,{mdxType:"GQLOperator"},"!")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Fully Qualified Domain Name of ECDN server.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"fqdn"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-scalars/FQDN",mdxType:"GQLLink"},"FQDN"),Object(c.b)(n.i,{mdxType:"GQLOperator"},"!")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Location of server.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"location"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-objects/Location",mdxType:"GQLLink"},"Location"),Object(c.b)(n.i,{mdxType:"GQLOperator"},"!")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# The last time this server last checked in to the API.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Null if server never checked in before.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"lastCheckIn"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-scalars/Time",mdxType:"GQLLink"},"Time")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Whether server is online or not (based on it's last check in date).")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"online"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-scalars/Boolean",mdxType:"GQLLink"},"Boolean"),Object(c.b)(n.i,{mdxType:"GQLOperator"},"!")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Health indicators of server.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Null (unknown) if server hasn't reported activity recently")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# (turned off or cannot reach ECDN API).")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"health"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-objects/ServerHealth",mdxType:"GQLLink"},"ServerHealth")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Current configuration of server. Null if server never checked in before.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"currentConfiguration"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-objects/ServerConfiguration",mdxType:"GQLLink"},"ServerConfiguration")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Desired configuration of server.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"desiredConfiguration"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-objects/ServerConfiguration",mdxType:"GQLLink"},"ServerConfiguration"),Object(c.b)(n.i,{mdxType:"GQLOperator"},"!")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Update status of server.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"update"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-objects/Update",mdxType:"GQLLink"},"Update"),Object(c.b)(n.i,{mdxType:"GQLOperator"},"!")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Hardware configuration of server. Null if server never checked in before.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"hardware"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-objects/Hardware",mdxType:"GQLLink"},"Hardware")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Video delivery statistics of server.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"videoDelivery"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-objects/VideoDelivery",mdxType:"GQLLink"},"VideoDelivery"),Object(c.b)(n.i,{mdxType:"GQLOperator"},"!")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Resource usages of server.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"usages"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-objects/ServerUsage",mdxType:"GQLLink"},"ServerUsage"),Object(c.b)(n.i,{mdxType:"GQLOperator"},"!")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# What time was this server created and by whom.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"created"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-objects/RecordedAction",mdxType:"GQLLink"},"RecordedAction"),Object(c.b)(n.i,{mdxType:"GQLOperator"},"!")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.c,{mdxType:"GQLComment"},"# Last time this server was modified and by whom.")),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.j,{mdxType:"GQLTab"}),Object(c.b)(n.g,{mdxType:"GQLName"},"modified"),"(): ",Object(c.b)(n.f,{href:"/ecdn-api-objects/RecordedAction",mdxType:"GQLLink"},"RecordedAction"),Object(c.b)(n.i,{mdxType:"GQLOperator"},"!")),Object(c.b)(n.e,{mdxType:"GQLLine"}," "),Object(c.b)(n.e,{mdxType:"GQLLine"},Object(c.b)(n.b,{mdxType:"GQLClose"}))),Object(c.b)("h2",null,"Fields"),Object(c.b)("h3",null,"id: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/ID"}),"ID"),"!"),Object(c.b)("p",null,"ID of ECDN server."),Object(c.b)("h3",null,"fqdn: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/FQDN"}),"FQDN"),"!"),Object(c.b)("p",null,"Fully Qualified Domain Name of ECDN server."),Object(c.b)("h3",null,"location: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-objects/Location"}),"Location"),"!"),Object(c.b)("p",null,"Location of server."),Object(c.b)("h3",null,"lastCheckIn: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/Time"}),"Time")),Object(c.b)("p",null,"The last time this server last checked in to the API.\nNull if server never checked in before."),Object(c.b)("h3",null,"online: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/Boolean"}),"Boolean"),"!"),Object(c.b)("p",null,"Whether server is online or not (based on it’s last check in date)."),Object(c.b)("h3",null,"health: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-objects/ServerHealth"}),"ServerHealth")),Object(c.b)("p",null,"Health indicators of server.\nNull (unknown) if server hasn’t reported activity recently\n(turned off or cannot reach ECDN API)."),Object(c.b)("h3",null,"currentConfiguration: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-objects/ServerConfiguration"}),"ServerConfiguration")),Object(c.b)("p",null,"Current configuration of server. Null if server never checked in before."),Object(c.b)("h3",null,"desiredConfiguration: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-objects/ServerConfiguration"}),"ServerConfiguration"),"!"),Object(c.b)("p",null,"Desired configuration of server."),Object(c.b)("h3",null,"update: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-objects/Update"}),"Update"),"!"),Object(c.b)("p",null,"Update status of server."),Object(c.b)("h3",null,"hardware: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-objects/Hardware"}),"Hardware")),Object(c.b)("p",null,"Hardware configuration of server. Null if server never checked in before."),Object(c.b)("h3",null,"videoDelivery: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-objects/VideoDelivery"}),"VideoDelivery"),"!"),Object(c.b)("p",null,"Video delivery statistics of server."),Object(c.b)("h3",null,"usages: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-objects/ServerUsage"}),"ServerUsage"),"!"),Object(c.b)("p",null,"Resource usages of server."),Object(c.b)("h3",null,"created: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-objects/RecordedAction"}),"RecordedAction"),"!"),Object(c.b)("p",null,"What time was this server created and by whom."),Object(c.b)("h3",null,"modified: ",Object(c.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-objects/RecordedAction"}),"RecordedAction"),"!"),Object(c.b)("p",null,"Last time this server was modified and by whom."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ecdn-api-objects-server-mdx-c6e40b6234ce4204689e.js.map