(this.webpackJsonpbidencabinet=this.webpackJsonpbidencabinet||[]).push([[0],{30:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),a=i.n(r),s=i(22),o=i.n(s),c=i(5),d=i(6),l=i(8),h=i(7),p=i(41),u=i(15),m=i(14),b=(i(30),function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"head",children:Object(n.jsx)("h1",{children:"Biden Cabinet Nominees"})})}}]),i}(r.Component)),g=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(n.jsxs)(p.a,{className:"box",style:{},children:[Object(n.jsx)(p.a.Img,{variant:"top",src:this.props.pick.imgPath}),Object(n.jsxs)(p.a.Body,{children:[Object(n.jsx)(p.a.Title,{style:{textOverflow:"ellipsis",height:"90px",justifyContent:"flex-start",alignItems:"flex-start"},children:this.props.pick.title}),Object(n.jsx)(m.b,{to:"/cabinet/".concat(this.props.pick.title),children:Object(n.jsx)(u.a,{variant:"outline-secondary",children:"More Information"})})]})]})}}]),i}(r.Component),f=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return this.props.candidates.map((function(e){return Object(n.jsx)(g,{pick:e},e.id)}))}}]),i}(r.Component),j=i(3),v=(i(36),r.Component,function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){var e=this,t=this.props.candidates.find((function(t){return Number(e.props.cabinet.id)>0?Number(t.id)===Number(e.props.cabinet.id)-1:Number(t.id)===Number(e.props.candidates.length-1)})),i=this.props.candidates.find((function(t){return Number(e.props.cabinet.id)>=Number(e.props.candidates.length-1)?0===Number(t.id):Number(t.id)===Number(e.props.cabinet.id+1)}));return Object(n.jsx)("div",{className:"view",children:Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)("img",{className:"mugshot",src:this.props.cabinet.imgPath}),Object(n.jsx)("h2",{children:this.props.cabinet.title}),Object(n.jsx)("h4",{children:this.props.cabinet.name}),Object(n.jsx)("h5",{}),Object(n.jsx)("p",{children:this.props.cabinet.description}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Previous position holder: "})," ",this.props.cabinet.previousHolder]}),Object(n.jsxs)("div",{className:"buttongroup",children:[Object(n.jsx)(m.b,{to:"/",children:Object(n.jsx)(u.a,{variant:"outline-dark",children:"Home"})}),Object(n.jsx)(m.b,{to:"/cabinet/".concat(t.title),children:Object(n.jsx)(u.a,{variant:"outline-dark",children:"Previous"})}),Object(n.jsx)(m.b,{to:"/cabinet/".concat(i.title),children:Object(n.jsx)(u.a,{variant:"outline-dark",children:"Next"})})]})]})})}}]),i}(r.Component)),x=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(n.jsx)("footer",{children:Object(n.jsxs)("p",{className:"boss",children:["Sources: ",Object(n.jsx)("a",{href:"https://buildbackbetter.gov/the-transition/",target:"_blank",children:"The Transition "})," and ",Object(n.jsx)("a",{href:"https://www.whitehouse.gov/the-trump-administration/the-cabinet/",target:"_blank",children:"The Trump Administration"})]})})}}]),i}(r.Component),y=(i(37),i(38),i(24)),O=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).nextCandidate=function(){n.setState({idx:(n.state.idx+1)%n.state.candidates.length}),console.log(n.state.candidates[n.state.idx])},n.previousCandidate=function(){n.setState({idx:(n.state.idx-1)%n.state.candidates.length}),console.log(n.state.candidates[n.state.idx])},n.state={candidates:[{title:"President",name:"Joe Biden",description:"The president heads the US government. He is also commander-in-chief of the armed forces.",previousHolder:"Donald Trump",imgPath:"img/biden4x4.png",id:0},{title:"Vice President",name:"Kamala Harris",description:"The vice president is second in command. The vice president assumes the role of president if the president is unable to serve.",previousHolder:"Mike Pence",imgPath:"img/harris4x4.png",id:1},{title:"Secretary of State",name:"Antony Blinken",description:"The secretary oversees America\u2019s diplomatic corps, directs foreign policies for the president and serves as a top foreign affairs adviser.",previousHolder:"Michael Pompeo",imgPath:"img/blinken4x4.png",id:2},{title:"Secretary of the Treasury",name:"Janet Yellen",description:"The secretary oversees the US economy and financial systems.",previousHolder:"Steven Mnuchin",imgPath:"img/yellen4x4.png",id:3},{title:"Secretary of Defense",name:"Gen. Lloyd Austin",description:"The secretary oversees the military and serves as a primary adviser to the president on defense policies for the nation.",previousHolder:"Christopher C. Miller",imgPath:"img/austin4x4.png",id:4},{title:"Attorney General",name:"Merrick Garland",description:"The attorney general is the nation's chief law enforcement official of the federal government who oversees the Department of Justice.",previousHolder:"William Barr",imgPath:"img/garland4x4.png",id:5},{title:"Secretary of the Interior",name:"Deb Haaland",description:"The secretary is responsible for conservation and management of the nation's national resources.",previousHolder:"David Bernhardt",imgPath:"img/haaland4x4.png",id:6},{title:"Secretary of Agriculture",name:"Tom Vilsack",description:"The secretary oversees policy regulating food production and safety, farming and rural development.\u202f ",previousHolder:"Sonny Perdue",imgPath:"img/vilsack4x4.png",id:7},{title:"Secretary of Commerce",name:"Gina Raimondo",description:"The secretary directs  trade policies and negotiations and manages data for, among other things, weather, fishing and the US Census.",previousHolder:"Wilbur Ross",imgPath:"img/gina4x4.png",id:8},{title:"Secretary of Labor",name:"Marty Walsh",description:"The secretary  oversees policies on wages and benefits as well as working conditions and rights.",previousHolder:"Eugene Scalia",imgPath:"img/marty4x4.png",id:9},{title:"Secretary of Health & Human Services",name:"Xavier Becerra",description:"This secretary is in charge of health policy and oversees, Medicaid, Medicare and the Centers for Disease Control and Prevention.",previousHolder:"Alex Azar",imgPath:"img/becerra4x4.png",id:10},{title:"Secretary of Housing & Urban Development",name:"Marcia Fudge",description:"The secretary manages federal housing and lending programs for home buyers.",previousHolder:"Ben Carson",imgPath:"img/fudge4x4.png",id:11},{title:"Secretary of Transportation",name:"Pete Buttigieg",description:"The secretary is in charge of policy related to transportation safety and efficiency.",previousHolder:"Elaine Chao",imgPath:"img/buttigieg4x4.png",id:12},{title:"Secretary of Energy",name:"Jennifer Granholm",description:"This secretary oversees policies and regulations related to energy, fuel sources, the environment and nuclear technology development.",previousHolder:"Dan Brouillette",imgPath:"img/granholm4x4.png",id:13},{title:"Secretary of Education",name:"Miguel Cardona",description:"This secretary administers the department which supports the education of children and adults in schools and colleges throughout the country.",previousHolder:"Elisabeth Prince DeVos",imgPath:"img/cardona4x4.png",id:14},{title:"Secretary of Homeland Security",name:"Alejandro Mayorkas",description:"The secretary runs the department which ensures the safety and security of the US. The US government created the department in the aftermath of the Sept. 11 terrorist attacks. ",previousHolder:"Chad Wolf",imgPath:"img/mayorkas4x4.png",id:15},{title:"Secretary of Veterans Affairs",name:"Denis McDonough",description:"This secretary runs the Department of Veterans Affairs which provides programs benefiting veterans and members of their families.",previousHolder:"Robert Wilkie",imgPath:"img/mcdonough4x4.png",id:16}],idx:0,newArray:[]},n}return Object(d.a)(i,[{key:"render",value:function(){var e=this;return document.title="Biden Cabinet Nominees",Object(n.jsxs)(m.a,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(b,{})}}),Object(n.jsxs)(y.a,{className:"grid",style:{backgroundImage:"url(".concat("./img/seal.svg",")")},children:[Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(f,{candidates:e.state.candidates})}}),Object(n.jsx)(j.a,{exact:!0,path:"/cabinet/:title",render:function(t){var i=t.match;return Object(n.jsx)(v,{candidates:e.state.candidates,nextCandidate:e.nextCandidate,previousCandidate:e.previousCandidate,idx:e.state.idx,newArray:e.state.newArray,cabinet:e.state.candidates.find((function(e){return e.title===i.params.title}))})}})]}),Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(x,{})}})]})}}]),i}(r.Component);o.a.render(Object(n.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.39c0d89b.chunk.js.map