"use strict";(self.webpackChunkklerk_website=self.webpackChunkklerk_website||[]).push([[7738],{3823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(4848),o=t(8453);const a={sidebar_position:1},i="Commands",r={id:"usage/commands",title:"Commands",description:"To make any changes to the data, we issue commands. E.g:",source:"@site/docs/usage/commands.md",sourceDirName:"usage",slug:"/usage/commands",permalink:"/website/docs/usage/commands",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/website/docs/category/usage"},next:{title:"Reading data",permalink:"/website/docs/usage/reading"}},d={},c=[{value:"Idempotence",id:"idempotence",level:3},{value:"Dry run",id:"dry-run",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"commands",children:"Commands"}),"\n",(0,s.jsx)(n.p,{children:"To make any changes to the data, we issue commands. E.g:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'val result = clerk.handle(\n    Command(\n        event = CreateAuthor,\n        model = null,\n        params = CreateAuthorParams(\n            firstName = FirstName("Astrid"),\n            lastName = LastName("Lindgren"),\n        ),\n    ),\n    context,\n    ProcessingOptions(CommandToken.simple()),\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the example above, we issue the command CreateAuthor with some parameters.\nSince we don\xb4t want to execute this event on a specific model, we set ",(0,s.jsx)(n.code,{children:"mode = null"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When interacting with Klerk, we always provide a ",(0,s.jsx)(n.a,{href:"/docs/building-config/context",children:"context"}),". This includes information about who is the actor, i.e.\non whose behalf is the command issued. This actor is among other things used when evaluating the authorization rules."]}),"\n",(0,s.jsx)(n.h1,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"ProcessingOptions"})," object must be supplied."]}),"\n",(0,s.jsx)(n.h3,{id:"idempotence",children:"Idempotence"}),"\n",(0,s.jsxs)(n.p,{children:["A command token is required. This token can ensures that the command is only executed if some\npreconditions are fulfilled. In the example above, a simple ",(0,s.jsx)(n.code,{children:"CommandToken"})," is provided, this\nensures idempotence (i.e. prevents the same command from occurring more than once)."]}),"\n",(0,s.jsx)(n.p,{children:"A more advanced token can be used to make sure that the command is only accepted if some data\nis unchanged since the token was created."}),"\n",(0,s.jsx)(n.h3,{id:"dry-run",children:"Dry run"}),"\n",(0,s.jsxs)(n.p,{children:["If a command is issued with ",(0,s.jsx)(n.code,{children:"CommandOption(dryRun = true)"}),", the command is evaluated, but it will have no effect. This\ncan be used to see what would happen if the command would be issued for real. The response will contain the updated\nmodels as normal but will not be persisted. Also note that none of the actions or jobs will be executed."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(6540);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);