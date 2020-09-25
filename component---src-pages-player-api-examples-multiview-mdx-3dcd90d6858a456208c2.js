(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{"+/n1":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return o})),t.d(e,"default",(function(){return u}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var a=t("7ljp"),i=t("XbGe"),l=t("CA8P");t("qKvR");function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var o={},c={_frontmatter:o},s=i.a;function u(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,i={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,["components"]);return Object(a.b)(s,r({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",null,"Multiview example"),Object(a.b)("p",null,"In this example the content of the player is loaded and changed dynamically, providing an easy way for seamless switching between live or VOD contents."),Object(a.b)("p",null,"This feature of the Embed API can be used in various use cases, like switching between"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"multiple cameras"),Object(a.b)("li",{parentName:"ul"},"simultaneous sessions of a conference"),Object(a.b)("li",{parentName:"ul"},"multi-language streams"),Object(a.b)("li",{parentName:"ul"},"or to promote further channels.")),Object(a.b)("h3",null,"Example"),Object(a.b)(l.a,{src:"https://video.ibm.com/embed/6540154",controls:["multi"],mdxType:"EmbedPlayer"}),Object(a.b)("h3",null,"HTML"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-html"}),'<div class="player-container">\n    <iframe\n      id="MultiviewPlayer"\n      src="//video.ibm.com/embed/6540154"\n      frameborder="0"\n      allowfullscreen\n      webkitallowfullscreen\n      scrolling="no"\n    >\n    </iframe>\n</div>\n\n<div class="multiview-chooser">\n  <ul>\n    <li>\n      <a href="#" class="active" data-app="channel" data-id="6540154">\n        <img\n\x3c!--      users can override it with custom images --\x3e\n          src="https://ustvstaticcdn1-a.akamaihd.net/i/channel/live/1_6540154,640x360,b:2020091508.jpg"\n          alt="NASA Public-Education"\n        />\n      </a>\n    </li>\n    <li>\n      <a href="#" data-app="channel" data-id="17074538">\n        <img\n          src="https://ustvstaticcdn1-a.akamaihd.net/i/channel/live/1_17074538,640x360,b:2020091508.jpg"\n          alt="ISS HD Earth Viewing Experiment"\n        />\n      </a>\n    </li>\n    <li>\n      <a href="#" data-app="channel" data-id="10414700">\n        <img\n          src="https://ustvstaticcdn1-a.akamaihd.net/i/channel/live/1_10414700,640x360,b:2020090903.jpg"\n          alt="NASA TV Media"\n        />\n      </a>\n    </li>\n  </ul>\n</div>\n')),Object(a.b)("h3",null,"JavaScript"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"var _contents = document.querySelectorAll('.multiview-chooser a'),\n    _active = _contents[0],\n    embedApi = UstreamEmbed('MultiviewPlayer');\n\nArray.prototype.forEach.call(_contents, function (_a){\n    _a.onclick = function(e){\n        e.preventDefault();\n        e.stopPropagation();\n\n        embedApi.callMethod(\n            'load',\n            this.getAttribute('data-app'),\n            this.getAttribute('data-id')\n        );\n\n        _active.classList.remove('active');\n        this.classList.add('active');\n        _active = this;\n\n        return false;\n    };\n});\n")),Object(a.b)("h3",null,"CSS"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-css"}),".player-container {\n    padding-bottom: 56.25%;\n    position: relative;\n    width: 100%;\n}\n\n.player-container iframe {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.multiview-chooser {\n    margin-top: 1rem;\n}\n\n.multiview-chooser ul {\n    margin: 0;\n}\n\n.multiview-chooser li {\n    width: 24%;\n    float: left;\n    margin: 0;\n    padding: 0;\n}\n\n.multiview-chooser li:not(:first-of-type) {\n    margin-left: 1.33%;\n}\n\n.multiview-chooser li:before {\n    display: none;\n}\n\n.multiview-chooser a {\n    display: block;\n}\n\n.multiview-chooser a.active:after {\n    display: block;\n    content: ' ';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100;\n    box-sizing: border-box;\n    border: 3px solid #38f;\n}\n\n.multiview-chooser img {\n    margin: 0;\n    padding: 0;\n}\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-api-examples-multiview-mdx-3dcd90d6858a456208c2.js.map