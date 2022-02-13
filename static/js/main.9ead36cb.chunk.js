(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{22:function(n,e,t){},49:function(n,e,t){"use strict";t.r(e);var a,o,r,i,c,s,l,p,d,u,h,b,g,x=t(0),f=t.n(x),m=t(9),j=t.n(m),v=(t(22),t(13)),O=t(5),y=t(6),w=t(8),k=t(7),S=t(10),C=t(2),I=t(3),L=I.a.header(a||(a=Object(C.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),z=I.a.form(o||(o=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),B=I.a.button(r||(r=Object(C.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),D=I.a.span(i||(i=Object(C.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),E=I.a.input(c||(c=Object(C.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),U=t(1),Q=function(n){Object(w.a)(t,n);var e=Object(k.a)(t);function t(){var n;Object(O.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={value:""},n.handleInputChange=function(e){n.setState({value:e.currentTarget.value.toLowerCase()})},n.handleSubmit=function(e){if(e.preventDefault(),""===n.state.value.trim())return S.b.error("Please enter value");n.props.onSubmit(n.state.value),n.setState({value:""})},n}return Object(y.a)(t,[{key:"render",value:function(){var n=this.state.value;return Object(U.jsx)(L,{children:Object(U.jsxs)(z,{onSubmit:this.handleSubmit,children:[Object(U.jsx)(B,{type:"submit",children:Object(U.jsx)(D,{children:"Search"})}),Object(U.jsx)(E,{type:"text",autocomplete:"off",autoFocus:!0,value:n,placeholder:"Search images and photos",onChange:this.handleInputChange})]})})}}]),t}(x.Component),F=(t(27),I.a.li(s||(s=Object(C.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"])))),M=I.a.img(l||(l=Object(C.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),P=function(n){var e=n.webformatURL,t=n.alt,a=n.onSelect;return Object(U.jsx)(F,{children:Object(U.jsx)(M,{src:e,alt:t,onClick:a})})},R=I.a.ul(p||(p=Object(C.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),A=function(n){var e=n.images,t=n.onSelect;return Object(U.jsx)(R,{children:e&&e.map((function(n){var e=n.id,a=n.webformatURL,o=n.tags,r=n.largeImageURL;return Object(U.jsx)(P,{webformatURL:a,tag:o,onSelect:function(){return t(r)}},e)}))})},K=I.a.div(d||(d=Object(C.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),T=I.a.div(u||(u=Object(C.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),q=document.querySelector("#modal-root"),J=function(n){Object(w.a)(t,n);var e=Object(k.a)(t);function t(){var n;Object(O.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).handleKeyDown=function(e){"Escape"===e.code&&n.props.onClose()},n.handleBackDropClick=function(e){e.currentTarget===e.target&&n.props.onClose()},n}return Object(y.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var n=this.props,e=n.src,t=n.tag;return Object(m.createPortal)(Object(U.jsx)(K,{onClick:this.handleBackDropClick,children:Object(U.jsx)(T,{children:Object(U.jsx)("img",{src:e,alt:t})})}),q)}}]),t}(x.Component),_=I.a.button(h||(h=Object(C.a)(["\n  margin: 0 auto;\n  width: 150px;\n  height: 40px;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),H=function(n){Object(w.a)(t,n);var e=Object(k.a)(t);function t(){return Object(O.a)(this,t),e.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){var n=this.props,e=n.handleBtnClick,t=n.title;return Object(U.jsx)(_,{type:"button",onClick:e,children:t})}}]),t}(x.Component),W=t(15),G=t.n(W),N=I.a.div(b||(b=Object(C.a)(["\n  margin: 0 auto;\n"]))),V=function(){return Object(U.jsx)(N,{children:Object(U.jsx)(G.a,{type:"Puff",color:"#3F51B5",height:100,width:100,timeout:3e3})})},X=t(12),Y=t.n(X),Z=t(16),$=function(){var n=Object(Z.a)(Y.a.mark((function n(e,t){var a,o;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"24465009-c19d13b3d7a0e5b95e4231612","https://pixabay.com/api/",a="".concat("https://pixabay.com/api/","/?key=").concat("24465009-c19d13b3d7a0e5b95e4231612","&q=").concat(e,"&page=").concat(t,"&image_type=photo&orientation=horisontal&per_page=12"),n.next=5,fetch(a).then((function(n){return n.ok?n.json():Promise.reject(new Error("Error"))}));case 5:return o=n.sent,n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),nn=I.a.div(g||(g=Object(C.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),en=function(n){Object(w.a)(t,n);var e=Object(k.a)(t);function t(){var n;Object(O.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={images:[],searchQuery:"",selectedImage:"",isLoading:!1,page:1},n.fetchImages=function(){var e=n.state,t=e.page,a=e.searchQuery;void 0!==a&&(n.setState({isLoading:!0}),$(a,t).then((function(e){0!==e.hits.length?n.setState((function(n){return{images:[].concat(Object(v.a)(n.images),Object(v.a)(e.hits))}})):S.b.error("Ooops, no match found.")})).catch((function(n){return console.log(n.message)})).finally((function(){n.setState({isLoading:!1}),n.handleScroll()})))},n.handleScroll=function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},n.handleFormSubmit=function(e){n.setState({searchQuery:e,images:[],page:1})},n.handleSelectedImage=function(e){n.setState({selectedImage:e})},n.handleModalClose=function(){n.setState({selectedImage:""})},n.handleBtnClick=function(){n.setState((function(n){return{page:n.page+1}}))},n}return Object(y.a)(t,[{key:"componentDidUpdate",value:function(n,e){var t=e.searchQuery,a=this.state.searchQuery,o=e.page,r=this.state.page;t===a&&o===r||this.fetchImages()}},{key:"render",value:function(){var n=this.state,e=n.selectedImage,t=n.isLoading,a=n.images,o=a.length>0;return Object(U.jsxs)(nn,{children:[Object(U.jsx)(Q,{onSubmit:this.handleFormSubmit}),t&&Object(U.jsx)(V,{}),Object(U.jsx)(A,{images:a,onSelect:this.handleSelectedImage}),e&&Object(U.jsx)(J,{src:e,onClose:this.handleModalClose}),o&&Object(U.jsx)(H,{title:"Load more",handleBtnClick:this.handleBtnClick}),Object(U.jsx)(S.a,{autoClose:3e3})]})}}]),t}(x.Component);j.a.render(Object(U.jsx)(f.a.StrictMode,{children:Object(U.jsx)(en,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.9ead36cb.chunk.js.map