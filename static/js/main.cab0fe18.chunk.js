(this.webpackJsonpbidencabinet=this.webpackJsonpbidencabinet||[]).push([[0],{30:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(0),a=i.n(r),s=i(22),o=i.n(s),c=i(8),d=i(9),l=i(11),h=i(10),m=i(41),p=i(15),u=i(14),f=(i(30),function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(n.jsxs)(m.a,{className:"box",children:[Object(n.jsx)(m.a.Img,{variant:"top",src:this.props.pick.imgPath}),Object(n.jsxs)(m.a.Body,{children:[Object(n.jsx)(m.a.Title,{id:"title",children:this.props.pick.title}),Object(n.jsx)("p",{className:"electedStatus",children:this.props.pick.isConfirmed}),Object(n.jsx)(u.b,{to:"/cabinet/".concat(this.props.pick.title),children:Object(n.jsx)(p.a,{className:"moreInfoButton",id:"info",variant:"outline-secondary",children:"More Information"})})]})]})}}]),i}(r.Component)),g=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return this.props.candidates.map((function(e){return Object(n.jsx)(f,{pick:e},e.id)}))}}]),i}(r.Component),b=i(3),j=(i(36),function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){var e=this,t=this.props.candidates.find((function(t){return Number(e.props.cabinet.id)>0?Number(t.id)===Number(e.props.cabinet.id)-1:Number(t.id)===Number(e.props.candidates.length-1)})),i=this.props.candidates.find((function(t){return Number(e.props.cabinet.id)>=Number(e.props.candidates.length-1)?0===Number(t.id):Number(t.id)===Number(e.props.cabinet.id+1)}));return Object(n.jsx)("div",{className:"view",children:Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)("img",{className:"img-fluid",src:this.props.cabinet.imgPath}),Object(n.jsx)("h2",{children:this.props.cabinet.title}),Object(n.jsx)("h4",{children:this.props.cabinet.name}),Object(n.jsx)("p",{children:this.props.cabinet.description}),Object(n.jsxs)("p",{children:["Confirmation status: ",this.props.cabinet.isConfirmed]}),Object(n.jsxs)("div",{className:"buttongroup",children:[Object(n.jsx)(u.b,{to:"/",children:Object(n.jsx)(p.a,{variant:"outline-dark",children:"Home"})}),Object(n.jsx)(u.b,{to:"/cabinet/".concat(t.title),children:Object(n.jsx)(p.a,{variant:"outline-dark",children:"Previous"})}),Object(n.jsx)(u.b,{to:"/cabinet/".concat(i.title),children:Object(n.jsx)(p.a,{variant:"outline-dark",children:"Next"})})]})]})})}}]),i}(r.Component)),v=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"head",children:Object(n.jsx)("h1",{children:"Biden Cabinet Nominees"})})}}]),i}(r.Component),x=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(n.jsx)("footer",{children:Object(n.jsxs)("p",{className:"boss",children:["Sources:"," ",Object(n.jsx)("a",{href:"https://buildbackbetter.gov/the-transition/",target:"_blank",rel:"noreferrer",children:"The Transition"})," ","   and  "," ",Object(n.jsx)("a",{href:"https://www.whitehouse.gov/about-the-white-house/the-executive-branch/",target:"_blank",rel:"noreferrer",children:"The Executive Branch"})]})})}}]),i}(r.Component),y=(i(37),i(38),i(24)),O=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).nextCandidate=function(){n.setState({idx:(n.state.idx+1)%n.state.candidates.length}),console.log(n.state.candidates[n.state.idx])},n.previousCandidate=function(){n.setState({idx:(n.state.idx-1)%n.state.candidates.length}),console.log(n.state.candidates[n.state.idx])},n.state={candidates:[{title:"President",name:"Joe Biden",description:"The president heads the US government. He is also commander-in-chief of the armed forces.",previousHolder:"Donald Trump",isConfirmed:"Elected",imgPath:"img/biden4x4.png",id:0},{title:"Vice President",name:"Kamala Harris",description:"The vice president is second in command. The vice president assumes the role of president if the president is unable to serve.",previousHolder:"Mike Pence",isConfirmed:"Elected",imgPath:"img/harris4x4.png",id:1},{title:"Secretary of State",name:"Antony Blinken ",description:"This secretary oversees America\u2019s diplomatic corps, directs foreign policies for the president and serves as a top foreign affairs adviser.",previousHolder:"Michael Pompeo",isConfirmed:"Confirmed",imgPath:"img/blinken4x4.png",id:2},{title:"Secretary of the Treasury",name:"Janet Yellen",description:"This secretary oversees the US economy and financial systems.",previousHolder:"Steven Mnuchin",isConfirmed:"Confirmed",imgPath:"img/yellen4x4.png",id:3},{title:"Secretary of Defense",name:"Gen. Lloyd Austin",description:"This secretary oversees the military and serves as a primary adviser to the president on defense policies for the nation.",previousHolder:"Christopher C. Miller",isConfirmed:"Confirmed",imgPath:"img/austin4x4.png",id:4},{title:"Attorney General",name:"Merrick Garland",description:"This attorney general is the nation's chief law enforcement official of the federal government who oversees the Department of Justice.",previousHolder:"William Barr",isConfirmed:"Pending",imgPath:"img/garland4x4.png",id:5},{title:"Secretary of the Interior",name:"Deb Haaland",description:"This secretary is responsible for conservation and management of the nation's national resources.",previousHolder:"David Bernhardt",isConfirmed:"Pending",imgPath:"img/haaland4x4.png",id:6},{title:"Secretary of Agriculture",name:"Tom Vilsack",description:"This secretary oversees policy regulating food production and safety, farming and rural development.\u202f ",previousHolder:"Sonny Perdue",isConfirmed:"Pending",imgPath:"img/vilsack4x4.png",id:7},{title:"Secretary of Commerce",name:"Gina Raimondo",description:"This secretary directs  trade policies and negotiations and manages data for, among other things, weather, fishing and the US Census.",previousHolder:"Wilbur Ross",isConfirmed:"Pending",imgPath:"img/gina4x4.png",id:8},{title:"Secretary of Labor",name:"Marty Walsh",description:"This secretary  oversees policies on wages and benefits as well as working conditions and rights.",previousHolder:"Eugene Scalia",isConfirmed:"Pending",imgPath:"img/marty4x4.png",id:9},{title:"Secretary of Health & Human Services",name:"Xavier Becerra",description:"This secretary is in charge of health policy and oversees Medicaid, Medicare and the Centers for Disease Control and Prevention.",previousHolder:"Alex Azar",isConfirmed:"Pending",imgPath:"img/becerra4x4.png",id:10},{title:"Secretary of Housing & Urban Development",name:"Marcia Fudge",description:"This secretary manages federal housing and lending programs for home buyers.",previousHolder:"Ben Carson",isConfirmed:"Pending",imgPath:"img/fudge4x4.png",id:11},{title:"Secretary of Transportation",name:"Pete Buttigieg",description:"This secretary is in charge of policy related to transportation safety and efficiency.",previousHolder:"Elaine Chao",isConfirmed:"Confirmed",imgPath:"img/buttigieg4x4.png",id:12},{title:"Secretary of Energy",name:"Jennifer Granholm",description:"This secretary oversees policies and regulations related to energy, fuel sources, the environment and nuclear technology development.",previousHolder:"Dan Brouillette",isConfirmed:"Pending",imgPath:"img/granholm4x4.png",id:13},{title:"Secretary of Education",name:"Miguel Cardona",description:"Oversight of federal educational programs and policy, federal student loans and student rights falls under this secretary's purview.",previousHolder:"Elisabeth Prince DeVos",isConfirmed:"Pending",imgPath:"img/cardona4x4.png",id:14},{title:"Secretary of Homeland Security",name:"Alejandro Mayorkas",description:"This secretary runs the department which ensures the safety and security of the US. The US government created the department in the aftermath of the Sept. 11 terrorist attacks. ",previousHolder:"Chad Wolf",isConfirmed:"Confirmed",imgPath:"img/mayorkas4x4.png",id:15},{title:"Secretary of Veterans Affairs",name:"Denis McDonough",description:"This secretary runs the Department of Veterans Affairs which provides programs benefiting veterans and members of their families.",previousHolder:"Robert Wilkie",isConfirmed:"Pending",imgPath:"img/mcdonough4x4.png",id:16}],idx:0,newArray:[]},n}return Object(d.a)(i,[{key:"render",value:function(){var e=this;return document.title="Biden Cabinet Nominees",Object(n.jsxs)(u.a,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(v,{})}}),Object(n.jsxs)(y.a,{className:"grid",style:{backgroundImage:"url(".concat("./img/seal.svg",")")},children:[Object(n.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(g,{candidates:e.state.candidates})}}),Object(n.jsx)(b.a,{exact:!0,path:"/cabinet/:title",render:function(t){var i=t.match;return Object(n.jsx)(j,{candidates:e.state.candidates,nextCandidate:e.nextCandidate,previousCandidate:e.previousCandidate,idx:e.state.idx,newArray:e.state.newArray,cabinet:e.state.candidates.find((function(e){return e.title===i.params.title}))})}})]}),Object(n.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(x,{})}})]})}}]),i}(r.Component);o.a.render(Object(n.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.cab0fe18.chunk.js.map