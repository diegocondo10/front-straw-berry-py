_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[48],{"0ZXM":function(n,e,t){"use strict";t.r(e);var a=t("o0o1"),i=t.n(a),r=t("HaE+"),c=t("ODXe"),d=t("q1tI"),u=t.n(d),o=t("VX74"),s=t("2/IU"),p=t("Tq9W"),l=t("nOHt"),b=t("NKCw"),j=t("OqAN"),O=t("zoSL"),f=u.a.createElement,m=function(n){var e=n.title,t=n.items,a=Object(d.useState)(!1),u=a[0],m=a[1],g=Object(b.d)({mode:"onChange"}),v=Object(o.useMutation)(O.a.create),q=Object(c.a)(v,2),I=q[0],$=q[1].loading,D=Object(s.a)().addSuccessToast,y=Object(l.useRouter)(),A=function(){var n=Object(r.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.next=3,I({variables:{input:e}});case 3:m(!1),D("Se ha agregado una nueva discapacidad"),y.push("/personas/discapacidades");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return f(p.a,{title:e,loading:$},f(b.b,g,f(j.a,{title:e,items:t,onSubmit:A,loadBtn:u})))};m.getInitialProps=function(){var n="Agregar Discapacidad";return{items:[{title:"Discapacidades",href:"/personas/discapacidades"},{title:n,active:!0}],title:n}},e.default=m},DinP:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/personas/discapacidades/create",function(){return t("0ZXM")}])},OqAN:function(n,e,t){"use strict";var a=t("6I9Z"),i=t("+Rjy"),r=t("9sAQ"),c=t("Fjxe"),d=t("q1tI"),u=t.n(d),o=t("QojX"),s=t("cWnB"),p=t("NKCw"),l=u.a.createElement;e.a=function(n){var e=n.onSubmit,t=n.items,d=n.title,u=n.loadBtn,b=Object(p.e)(),j=(b.register,b.handleSubmit);b.errors;return l("main",{className:"container-fluid"},l(a.a,{title:d,items:t}),l("div",{className:"row justify-content-center mt-5"},l("div",{className:"col-11 col-md-8 col-lg-6 jumbotron"},l("form",{onSubmit:j(e)},l(c.a,{label:"Nombre: ",name:"nombre",rules:{required:"Obligatorio"}}),l(r.a,{label:"Descripcion: ",name:"descripcion"}),l(o.a.Row,{className:"justify-content-around"},l("div",{className:"col-md-5 my-1"},l(i.a,{variant:"outline-danger",href:"/personas/discapacidades"})),l("div",{className:"col-md-5 my-1"},l(s.a,{block:!0,type:"submit",variant:"outline-primary",disabled:u||!1},u&&"Procesando...",!u&&"Guardar")))))))}},zoSL:function(n,e,t){"use strict";t.d(e,"d",(function(){return B})),t.d(e,"a",(function(){return E})),t.d(e,"b",(function(){return S})),t.d(e,"c",(function(){return _}));var a=t("h4VS"),i=t("1OyB"),r=t("rePB"),c=t("VX74");function d(){var n=Object(a.a)(["\n    query getById($id: ID!) {\n      estudiante(id: $id) {\n        id\n        relacionRepresentante\n        observaciones\n        persona {\n          id\n          str\n        }\n        padre {\n          id\n          str\n        }\n        madre {\n          id\n          str\n        }\n        representante {\n          id\n          str\n        }\n      }\n      personas {\n        id\n        str\n      }\n    }\n  "]);return d=function(){return n},n}function u(){var n=Object(a.a)(["\n    mutation delete($id: ID!) {\n      deleteEstudiante(id: $id) {\n        found\n        deletedId\n      }\n    }\n  "]);return u=function(){return n},n}function o(){var n=Object(a.a)(["\n    mutation update($id: ID!, $input: UpdateEstudianteInput!) {\n      updateEstudiante(id: $id, input: $input) {\n        estudiante {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return o=function(){return n},n}function s(){var n=Object(a.a)(["\n    mutation create($input: CreateEstudianteInput!) {\n      createEstudiante(input: $input) {\n        estudiante {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return s=function(){return n},n}function p(){var n=Object(a.a)(["\n    query getAll {\n      estudiantes {\n        id\n        relacionRepresentante\n        persona {\n          id\n          str\n        }\n        padre {\n          id\n          str\n        }\n        madre {\n          id\n          str\n        }\n        representante {\n          id\n          str\n        }\n      }\n    }\n  "]);return p=function(){return n},n}function l(){var n=Object(a.a)(["\n    mutation update($id: ID!, $input: UpdateDocenteInput!) {\n      updateDocente(id: $id, input: $input) {\n        docente {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return l=function(){return n},n}function b(){var n=Object(a.a)(["\n    query getByIdWithParams($id: ID!) {\n      docente(id: $id) {\n        id\n        persona {\n          id\n          str\n        }\n        titulo\n        tipoTitulo\n        observaciones\n      }\n      personas {\n        id\n        str\n      }\n    }\n  "]);return b=function(){return n},n}function j(){var n=Object(a.a)(["\n    mutation createDocente($input: CreateDocenteInput!) {\n      createDocente(input: $input) {\n        docente {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return j=function(){return n},n}function O(){var n=Object(a.a)(["\n    query getAll {\n      docentes {\n        id\n        titulo\n        tipoTitulo\n        persona {\n          id\n          str\n        }\n      }\n    }\n  "]);return O=function(){return n},n}function f(){var n=Object(a.a)(["\n    query getByIdDetail($id: ID!) {\n      docente(id: $id) {\n        id\n        titulo\n        tipoTitulo\n        observaciones\n        persona {\n          id\n          str\n        }\n      }\n    }\n  "]);return f=function(){return n},n}function m(){var n=Object(a.a)(["\n    query personasNoDocentes {\n      personasNoDocentes {\n        id\n        str\n      }\n    }\n  "]);return m=function(){return n},n}function g(){var n=Object(a.a)(["\n    mutation delete($id: ID!) {\n      deleteDiscapacidad(id: $id) {\n        found\n        deletedId\n      }\n    }\n  "]);return g=function(){return n},n}function v(){var n=Object(a.a)(["\n    mutation update($id: ID!, $input: UpdateDiscapacidadInput!) {\n      updateDiscapacidad(input: $input, id: $id) {\n        discapacidad {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return v=function(){return n},n}function q(){var n=Object(a.a)(["\n    mutation create($input: CreateDiscapacidadInput!) {\n      createDiscapacidad(input: $input) {\n        discapacidad {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return q=function(){return n},n}function I(){var n=Object(a.a)(["\n    query getById($id: ID!) {\n      discapacidad(id: $id) {\n        id\n        nombre\n        descripcion\n        porcentaje\n        createdAt\n        updatedAt\n      }\n    }\n  "]);return I=function(){return n},n}function $(){var n=Object(a.a)(["\n    query getAll {\n      discapacidades {\n        id\n        nombre\n        descripcion\n        porcentaje\n      }\n    }\n  "]);return $=function(){return n},n}function D(){var n=Object(a.a)(["\n    mutation deletePersona($id: ID!) {\n      deletePersona(id: $id) {\n        found\n        deletedId\n      }\n    }\n  "]);return D=function(){return n},n}function y(){var n=Object(a.a)(["\n    query getParametrosForm {\n      discapacidades {\n        id\n        nombre\n      }\n    }\n  "]);return y=function(){return n},n}function A(){var n=Object(a.a)(["\n    query getAll {\n      personas {\n        id\n        ","\n      }\n    }\n  "]);return A=function(){return n},n}function N(){var n=Object(a.a)(["\n    query getById($id: ID!) {\n      persona(id: $id) {\n        id\n        tipoIdentificacion\n        identificacion\n        primerApellido\n        segundoApellido\n        primerNombre\n        segundoNombre\n        genero\n        sexo\n        tipoSangre\n        fechaNacimiento\n        callePrincipal\n        calleSecundaria\n        lugarReferencia\n        numeroCasa\n        telefono\n        celular\n        correo\n        ocupacion\n        nivelFormacion\n        tieneDiscapacidad\n        carnetConadis\n        porcentajeDiscapacidad\n        discapacidades {\n          id\n          nombre\n        }\n        discapacidadesDisponibles {\n          id\n          nombre\n        }\n      }\n    }\n  "]);return N=function(){return n},n}function P(){var n=Object(a.a)(["\n    query getAll {\n      personas {\n        id\n        tipoIdentificacion\n        identificacion\n        primerNombre\n        segundoNombre\n        primerApellido\n        segundoApellido\n        telefono\n        celular\n        correo\n      }\n    }\n  "]);return P=function(){return n},n}function h(){var n=Object(a.a)(["\n    mutation updatePersona($id: ID!, $input: UpdatePersonaInput!) {\n      updatePersona(id: $id, input: $input) {\n        persona {\n          id\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]);return h=function(){return n},n}function w(){var n=Object(a.a)(["\n    mutation createPersona($input: CreatePersonaInput!) {\n      createPersona(input: $input) {\n        persona {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return w=function(){return n},n}var B=function n(){Object(i.a)(this,n)};Object(r.a)(B,"create",Object(c.gql)(w())),Object(r.a)(B,"update",Object(c.gql)(h())),Object(r.a)(B,"getAll",Object(c.gql)(P())),Object(r.a)(B,"getById",Object(c.gql)(N())),Object(r.a)(B,"getAllCustom",(function(n){return Object(c.gql)(A(),n)})),Object(r.a)(B,"getParametrosForm",Object(c.gql)(y())),Object(r.a)(B,"deleteById",Object(c.gql)(D()));var E=function n(){Object(i.a)(this,n)};Object(r.a)(E,"getAll",Object(c.gql)($())),Object(r.a)(E,"getById",Object(c.gql)(I())),Object(r.a)(E,"create",Object(c.gql)(q())),Object(r.a)(E,"update",Object(c.gql)(v())),Object(r.a)(E,"delete",Object(c.gql)(g()));var S=function n(){Object(i.a)(this,n)};Object(r.a)(S,"personasNoDocentes",Object(c.gql)(m())),Object(r.a)(S,"getByIdDetail",Object(c.gql)(f())),Object(r.a)(S,"getAll",Object(c.gql)(O())),Object(r.a)(S,"create",Object(c.gql)(j())),Object(r.a)(S,"getByIdWithParams",Object(c.gql)(b())),Object(r.a)(S,"update",Object(c.gql)(l()));var _=function n(){Object(i.a)(this,n)};Object(r.a)(_,"getAll",Object(c.gql)(p())),Object(r.a)(_,"create",Object(c.gql)(s())),Object(r.a)(_,"update",Object(c.gql)(o())),Object(r.a)(_,"delete",Object(c.gql)(u())),Object(r.a)(_,"getById",Object(c.gql)(d()))}},[["DinP",1,2,3,0,4,5,6,7,9,10]]]);