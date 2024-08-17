"use strict";(self.webpackChunkklerk_website=self.webpackChunkklerk_website||[]).push([[7795],{9674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var s=n(4848),i=n(8453);const a={title:"Klerk"},o="Klerk",r={type:"mdx",permalink:"/website/",source:"@site/src/pages/index.md",title:"Klerk",description:"Klerk is a Kotlin framework for managing data on the backend. It combines the database",frontMatter:{title:"Klerk"},unlisted:!1},l={},h=[{value:"Basic ideas",id:"basic-ideas",level:2},{value:"Secure",id:"secure",level:3},{value:"Easy to understand",id:"easy-to-understand",level:3},{value:"Avoids complexity",id:"avoids-complexity",level:3},{value:"Fewer bugs",id:"fewer-bugs",level:3},{value:"What can you build with Klerk?",id:"what-can-you-build-with-klerk",level:2},{value:"Core concepts",id:"core-concepts",level:2},{value:"Declarative",id:"declarative",level:3},{value:"Event driven",id:"event-driven",level:3},{value:"Learn more",id:"learn-more",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"klerk",children:"Klerk"}),"\n",(0,s.jsx)(t.p,{children:"Klerk is a Kotlin framework for managing data on the backend. It combines the database\nand business-logic layer in a traditional system and lets you build your application on top of it. Klerk helps you build a system that is secure,\neasy to understand, avoids complexity and has fewer bugs."}),"\n",(0,s.jsxs)(t.p,{children:["Klerk is open sourced under AGPL (",(0,s.jsx)(t.a,{href:"commercial-licence",children:"commercial licenses"})," are available)."]}),"\n",(0,s.jsx)(t.p,{children:"Klerk means 'bookkeeper' in swedish."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Klerk is still in beta. This means that the API is not yet stable."})}),"\n",(0,s.jsx)(t.h2,{id:"basic-ideas",children:"Basic ideas"}),"\n",(0,s.jsx)(t.p,{children:"The purpose of Klerk is to enable development of high quality information systems. To achieve this, Klerk is designed\nwith these ideas in mind:"}),"\n",(0,s.jsx)(t.h3,{id:"secure",children:"Secure"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Secure by design:"}),"\nAll interaction with the data goes through Klerk. This means that Klerk can guarantee that all authorization rules are\nenforced. It is simply not possible for a developer to forget to check a security rule. While it is possible for a developer\nto bypass a rule, these exceptions requires the developer to explicitly state that the rule should not be enforced, making\nthis code stand out."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Secure by default:"}),"\nAll data interaction is denied unless explicitly allowed. To be more precise: in order for a data access to be allowed,\nthere must exist at least one authorization rule that allows the action, and\nthere must not exist any rule that denies the action."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Audit trail:"}),"\nAs all information is passed through Klerk, it provides a meaningful audit trail out of the box. Not only does it record\ndata modification, it can also record data access."]}),"\n",(0,s.jsx)(t.h3,{id:"easy-to-understand",children:"Easy to understand"}),"\n",(0,s.jsx)(t.p,{children:"Development in Klerk is split into a higher (design) level and a lower (details) level. On the higher level you design the system by\ntelling the framework about your pieces. On the lower level you describe each piece in detail. This separation allows\nyou to design the system without loosing yourself in the details, and it becomes easier for other developers to grasp\nhow the system works. It also allows Klerk to generate state diagrams and other documentation, these can be generated\neven before the lower level is implemented."}),"\n",(0,s.jsx)(t.p,{children:"It is possible (and encouraged) to start with the higher level and use the generated documentation to get the design\napproved by all stakeholders before writing any code on the lower level."}),"\n",(0,s.jsx)(t.h3,{id:"avoids-complexity",children:"Avoids complexity"}),"\n",(0,s.jsx)(t.p,{children:"Klerk reduces the system's complexity in two ways: it takes care of the complex stuff that can't be avoided,\nand it forces you to write simple code. As you mostly write pure functions and simple data structures, you rarely feel the\nneed to write 'clever' code like layers of abstractions, multiple\ninheritance, classes with lots of dependencies and other stuff that complicates the system."}),"\n",(0,s.jsx)(t.p,{children:"The system you build can be extensive without being complex. Since the system is composed of simple pieces, the resulting system is\ngenerally not entangled even if it is large. It is possible to look at one part and understand exactly what\nthat part means without knowing about the whole system. Likewise, it is possible to modify one part without affecting\nother parts of the system."}),"\n",(0,s.jsxs)(t.p,{children:["One of the most important source of complexity is state, and unfortunately, information systems must handle state. Klerk\nmakes it easy to tame this complexity using ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Finite-state_machine",children:"state machines"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"fewer-bugs",children:"Fewer bugs"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Consistency"}),": At startup, Klerk analyses the higher level design and can detect if there is an inconsistency. Similarly,\nthe data is verified to be consistent with the design. This makes you aware of bugs early."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Explicit"}),": Klerk requires you to explicitly state validation rules, leaving less room for mistakes."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Keep the knowledge in one place:"})," In most traditional systems, both the backend and the user interface must know about\nthe rules. Since Klerk understands the rules a new pattern is possible: let the UI ask Klerk about which buttons and\nfields to show. This makes it easier to keep the frontend in sync with the backend."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Easy to test:"})," Since Klerk forces you to write simple pieces of code, they are easy to test with unit tests."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Don't write infrastructure code:"})," Since Klerk takes care of most of the infrastructure in the system, you don't have\nto think about hard stuff like cache invalidation and race conditions."]}),"\n",(0,s.jsx)(t.h2,{id:"what-can-you-build-with-klerk",children:"What can you build with Klerk?"}),"\n",(0,s.jsx)(t.p,{children:"You are free to use other backend components to build\nwhatever you want on top of Klerk, such as"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"an API (JSON, REST, GraphQL) serving your frontend"}),"\n",(0,s.jsx)(t.li,{children:"a web application using server generated HTML"}),"\n",(0,s.jsx)(t.li,{children:"a microservice communicating via RPC or message queues"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'Klerk shines when mutations can be described as domain events (e.g. "the invoice has been approved") and\nwhen many of your business rules depends on state (e.g. "the invoice must be approved before it can be paid").'}),"\n",(0,s.jsx)(t.p,{children:"However, Klerk is not always the right choice.\nIf you are building a trivial application, Klerk probably doesn't add enough value to motivate learning the framework.\nFurthermore, Klerk has some limitations:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Klerk must currently be run on a single machine. This means that it is not possible to have software redundancy to protect against\nhardware failures. It also means that Klerk is not horizontal scalable, which limits the system to a few thousand read requests per\nsecond on a fairly low-end server. There are plans to\nmake Klerk run on multiple instances which will ensure high-availability and scaling."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The framework is designed in such way that it never will be able to process thousands of commands\nper second, but it should be able to sustain more than 100 commands per second."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Klerk processes all data at startup, among other things to make sure the configuration (your code) is compatible with all\ndata. As a consequence, the upstart time may be noticeable if you have many millions of entities in the system."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Taken together, if you are expecting millions of concurrent users, Klerk is probably not a good fit unless you\ncan partition the data (e.g. single-tenant systems)."}),"\n",(0,s.jsx)(t.h2,{id:"core-concepts",children:"Core concepts"}),"\n",(0,s.jsx)(t.h3,{id:"declarative",children:"Declarative"}),"\n",(0,s.jsx)(t.p,{children:"A traditional system is built so that it (hopefully) behaves according to the specification. With Klerk it is the other way\naround: you give the specification to Klerk in a semi-declarative format and Klerk will uphold the data integrity and make\nsure these rules are not broken. You carefully declare your data and\nthe rules that your data must obey:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Types"}),"\n",(0,s.jsx)(t.li,{children:"Validation"}),"\n",(0,s.jsx)(t.li,{children:"Which events are allowed when the data has a certain state"}),"\n",(0,s.jsx)(t.li,{children:"How do the events change the data"}),"\n",(0,s.jsx)(t.li,{children:"Who is allowed to trigger the events"}),"\n",(0,s.jsx)(t.li,{children:"Who is allowed to read certain data"}),"\n",(0,s.jsx)(t.li,{children:"... and more"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You declare all this using code (Kotlin). As you may know, Kotlin lends itself to making this kind of domain-specific\nlanguage (DSL). The DSL is used to describe the system on the higher level. When it comes to the details, normal Kotlin\ncode is used."}),"\n",(0,s.jsx)(t.p,{children:'Since Klerk understands the specification, you can query the framework not only for the data but also for the rules.\nThe ability to query the rules can be\nvery useful when building a UI. Should the "Send invite" button be visible now? Let\'s ask the framework. Which fields\nshould the form contain? Klerk knows. What are the validation rules of the email field? Ask the framework. Or\njust submit the fields as a dry-run command and Klerk will tell you what would happen if the command would be submitted\nfor real.'}),"\n",(0,s.jsx)(t.p,{children:"This means that you only need to implement the business logic once, making it easy to keep the UI and rules in\nsync. It is even possible to build an auto-generated UI that is updated as soon as you change the business logic. In\nfact, Klerk comes with a built-in auto-generated admin UI."}),"\n",(0,s.jsx)(t.p,{children:"Other tools also take advantage of this queryable configuration. There is an auto-generated GraphQL API. Klerk also\nships with a form builder that generates HTML forms based on your data and rules."}),"\n",(0,s.jsx)(t.p,{children:"Being able to query the rules also creates new possibilities when it comes to system documentation. It is possible\ngenerate state diagrams which enables non-programmers to grasp how the system actually behaves. Having an up-to-date,\naccessible and understandable documentation is useful for many stakeholders (e.g. product owners, customers, testers,\nonboarding developers, support, sales)."}),"\n",(0,s.jsx)(t.p,{children:"As mentioned above, another benefit of this declarative approach is that Klerk can analyze the configuration and find\nproblems at startup. This reduces the risk of bugs showing up in production."}),"\n",(0,s.jsx)(t.h3,{id:"event-driven",children:"Event driven"}),"\n",(0,s.jsx)(t.p,{children:"Data is modified by sending commands to the framework which may result in one or more domain events. If you want to update the 'favoriteBook' property on a\n'User' model, you will not execute an SQL update command like with most databases. Instead, you will configure the\nsystem\nso that it accepts an event called 'Set favourite book' which takes some parameter. Then you declare on which type of\nmodel and state\nthe event should be available and some other stuff like validation and authorization. You also write a function which\nsays how the model should be changed by the event (in this case just replace the 'favoriteBook' with the event\nparameter)."}),"\n",(0,s.jsx)(t.p,{children:"As mentioned, Klerk lets you use state machines to manage states safely. Each model will have its own state machine, in which\nyou declare the model's states. You then tell the framework\nwhich events a certain state will accept, if there are any preconditions, and what should happen when the event is\ntriggered."}),"\n",(0,s.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,s.jsxs)(t.p,{children:["Check out the example projects and read the ",(0,s.jsx)(t.a,{href:"/docs/intro",children:"documentation"})," to get started."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(6540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);