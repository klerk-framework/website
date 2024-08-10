"use strict";(self.webpackChunkklerk_website=self.webpackChunkklerk_website||[]).push([[9887],{4321:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(4848),s=i(8453);const a={sidebar_position:5},r="Models and Types",o={id:"building-config/models-types",title:"Models and Types",description:"Use data classes to declare your models. Don't start their names with 'Plugin' as that is reserved for models declared",source:"@site/docs/building-config/models-types.md",sourceDirName:"building-config",slug:"/building-config/models-types",permalink:"/website/docs/building-config/models-types",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"DSL and functions",permalink:"/website/docs/building-config/pure-functions"},next:{title:"State machines",permalink:"/website/docs/building-config/state-machines"}},l={},d=[{value:"Validation",id:"validation",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Tags",id:"tags",level:2},{value:"Types prevent mistakes",id:"types-prevent-mistakes",level:2},{value:"Add meaning",id:"add-meaning",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"models-and-types",children:"Models and Types"}),"\n",(0,t.jsx)(n.p,{children:"Use data classes to declare your models. Don't start their names with 'Plugin' as that is reserved for models declared\nby plugins."}),"\n",(0,t.jsx)(n.p,{children:"When declaring your models and parameters, you can use strings, numbers (signed and unsigned) and characters. You can\nalso use lists and sets containing the mentioned types. Klerk requires you to put your values in DataContainers. There\nare several reasons for this:"}),"\n",(0,t.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,t.jsx)(n.p,{children:"Klerk provides several ways to ensure that your data is valid. DataContainers contains the validation rules on the\nprimitive level. Describe your data using these properties:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["String:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"minLength"}),"\n",(0,t.jsx)(n.li,{children:"maxLength"}),"\n",(0,t.jsx)(n.li,{children:"maxLines"}),"\n",(0,t.jsx)(n.li,{children:"regexPattern (optional)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Numbers (Int, Long, Float etc):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"min"}),"\n",(0,t.jsx)(n.li,{children:"max"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If these validation methods are not sufficient, you can always supply one or more validation functions. As an example,\nwhen validating URLs you can use the UrlValidator in Apache Commons like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"val urlValidator = UrlValidator()\n\nclass WebsiteUrl(url: String) : StringContainer(url) {\n    override val minLength = 5\n    override val maxLength = 100\n\n    override val validators = setOf(::validUrl)\n\n    private fun validUrl(): InvalidParametersProblem? {\n        return if (urlValidator.isValid(value)) null else InvalidParametersProblem()\n    }\n\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"authorization",children:"Authorization"}),"\n",(0,t.jsx)(n.p,{children:"Authorization rules are enforced when you try to extract the value in the container. This means that you may be\nauthorized to read the User (i.e. model) but not its UserName (i.e. property). There are several methods to extract the\nvalue. Some will throw an exception if you are not authorized, other will return null. Unless you override the toString\nmethod, it will return [\u2022\u2022\u2022\u2022\u2022\u2022] if unauthorized."}),"\n",(0,t.jsx)(n.h2,{id:"tags",children:"Tags"}),"\n",(0,t.jsx)(n.p,{children:"It is possible to add tags to containers. This enables authorization rules like 'Top secret facts can only be\nread by 2-star generals and above'. It also enables queries like 'Show me all info about user X but omit any\nPersonally Identifiable Information (PII)'."}),"\n",(0,t.jsx)(n.h2,{id:"types-prevent-mistakes",children:"Types prevent mistakes"}),"\n",(0,t.jsx)(n.p,{children:"As each property will have its own container and therefore its own type, it becomes impossible to confuse parameters\nwhen calling a function. Imagine you have a function"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"fun sendSecretInformation(email: String) {\n    ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"It is possible to call this function with an email which has not yet been verified, which could conceivably\nhave security implications. This mistake cannot happen if we write the function like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"fun sendSecretInformation(email: VerifiedEmail) {\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"It is therefore recommended to pass the container types around and not extract the values until they are needed."}),"\n",(0,t.jsx)(n.h2,{id:"add-meaning",children:"Add meaning"}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to make your value types as meaningful as possible. Let's say you want to store information about when\nwe sent the last invoice to the user and we decide to represent it as epoch milliseconds using a LongContainer:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"class LastInvoiceTime(value: Long) : LongContainer(value)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Representing time with a Long is not great. If someone forgets that the value should be interpreted as epoch\nmicroseconds and instead thinks it\nmeans 'seconds since last invoice' we are in trouble. To avoid confusion, we add a second constructor and a property:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"class LastInvoiceTime(value: Long) : LongContainer(value) {\n\n    constructor(instant: Instant) : this(instant.toEpochMilliseconds())\n\n    val instant = Instant.fromEpochMilliseconds(value)\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Even though Klerk thinks of LastInvoiceTime as a Long, we can now interact with it using Instants."}),"\n",(0,t.jsxs)(n.p,{children:["This concept can be extended by complementing your types with the ",(0,t.jsx)(n.a,{href:"https://github.com/nacular/measured",children:"Measured library"})," in order to help with units of\nmeasure."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);