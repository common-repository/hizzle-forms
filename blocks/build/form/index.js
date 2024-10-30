(()=>{var e={942:(e,t)=>{var r;!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=n(e,l(r)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)i.call(e,r)&&e[r]&&(t=n(t,r));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.lodash,t=JSON.parse('{"name":"hizzle-forms/form"}'),i=window.React,o=window.wp.blockEditor,l=window.wp.components,n=window.wp.i18n;var a=r(942),s=r.n(a);const m=window.wp.element;function z({children:e}){return(0,i.createElement)("p",{style:{color:"rgba( 117, 117, 117, 1 )",marginBottom:"24px"}},e)}const c=({index:e,active:t,email:r,subject:o,message:a,sender_name:s,reply_to:m,setAttributes:z,canDelete:c,deleteConnection:_,insertConnection:h})=>{const u=(0,n.sprintf)((0,n.__)("Email Connection #%d","hizzle-forms"),e+1);return(0,i.createElement)(l.PanelBody,{title:u,initialOpen:!1},(0,i.createElement)(l.ToggleControl,{label:(0,n.__)("Send this email","hizzle-forms"),help:t?(0,n.__)("This email will be sent.","hizzle-forms"):(0,n.__)("This email will not be sent.","hizzle-forms"),checked:t,onChange:e=>z({active:e})}),t&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(l.TextControl,{label:(0,n.__)("Sender name","hizzle-forms"),value:s||"",placeholder:(0,n.__)("Enter a sender name","hizzle-forms"),onChange:e=>z({sender_name:e})}),(0,i.createElement)(l.TextControl,{label:(0,n.__)("Reply-to","hizzle-forms"),value:m||"",placeholder:(0,n.__)("Enter a reply-to email address","hizzle-forms"),onChange:e=>z({reply_to:e})}),(0,i.createElement)(l.TextControl,{label:(0,n.__)("Recipient","hizzle-forms"),placeholder:(0,n.__)("{admin_email}, {email}, example@gmail.com","hizzle-forms"),value:r||"",onChange:e=>z({email:e}),help:(0,n.__)("You can enter multiple email addresses separated by commas.","hizzle-forms")}),(0,i.createElement)(l.TextControl,{label:(0,n.__)("Email subject line","hizzle-forms"),value:o||"",placeholder:(0,n.__)("Enter a subject","hizzle-forms"),onChange:e=>z({subject:e})}),(0,i.createElement)(l.TextareaControl,{value:a||"",onChange:e=>z({message:e}),label:(0,n.__)("Email content","hizzle-forms"),placeholder:(0,n.__)("Enter email content…","hizzle-forms"),rows:10})),(0,i.createElement)(l.Flex,null,(0,i.createElement)(l.FlexItem,null,(0,i.createElement)(l.Button,{variant:"secondary",isSmall:!0,onClick:h},(0,n.__)("Add Connection","hizzle-forms"))),c&&(0,i.createElement)(l.FlexItem,null,(0,i.createElement)(l.Button,{isDestructive:!0,isSmall:!0,onClick:_},(0,n.__)("Delete Connection","hizzle-forms")))))},_=({emails:e,setAttributes:t})=>{if((0,m.useEffect)((()=>{Array.isArray(e)&&0!==e.length||t({emails:[{email:"{admin_email}",subject:(0,n.__)("New form response","hizzle-forms"),message:(0,n.__)("You have received a new response to your contact form. \n\nHere are the details:\n\n{response_fields}\n\nThank you,\n{site_title}\n\n<hr>\nURL: {current_url} \nIP Address: {user_ip}\nUser Agent: {user_agent}\nTime: {current_date} at {current_time}","hizzle-forms"),sender_name:"{site_title}",reply_to:"{email}",active:!1}]})}),[e]),!Array.isArray(e))return null;const r=e.length>1;return(0,i.createElement)(i.Fragment,null,e.map(((o,l)=>(0,i.createElement)(c,{key:l,index:l,canDelete:r,setAttributes:r=>{const i=[...e];i[l]={...i[l],...r},t({emails:i})},deleteConnection:()=>{const r=[...e];r.splice(l,1),t({emails:r})},insertConnection:()=>{const r=[...e];r.splice(l+1,0,{email:"",subject:"",message:"",active:!1}),t({emails:r})},...o}))))},h=["hizzle-forms/input","hizzle-forms/textarea","hizzle-forms/checkbox","hizzle-forms/radio","hizzle-forms/select","hizzle-forms/multi-checkbox","hizzle-forms/submit","core/audio","core/heading","core/image","core/list","core/paragraph","core/separator","core/spacer","core/subhead","core/video"],u=[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,n.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"email",label:(0,n.__)("Email","hizzle-forms")}],["hizzle-forms/textarea",{label:(0,n.__)("Message","hizzle-forms")}],["hizzle-forms/submit",{text:(0,n.__)("Contact Us","hizzle-forms")}]],f=({width:e=24,height:t=24})=>(0,i.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 256 256"},(0,i.createElement)(l.Path,{d:"M117.668 4.27984C124.283 1.5395 131.717 1.5395 138.332 4.27984L208.177 33.2105C214.793 35.9508 220.049 41.207 222.79 47.8228L251.72 117.668C254.461 124.283 254.46 131.717 251.72 138.332L222.79 208.177C220.049 214.793 214.793 220.049 208.177 222.79L138.332 251.72C131.717 254.46 124.283 254.46 117.668 251.72L47.8228 222.789C41.207 220.049 35.9508 214.793 33.2105 208.177L4.27984 138.332C1.5395 131.717 1.53951 124.283 4.27984 117.668L33.2105 47.8228C35.9508 41.207 41.207 35.9508 47.8228 33.2105L117.668 4.27984Z",fill:"#AA00FF"}),(0,i.createElement)(l.Path,{d:"M129.613 150.2L125.813 205C125.68 206.067 125.547 206.867 125.413 207.4C125.413 207.8 124.813 208 123.613 208H112.613C105.147 208 99.8133 206.533 96.6133 203.6C93.4133 200.667 91.8133 196.467 91.8133 191C91.8133 188.333 92.0133 183.8 92.4133 177.4C92.8133 170.867 93.3466 163.467 94.0133 155.2C94.6799 146.933 95.3466 138.2 96.0133 129C96.6799 119.8 97.3466 111.133 98.0133 103C98.6799 94.8667 99.2133 87.7333 99.6133 81.6C100.013 75.4667 100.213 71.2667 100.213 69C100.213 67 101.28 66 103.413 66H173.813C174.613 66 175.347 66.2 176.013 66.6C176.68 67 177.013 67.7333 177.013 68.8L176.213 80.6C175.947 84.6 174.813 87.8667 172.813 90.4C170.947 92.8 167.013 94 161.013 94H133.413L131.413 122.2H159.813C160.613 122.2 161.347 122.4 162.013 122.8C162.68 123.2 163.013 123.933 163.013 125L162.213 136.8C161.947 140.8 160.813 144.067 158.813 146.6C156.947 149 153.013 150.2 147.013 150.2H129.613Z",fill:"#FAFAFA"})),d=[{name:"hizzle-contact-form",isDefault:!0,title:(0,n.__)("Contact Form","hizzle-forms"),description:(0,n.__)("Add a contact form to your page.","hizzle-forms"),keywords:[(0,n.__)("contact","hizzle-forms"),(0,n.__)("email","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,n.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"email",label:(0,n.__)("Email","hizzle-forms")}],["hizzle-forms/textarea",{label:(0,n.__)("Message","hizzle-forms")}],["hizzle-forms/submit",{text:(0,n.__)("Contact Us","hizzle-forms")}]]},{name:"hizzle-newsletter-form",title:(0,n.__)("Newsletter Sign-up","hizzle-forms"),description:(0,n.__)("A simple way to collect information from folks visiting your site.","hizzle-forms"),keywords:[(0,n.__)("subscribe","hizzle-forms"),(0,n.__)("email","hizzle-forms"),(0,n.__)("signup","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,n.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"email",label:(0,n.__)("Email","hizzle-forms")}],["hizzle-forms/checkbox",{validation:[{name:"required"}],label:(0,n.__)("Agree to terms and conditions","hizzle-forms")}],["hizzle-forms/submit",{text:(0,n.__)("Subscribe","hizzle-forms")}]]},{name:"hizzle-rsvp-form",title:(0,n.__)("RSVP Form","hizzle-forms"),description:(0,n.__)("Add an RSVP form to your page","hizzle-forms"),keywords:[(0,n.__)("rsvp","hizzle-forms"),(0,n.__)("event","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,n.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"email",label:(0,n.__)("Email","hizzle-forms")}],{name:"hizzle-forms/radio",attributes:{label:(0,n.__)("Attending?","hizzle-forms"),validation:[{name:"required"}],isRadio:!0},innerBlocks:[{name:"hizzle-forms/radio-option",attributes:{option:(0,n.__)("Yes","hizzle-forms"),selected:!0}},{name:"hizzle-forms/radio-option",attributes:{option:(0,n.__)("No","hizzle-forms")}}]},["hizzle-forms/textarea",{label:(0,n.__)("Other Details","hizzle-forms")}],["hizzle-forms/submit",{text:(0,n.__)("Send RSVP","hizzle-forms")}]]},{name:"hizzle-registration-form",title:(0,n.__)("Registration Form","hizzle-forms"),description:(0,n.__)("Add a Registration form to your page","hizzle-forms"),keywords:[(0,n.__)("register","hizzle-forms"),(0,n.__)("event","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,n.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"email",label:(0,n.__)("Email","hizzle-forms")}],["hizzle-forms/input",{type:"tel",label:(0,n.__)("Phone","hizzle-forms")}],["hizzle-forms/select",{label:(0,n.__)("How did you hear about us?","hizzle-forms"),value:(0,n.__)("Search Engine","hizzle-forms"),options:[(0,n.__)("Search Engine","hizzle-forms"),(0,n.__)("Social Media","hizzle-forms"),(0,n.__)("TV","hizzle-forms"),(0,n.__)("Radio","hizzle-forms"),(0,n.__)("Friend or Family","hizzle-forms")]}],["hizzle-forms/textarea",{label:(0,n.__)("Other Details","hizzle-forms")}],["hizzle-forms/submit",{text:(0,n.__)("Send","hizzle-forms")}]]},{name:"hizzle-appointment-form",title:(0,n.__)("Appointment Form","hizzle-forms"),description:(0,n.__)("Add an Appointment booking form to your page","hizzle-forms"),keywords:[(0,n.__)("appointment","hizzle-forms"),(0,n.__)("event","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,n.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"tel",label:(0,n.__)("Email","hizzle-forms")}],["hizzle-forms/input",{validation:[{name:"required"}],type:"tel",label:(0,n.__)("Phone","hizzle-forms")}],["hizzle-forms/input",{type:"tel",label:(0,n.__)("Date","hizzle-forms"),validation:[{name:"required"}]}],{name:"hizzle-forms/radio",attributes:{label:(0,n.__)("Time","hizzle-forms"),validation:[{name:"required"}],isRadio:!0},innerBlocks:[{name:"hizzle-forms/radio-option",attributes:{option:(0,n.__)("Morning","hizzle-forms"),selected:!0}},{name:"hizzle-forms/radio-option",attributes:{option:(0,n.__)("Afternoon","hizzle-forms")}}]},["hizzle-forms/textarea",{label:(0,n.__)("Notes","hizzle-forms")}],["hizzle-forms/submit",{text:(0,n.__)("Book Appointment","hizzle-forms")}]]},{name:"hizzle-feedback-form",title:(0,n.__)("Feedback Form","hizzle-forms"),description:(0,n.__)("Add a Feedback form to your page","hizzle-forms"),keywords:[(0,n.__)("feedback","hizzle-forms"),(0,n.__)("event","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,n.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"tel",label:(0,n.__)("Email","hizzle-forms")}],{name:"hizzle-forms/radio",attributes:{label:(0,n.__)("Please rate our website","hizzle-forms"),validation:[{name:"required"}],isRadio:!0},innerBlocks:[{name:"hizzle-forms/radio-option",attributes:{option:(0,n.__)("1 - Very Bad","hizzle-forms"),selected:!0}},{name:"hizzle-forms/radio-option",attributes:{option:(0,n.__)("2 - Poor","hizzle-forms")}},{name:"hizzle-forms/radio-option",attributes:{option:(0,n.__)("3 - Average","hizzle-forms")}},{name:"hizzle-forms/radio-option",attributes:{option:(0,n.__)("4 - Good","hizzle-forms")}},{name:"hizzle-forms/radio-option",attributes:{option:(0,n.__)("5 - Excellent","hizzle-forms")}}]},["hizzle-forms/textarea",{label:(0,n.__)("How could we improve?","hizzle-forms")}],["hizzle-forms/submit",{text:(0,n.__)("Send Feedback","hizzle-forms")}]]}];d.forEach((e=>{var t;e.attributes={emails:[{email:"{admin_email}",subject:(0,n.__)("New Response: Contact Form","hizzle-forms"),message:(0,n.__)("You have received a new response to your contact form. \n\nHere are the details:\n\n{response_fields}\n\nThank you,\n{site_title}\n\n<hr>\nURL: {current_url} \n{user_ip}\nIP Address: {user_ip}\nUser Agent: {user_agent}\nTime: {current_date} at {current_time}","hizzle-forms"),sender_name:"{site_title}",reply_to:"{email}",active:!0},{email:"{email}",subject:(0,n.__)("Thank you for contacting us","hizzle-forms"),message:(0,n.__)("Thank you for contacting us. We will be in touch with you shortly.\n\nHere are the details of your message:\n\n{response_fields}\n\nThank you,\n{site_title}\n\n<hr>\nURL: {current_url} \nIP Address: {user_ip}\nUser Agent: {user_agent}\nTime: {current_date} at {current_time}","hizzle-forms"),sender_name:"{site_title}",reply_to:"{admin_email}",active:!0}],action:"message",redirect:"",message:(0,n.__)("Thank you for contacting us. We will be in touch with you shortly.","hizzle-forms"),title:e.title},e.category="hizzle-forms",e.icon=f,e.example={attributes:{...e.attributes},innerBlocks:(t=e.innerBlocks,t.map((e=>{if(!Array.isArray(e))return e;let[t,r,i]=e;return r=r?{...r}:{},i=i?[...i]:[],{name:t,attributes:r,innerBlocks:i}})))},e.isActive||(e.isActive=["title"])}));const p=d,b=window.wp.blocks;function g(e,t){0!==e.indexOf("hizzle-forms/")&&(e="hizzle-forms/"+e),"string"==typeof t.icon&&(t.icon={src:t.icon,foreground:"#AA00FF"}),(0,b.registerBlockType)(e,t)}const y=window.wp.data,v=window.wp.apiFetch;var C=r.n(v);g("hizzle-forms/submit",{apiVersion:2,title:(0,n.__)("Submit Button","hizzle-forms"),description:(0,n.__)("A button to submit the form.","hizzle-forms"),icon:"button",category:"hizzle-forms",parent:["hizzle-forms/form"],attributes:{text:{type:"string",source:"html",selector:"button",default:(0,n.__)("Submit","hizzle-forms")},backgroundColor:{type:"string"},textColor:{type:"string"},gradient:{type:"string"}},supports:{anchor:!0,align:!1,alignWide:!1,color:{__experimentalSkipSerialization:!0,gradients:!0,__experimentalDefaultControls:{background:!0,text:!0}},typography:{fontSize:!0,lineHeight:!0,__experimentalFontFamily:!0,__experimentalFontWeight:!0,__experimentalFontStyle:!0,__experimentalTextTransform:!0,__experimentalTextDecoration:!0,__experimentalLetterSpacing:!0,__experimentalDefaultControls:{fontSize:!0}},reusable:!1,shadow:!0,spacing:{__experimentalSkipSerialization:!0,padding:["horizontal","vertical"],__experimentalDefaultControls:{padding:!0}},__experimentalBorder:{color:!0,radius:!0,style:!0,width:!0,__experimentalSkipSerialization:!0,__experimentalDefaultControls:{color:!0,radius:!0,style:!0,width:!0}},__experimentalSelector:".wp-block-hizzle-forms-submit button"},edit:({attributes:e,setAttributes:t})=>{const{text:r}=e,l=(0,o.useBlockProps)({className:"hizzle-forms__submit-button"}),a=(0,o.__experimentalUseBorderProps)(e),m=(0,o.__experimentalUseColorProps)(e),z=(0,o.__experimentalGetSpacingClassesAndStyles)(e);return(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",{...l},(0,i.createElement)(o.RichText,{"aria-label":(0,n.__)("Button text"),placeholder:(0,n.__)("Add button text…"),value:r,onChange:e=>{t({text:e.replace(/<\/?a[^>]*>/g,"")})},withoutInteractiveFormatting:!0,className:s()("button btn",m.className,a.className,(0,o.__experimentalGetElementClassName)("button")),style:{...a.style,...m.style,...z.style},identifier:"text"})))},save:({attributes:e})=>{const{text:t}=e,r=o.useBlockProps.save({className:"hizzle-forms__submit-button"}),l=(0,o.__experimentalGetBorderClassesAndStyles)(e),a=(0,o.__experimentalGetColorClassesAndStyles)(e),m=(0,o.__experimentalGetSpacingClassesAndStyles)(e),z=s()("button btn",a.className,l.className,(0,o.__experimentalGetElementClassName)("button")),c={...l.style,...a.style,...m.style};return(0,i.createElement)("div",{...r},(0,i.createElement)(o.RichText.Content,{tagName:"button",className:z,type:"submit",style:c,value:t||(0,n.__)("Submit","hizzle-forms")}))}});const{name:x}=t;function w(t){const{attributes:r,innerBlocks:i,name:o}=t,l={name:o,attributes:r};return!!o.startsWith("hizzle-forms/")&&(Array.isArray(i)&&i.length?l.innerBlocks=(0,e.compact)(i.map(w)):l.innerBlocks=[],l)}function k(e){let t=[];return e.forEach((e=>{"hizzle-forms/form"===e.name?t.push(w(e)):Array.isArray(e.innerBlocks)&&e.innerBlocks.length&&(t=t.concat(k(e.innerBlocks)))})),t}g(x,{edit:function({attributes:e,setAttributes:t,clientId:r}){const{emails:a,action:s,redirect:c,message:f,title:d,instanceID:p}=e;(0,m.useEffect)((()=>{p||t({instanceID:r})}),[]);const b=(0,o.useInnerBlocksProps)((0,o.useBlockProps)({className:"hizzle-forms"}),{allowedBlocks:h,template:u});return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(o.InspectorControls,null,(0,i.createElement)(l.PanelBody,{title:(0,n.__)("Form Settings","hizzle-forms")},(0,i.createElement)(l.TextControl,{label:(0,n.__)("Form Name","hizzle-forms"),value:d,placeholder:(0,n.__)("Contact Form.","hizzle-forms"),onChange:e=>t({title:e})})),(0,i.createElement)(l.PanelBody,{title:(0,n.__)("Submission Settings","hizzle-forms"),initialOpen:!1},(0,i.createElement)(i.Fragment,null,(0,i.createElement)(z,null,(0,n.__)("Customize the view after form submission:","hizzle-forms")),(0,i.createElement)(l.SelectControl,{label:(0,n.__)("On Submission","hizzle-forms"),value:s,options:[{label:(0,n.__)("Show a success message","hizzle-forms"),value:"message"},{label:(0,n.__)("Redirect the user","hizzle-forms"),value:"redirect"}],onChange:e=>t({customThankyou:e})}),"message"===s&&(0,i.createElement)(l.TextareaControl,{label:(0,n.__)("Success Message","hizzle-forms"),value:f,placeholder:(0,n.__)("Thank you for contacting us. We will be in touch with you shortly.","hizzle-forms"),onChange:e=>t({message:e})}),"redirect"===s&&(0,i.createElement)(l.BaseControl,{label:(0,n.__)("Redirect URL","hizzle-forms"),id:`hizzle-forms-${instanceId}-thankyou-url`},(0,i.createElement)(o.URLInput,{id:`hizzle-forms-${instanceId}-thankyou-url`,value:c,className:"hizzle-forms__thankyou-redirect-url",onChange:e=>t({redirect:e})})))),(0,i.createElement)(_,{emails:a,setAttributes:t})),(0,i.createElement)("div",{...b}))},save:({attributes:e})=>{const t={"data-instance-id":e.instanceID||"",method:"POST"};return(0,i.createElement)("form",{...o.useBlockProps.save(t),novalidate:!0},(0,i.createElement)(o.InnerBlocks.Content,null),(0,i.createElement)("div",{className:"hizzle-forms__form-error"}),(0,i.createElement)("div",{className:"hizzle-forms-spinner__wrapper"},(0,i.createElement)("div",{className:"hizzle-forms-spinner"})))},variations:p,icon:f});let E=!1;(0,y.subscribe)((()=>{if(E)return;if(!(0,y.select)("core/block-editor"))return;const e={};if((0,y.select)("core/editor")){const{isSavingPost:t,isAutosavingPost:r,getCurrentPostId:i}=(0,y.select)("core/editor");if(!t()||r())return;e.post_id=i()}else{if(!(0,y.select)("core/edit-site"))return;{const{isSaveViewOpened:t,getEditedPostId:r}=(0,y.select)("core/editor");if(!t())return;e.mode="site",e.template=r()}}const t=k((0,y.select)("core/block-editor").getBlocks());E=!0,C()({path:"/hizzle/v1/forms/sync",method:"POST",data:{...e,forms:t}}).finally((()=>{E=!1}))}))})()})();