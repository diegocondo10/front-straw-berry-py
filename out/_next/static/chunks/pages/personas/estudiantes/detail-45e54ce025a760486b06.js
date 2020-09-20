_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{"2XdS":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/personas/estudiantes/detail",function(){return t("k1Jv")}])},ODXe:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,a=!1,i=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),!e||t.length!==e);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return t}}(n,e)||function(n,e){if(n){if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(e,"a",(function(){return a}))},k1Jv:function(n,e,t){"use strict";t.r(e);var r=t("o0o1"),a=t.n(r),i=t("HaE+"),c=t("ODXe"),u=t("VX74"),o=t("6I9Z"),d=t("+Rjy"),s=t("V7qE"),l=t("Tq9W"),p=t("zoSL"),b=t("nOHt"),f=t("q1tI"),j=t.n(f),O=t("cWnB"),m=j.a.createElement,v=function(n){var e=n.items,t=n.id,r=Object(b.useRouter)(),f=Object(u.useQuery)(p.c.getById,{variables:{id:t}}),j=f.data,v=f.loading,g=Object(u.useMutation)(p.c.delete,{variables:{id:t}}),y=Object(c.a)(g,1)[0],I=function(){var n=Object(i.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y();case 2:r.push("/personas/estudiantes");case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),$=null===j||void 0===j?void 0:j.estudiante;return m(l.a,{loading:v},m("main",{className:"container-fluid"},m(o.a,{title:"Estudiante",items:e}),m("div",{className:"row justify-content-center"},m("div",{className:"col-md-8 breadcrumb"},m("h4",{className:"text-underline"},"Informaci\xf3n Personal"),m("ul",{className:"w-100"},m(s.a,{persona:null===$||void 0===$?void 0:$.persona})),m("h4",{className:"text-underline"},"Informaci\xf3n Familiar"),m("ul",{className:"w-100"},m(s.a,{persona:null===$||void 0===$?void 0:$.padre,label:"Padre: "}),m(s.a,{persona:null===$||void 0===$?void 0:$.madre,label:"Madre: "}),m(s.a,{persona:null===$||void 0===$?void 0:$.representante,label:"Representante: "}),m("li",null,m("strong",null,"Relaci\xf3n con el Representante: "),null===$||void 0===$?void 0:$.relacionRepresentante)))),m("div",{className:"row justify-content-center"},m("div",{className:"col-md-4 my-1 order-md-1"},m(O.a,{variant:"outline-danger",block:!0,onClick:I},"Eliminar")),m("div",{className:"col-md-4 my-1"},m(d.a,{variant:"outline-info",href:"/personas/estudiantes"})))))};v.getInitialProps=function(){var n=Object(i.a)(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.abrupt("return",{items:[{title:"Estudiante",href:"/personas/estudiantes"},{title:t.id,href:"/personas/estudiantes/update/?id=".concat(t.id)}],id:t.id});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),e.default=v},zoSL:function(n,e,t){"use strict";t.d(e,"d",(function(){return E})),t.d(e,"a",(function(){return B})),t.d(e,"b",(function(){return S})),t.d(e,"c",(function(){return _}));var r=t("h4VS"),a=t("1OyB"),i=t("rePB"),c=t("VX74");function u(){var n=Object(r.a)(["\n    query getById($id: ID!) {\n      estudiante(id: $id) {\n        id\n        relacionRepresentante\n        observaciones\n        persona {\n          id\n          str\n        }\n        padre {\n          id\n          str\n        }\n        madre {\n          id\n          str\n        }\n        representante {\n          id\n          str\n        }\n      }\n      personas {\n        id\n        str\n      }\n    }\n  "]);return u=function(){return n},n}function o(){var n=Object(r.a)(["\n    mutation delete($id: ID!) {\n      deleteEstudiante(id: $id) {\n        found\n        deletedId\n      }\n    }\n  "]);return o=function(){return n},n}function d(){var n=Object(r.a)(["\n    mutation update($id: ID!, $input: UpdateEstudianteInput!) {\n      updateEstudiante(id: $id, input: $input) {\n        estudiante {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return d=function(){return n},n}function s(){var n=Object(r.a)(["\n    mutation create($input: CreateEstudianteInput!) {\n      createEstudiante(input: $input) {\n        estudiante {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return s=function(){return n},n}function l(){var n=Object(r.a)(["\n    query getAll {\n      estudiantes {\n        id\n        relacionRepresentante\n        persona {\n          id\n          str\n        }\n        padre {\n          id\n          str\n        }\n        madre {\n          id\n          str\n        }\n        representante {\n          id\n          str\n        }\n      }\n    }\n  "]);return l=function(){return n},n}function p(){var n=Object(r.a)(["\n    mutation update($id: ID!, $input: UpdateDocenteInput!) {\n      updateDocente(id: $id, input: $input) {\n        docente {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return p=function(){return n},n}function b(){var n=Object(r.a)(["\n    query getByIdWithParams($id: ID!) {\n      docente(id: $id) {\n        id\n        persona {\n          id\n          str\n        }\n        titulo\n        tipoTitulo\n        observaciones\n      }\n      personas {\n        id\n        str\n      }\n    }\n  "]);return b=function(){return n},n}function f(){var n=Object(r.a)(["\n    mutation createDocente($input: CreateDocenteInput!) {\n      createDocente(input: $input) {\n        docente {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return f=function(){return n},n}function j(){var n=Object(r.a)(["\n    query getAll {\n      docentes {\n        id\n        titulo\n        tipoTitulo\n        persona {\n          id\n          str\n        }\n      }\n    }\n  "]);return j=function(){return n},n}function O(){var n=Object(r.a)(["\n    query getByIdDetail($id: ID!) {\n      docente(id: $id) {\n        id\n        titulo\n        tipoTitulo\n        observaciones\n        persona {\n          id\n          str\n        }\n      }\n    }\n  "]);return O=function(){return n},n}function m(){var n=Object(r.a)(["\n    query personasNoDocentes {\n      personasNoDocentes {\n        id\n        str\n      }\n    }\n  "]);return m=function(){return n},n}function v(){var n=Object(r.a)(["\n    mutation delete($id: ID!) {\n      deleteDiscapacidad(id: $id) {\n        found\n        deletedId\n      }\n    }\n  "]);return v=function(){return n},n}function g(){var n=Object(r.a)(["\n    mutation update($id: ID!, $input: UpdateDiscapacidadInput!) {\n      updateDiscapacidad(input: $input, id: $id) {\n        discapacidad {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return g=function(){return n},n}function y(){var n=Object(r.a)(["\n    mutation create($input: CreateDiscapacidadInput!) {\n      createDiscapacidad(input: $input) {\n        discapacidad {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return y=function(){return n},n}function I(){var n=Object(r.a)(["\n    query getById($id: ID!) {\n      discapacidad(id: $id) {\n        id\n        nombre\n        descripcion\n        porcentaje\n        createdAt\n        updatedAt\n      }\n    }\n  "]);return I=function(){return n},n}function $(){var n=Object(r.a)(["\n    query getAll {\n      discapacidades {\n        id\n        nombre\n        descripcion\n        porcentaje\n      }\n    }\n  "]);return $=function(){return n},n}function q(){var n=Object(r.a)(["\n    mutation deletePersona($id: ID!) {\n      deletePersona(id: $id) {\n        found\n        deletedId\n      }\n    }\n  "]);return q=function(){return n},n}function D(){var n=Object(r.a)(["\n    query getParametrosForm {\n      discapacidades {\n        id\n        nombre\n      }\n    }\n  "]);return D=function(){return n},n}function A(){var n=Object(r.a)(["\n    query getAll {\n      personas {\n        id\n        ","\n      }\n    }\n  "]);return A=function(){return n},n}function h(){var n=Object(r.a)(["\n    query getById($id: ID!) {\n      persona(id: $id) {\n        id\n        tipoIdentificacion\n        identificacion\n        primerApellido\n        segundoApellido\n        primerNombre\n        segundoNombre\n        genero\n        sexo\n        tipoSangre\n        fechaNacimiento\n        callePrincipal\n        calleSecundaria\n        lugarReferencia\n        numeroCasa\n        telefono\n        celular\n        correo\n        ocupacion\n        nivelFormacion\n        tieneDiscapacidad\n        carnetConadis\n        porcentajeDiscapacidad\n        discapacidades {\n          id\n          nombre\n        }\n        discapacidadesDisponibles {\n          id\n          nombre\n        }\n      }\n    }\n  "]);return h=function(){return n},n}function N(){var n=Object(r.a)(["\n    query getAll {\n      personas {\n        id\n        tipoIdentificacion\n        identificacion\n        primerNombre\n        segundoNombre\n        primerApellido\n        segundoApellido\n        telefono\n        celular\n        correo\n      }\n    }\n  "]);return N=function(){return n},n}function w(){var n=Object(r.a)(["\n    mutation updatePersona($id: ID!, $input: UpdatePersonaInput!) {\n      updatePersona(id: $id, input: $input) {\n        persona {\n          id\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]);return w=function(){return n},n}function P(){var n=Object(r.a)(["\n    mutation createPersona($input: CreatePersonaInput!) {\n      createPersona(input: $input) {\n        persona {\n          id\n          createdAt\n        }\n      }\n    }\n  "]);return P=function(){return n},n}var E=function n(){Object(a.a)(this,n)};Object(i.a)(E,"create",Object(c.gql)(P())),Object(i.a)(E,"update",Object(c.gql)(w())),Object(i.a)(E,"getAll",Object(c.gql)(N())),Object(i.a)(E,"getById",Object(c.gql)(h())),Object(i.a)(E,"getAllCustom",(function(n){return Object(c.gql)(A(),n)})),Object(i.a)(E,"getParametrosForm",Object(c.gql)(D())),Object(i.a)(E,"deleteById",Object(c.gql)(q()));var B=function n(){Object(a.a)(this,n)};Object(i.a)(B,"getAll",Object(c.gql)($())),Object(i.a)(B,"getById",Object(c.gql)(I())),Object(i.a)(B,"create",Object(c.gql)(y())),Object(i.a)(B,"update",Object(c.gql)(g())),Object(i.a)(B,"delete",Object(c.gql)(v()));var S=function n(){Object(a.a)(this,n)};Object(i.a)(S,"personasNoDocentes",Object(c.gql)(m())),Object(i.a)(S,"getByIdDetail",Object(c.gql)(O())),Object(i.a)(S,"getAll",Object(c.gql)(j())),Object(i.a)(S,"create",Object(c.gql)(f())),Object(i.a)(S,"getByIdWithParams",Object(c.gql)(b())),Object(i.a)(S,"update",Object(c.gql)(p()));var _=function n(){Object(a.a)(this,n)};Object(i.a)(_,"getAll",Object(c.gql)(l())),Object(i.a)(_,"create",Object(c.gql)(s())),Object(i.a)(_,"update",Object(c.gql)(d())),Object(i.a)(_,"delete",Object(c.gql)(o())),Object(i.a)(_,"getById",Object(c.gql)(u()))}},[["2XdS",1,2,3,0,4,5,6,15]]]);