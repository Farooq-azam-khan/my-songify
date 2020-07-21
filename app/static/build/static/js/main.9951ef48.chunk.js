(this.webpackJsonpfe=this.webpackJsonpfe||[]).push([[0],{34:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(20),s=a.n(r),c=a(28),m=a(29),o=a(33),i=a(32),u=a(11),d=a(3),p=a(4),f=function(){return n.a.createElement("div",{className:"row-span-1 flex flex-col w-32 h-32 bg-gray-700  rounded-lg shadow-lg overflow-hidden"},n.a.createElement("div",{style:{height:"75%"},className:"w-full bg-gray-800"}),n.a.createElement("div",{className:"inline-flex items-center space-x-2 text-gray-200 px-3 py-2"},n.a.createElement("span",null,"Like")," ",n.a.createElement("span",null,"1K")))},g=function(){return n.a.createElement("div",{className:"flex flex-col bg-blue-900 w-full h-full overflow-auto"},n.a.createElement("section",{className:"w-full flex flex-col items-center justify-center bg-gray-900"},n.a.createElement("h1",{className:"text-teal-100 font-bold text-4xl text-center tracking-widest"},"My Songify"),n.a.createElement("p",{className:"max-w-xl text-white mt-10 bg-gray-800 px-10 py-3 text-center shadow-xl rounded-lg"},"Amet anim aliqua amet laboris culpa deserunt ad id et magna voluptate voluptate. Culpa deserunt ad culpa labore sit ea cillum ullamco. Nisi consequat do ea sunt. In amet duis mollit minim reprehenderit. Ex ad sint aliquip magna. ")),n.a.createElement("section",{className:"flex flex-col md:flex-row items-center justify-around py-32 bg-gray-900"},n.a.createElement("div",{className:"border-0 sm:border-r-4 border-teal-500 w-full md:w-1/3 md:px-8 md:py-2"},n.a.createElement("h2",{className:"px-3 py-2 md:py-0 md:px-0 text-center md:text-right font-bold uppercase text-white text-3xl sm:text-4xl"},"Keep Track",n.a.createElement("br",{className:"hidden md:block"})," of the ",n.a.createElement("br",{className:"hidden md:block"}),n.a.createElement("span",{className:"text-teal-500"},"Best Music")," ",n.a.createElement("br",{className:"hidden md:block"}),"in the ",n.a.createElement("br",{className:"hidden md:block"}),n.a.createElement("span",{className:"text-teal-500"},"Industry"))),n.a.createElement("div",{className:"w-full md:w-2/3 md:h-full grid grid-rows-2 grid-cols-2 md:gap-4 md:px-8 md:py-2"},n.a.createElement(f,null),n.a.createElement(f,null),n.a.createElement(f,null),n.a.createElement(f,null))),n.a.createElement("section",{className:"flex flex-col items-center justify-center py-32 bg-gray-400"},n.a.createElement("h2",{className:"text-center font-semibold uppercase text-teal-700 text-3xl"},"Start Your Journey"),n.a.createElement(p.b,{to:"/register",className:"mt-10 px-8 sm:px-10 md:px-24 py-4 text-xl bg-teal-700 text-teal-100 rounded shadow-xl hover:bg-teal-800"},"Register")),n.a.createElement("section",{id:"about",className:"flex flex-col items-center bg-gray-900 py-24"},n.a.createElement("h2",{className:"text-center text-teal-100 tracking-wider border-b-2 border-teal-500  pb-3 font-semibold uppercase text-white text-3xl"},"About this Project"),n.a.createElement("p",{className:"mt-5 md:mt-8 bg-gray-800 px-4 sm:px-8 md:px-10 py-3  text-white rounded-lg shadow-lg"},"This project has been created to test the insides ",n.a.createElement("br",{className:"hidden sm:block"}),"of websites like Tidal and Spotify which are ",n.a.createElement("br",{className:"hidden sm:block"}),"used for listening to songs.")))},x=a(2),y=a(14),b=function(){return function(e){e({type:"LOGOUT_SENT"}),fetch("/users/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(t){e({type:"LOGOUT_SUCCESS",payload:t})})).catch((function(t){e({type:"LOGOUT_FAILURE"})}))}},h=Object(u.b)((function(e){return{user:e.user}}),{loginAction:function(e,t){return function(a){a({type:"LOGIN_SENT"}),fetch("/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){e.success?a({type:"LOGIN_SUCCESS",payload:e.user}):a({type:"LOGIN_FAILURE",payload:e})})).catch((function(e){a({type:"LOGIN_FAILURE",payload:e})}))}}})((function(e){var t=e.user,a=e.loginAction,r=Object(y.a)(),s=(r.register,r.handleSubmit),c=(r.watch,r.errors,Object(l.useState)("")),m=Object(x.a)(c,2),o=m[0],i=m[1],u=Object(l.useState)(""),d=Object(x.a)(u,2),p=d[0],f=d[1];return t.loggedIn?n.a.createElement("div",{className:"fixed z-10 inset-0 flex items-center justify-center bg-gray-900 h-full"},n.a.createElement("h1",{className:"text-white text-4xl bg-teal-900 px-24 py-10 rounded-lg shadow-xl"},"You are already logged in")):n.a.createElement("div",{className:"fixed z-10 inset-0 flex flex-col items-center justify-center w-full h-full bg-gray-900"},n.a.createElement("form",{onSubmit:s((function(e){a(o,p)})),className:"flex flex-col items-center justify-center space-y-2 mt-5 w-full h-full px-3 sm:px-10"},n.a.createElement("div",{className:"flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between"},n.a.createElement("input",{value:o,onChange:function(e){i(e.target.value)},className:"w-full bg-teal-100 px-3 py-2 rounded-lg",type:"email",placeholder:"Email"})),n.a.createElement("div",{className:"flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between"},n.a.createElement("input",{value:p,onChange:function(e){f(e.target.value)},className:"w-full bg-teal-100 px-3 py-2 rounded-lg",type:"password",placeholder:"Password"})),n.a.createElement("button",{type:"submit",className:"block bg-teal-700 text-white rounded-lg shadow-lg text-md px-10 py-3"},"Login")))})),E=Object(u.b)((function(e){return{user:e.user}}),{registerAction:function(e){return function(t){t({type:"REGISTER_SENT"}),fetch("/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.success?t({type:"REGISTER_SUCCESS",payload:e}):t({type:"REGISTER_FAILURE"})})).catch((function(e){t({type:"REGISTER_FAILURE",payload:e})}))}}})((function(e){var t=e.user,a=e.registerAction,l=Object(y.a)(),r=l.register,s=l.handleSubmit,c=(l.watch,l.errors);return t.loggedIn?n.a.createElement("div",{className:"px-24 py-10 bg-teal-900 rounded-lg shadow-xl"},n.a.createElement("h1",{className:"text-white text-4xl"},"You are already logged in")):n.a.createElement("div",{className:"fixed z-10 inset-0 flex flex-col items-center justify-center w-full h-full bg-gray-900"},n.a.createElement("form",{onSubmit:s((function(e){a(e)})),className:"flex flex-col items-center justify-center space-y-2 mt-5 w-full h-full px-3 sm:px-10"},n.a.createElement("div",{className:"flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between"},n.a.createElement("input",{name:"firstname",ref:r({required:!0,minLength:3,maxLength:64}),className:"w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg",placeholder:"First Name"}),c.firstname&&n.a.createElement("div",{className:"bg-red-300 w-full px-3 py-2 rounded-lg"},n.a.createElement("p",{className:"text-gray-900"},"required"===c.firstname.type&&"You must type your first name","minLength"===c.firstname.type&&"Minimum length of first name must be 3 or more","maxLength"===c.firstname.type&&"Max first name must be 64")),n.a.createElement("input",{name:"middlename",ref:r,className:"w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg",placeholder:"Middle Name"}),n.a.createElement("input",{name:"lastname",ref:r({required:!0,minLength:3,maxLength:64}),className:"w-full sm:w-1/3 bg-teal-100 px-3 py-2 rounded-lg",placeholder:"Last Name"}),c.lastname&&n.a.createElement("div",{className:"bg-red-300 w-full px-3 py-2 rounded-lg"},n.a.createElement("p",{className:"text-gray-900"},"required"===c.lastname.type&&"You must type your last name","minLength"===c.lastname.type&&"Minimum length of last name must be 3 or more","maxLength"===c.lastname.type&&"Max first name must be 64"))),n.a.createElement("div",{className:"flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between"},n.a.createElement("input",{name:"email",ref:r({required:!0}),className:"w-full bg-teal-100 px-3 py-2 rounded-lg",type:"email",placeholder:"Email"}),c.email&&n.a.createElement("div",{className:"bg-red-300 w-full px-3 py-2 rounded-lg"},n.a.createElement("p",{className:"text-gray-900"},"required"===c.email.type&&"Type your email.")),n.a.createElement("input",{name:"confirm_email",ref:r({required:!0}),className:"w-full bg-teal-100 px-3 py-2 rounded-lg",type:"email",placeholder:"Confirm Email"}),c.confirm_email&&n.a.createElement("div",{className:"bg-red-300 w-full px-3 py-2 rounded-lg"},n.a.createElement("p",{className:"text-gray-900"},"required"===c.confirm_email.type&&"Retype your email."))),n.a.createElement("div",{className:"flex flex-col sm:flex-row space-x-0 space-y-1 sm:space-y-0 items-center w-full sm:space-x-4 justify-between"},n.a.createElement("input",{name:"password",ref:r({required:!0,minLength:5,maxLength:20}),className:"w-full bg-teal-100 px-3 py-2 rounded-lg",type:"password",placeholder:"Password"}),c.password&&n.a.createElement("div",{className:"bg-red-300 w-full px-3 py-2 rounded-lg"},n.a.createElement("p",{className:"text-gray-900"},"Password is required with min length of 5.")),n.a.createElement("input",{name:"confirm_password",ref:r({required:!0,minLength:5,maxLength:20}),className:"w-full bg-teal-100 px-3 py-2 rounded-lg",type:"password",placeholder:"Confirm Password"}),c.confirm_password&&n.a.createElement("div",{className:"bg-red-300 w-full px-3 py-2 rounded-lg"},n.a.createElement("p",{className:"text-gray-900"},"Passwords must match."))),n.a.createElement("button",{type:"submit",className:"block bg-teal-700 text-white rounded-lg shadow-lg text-md px-10 py-3"},"Register")))})),w=a(7),N=function(e){var t=e.close,a=Object(y.a)(),l=a.register,r=a.handleSubmit;a.watch,a.errors;return n.a.createElement("div",{className:"fixed inset-0 z-30 flex items-center justify-center w-full h-full"},n.a.createElement("button",{onClick:function(){return t(!1)},className:"cursor-default fixed w-full h-full inset-0 bg-black opacity-50"}),n.a.createElement("form",{onSubmit:r((function(e){})),className:"relative z-40 flex flex-col space-y-10 items-start justify-center p-10 shadow-xl rounded-lg bg-orange-700"},n.a.createElement("input",{ref:l,name:"name",type:"text",placeholder:"Song name",className:"bg-gray-100 rounded-lg px-10 py-3"}),n.a.createElement("input",{ref:l,name:"cover_image",type:"text",placeholder:"Song Cover Image URL",className:"bg-gray-100 rounded-lg px-10 py-3"}),n.a.createElement("input",{ref:l,name:"mp3_file",type:"text",placeholder:"Mp3 File URL",className:"bg-gray-100 rounded-lg px-10 py-3"}),n.a.createElement("select",{ref:l,name:"genre",type:"",placeholder:"Song Genre",className:"bg-gray-100 rounded-lg px-8 py-3"},n.a.createElement("option",null,"TODO: Get list of genre from database")),n.a.createElement("button",{type:"submit",className:"inline-flex items-center justify-between space-x-1 text-white bg-blue-800 hover:bg-blue-700 rounded-lg shadow-md px-4 py-3"},n.a.createElement("span",null,n.a.createElement(w.c,{className:"w-5 h-5"})),n.a.createElement("span",null,"Song"))))},v=function(e){var t=e.name,a=e.songs;return n.a.createElement("div",{className:"flex flex-col w-full md:max-w-4xl mx-auto items-center justify-center mt-24 sm:px-2 py-2 sm:py-5 sm:rounded-lg bg-blue-900 shadow-xl"},n.a.createElement("div",{className:"-my-6 relative z-10"},n.a.createElement("span",{className:"px-5 rounded-lg shadow-xl py-3 text-white font-semibold text-xl sm:text-2xl bg-indigo-700 tracking-wider uppercase"},t)),n.a.createElement("div",{className:"flex items-center justify-around space-x-5 py-2 px-0 mt-10 h-64 w-full overflow-x-auto overflow-y-hidden"},a.map((function(e){return n.a.createElement(j,Object.assign({key:e.pk},e))}))))},j=function(e){var t=e.name,a=e.cover_image;return n.a.createElement("div",{className:"flex flex-col items-center justify-around bg-indigo-700 rounded-lg shadow-xl max-w-2xl text-white"},n.a.createElement("span",{className:"w-32 h-32 overflow-hidden"},n.a.createElement("img",{className:"w-full h-full object-cover",src:a})),n.a.createElement(p.b,{to:"#",className:"w-full text-center font-semibold text-lg text-gray-100 hover:text-gray-200 px-3 py-1"},t))},O=function(){var e=Object(l.useState)(!0),t=Object(x.a)(e,2),a=t[0],r=t[1],s=Object(l.useState)(!1),c=Object(x.a)(s,2),m=c[0],o=c[1],i=Object(l.useState)({}),u=Object(x.a)(i,2),d=u[0],p=u[1],f=function(){return o(!m)};return Object(l.useEffect)((function(){fetch("/songs/list").then((function(e){return e.json()})).then((function(e){e.success&&(p(e.data),r(!1))}))}),[]),n.a.createElement(n.a.Fragment,null,a?n.a.createElement("div",{className:"fixed z-10 inset-0 flex items-center justify-center bg-gray-900 h-full"},n.a.createElement("h1",{className:"text-white text-2xl bg-teal-900 px-10 py-8 rounded-lg shadow-lg"},"Loading Songs...")):0===Object.keys(d).length?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"fixed z-10 inset-0 flex items-center justify-center bg-gray-900 h-full"},n.a.createElement("span",{className:"flex flex-col items-center justify-center space-y-10 px-24 py-32 bg-blue-900 rounded-lg shadow-lg"},n.a.createElement("div",null,n.a.createElement("button",{onClick:f,className:"inline-flex items-center space-x-3 bg-orange-700 text-lg font-semibold rounded-full shadow-lg px-4 py-3 text-white"},n.a.createElement("span",null,n.a.createElement(w.d,{className:"w-8 h-8 text-gray-300"})),n.a.createElement("span",null,"Songs"))),n.a.createElement("div",null,n.a.createElement("p",{className:"text-white text-xl "},"No songs in database, add some")))),m&&n.a.createElement(N,{close:o})):n.a.createElement("div",{className:"flex flex-col h-full w-full mt-10 pb-24 bg-gray-900 overflow-auto"},n.a.createElement("div",{className:"flex items-center justify-between px-10 w-full"},n.a.createElement("div",{className:"w-2/3 h-full flex items-center justify-center"},n.a.createElement("h1",{className:"text-4xl text-teal-100 font-bold text-center"},"Recent Songs")),n.a.createElement("div",{className:"w-1/3 h-full flex items-center justify-end"},n.a.createElement("button",{onClick:f,className:"inline-flex items-center space-x-1 bg-orange-700 text-md font-semibold rounded-full shadow-md px-3 py-2 text-white"},n.a.createElement("span",null,n.a.createElement(w.d,{className:"w-5 h-5 text-gray-300"})),n.a.createElement("span",null,"Songs")))),Object.keys(d).map((function(e){return n.a.createElement(v,{key:e,name:e,songs:d[e]})}))))},S=a(13),k=function(e){var t=e.name,a=e.cover_image;e.display_status;return n.a.createElement("div",{className:"text-white rounded-lg shadow-md flex flex-col overflow-hidden w-64 h-full bg-red-700"},n.a.createElement("div",{className:"overflow-hidden"},n.a.createElement("img",{className:"w-64 h-64 object-cover object-center",src:a,alt:t})),n.a.createElement("div",{className:"text-white bg-blue-800 text-md uppercase tracking-wider w-full text-center truncate px-3 py-2"},t))},L=function(e){var t=e.close,a=e.statuses,l=e.loadingStatus,r=e.logoutAction,s=Object(y.a)(),c=s.register,m=s.handleSubmit,o=(s.watch,s.errors);return n.a.createElement("div",{className:"fixed z-20 inset-0 w-full h-full flex flex-col items-center justify-center"},n.a.createElement("button",{onClick:function(){return t(!1)},className:"cursor-default fixed w-full h-full inset-0 bg-black opacity-50"}),n.a.createElement("form",{onSubmit:m((function(e){console.log({errors:o}),console.log(e);var a=Object(S.a)(Object(S.a)({},e),{},{is_playlist:"playlist"});fetch("/api/v1/user/song_collection/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log(e),e.success?t(!1):e.is_authenticated&&r()}))})),className:"display-playlist relative z-30 flex flex-col space-y-10 items-start justify-center p-10 shadow-xl rounded-lg bg-blue-800"},n.a.createElement("input",{name:"name",ref:c({required:!0}),placeholder:"Playlist Name",className:"px-4 py-3 rounded-lg"}),n.a.createElement("input",{name:"cover_image",ref:c,placeholder:"Cover Image URL",className:"px-4 py-3 w-full rounded-lg"}),n.a.createElement("div",{className:"flex items-center justify-around space-x-5"},l?n.a.createElement("div",{className:"w-full px-6 py-3  rounded-md"},n.a.createElement("p",{className:"text-gray-100 text-md tracking-wide"},"Loading Display statuses...")):n.a.createElement(n.a.Fragment,null,a.map((function(e){return n.a.createElement("div",{key:e.pk},n.a.createElement("label",{htmlFor:"display-".concat(e.pk),className:"bg-gray-100 px-5 py-5 rounded-lg shadow-md border-none cursor-pointer hover:bg-blue-900 hover:text-white hover:shadow-xl"},e.status),n.a.createElement("input",{id:"display-".concat(e.pk),type:"radio",name:"display-status",value:e.pk,className:"",ref:c}))})))),n.a.createElement("button",{type:"submit",className:"inline-flex items-center justify-between space-x-3 mt-2 bg-teal-700 text-gray-100 hover:bg-teal-100 hover:text-black px-4 py-3 rounded-lg shadow-lg hover:shadow-xl uppercase text-md tracking-wider"},n.a.createElement("span",null,n.a.createElement(w.c,null))," ",n.a.createElement("span",null,"Playlist"))))},C=Object(u.b)((function(e){return{}}),{logoutAction:b})((function(e){var t=e.logoutAction,a=Object(l.useState)([]),r=Object(x.a)(a,2),s=r[0],c=r[1],m=Object(l.useState)(!0),o=Object(x.a)(m,2),i=o[0],u=o[1],d=Object(l.useState)({}),p=Object(x.a)(d,2),f=p[0],g=p[1],y=Object(l.useState)(!0),b=Object(x.a)(y,2),h=b[0],E=b[1],N=Object(l.useState)(!1),v=Object(x.a)(N,2),j=v[0],O=v[1];Object(l.useEffect)((function(){fetch("/api/v1/display-status").then((function(e){return e.json()})).then((function(e){c(e),u(!1)})),fetch("/api/v1/user/playlists").then((function(e){return e.json()})).then((function(e){g(e),E(!1)}))}),[]);var S=function(){O(!j)};return n.a.createElement("section",{className:"bg-gray-800 rounded-lg shadow-lg max-w-3xl mt-10"},h?n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Loading...")):n.a.createElement(n.a.Fragment,null,j&&n.a.createElement(L,{logoutAction:t,close:O,statuses:s,loadingStatus:i}),0===Object.keys(f).length?n.a.createElement("div",{className:"flex flex-col items-center space-y-5 mt-10 py-10 px-12 rounded-lg shadow-lg"},n.a.createElement("button",{onClick:S,className:"flex items-center justify-center px-3 py-2 max-w-xl space-x-3 rounded-lg shadow-md text-white bg-teal-800 hover:bg-teal-700"},n.a.createElement("span",{className:"text-white"},n.a.createElement(w.c,null)),n.a.createElement("span",null,"Playlist")),n.a.createElement("p",{className:"text-white font-semibold tracking-wide"},"You do not have any playlists created, create one.")):n.a.createElement("div",{className:"flex flex-col w-full md:max-w-4xl mx-auto items-center justify-center mt-24 sm:px-2 py-2 sm:py-5 sm:rounded-lg bg-gray-800 shadow-xl overflow-auto"},n.a.createElement("div",{className:"flex items-center justify-between w-full px-3"},n.a.createElement("span",{className:"w-full text-center font-bold text-gray-100 uppercase tracking-wider text-xl"},"Your Playlists"),n.a.createElement("button",{onClick:S,className:"inline-flex items-center justify-between bg-indigo-500 text-white text-sm rounded-full shadow-md px-2 py-1"},n.a.createElement("span",null,n.a.createElement(w.d,{className:"text-gray-400 w-4 h-4"}))," ",n.a.createElement("span",null,"Playlist"))),n.a.createElement("div",{className:"flex items-center justify-around space-x-3 py-2 px-0 w-full h-64 mt-5 overflow-x-auto overflow-y-hidden"},Object.keys(f).map((function(e){return n.a.createElement(k,{key:e,name:e,cover_image:f[e].cover_image})}))))))})),_=Object(u.b)((function(e){return{user:e.user}}),{})((function(e){var t=e.user;return t.loggedIn?n.a.createElement("main",{className:"max-w-4xl h-full py-10"},n.a.createElement("div",null,n.a.createElement("h1",{className:"text-2xl"},n.a.createElement("span",{className:"text-orange-500"},"Lets make something happen "),n.a.createElement("span",{className:"text-white uppercase font-bold"},t.firstname,", ",t.lastname))),n.a.createElement(C,null)):n.a.createElement("div",{className:"fixed z-10 inset-0 flex items-center justify-center bg-gray-900 h-full"},n.a.createElement("h1",{className:"text-white text-4xl bg-teal-900 px-24 py-10 rounded-lg shadow-xl"},"You need to log in"))})),I=Object(u.b)((function(e){return{user:e.user}}),{logoutAction:b})((function(e){var t=e.user,a=e.logoutAction,r=Object(l.useState)(!1),s=Object(x.a)(r,2),c=s[0],m=s[1];return n.a.createElement("nav",{className:"relative z-20 flex items-center justify-between shadow-xl w-full h-full sm:py-2 sm:px-3 bg-teal-900 text-white"},n.a.createElement("div",{className:"relative flex items-center justify-between space-x-3"},n.a.createElement(p.c,{to:"/",className:"px-3 py-2 rounded-lg hover:bg-teal-800"},"my-songify"),n.a.createElement("a",{href:"/#about",className:"px-3 py-2 rounded-lg hover:bg-teal-800"},"About"),n.a.createElement(p.c,{to:"/songs",activeClassName:"bg-teal-800 shadow-2xl",className:"px-3 py-2 rounded-lg hover:bg-teal-800"},"Songs"),n.a.createElement("div",{className:"relative"},n.a.createElement("button",{onClick:function(){return m(!c)},className:"relative inline-flex items-center justify-between px-3 py-2 rounded-lg hover:bg-teal-800"},n.a.createElement("span",null,"Actions"),n.a.createElement("span",null,n.a.createElement(w.a,{className:"w-6 h-6"}))),c&&n.a.createElement("div",{className:"absolute top-0 left-0 mt-12 z-30 flex flex-col space-y-2 bg-gray-800 w-64 overflow-auto rounded-lg shadow-xl py-2"},n.a.createElement(p.b,{to:"#",className:"px-3 py-1 hover:bg-gray-700"},"Upload Song"),n.a.createElement(p.b,{to:"#",className:"px-3 py-1 hover:bg-gray-700"},"Create Playlist"),n.a.createElement(p.b,{to:"#",className:"px-3 py-1 hover:bg-gray-700"},"Create Album")))),n.a.createElement("div",{className:"hidden sm:flex items-center justify-between space-x-3"},t.loggedIn?n.a.createElement(n.a.Fragment,null,n.a.createElement(p.c,{to:"profile",activeClassName:"bg-teal-800 shadow-2xl",className:"text-gray-200 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg shadow-xl"},"Profile"),n.a.createElement("button",{onClick:function(){a()},className:"hover:bg-teal-800 text-gray-500 px-3 py-2 rounded-lg"},"Logout")):n.a.createElement(n.a.Fragment,null,n.a.createElement(p.c,{to:"/login",activeClassName:"bg-teal-800 shadow-2xl",className:"hover:bg-teal-800 px-3 py-2  rounded-lg"},"Login"),n.a.createElement(p.c,{to:"/register",activeClassName:"bg-teal-800 shadow-2xl",className:"hover:bg-teal-800 px-3 py-2 rounded-lg"},"Register"))))})),T=a(16),R=a(31),A={firstname:"",middlename:"",lastname:"",email:"",is_admin:!1,id:-1,loggedIn:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SENT":return e;case"LOGIN_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{loggedIn:!0},t.payload);case"LOGIN_FAILURE":return Object(S.a)(Object(S.a)({},e),{},{loggedIn:!1},t.payload);case"LOGOUT_SENT":case"LOGOUT_FAILURE":return e;case"LOGOUT_SUCCESS":return Object(S.a)(Object(S.a)({},e),A);default:return e}},G=Object(T.b)({user:U}),F=(R.a,function(){try{var e=localStorage.getItem("state");if(null==e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}()),P=Object(T.c)(G,F);P.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(P.getState())}));var q=P,z=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(u.a,{store:q},n.a.createElement("div",{className:"bg-gray-900"},n.a.createElement(I,null),n.a.createElement("div",{className:"flex items-center justify-center w-full overflow-hidden"},n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/register",exact:!0},n.a.createElement(E,null)),n.a.createElement(d.a,{path:"/login",exact:!0},n.a.createElement(h,null)),n.a.createElement(d.a,{path:"/songs",exact:!0},n.a.createElement(O,null)),n.a.createElement(d.a,{path:"/profile",exact:!0},n.a.createElement(_,null)),n.a.createElement(d.a,{path:"/"},n.a.createElement(g,null))))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p.a,null," ",n.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.9951ef48.chunk.js.map