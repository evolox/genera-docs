"use strict";(self.webpackChunkgenera_docs=self.webpackChunkgenera_docs||[]).push([[794],{7978:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=o(4848),t=o(8453);const r={sidebar_position:4},i="Localization API",a={id:"localization",title:"Localization API",description:"Catalog sycnhronization",source:"@site/docs/localization.md",sourceDirName:".",slug:"/localization",permalink:"/genera-docs/localization",draft:!1,unlisted:!1,editUrl:"https://github.com/evolox/genera-docs/tree/main/docs/localization.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Try-On API",permalink:"/genera-docs/tryon"}},c={},d=[{value:"Catalog sycnhronization",id:"catalog-sycnhronization",level:2},{value:"Publish &amp; Update products",id:"publish--update-products",level:3},{value:"Getting product status",id:"getting-product-status",level:3},{value:"Subscribe for Update Webhook",id:"subscribe-for-update-webhook",level:3},{value:"Get Webhooks list",id:"get-webhooks-list",level:3},{value:"Remove Webhook",id:"remove-webhook",level:3},{value:"Webhooks payload",id:"webhooks-payload",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"localization-api",children:"Localization API"}),"\n",(0,s.jsx)(n.h2,{id:"catalog-sycnhronization",children:"Catalog sycnhronization"}),"\n",(0,s.jsx)(n.p,{children:"Set of API responsible for synchronizing the catalog with the Genera system and the Partner Brand."}),"\n",(0,s.jsx)(n.h3,{id:"publish--update-products",children:"Publish & Update products"}),"\n",(0,s.jsx)(n.p,{children:"API can accept multiple products with multiple images. Each image can be availble for try-on or localization processing"}),"\n",(0,s.jsxs)(n.p,{children:["API endpoint: ",(0,s.jsx)(n.code,{children:"POST https://api.genera.space/v1/{brandId}/catalog/sync"})]}),"\n",(0,s.jsx)(n.p,{children:"Request body example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "products": [\n    {\n        "id": "product_123",\n        "name": "Product 1",\n        "eanbled": true,\n        "images": [\n            {\n                "id": "image_123",\n                "url": "https://example.com/image1.png",\n                "tryOn": true,\n                "localization": true\n            },\n            {\n                "id": "image_124",\n                "url": "https://example.com/image2.png",\n                "tryOn": true,\n                "localization": true\n            },\n            {\n                "id": "image_125",\n                "url": "https://example.com/image2.png",\n                "tryOn": true,\n                "localization": true\n            }\n        ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "success": true\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"To update existing product, you can use the same endpoint with the same product id."}),"\n",(0,s.jsx)(n.h3,{id:"getting-product-status",children:"Getting product status"}),"\n",(0,s.jsx)(n.p,{children:'Processing of uploaded imags can take some time. If you need to check the status of specific product processing. You will get all statuses of the images for the product: "processing", "done" or "error".'}),"\n",(0,s.jsxs)(n.p,{children:["API endpoint: ",(0,s.jsx)(n.code,{children:"GET https://api.genera.space/v1/{brandId}/catalog/sync/{productId}"})]}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "id": "product_123",\n    "status": "processing",\n    "images": [\n        {\n            "id": "image_123",\n            "product_id": "product_123",\n            "status": "processing"\n        },\n        {\n            "id": "image_124",\n            "product_id": "product_123",\n            "status": "done",\n            "url": "https://example.com/image2.png"\n        },\n        {\n            "id": "image_125",\n            "product_id": "product_123",\n            "status": "error",\n            "error": "Human body is not recognized"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"subscribe-for-update-webhook",children:"Subscribe for Update Webhook"}),"\n",(0,s.jsx)(n.p,{children:"You can subscribe for processing updates using webhooks.\nTo setup new webhook for updates retrival, you can use the next API endpoint:"}),"\n",(0,s.jsxs)(n.p,{children:["API endpoint: ",(0,s.jsx)(n.code,{children:"POST https://api.genera.space/v1/{brandId}/webhook"})]}),"\n",(0,s.jsx)(n.p,{children:"Request body example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "type": "processing",\n    "url": "https://example.com/webhook"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In response you will get the id of the created webhook:"}),"\n",(0,s.jsx)(n.p,{children:"Response example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "id": "webhook_123"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"get-webhooks-list",children:"Get Webhooks list"}),"\n",(0,s.jsx)(n.p,{children:"To get the list of all webhooks, you can use the next endpoint:"}),"\n",(0,s.jsxs)(n.p,{children:["API endpoint: ",(0,s.jsx)(n.code,{children:"GET https://api.genera.space/v1/{brandId}/webhook"})]}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "webhooks": [\n        {\n            "id": "webhook_123",\n            "type": "processing",\n            "url": "https://example.com/webhook"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"remove-webhook",children:"Remove Webhook"}),"\n",(0,s.jsx)(n.p,{children:"To remove a webhook, you can use the next endpoint:"}),"\n",(0,s.jsxs)(n.p,{children:["API endpoint: ",(0,s.jsx)(n.code,{children:"DELETE https://api.genera.space/v1/{brandId}/webhook/{webhookId}"})]}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "success": true\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"webhooks-payload",children:"Webhooks payload"}),"\n",(0,s.jsx)(n.p,{children:"Once the processing of the single image is done, you will receive a GET request to registered webhook URL."}),"\n",(0,s.jsx)(n.p,{children:"Example of the webhook payload for successfully processed single product image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "type": "processing",\n    "brandId": "brand_123",\n    "productId": "product_123",\n    "imageId": "image_123",\n    "status": "done",\n    "url": "https://example.com/image1.png"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Status can be ",(0,s.jsx)(n.code,{children:"done"})," or ",(0,s.jsx)(n.code,{children:"error"}),". In case of error, you will receive an additional field ",(0,s.jsx)(n.code,{children:"error"})," with the error message."]}),"\n",(0,s.jsx)(n.p,{children:"Example of the webhook payload for the error:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "type": "processing",\n    "brandId": "brand_123",\n    "productId": "product_123",\n    "imageId": "image_123",\n    "status": "error",\n    "error": "Human body is not recognized"\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var s=o(6540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);