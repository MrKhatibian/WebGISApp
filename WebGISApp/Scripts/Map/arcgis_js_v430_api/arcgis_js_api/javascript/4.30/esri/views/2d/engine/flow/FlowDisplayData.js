// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["../../../../core/Logger"],function(c){class d{constructor(a,b,e,f){this.state={name:"created"};this.flowStyle=a;this.extent=b;this.size=e;this.pixelRatio=f}async load(){const a=new AbortController;this.state={name:"loading",abortController:a};this.state={name:"loaded",resources:await this.flowStyle.load({extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},a.signal)}}attach(a){if("loaded"!==this.state.name)c.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");
else{var b=this.state.resources;b.attach(a);this.state={name:"attached",resources:b}}}detach(){"loading"===this.state.name?(this.state.abortController.abort(),this.state={name:"detached"}):"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(a){if(!this.flowStyle.isCompatible(a.flowStyle)||!this.extent.equals(a.extent)||this.size[0]!==a.size[0]||this.size[1]!==a.size[1]||this.pixelRatio!==a.pixelRatio)return!1;this.flowStyle=a.flowStyle;return!0}}return d});