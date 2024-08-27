"use strict";(self.webpackChunkklerk_website=self.webpackChunkklerk_website||[]).push([[7795],{9674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(4848),s=t(8453);const a={title:"Klerk Framework"},r=void 0,o={type:"mdx",permalink:"/website/",source:"@site/src/pages/index.md",title:"Klerk Framework",description:"Klerk logo",frontMatter:{title:"Klerk Framework"},unlisted:!1},l={},d=[{value:"Basic ideas",id:"basic-ideas",level:2},{value:"Secure",id:"secure",level:3},{value:"Easy to understand",id:"easy-to-understand",level:3},{value:"Avoids complexity",id:"avoids-complexity",level:3},{value:"Fewer bugs",id:"fewer-bugs",level:3},{value:"Low latency",id:"low-latency",level:3},{value:"What can you build with Klerk?",id:"what-can-you-build-with-klerk",level:2},{value:"Core concepts",id:"core-concepts",level:2},{value:"Declarative",id:"declarative",level:3},{value:"Event driven",id:"event-driven",level:3},{value:"Learn more",id:"learn-more",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Klerk logo",src:t(8261).A+"",width:"2266",height:"1040"})}),"\n",(0,i.jsx)(n.p,{children:"Klerk is a Kotlin framework designed to simplify backend data management by combining the database\nand business-logic layers, giving you a solid foundation to build your application upon.\nIt helps you build secure systems that are easy to understand, avoid complexity, have fewer bugs, and low latency."}),"\n",(0,i.jsxs)(n.p,{children:["Klerk is open-source under the AGPL licence, with ",(0,i.jsx)(n.a,{href:"commercial-licence",children:"commercial licenses"})," available."]}),"\n",(0,i.jsx)(n.p,{children:"Klerk means 'bookkeeper' in swedish."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Klerk is still in beta. The API is not yet stable."})}),"\n",(0,i.jsx)(n.h2,{id:"basic-ideas",children:"Basic ideas"}),"\n",(0,i.jsx)(n.p,{children:"Klerk is built with the following principles:"}),"\n",(0,i.jsx)(n.h3,{id:"secure",children:"Secure"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Secure by design:"}),"\nAll data interactions go through Klerk, ensuring that all authorization rules are\nenforced. This design prevents developers from accidentally bypassing security checks.\nIf a developer needs to override a rule, they must explicitly state it, making such exceptions stand out in the code."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Secure by default:"}),"\nAll data interaction is denied unless explicitly permitted. For any action to be allowed, there must be a\nrule that grants permission and no rule that denies it."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Audit trail:"}),"\nKlerk provides a built-in meaningful audit trail, recording not just data modifications but also data access, enhancing traceability and security."]}),"\n",(0,i.jsx)(n.h3,{id:"easy-to-understand",children:"Easy to understand"}),"\n",(0,i.jsx)(n.p,{children:"Klerk divides development into two levels: the higher (design) level and the lower (details) level.\nAt the higher level, you design the system by defining its components.\nAt the lower level, you describe each component in detail.\nThis separation helps you maintain a clear overview of the system, making it easier for others to understand and collaborate.\nAdditionally, Klerk can generate state diagrams and documentation, even before the lower-level implementation begins."}),"\n",(0,i.jsx)(n.p,{children:"It is possible (and encouraged) to start with the higher level and use the generated documentation to get the design\napproved by all stakeholders before writing any code on the lower level."}),"\n",(0,i.jsx)(n.h3,{id:"avoids-complexity",children:"Avoids complexity"}),"\n",(0,i.jsx)(n.p,{children:"Klerk reduces the system's complexity in two ways: it takes care of the unavoidable complexities,\nand it forces you to write simple code.\nYou primarily write pure functions and simple data structures, avoiding complicated abstractions, inheritance, or dependencies that can entangle your system."}),"\n",(0,i.jsx)(n.p,{children:"Even if your system grows large, it remains understandable because it's composed of simple, independent parts.\nYou can focus on one part without needing to understand the entire system, and you can modify one part without affecting others."}),"\n",(0,i.jsxs)(n.p,{children:["One of the main sources of complexity in information systems is state management.\nKlerk helps manage this complexity through ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Finite-state_machine",children:"state machines"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"fewer-bugs",children:"Fewer bugs"}),"\n",(0,i.jsx)(n.p,{children:"Klerk\u2019s declarative approach reduces the likelihood of bugs. Since Klerk handles most of the infrastructure, you don\u2019t have to worry about challenging issues like cache invalidation or race conditions.\nKlerk\u2019s design also includes several features to help minimize bugs:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Consistency"}),": Klerk analyzes your design at startup, detecting inconsistencies early. It also verifies that your data aligns with the design."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Explicit"}),": Klerk requires explicit validation rules, reducing the chances of mistakes."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Keep the knowledge in one place:"})," In traditional systems, both the backend and frontend must implement the same rules. With Klerk, the frontend can query the backend for these rules, ensuring consistency.\nFor example, you can tell Klerk to generate a button or form for each possible action given the current state. If you don't like the\nbutton/form, you can render it yourself after asking Klerk if the action is possible given the current state."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Easy to test:"})," Klerk forces you to write simple pieces of code, making it easier to write effective unit tests."]}),"\n",(0,i.jsx)(n.h3,{id:"low-latency",children:"Low latency"}),"\n",(0,i.jsx)(n.p,{children:"End users are annoyed when a system is not responding quickly to user actions. In e-commerce, latency can even impact\nrevenue. Klerk responds very quickly to requests, enabling developers to build software to be proud of."}),"\n",(0,i.jsx)(n.h2,{id:"what-can-you-build-with-klerk",children:"What can you build with Klerk?"}),"\n",(0,i.jsx)(n.p,{children:"You are free to use other backend components to build\nwhatever you want on top of Klerk, such as"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"APIs (JSON, REST, GraphQL) for your frontend"}),"\n",(0,i.jsx)(n.li,{children:"Web applications using server-generated HTML"}),"\n",(0,i.jsx)(n.li,{children:"Microservices communicating via RPC or message queues"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Klerk excels when your business logic can be described as domain events (e.g. "the invoice has been approved") and\nwhen many of your business rules depend on state (e.g. "the invoice must be approved before it can be paid").'}),"\n",(0,i.jsx)(n.p,{children:"However, Klerk is not always the right choice.\nFor trivial applications, the benefits of Klerk may not justify the learning curve.\nKlerk also has some limitations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Klerk must currently run on a single machine. This means that it is not possible to have software redundancy to protect against\nhardware failures. It also means that Klerk is not horizontal scalable, which limits the system to a few thousand read requests per\nsecond on a fairly low-end server. There are plans to\nmake Klerk run on multiple instances which will ensure high-availability and scaling."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Klerk is not designed to handle many thousands of commands per second, but it can sustain over 100 commands per second."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Klerk processes all data at startup, among other things to make sure the configuration (your code) is compatible with all\ndata. As a consequence, the upstart time may be noticeable if you have many millions of entities in the system."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For systems expecting millions of concurrent users, Klerk may not be ideal unless you can partition the data (e.g., in single-tenant systems)."}),"\n",(0,i.jsx)(n.h2,{id:"core-concepts",children:"Core concepts"}),"\n",(0,i.jsx)(n.h3,{id:"declarative",children:"Declarative"}),"\n",(0,i.jsx)(n.p,{children:"A traditional system is built so that it (hopefully) behaves according to the specification. With Klerk it is the other way\naround: you give the specification to Klerk in a semi-declarative format and Klerk enforces data integrity according to the rules you define. These rules include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data types"}),"\n",(0,i.jsx)(n.li,{children:"Validation"}),"\n",(0,i.jsx)(n.li,{children:"Allowed events based on data state"}),"\n",(0,i.jsx)(n.li,{children:"How events modify data"}),"\n",(0,i.jsx)(n.li,{children:"Authorization for triggering events"}),"\n",(0,i.jsx)(n.li,{children:"Data access permissions"}),"\n",(0,i.jsx)(n.li,{children:"And more"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You declare all this using code. As you may know, Kotlin lends itself to making this kind of domain-specific\nlanguage (DSL). The DSL is used to describe the system on the higher level. When it comes to the details, normal Kotlin\ncode is used."}),"\n",(0,i.jsx)(n.p,{children:'Since Klerk understands the specification, it can be queried for both data and rules. This is particularly useful when building UIs. For example, Klerk can tell you whether a "Send invite" button should be visible, what fields a form should include, and what the validation rules are. You can even submit a dry-run command to see what would happen without actually performing the action.'}),"\n",(0,i.jsx)(n.p,{children:"This approach keeps your business logic and UI in sync. It is even possible to build an auto-generated UI that is updated as soon as you change the business logic. In\nfact, Klerk comes with a built-in auto-generated admin UI."}),"\n",(0,i.jsx)(n.p,{children:"Other tools also take advantage of this queryable configuration. There is an auto-generated GraphQL API. Klerk also\nships with a form builder that generates HTML forms based on your data and rules."}),"\n",(0,i.jsx)(n.p,{children:"The ability to query rules also opens up new possibilities for system documentation.\nKlerk can generate state diagrams, helping non-programmers understand system behavior. Having an up-to-date,\naccessible and understandable documentation is useful for many stakeholders (product owners, customers, testers,\nonboarding developers, support, sales). Here is an example of a state diagram for a chess game:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"chess game state chart",src:t(2763).A+"",width:"2430",height:"1000"})}),"\n",(0,i.jsx)(n.p,{children:'In this state diagram, there is a line with a label "IsAutomaticDraw". There is a simple algorithm determining whether\nthis state transition should happen or not, this algorithm can also be visualized:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"IsAutomaticDraw algorithm",src:t(8140).A+"",width:"1758",height:"790"})}),"\n",(0,i.jsx)(n.h3,{id:"event-driven",children:"Event driven"}),"\n",(0,i.jsxs)(n.p,{children:["Data is modified by sending commands to the framework, which may result in one or more domain events.\nFor example, if you want to update the ",(0,i.jsx)(n.em,{children:"favoriteBook"})," property on a\n",(0,i.jsx)(n.em,{children:"User"})," model, you will not execute an SQL update command like with most databases. Instead, you configure the\nsystem\nto accept an event called ",(0,i.jsx)(n.code,{children:"SetFavouriteBook"}),", define on which type of\nmodel and state the event applies. You also specify its parameters and rules for validation and authorization.\nYou then write a function to handle how the event updates the model."]}),"\n",(0,i.jsx)(n.p,{children:"Each model in Klerk has its own state machine.\nYou declare the model\u2019s states, define which events are accepted in each state, and specify what happens when an event is triggered."}),"\n",(0,i.jsx)(n.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,i.jsxs)(n.p,{children:["Check out the ",(0,i.jsx)(n.a,{href:"https://github.com/search?q=org%3Aklerk-framework+example&type=repositories",children:"example projects"}),"\nand read the ",(0,i.jsx)(n.a,{href:"/docs/intro",children:"documentation"})," to get started."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8140:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ChessIsItDraw-beedd645d8f40fb9d15f07c1ad4760f6.png"},2763:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ChessStatemachine-68c584c4afa02dfff614ad4d571069e4.png"},8261:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/KlerkLogo2-eb26b7dc72c56cd91cbfabdb700eaa41.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);