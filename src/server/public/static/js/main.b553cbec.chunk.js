(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),i=a.n(o),c=(a(49),a(16)),l=a(18),s=a(10),u=a(11),m=a(13),h=a(12),d=a(14),b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},"Training Tracker"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/",className:"nav-link"},"Exercises")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/create",className:"nav-link"},"Create Exercise")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/user",className:"nav-link"},"Create User")))))}}]),t}(n.Component),p=a(2),E=a(6),g=a.n(E),v=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.exercise.nombre),r.a.createElement("td",null,e.exercise.descripcion),r.a.createElement("td",null,e.exercise.duracion),r.a.createElement("td",null,e.exercise.username),r.a.createElement("td",null,r.a.createElement(c.b,{to:"/edit/"+e.exercise.nombre},"edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteExercise(e.exercise._id)}},"delete")))},f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).deleteExercise=a.deleteExercise.bind(Object(p.a)(a)),a.state={exercises:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://"+window.location.hostname+":"+window.location.port+"/myRoutines/listEjerciciosAll").then(function(t){console.log(t),e.setState({exercises:t.data.model})}).catch(function(e){console.log(e)})}},{key:"deleteExercise",value:function(e){g.a.delete("http://"+window.location.hostname+":"+window.location.port+"/myRoutines/deleteEjercicio",{data:{_id:e}}).then(function(e){console.log(e.data.model)}),this.setState({exercises:this.state.exercises.filter(function(t){return t._id!==e})})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map(function(t){return r.a.createElement(v,{exercise:t,deleteExercise:e.deleteExercise,key:t._id})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Logged Exercises"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Descripcion"),r.a.createElement("th",null,"Duracion"),r.a.createElement("th",null,"Assigned"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.exerciseList())))}}]),t}(n.Component),C=(a(38),a(37),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).onChangeUsername=a.onChangeUsername.bind(Object(p.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(p.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a.state={nombre:a.props.match.params.nombre,description:"",duration:0,users:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://"+window.location.hostname+":"+window.location.port+"/myRoutines/listEjercicios/",{data:{nombre:this.props.match.params.nombre}}).then(function(t){e.setState({nombre:t.data.nombre,descripcion:t.data.descripcion,duracion:t.data.duracion})}).catch(function(e){console.log(e)}),g.a.get("http://"+window.location.hostname+":"+window.location.port+"/users").then(function(t){t.data.model.length>0&&e.setState({users:t.data.model.map(function(e){return e.username})})}).catch(function(e){console.log(e)})}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={nombre:this.props.match.params.nombre,descripcion:this.state.description,duracion:this.state.duration};console.log(this.props.match.params),console.log(t),g.a.put("http://"+window.location.hostname+":"+window.location.port+"/myRoutines/updateEjercicio",t).then(function(e){return console.log(e.data)}),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"}))))}}]),t}(n.Component)),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).onChangeNombre=a.onChangeNombre.bind(Object(p.a)(a)),a.onChangeDescripcion=a.onChangeDescripcion.bind(Object(p.a)(a)),a.onChangeDuracion=a.onChangeDuracion.bind(Object(p.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(p.a)(a)),a.onChangePublic=a.onChangePublic.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a.state={nombre:"",descripcion:"",duracion:0,username:"",public:!1,users:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://"+window.location.hostname+":"+window.location.port+"/users").then(function(t){t.data.model.length>0&&e.setState({users:t.data.model.map(function(e){return e.username}),username:t.data.model[0].username})}).catch(function(e){console.log(e)})}},{key:"onChangeNombre",value:function(e){this.setState({nombre:e.target.value})}},{key:"onChangeDescripcion",value:function(e){this.setState({descripcion:e.target.value})}},{key:"onChangeDuracion",value:function(e){this.setState({duracion:e.target.value})}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePublic",value:function(e){this.setState({public:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={nombre:this.state.nombre,descripcion:this.state.descripcion,duracion:this.state.duracion,username:this.state.username,public:this.state.public};console.log(t),g.a.post("http://"+window.location.hostname+":"+window.location.port+"/myRoutines/submitEjercicio",t).then(function(e){return console.log(e.data)}),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Nombre: "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.nombre,onChange:this.onChangeNombre})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Descripcion: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.descripcion,onChange:this.onChangeDescripcion})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duracion (en minutos): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duracion,onChange:this.onChangeDuracion})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("div",null,r.a.createElement("select",{type:"text",className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Crear Ejercicio",className:"btn btn-primary"}))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).onChangeUsername=a.onChangeUsername.bind(Object(p.a)(a)),a.onChangeEdad=a.onChangeEdad.bind(Object(p.a)(a)),a.onChangeMail=a.onChangeMail.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a.state={username:"",edad:"",mail:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEdad",value:function(e){this.setState({edad:e.target.value})}},{key:"onChangeMail",value:function(e){this.setState({mail:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,edad:this.state.edad,mail:this.state.mail};console.log(t),g.a.post("http://"+window.location.hostname+":"+window.location.port+"/create",t).then(function(e){return console.log(e.data)}),this.setState({username:"",edad:"",mail:""}),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername}),r.a.createElement("label",null,"mail: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.mail,onChange:this.onChangeMail}),r.a.createElement("label",null,"edad: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.edad,onChange:this.onChangeEdad})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-primary"}))))}}]),t}(n.Component);var w=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(b,null),r.a.createElement("br",null),r.a.createElement(l.a,{path:"/",exact:!0,component:f}),r.a.createElement(l.a,{path:"/edit/:nombre",component:C}),r.a.createElement(l.a,{path:"/create",component:y}),r.a.createElement(l.a,{path:"/user",component:j})))};i.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b553cbec.chunk.js.map