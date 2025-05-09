import{j as t}from"./jsx-runtime-DoEZbXM1.js";import"./jsx-runtime-Bw5QeaCk.js";function C(e){var s,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(s=0;s<n;s++)e[s]&&(a=C(e[s]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function G(){for(var e,s,a=0,r="",n=arguments.length;a<n;a++)(e=arguments[a])&&(s=C(e))&&(r&&(r+=" "),r+=s);return r}const o=({children:e,className:s,variant:a="primary",size:r="md",iconLeft:n,iconRight:y,loading:g=!1,disabled:E,...P})=>{const f=E||g,H="inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ",I={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",secondary:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",neutral:"bg-white text-black border border-gray-300 hover:bg-gray-100 focus:ring-gray-400",danger:"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",outline:"border border-gray-400 text-gray-800 bg-transparent hover:bg-gray-100 focus:ring-gray-500"},F={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-5 py-2.5 text-lg"};return t.jsxs("button",{...P,disabled:f,className:G(H,I[a],F[r],f&&"opacity-60 pointer-events-none",s),children:[g?t.jsx("span",{className:"animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"}):n&&t.jsx("span",{className:"mr-2",children:n}),e,y&&!g&&t.jsx("span",{className:"ml-2",children:y})]})};o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'neutral' | 'danger' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["ButtonHTMLAttributes"]};const U={title:"Components/Button",component:o,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","neutral","danger","outline"]},size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:{type:"boolean"}},children:{control:"text"}},args:{children:"Click me",variant:"primary",size:"md",disabled:!1}},i={args:{variant:"primary"}},l={args:{variant:"secondary"}},c={args:{variant:"neutral"}},d={args:{variant:"danger"}},u={args:{variant:"outline"}},m={args:{disabled:!0}},p={render:e=>t.jsxs("div",{className:"space-x-2",children:[t.jsx(o,{...e,size:"sm",children:"Small"}),t.jsx(o,{...e,size:"md",children:"Medium"}),t.jsx(o,{...e,size:"lg",children:"Large"})]})};var b,v,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,S,j;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var z,N,B;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'neutral'
  }
}`,...(B=(N=c.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var w,T,q;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,...(q=(T=d.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var D,_,A;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...(A=(_=u.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var L,M,O;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,V,k;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div className="space-x-2">\r
      <Button {...args} size="sm">\r
        Small\r
      </Button>\r
      <Button {...args} size="md">\r
        Medium\r
      </Button>\r
      <Button {...args} size="lg">\r
        Large\r
      </Button>\r
    </div>
}`,...(k=(V=p.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const W=["Primary","Secondary","Neutral","Danger","Outline","Disabled","Sizes"];export{d as Danger,m as Disabled,c as Neutral,u as Outline,i as Primary,l as Secondary,p as Sizes,W as __namedExportsOrder,U as default};
