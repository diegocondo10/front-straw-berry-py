_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[56],{"10V9":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/personas/estudiantes/create",function(){return t("B0M4")}])},B0M4:function(n,e,t){"use strict";t.r(e);var a=t("o0o1"),r=t.n(a),i=t("HaE+"),c=t("ODXe"),o=t("VX74"),u=t("aTKh"),d=t("Tq9W"),s=t("zoSL"),l=t("nOHt"),p=t("q1tI"),b=t.n(p),m=t("NKCw"),j=b.a.createElement,f=function(n){var e=n.items,t=n.title,a=Object(m.d)({mode:"onChange"}),p=Object(o.useQuery)(s.d.getAllCustom("str")),b=p.loading,f=p.data,O=Object(o.useMutation)(s.c.create),g=Object(c.a)(O,1)[0],v=Object(l.useRouter)(),q=function(){var n=Object(i.a)(r.a.mark((function n(e){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g({variables:{input:e}});case 2:n.sent,v.push("/personas/estudiantes");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return j(d.a,{loading:b},j(m.b,a,j(u.a,{title:t,items:e,onSubmit:q,personas:null===f||void 0===f?void 0:f.personas})))};f.getInitialProps=function(){return{items:[{title:"Estudiante",href:"/personas/estudiantes"},{title:"Agregar Estudiante",active:!0}],title:"Agregar Estudiante"}},e.default=f},aTKh:function(n,e,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("kizA"),c=t("Fjxe"),o=t("QojX"),u=t("cWnB"),d=t("+Rjy"),s=t("6I9Z"),l=t("NKCw"),p=t("9sAQ"),b=t("sGNg"),m=r.a.createElement;e.a=function(n){var e=n.title,t=n.items,a=n.onSubmit,r=n.personas,j=void 0===r?[]:r,f=Object(l.e)().handleSubmit;return m("main",{className:"container-fluid"},m(s.a,{title:e,items:t}),m("div",{className:"row justify-content-center"},m("div",{className:"col-md-10 jumbotron rounded"},m("form",{onSubmit:f((function(n){n.persona=Object(b.b)(n.persona),n.padre=Object(b.b)(n.padre),n.madre=Object(b.b)(n.madre),n.representante=Object(b.b)(n.representante),a(n)}))},m(o.a.Row,null,m("div",{className:"col-md-6"},m(i.a,{label:"Personas:",name:"persona",options:j,optionLabel:"str",filter:!0,rules:{required:"Este campo es obligatorio"}})),m("div",{className:"col-md-6"},m(i.a,{label:"Padre:",name:"padre",options:j,optionLabel:"str",filter:!0,rules:{required:"Este campo es obligatorio"}})),m("div",{className:"col-md-6"},m(i.a,{label:"Madre:",name:"madre",options:j,optionLabel:"str",filter:!0,rules:{required:"Este campo es obligatorio"}})),m("div",{className:"col-md-6"},m(i.a,{label:"Representantes:",name:"representante",options:j,optionLabel:"str",filter:!0,rules:{required:"Este campo es obligatorio"}})),m("div",{className:"col-md-6"},m(c.a,{label:"Relaci\xf3n con el Representante:",name:"relacionRepresentante",rules:{required:"Este campo es obligatorio"}})),m("div",{className:"col-md-12"},m(p.a,{label:"Observaciones:",name:"observaciones"}))),m(o.a.Row,{className:"justify-content-between"},m("div",{className:"col-md-5 mt-3 my-1"},m(d.a,{href:"/personas/estudiantes",variant:"outline-danger"})),m("div",{className:"col-md-5 mt-3 my-1"},m(u.a,{variant:"outline-primary",block:!0,type:"submit"},"Guardar")))))))}},kizA:function(n,e,t){"use strict";var a=t("wx14"),r=t("rePB"),i=t("Ff2n"),c=t("TSYQ"),o=t.n(c),u=t("sv1p"),d=t("q1tI"),s=t.n(d),l=t("QojX"),p=t("NKCw"),b=t("PK9Q"),m=s.a.createElement;e.a=function(n){var e=n.label,t=n.rules,c=n.name,d=n.onChange,s=n.placeholder,j=n.className,f=Object(i.a)(n,["label","rules","name","onChange","placeholder","className"]),O=Object(p.e)(),g=O.control,v=O.errors;return m(l.a.Group,null,m(l.a.Label,null,e),m(p.a,{name:c,control:g,rules:t,defaultValue:null,render:function(n){var e,t=n.onChange,i=n.value;return m(u.Dropdown,Object(a.a)({value:i,onChange:function(n){var e=n.value;t(e),d&&d(e)},placeholder:s||"Seleccione",className:o()((e={},Object(r.a)(e,j,!0),Object(r.a)(e,"w-100",!0),Object(r.a)(e,"p-invalid",!!v[c]),e))},f))}}),m(b.a,{name:c}))}},sv1p:function(n,e,t){"use strict";n.exports=t("YuXx")},zoSL:function(n,e,t){"use strict";t.d(e,"d",(function(){return P})),t.d(e,"a",(function(){return B})),t.d(e,"b",(function(){return C})),t.d(e,"c",(function(){return _}));var a=t("h4VS"),r=t("1OyB"),i=t("rePB"),c=t("VX74");function o(){var n=Object(a.a)(["\n    query getById($id: ID!) {\n      estudiante(id: $id) {\n        id\n        relacionRepresentante\n        observaciones\n        persona {\n          id\n          str\n        }\n        padre {\n          id\n          str\n        }\n        madre {\n          id\n          str\n        }\n        representante {\n          id\n          str\n        }\n      }\n      personas {\n        id\n        str\n      }\n    }\n  "]);return o=function(){return n},n}function u(){var n=Object(a.a)(["\n    mutation delete($id: ID!) {\n      deleteEstudiante(id: $id) {\n        found\n        deletedId\n      }\n    }\n  "]);return u=function(){return n},n}function d(){var n=Object(a.a)(["\n    mutation update($id: ID!, $input: UpdateEstudianteInput!) {\n      updateEstudiante(id: $id, input: $input) {\n        estudiante {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return d=function(){return n},n}function s(){var n=Object(a.a)(["\n    mutation create($input: CreateEstudianteInput!) {\n      createEstudiante(input: $input) {\n        estudiante {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return s=function(){return n},n}function l(){var n=Object(a.a)(["\n    query getAll {\n      estudiantes {\n        id\n        relacionRepresentante\n        persona {\n          id\n          str\n        }\n        padre {\n          id\n          str\n        }\n        madre {\n          id\n          str\n        }\n        representante {\n          id\n          str\n        }\n      }\n    }\n  "]);return l=function(){return n},n}function p(){var n=Object(a.a)(["\n    mutation update($id: ID!, $input: UpdateDocenteInput!) {\n      updateDocente(id: $id, input: $input) {\n        docente {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return p=function(){return n},n}function b(){var n=Object(a.a)(["\n    query getByIdWithParams($id: ID!) {\n      docente(id: $id) {\n        id\n        persona {\n          id\n          str\n        }\n        titulo\n        tipoTitulo\n        observaciones\n      }\n      personas {\n        id\n        str\n      }\n    }\n  "]);return b=function(){return n},n}function m(){var n=Object(a.a)(["\n    mutation createDocente($input: CreateDocenteInput!) {\n      createDocente(input: $input) {\n        docente {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return m=function(){return n},n}function j(){var n=Object(a.a)(["\n    query getAll {\n      docentes {\n        id\n        titulo\n        tipoTitulo\n        persona {\n          id\n          str\n        }\n      }\n    }\n  "]);return j=function(){return n},n}function f(){var n=Object(a.a)(["\n    query getByIdDetail($id: ID!) {\n      docente(id: $id) {\n        id\n        titulo\n        tipoTitulo\n        observaciones\n        persona {\n          id\n          str\n        }\n      }\n    }\n  "]);return f=function(){return n},n}function O(){var n=Object(a.a)(["\n    query personasNoDocentes {\n      personasNoDocentes {\n        id\n        str\n      }\n    }\n  "]);return O=function(){return n},n}function g(){var n=Object(a.a)(["\n    mutation delete($id: ID!) {\n      deleteDiscapacidad(id: $id) {\n        found\n        deletedId\n      }\n    }\n  "]);return g=function(){return n},n}function v(){var n=Object(a.a)(["\n    mutation update($id: ID!, $input: UpdateDiscapacidadInput!) {\n      updateDiscapacidad(input: $input, id: $id) {\n        discapacidad {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return v=function(){return n},n}function q(){var n=Object(a.a)(["\n    mutation create($input: CreateDiscapacidadInput!) {\n      createDiscapacidad(input: $input) {\n        discapacidad {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return q=function(){return n},n}function I(){var n=Object(a.a)(["\n    query getById($id: ID!) {\n      discapacidad(id: $id) {\n        id\n        nombre\n        descripcion\n        porcentaje\n        createdAt\n        updatedAt\n      }\n    }\n  "]);return I=function(){return n},n}function $(){var n=Object(a.a)(["\n    query getAll {\n      discapacidades {\n        id\n        nombre\n        descripcion\n        porcentaje\n      }\n    }\n  "]);return $=function(){return n},n}function y(){var n=Object(a.a)(["\n    mutation deletePersona($id: ID!) {\n      deletePersona(id: $id) {\n        found\n        deletedId\n      }\n    }\n  "]);return y=function(){return n},n}function D(){var n=Object(a.a)(["\n    query getParametrosForm {\n      discapacidades {\n        id\n        nombre\n      }\n    }\n  "]);return D=function(){return n},n}function N(){var n=Object(a.a)(["\n    query getAll {\n      personas {\n        id\n        ","\n      }\n    }\n  "]);return N=function(){return n},n}function A(){var n=Object(a.a)(["\n    query getById($id: ID!) {\n      persona(id: $id) {\n        id\n        tipoIdentificacion\n        identificacion\n        primerApellido\n        segundoApellido\n        primerNombre\n        segundoNombre\n        genero\n        sexo\n        tipoSangre\n        fechaNacimiento\n        callePrincipal\n        calleSecundaria\n        lugarReferencia\n        numeroCasa\n        telefono\n        celular\n        correo\n        ocupacion\n        nivelFormacion\n        tieneDiscapacidad\n        carnetConadis\n        porcentajeDiscapacidad\n        discapacidades {\n          id\n          nombre\n        }\n        discapacidadesDisponibles {\n          id\n          nombre\n        }\n      }\n    }\n  "]);return A=function(){return n},n}function h(){var n=Object(a.a)(["\n    query getAll {\n      personas {\n        id\n        tipoIdentificacion\n        identificacion\n        primerNombre\n        segundoNombre\n        primerApellido\n        segundoApellido\n        telefono\n        celular\n        correo\n      }\n    }\n  "]);return h=function(){return n},n}function w(){var n=Object(a.a)(["\n    mutation updatePersona($id: ID!, $input: UpdatePersonaInput!) {\n      updatePersona(id: $id, input: $input) {\n        persona {\n          id\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]);return w=function(){return n},n}function E(){var n=Object(a.a)(["\n    mutation createPersona($input: CreatePersonaInput!) {\n      createPersona(input: $input) {\n        persona {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return E=function(){return n},n}var P=function n(){Object(r.a)(this,n)};Object(i.a)(P,"create",Object(c.gql)(E())),Object(i.a)(P,"update",Object(c.gql)(w())),Object(i.a)(P,"getAll",Object(c.gql)(h())),Object(i.a)(P,"getById",Object(c.gql)(A())),Object(i.a)(P,"getAllCustom",(function(n){return Object(c.gql)(N(),n)})),Object(i.a)(P,"getParametrosForm",Object(c.gql)(D())),Object(i.a)(P,"deleteById",Object(c.gql)(y()));var B=function n(){Object(r.a)(this,n)};Object(i.a)(B,"getAll",Object(c.gql)($())),Object(i.a)(B,"getById",Object(c.gql)(I())),Object(i.a)(B,"create",Object(c.gql)(q())),Object(i.a)(B,"update",Object(c.gql)(v())),Object(i.a)(B,"delete",Object(c.gql)(g()));var C=function n(){Object(r.a)(this,n)};Object(i.a)(C,"personasNoDocentes",Object(c.gql)(O())),Object(i.a)(C,"getByIdDetail",Object(c.gql)(f())),Object(i.a)(C,"getAll",Object(c.gql)(j())),Object(i.a)(C,"create",Object(c.gql)(m())),Object(i.a)(C,"getByIdWithParams",Object(c.gql)(b())),Object(i.a)(C,"update",Object(c.gql)(p()));var _=function n(){Object(r.a)(this,n)};Object(i.a)(_,"getAll",Object(c.gql)(l())),Object(i.a)(_,"create",Object(c.gql)(s())),Object(i.a)(_,"update",Object(c.gql)(d())),Object(i.a)(_,"delete",Object(c.gql)(u())),Object(i.a)(_,"getById",Object(c.gql)(o()))}},[["10V9",1,2,3,0,4,5,6,7,8,9,10]]]);