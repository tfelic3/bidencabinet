(this.webpackJsonpbidencabinet=this.webpackJsonpbidencabinet||[]).push([[0],{30:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var n=r(1),i=r(0),a=r.n(i),s=r(22),o=r.n(s),c=r(5),d=r(6),h=r(8),l=r(7),p=r(41),u=r(15),m=r(14),b=(r(30),function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"head",children:Object(n.jsx)("h1",{children:"Biden Cabinet Nominees"})})}}]),r}(i.Component)),g=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(n.jsxs)(p.a,{className:"box",style:{},children:[Object(n.jsx)(p.a.Img,{variant:"top",src:this.props.pick.imgPath}),Object(n.jsxs)(p.a.Body,{children:[Object(n.jsx)(p.a.Title,{style:{textOverflow:"ellipsis",height:"90px",justifyContent:"flex-start",alignItems:"flex-start"},children:this.props.pick.title}),Object(n.jsx)(m.b,{to:"/cabinet/".concat(this.props.pick.title),children:Object(n.jsx)(u.a,{variant:"outline-secondary",children:"More Information"})})]})]})}}]),r}(i.Component),f=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return this.props.candidates.map((function(e){return Object(n.jsx)(g,{pick:e},e.id)}))}}]),r}(i.Component),j=r(3),y=(r(36),i.Component,function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e=this,t=this.props.candidates.find((function(t){return Number(e.props.cabinet.id)>0?Number(t.id)===Number(e.props.cabinet.id)-1:Number(t.id)===Number(e.props.candidates.length-1)})),r=this.props.candidates.find((function(t){return Number(e.props.cabinet.id)>=Number(e.props.candidates.length-1)?0===Number(t.id):Number(t.id)===Number(e.props.cabinet.id+1)}));return Object(n.jsx)("div",{className:"view",children:Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)("img",{className:"mugshot",src:this.props.cabinet.imgPath}),Object(n.jsx)("h2",{children:this.props.cabinet.title}),Object(n.jsx)("h4",{children:this.props.cabinet.name}),Object(n.jsx)("h5",{}),Object(n.jsx)("p",{children:this.props.cabinet.description}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Previous position holder: "})," ",this.props.cabinet.previousHolder]}),Object(n.jsxs)("div",{className:"buttongroup",children:[Object(n.jsx)(m.b,{to:"/",children:Object(n.jsx)(u.a,{variant:"outline-dark",children:"Home"})}),Object(n.jsx)(m.b,{to:"/cabinet/".concat(t.title),children:Object(n.jsx)(u.a,{variant:"outline-dark",children:"Previous"})}),Object(n.jsx)(m.b,{to:"/cabinet/".concat(r.title),children:Object(n.jsx)(u.a,{variant:"outline-dark",children:"Next"})})]})]})})}}]),r}(i.Component)),v=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(n.jsx)("footer",{children:Object(n.jsxs)("p",{className:"boss",children:["Sources: ",Object(n.jsx)("a",{href:"https://buildbackbetter.gov/the-transition/",target:"_blank",children:"The Transition "})," and ",Object(n.jsx)("a",{href:"https://www.whitehouse.gov/the-trump-administration/the-cabinet/",target:"_blank",children:"The Trump Administration"})]})})}}]),r}(i.Component),x=(r(37),r(38),r(24)),O=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).nextCandidate=function(){n.setState({idx:(n.state.idx+1)%n.state.candidates.length}),console.log(n.state.candidates[n.state.idx])},n.previousCandidate=function(){n.setState({idx:(n.state.idx-1)%n.state.candidates.length}),console.log(n.state.candidates[n.state.idx])},n.state={candidates:[{title:"President",name:"Joe Biden",description:"The president heads the US government. He is also commander-in-chief of the armed forces.",previousHolder:"Donald Trump",imgPath:"img/biden4x4.png",id:0},{title:"Vice President",name:"Kamala Harris",description:"The vice president is second in command. The vice president assumes the role of president if the president is unable to serve.",previousHolder:"Mike Pence",imgPath:"img/harris4x4.png",id:1},{title:"Secretary of State",name:"Antony Blinken",description:"The secretary of state serves as the president\u2019s top foreign policy adviser. Among duties, the secretary conducts negotiations related to foreign affairs and issues passports to American citizens.",previousHolder:"Michael Pompeo",imgPath:"img/blinken4x4.png",id:2},{title:"Secretary of the Treasury",name:"Janet Yellen",description:"The secretary of treasury manages the country\u2019s economic and fiscal policy. Duties of the department include enforcing tax and tariff law and producing currency.",previousHolder:"Steven Mnuchin",imgPath:"img/yellen4x4.png",id:3},{title:"Secretary of Defense",name:"Gen. Lloyd Austin",description:"The secretary of defense leads the Department of Defense which creates policy and oversees the US military. The department\u2019s headquarters is at the Pentagon.",previousHolder:"Christopher C. Miller",imgPath:"img/austin4x4.png",id:4},{title:"Attorney General",name:"Judge Merrick Garland",description:"The attorney general oversees the Department of Justice (DOJ). The attorney general represents the country in legal matters and enforces the country\u2019s laws.",previousHolder:"William Barr",imgPath:"img/garland4x4.png",id:5},{title:"Secretary of the Interior",name:"Deb Haaland",description:"This secretary leads the department which protects the country\u2019s natural resources and provides federal assistance to US territories and Native American and Alaskan tribes.",previousHolder:"David Bernhardt",imgPath:"img/haaland4x4.png",id:6},{title:"Secretary of Agriculture",name:"Tom Vilsack",description:"The secretary leads the department responsible for creating and implementing the country\u2019s agriculture, farming and food policy.",previousHolder:"Sonny Perdue",imgPath:"img/vilsack4x4.png",id:7},{title:"Secretary of Commerce",name:"Gina Raimondo",description:"This secretary leads the department which fosters economic development and technological innovation. The department helps the US economy grow.",previousHolder:"Wilbur Ross",imgPath:"img/gina4x4.png",id:8},{title:"Secretary of Labor",name:"Marty Walsh",description:"The secretary of labor leads the department which oversees federal programs protecting US workers, job seekers and retirees.",previousHolder:"Eugene Scalia",imgPath:"img/marty4x4.png",id:9},{title:"Secretary of Health & Human Services",name:"Xavier Becerra",description:"This secretary runs the department that protects the health of Americans by providing efficient human services. The department also oversees the National Institutes of Health, the Food and Drug Administration, and the Centers for Disease Control.",previousHolder:"Alex Azar",imgPath:"img/becerra4x4.png",id:10},{title:"Secretary of Housing & Urban Development",name:"Marcia Fudge",description:"This secretary oversees the department which creates policies that address the country\u2019s housing needs and enforces fair housing laws.  ",previousHolder:"Ben Carson",imgPath:"img/fudge4x4.png",id:11},{title:"Secretary of Transportation",name:"Pete Buttigieg",description:"The secretary of transportation supervises the department which plans and implements the nation\u2019s transportation system. The department also sets safety regulations for all major modes of transportation.",previousHolder:"Elaine Chao",imgPath:"img/buttigieg4x4.png",id:12},{title:"Secretary of Energy",name:"Jennifer Granholm",description:"The secretary oversees the department which manages the country\u2019s nuclear infrastructure and supervises its energy policy.",previousHolder:"Dan Brouillette",imgPath:"img/granholm4x4.png",id:13},{title:"Secretary of Education",name:"Miguel Cardona",description:"This secretary administers the department which supports the education of children and adults in schools and colleges throughout the country.",previousHolder:"Elisabeth Prince DeVos",imgPath:"img/cardona4x4.png",id:14},{title:"Secretary of Homeland Security",name:"Alejandro Mayorkas",description:"The secretary runs the department which ensures the safety and security of the US. The US government created the department in the aftermath of the Sept. 11 terrorist attacks. ",previousHolder:"Chad Wolf",imgPath:"img/mayorkas4x4.png",id:15},{title:"Secretary of Veterans Affairs",name:"Denis McDonough",description:"This secretary runs the Department of Veterans Affairs which provides programs benefiting veterans and members of their families.",previousHolder:"Robert Wilkie",imgPath:"img/mcdonough4x4.png",id:16}],idx:0,newArray:[]},n}return Object(d.a)(r,[{key:"render",value:function(){var e=this;return document.title="Biden Cabinet Nominees",Object(n.jsxs)(m.a,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(b,{})}}),Object(n.jsxs)(x.a,{className:"grid",style:{backgroundImage:"url(".concat("./img/seal.svg",")")},children:[Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(f,{candidates:e.state.candidates})}}),Object(n.jsx)(j.a,{exact:!0,path:"/cabinet/:title",render:function(t){var r=t.match;return Object(n.jsx)(y,{candidates:e.state.candidates,nextCandidate:e.nextCandidate,previousCandidate:e.previousCandidate,idx:e.state.idx,newArray:e.state.newArray,cabinet:e.state.candidates.find((function(e){return e.title===r.params.title}))})}})]}),Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(v,{})}})]})}}]),r}(i.Component);o.a.render(Object(n.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c4398ba5.chunk.js.map