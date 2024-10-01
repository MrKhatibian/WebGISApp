"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5268],{28491:(e,t,r)=>{r.d(t,{D:()=>G,b:()=>V});var o=r(46686),i=r(32680),n=r(49255),a=r(76591),s=r(76597),l=r(82991),c=r(96336),d=r(10764),u=r(39014),h=r(53466),m=r(92700),f=r(72824),p=r(54154),v=r(30815),g=r(77695),_=r(3452),x=r(8881),T=r(98619),b=r(51343),A=r(62602),y=r(22393),E=r(59469),S=r(25618),M=r(51406),w=r(986),C=r(35093),O=r(52919),R=r(37077),I=r(20693),N=r(33079),P=r(71988),L=r(20304),H=r(2597),D=r(85977),B=r(63761),F=r(14327),z=r(46540);function V(e){const t=new D.N5,{vertex:r,fragment:V,varyings:G}=t;if((0,I.NB)(r,e),t.include(d.I),G.add("vpos","vec3"),t.include(w.A,e),t.include(l.BK,e),t.include(p.G,e),t.include(M.q2,e),e.output===n.V.Color){t.include(M.Sx,e),t.include(M.MU,e),t.include(M.O1,e),t.include(M.QM,e),(0,I.yu)(r,e),t.include(c.Y,e),t.include(s.d,e);const n=e.normalType===c.W.Attribute||e.normalType===c.W.Compressed;n&&e.offsetBackfaces&&t.include(i.M),t.include(g.W,e),t.include(f.Mh,e),e.instancedColor&&t.attributes.add(z.r.INSTANCECOLOR,"vec4"),G.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(o.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new P.E("externalColor",(e=>e.externalColor))),G.add("vcolorExt","vec4"),e.multipassEnabled&&G.add("depth","float"),r.code.add(H.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${H.H.float(C.y)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${n?H.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${n&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),t.include(a.HQ,e),t.include(x.kA,e),t.include(_.n,e),t.include(O.S,e),t.include(e.instancedDoublePrecision?S.G:S.Bz,e),t.include(b.Q,e),(0,I.yu)(V,e),V.uniforms.add(r.uniforms.get("localOrigin"),new N.t("ambient",(e=>e.ambient)),new N.t("diffuse",(e=>e.diffuse)),new L.m("opacity",(e=>e.opacity)),new L.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&V.uniforms.add(new B.N("tex",(e=>e.texture))),t.include(E._Z,e),t.include(y.c,e),V.include(R.N),t.include(A.r,e),(0,x.a8)(V),(0,x.eU)(V),(0,T.O4)(V),e.transparencyPassType===F.y.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),V.code.add(H.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?H.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?H.H`colorUV`:H.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.W.ScreenDerivative?H.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:H.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===E.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?H.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:H.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?H.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?H.H`normalUV`:"vuv0"});`:H.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?H.H`normalize(posWorld);`:H.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?H.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===E.A9.Normal||e.pbrMode===E.A9.Schematic?H.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?H.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:H.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===F.y.ColorAlpha?H.H`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return t.include(v.E,e),t}const G=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:"Module"}))},57323:(e,t,r)=>{r.d(t,{R:()=>B,b:()=>D});var o=r(46686),i=r(32680),n=r(49255),a=r(76591),s=r(76597),l=r(82991),c=r(96336),d=r(10764),u=r(39014),h=r(53466),m=r(92700),f=r(54154),p=r(30815),v=r(3452),g=r(8881),_=r(98619),x=r(51343),T=r(22393),b=r(59469),A=r(25618),y=r(986),E=r(35093),S=r(52919),M=r(37077),w=r(20693),C=r(33079),O=r(71988),R=r(20304),I=r(2597),N=r(85977),P=r(63761),L=r(14327),H=r(46540);function D(e){const t=new N.N5,{vertex:r,fragment:D,varyings:B}=t;return(0,w.NB)(r,e),t.include(d.I),B.add("vpos","vec3"),t.include(y.A,e),t.include(l.BK,e),t.include(f.G,e),e.output===n.V.Color&&((0,w.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),e.offsetBackfaces&&t.include(i.M),e.instancedColor&&t.attributes.add(H.r.INSTANCECOLOR,"vec4"),B.add("vNormalWorld","vec3"),B.add("localvpos","vec3"),e.multipassEnabled&&B.add("depth","float"),t.include(h.U,e),t.include(o.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new O.E("externalColor",(e=>e.externalColor))),B.add("vcolorExt","vec4"),r.code.add(I.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${I.H.float(E.y)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?I.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.V.Color&&(t.include(a.HQ,e),t.include(g.kA,e),t.include(v.n,e),t.include(S.S,e),t.include(e.instancedDoublePrecision?A.G:A.Bz,e),t.include(x.Q,e),(0,w.yu)(t.fragment,e),(0,_.Gc)(D),(0,g.a8)(D),(0,g.eU)(D),D.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new C.t("ambient",(e=>e.ambient)),new C.t("diffuse",(e=>e.diffuse)),new R.m("opacity",(e=>e.opacity)),new R.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&D.uniforms.add(new P.N("tex",(e=>e.texture))),t.include(b._Z,e),t.include(T.c,e),D.include(M.N),e.transparencyPassType===L.y.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),(0,_.O4)(D),D.code.add(I.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?I.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?I.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?I.H`colorUV`:I.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:I.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?I.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:I.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?I.H`albedo = mix(albedo, vec3(1), 0.9);`:I.H``}
        ${I.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.A9.Normal||e.pbrMode===b.A9.Schematic?e.spherical?I.H`vec3 normalGround = normalize(vpos + localOrigin);`:I.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:I.H``}
        ${e.pbrMode===b.A9.Normal||e.pbrMode===b.A9.Schematic?I.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?I.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:I.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===L.y.ColorAlpha?I.H`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `)),t.include(p.E,e),t}const B=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},15581:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>f,g:()=>p});var o=r(37585),i=r(48163),n=r(82048),a=r(52540),s=r(34845),l=r(47286),c=r(20304),d=r(2597),u=r(85977),h=r(63761);const m=16;function f(){const e=new u.N5,t=e.fragment;return e.include(n.c),e.include(s.Ir),t.include(a.E),t.uniforms.add(new c.m("radius",((e,t)=>p(t.camera)))).code.add(d.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new c.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new l.G("rnmScale",((e,t)=>(0,o.hZ)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.m("intensity",(e=>e.intensity)),new l.G("screenSize",((e,t)=>(0,o.hZ)(v,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(d.H`
    void main(void) {
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.H.int(m)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.H.int(m)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,i.vt)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:p},Symbol.toStringTag,{value:"Module"}))},95774:(e,t,r)=>{r.d(t,{S:()=>f,b:()=>m});var o=r(38954),i=r(82048),n=r(52540),a=r(68259),s=r(20304),l=r(2597),c=r(85977),d=r(15976),u=r(63761);const h=4;function m(){const e=new c.N5,t=e.fragment;e.include(i.c);const r=(h+1)/2,m=1/(2*r*r);return t.include(n.E),t.uniforms.add(new u.N("depthMap",(e=>e.depthTexture)),new d.o("tex",(e=>e.colorTexture)),new a.t("blurSize",(e=>e.blurSize)),new s.m("projScale",((e,t)=>{const r=(0,o.p)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale}))),t.code.add(l.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.H.float(m)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(l.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${l.H.int(h)}; r <= ${l.H.int(h)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const f=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},76412:(e,t,r)=>{r.d(t,{a:()=>_,b:()=>x,c:()=>p,f:()=>b,g:()=>T,j:()=>M,n:()=>P}),r(44208),r(53966);var o=r(34727),i=r(58083),n=r(38954),a=r(51850),s=r(87317),l=r(91829),c=r(34304),d=r(88582),u=r(71351),h=r(44280),m=r(32114);const f=p();function p(){return(0,l.vt)()}const v=s.e,g=s.e;function _(e,t){return(0,s.c)(t,e)}function x(e){return e[3]}function T(e){return e}function b(e,t,r,o){return(0,l.fA)(e,t,r,o)}function A(e,t,r){if(null==t)return!1;if(!E(e,t,y))return!1;let{t0:o,t1:i}=y;if((o<0||i<o&&i>0)&&(o=i),o<0)return!1;if(r){const{origin:e,direction:i}=t;r[0]=e[0]+i[0]*o,r[1]=e[1]+i[1]*o,r[2]=e[2]+i[2]*o}return!0}const y={t0:0,t1:0};function E(e,t,r){const{origin:o,direction:i}=t,n=S;n[0]=o[0]-e[0],n[1]=o[1]-e[1],n[2]=o[2]-e[2];const a=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===a)return!1;const s=2*(i[0]*n[0]+i[1]*n[1]+i[2]*n[2]),l=s*s-4*a*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-e[3]*e[3]);if(l<0)return!1;const c=Math.sqrt(l);return r.t0=(-s-c)/(2*a),r.t1=(-s+c)/(2*a),!0}const S=(0,a.vt)();function M(e,t){return A(e,t,null)}function w(e,t,r){const o=m.rq.get(),a=m.Rc.get();(0,n.b)(o,t.origin,t.direction);const s=x(e);(0,n.b)(r,o,t.origin),(0,n.j)(r,r,1/(0,n.l)(r)*s);const l=O(e,t.origin),c=(0,h.g7)(t.origin,r);return(0,i.$0)(a,c+l,o),(0,n.h)(r,r,a),r}function C(e,t,r){const o=(0,n.f)(m.rq.get(),t,e),i=(0,n.j)(m.rq.get(),o,e[3]/(0,n.l)(o));return(0,n.g)(r,i,e)}function O(e,t){const r=(0,n.f)(m.rq.get(),t,e),i=(0,n.l)(r),a=x(e),s=a+Math.abs(a-i);return(0,o.XM)(a/s)}const R=(0,a.vt)();function I(e,t,r,i){const a=(0,n.f)(R,t,e);switch(r){case d._.X:{const e=(0,o.jU)(a,R)[2];return(0,n.s)(i,-Math.sin(e),Math.cos(e),0)}case d._.Y:{const e=(0,o.jU)(a,R),t=e[1],r=e[2],s=Math.sin(t);return(0,n.s)(i,-s*Math.cos(r),-s*Math.sin(r),Math.cos(t))}case d._.Z:return(0,n.n)(i,a);default:return}}function N(e,t){const r=(0,n.f)(L,t,e);return(0,n.l)(r)-e[3]}function P(e,t){const r=(0,n.a)(e,t),o=x(e);return r<=o*o}const L=(0,a.vt)(),H=p();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:f,altitudeAt:N,angleToSilhouette:O,axisAt:I,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return A(e,t,r)?r:((0,u.oC)(t,e,r),C(e,r,r))},closestPointOnSilhouette:w,containsPoint:P,copy:_,create:p,distanceToSilhouette:function(e,t){const r=(0,n.f)(m.rq.get(),t,e),o=(0,n.q)(r),i=e[3]*e[3];return Math.sqrt(Math.abs(o-i))},elevate:function(e,t,r){return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),r[3]=e[3]+t,r},equals:g,exactEquals:v,fromCenterAndRadius:function(e,t){return(0,l.fA)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:b,getCenter:T,getRadius:x,intersectLine:function(e,t,r){const o=(0,u.Cr)(t,r);if(!E(e,o,y))return[];const{origin:i,direction:s}=o,{t0:l,t1:d}=y,h=t=>{const r=(0,a.vt)();return(0,n.r)(r,i,s,t),C(e,r,r)};return Math.abs(l-d)<(0,c.FD)()?[h(l)]:[h(l),h(d)]},intersectRay:A,intersectRayClosestSilhouette:function(e,t,r){if(A(e,t,r))return r;const o=w(e,t,m.rq.get());return(0,n.g)(r,t.origin,(0,n.j)(m.rq.get(),t.direction,(0,n.p)(t.origin,o)/(0,n.l)(t.direction))),r},intersectsRay:M,projectPoint:C,setAltitudeAt:function(e,t,r,o){const i=N(e,t),a=I(e,t,d._.Z,L),s=(0,n.j)(L,a,r-i);return(0,n.g)(o,t,s)},setExtent:function(e,t,r){return e!==r&&_(e,r),r},tmpSphere:H,union:function(e,t,r=(0,l.vt)()){const o=(0,n.p)(e,t),i=e[3],a=t[3];return o+a<i?((0,s.c)(r,e),r):o+i<a?((0,s.c)(r,t),r):((0,n.o)(r,e,t,(o+a-i)/(2*o)),r[3]=(o+i+a)/2,r)},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},73354:(e,t,r)=>{function o(e,t,r){i(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function i(e,t,r,o=3,i=o){if(e.length/o!==Math.ceil(t.length/i))return e;const n=e.length/o,a=r[0],s=r[1],l=r[2],c=r[4],d=r[5],u=r[6],h=r[8],m=r[9],f=r[10],p=r[12],v=r[13],g=r[14];let _=0,x=0;for(let r=0;r<n;r++){const r=t[_],n=t[_+1],T=t[_+2];e[x]=a*r+c*n+h*T+p,e[x+1]=s*r+d*n+m*T+v,e[x+2]=l*r+u*n+f*T+g,_+=i,x+=o}return e}function n(e,t,r){a(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function a(e,t,r,o=3,i=o){if(e.length/o!==Math.ceil(t.length/i))return;const n=e.length/o,a=r[0],s=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],m=r[7],f=r[8];let p=0,v=0;for(let r=0;r<n;r++){const r=t[p],n=t[p+1],g=t[p+2];e[v]=a*r+c*n+h*g,e[v+1]=s*r+d*n+m*g,e[v+2]=l*r+u*n+f*g,p+=i,v+=o}}function s(e,t,r){l(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function l(e,t,r,o=3,i=o){const n=Math.min(e.length/o,t.length/i);let a=0,s=0;for(let l=0;l<n;l++)e[s]=r*t[a],e[s+1]=r*t[a+1],e[s+2]=r*t[a+2],a+=i,s+=o;return e}function c(e,t,r,o=3,i=o){const n=e.length/o;if(n!==Math.ceil(t.length/i))return e;let a=0,s=0;for(let l=0;l<n;l++)e[s]=t[a]+r[0],e[s+1]=t[a+1]+r[1],e[s+2]=t[a+2]+r[2],a+=i,s+=o;return e}function d(e,t){u(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function u(e,t,r=3,o=r){const i=Math.min(e.length/r,t.length/o);let n=0,a=0;for(let s=0;s<i;s++){const i=t[n],s=t[n+1],l=t[n+2],c=i*i+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*i,e[a+1]=t*s,e[a+2]=t*l}n+=o,a+=r}}r.d(t,{a:()=>i,b:()=>c,c:()=>n,d:()=>o,e:()=>d,f:()=>s,n:()=>u,s:()=>l,t:()=>a}),r(44208),r(53966),Object.freeze(Object.defineProperty({__proto__:null,normalize:u,normalizeView:d,scale:l,scaleView:s,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let e=0;e<o;e++)i[c]=a[l]>>r,i[c+1]=a[l+1]>>r,i[c+2]=a[l+2]>>r,l+=s,c+=n},transformMat3:a,transformMat3View:n,transformMat4:i,transformMat4View:o,translate:c},Symbol.toStringTag,{value:"Module"}))},65686:(e,t,r)=>{r.d(t,{a:()=>i,b:()=>s,n:()=>a,s:()=>l,t:()=>n}),r(44208);var o=r(53966);function i(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(e,t,r,o=4,i=o){if(e.length/o!=t.length/i)return;const n=e.length/o,a=r[0],s=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],m=r[7],f=r[8];let p=0,v=0;for(let r=0;r<n;r++){const r=t[p],n=t[p+1],g=t[p+2],_=t[p+3];e[v]=a*r+c*n+h*g,e[v+1]=s*r+d*n+m*g,e[v+2]=l*r+u*n+f*g,e[v+3]=_,p+=i,v+=o}}function a(e,t){const r=Math.min(e.count,t.count),o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*i,r=e*a,s=n[r],l=n[r+1],c=n[r+2],d=s*s+l*l+c*c;if(d>0){const e=1/Math.sqrt(d);o[t]=e*s,o[t+1]=e*l,o[t+2]=e*c}}}function s(e,t,r){l(e.typedBuffer,t,r,e.typedBufferStride)}function l(e,t,r,o=4){const i=Math.min(e.length/o,t.count),n=t.typedBuffer,a=t.typedBufferStride;let s=0,l=0;for(let t=0;t<i;t++)e[l]=r*n[s],e[l+1]=r*n[s+1],e[l+2]=r*n[s+2],e[l+3]=r*n[s+3],s+=a,l+=o}Object.freeze(Object.defineProperty({__proto__:null,normalize:a,scale:l,scaleView:s,transformMat3:n,transformMat3View:i,transformMat4:function(e,t,r,i=4,n=i){if(e.length/i!=t.length/n)return void o.A.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const a=e.length/i,s=r[0],l=r[1],c=r[2],d=r[3],u=r[4],h=r[5],m=r[6],f=r[7],p=r[8],v=r[9],g=r[10],_=r[11],x=r[12],T=r[13],b=r[14],A=r[15];let y=0,E=0;for(let r=0;r<a;r++){const r=t[y],o=t[y+1],a=t[y+2],S=t[y+3];e[E]=s*r+u*o+p*a+x*S,e[E+1]=l*r+h*o+v*a+T*S,e[E+2]=c*r+m*o+g*a+b*S,e[E+3]=d*r+f*o+_*a+A*S,y+=n,E+=i}},transformMat4View:function(e,t,r){if(e.count!==t.count)return;const o=e.count,i=r[0],n=r[1],a=r[2],s=r[3],l=r[4],c=r[5],d=r[6],u=r[7],h=r[8],m=r[9],f=r[10],p=r[11],v=r[12],g=r[13],_=r[14],x=r[15],T=e.typedBuffer,b=e.typedBufferStride,A=t.typedBuffer,y=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*b,r=e*y,o=A[r],E=A[r+1],S=A[r+2],M=A[r+3];T[t]=i*o+l*E+h*S+v*M,T[t+1]=n*o+c*E+m*S+g*M,T[t+2]=a*o+d*E+f*S+_*M,T[t+3]=s*o+u*E+p*S+x*M}}},Symbol.toStringTag,{value:"Module"}))},4341:(e,t,r)=>{r.d(t,{I:()=>i});var o=r(26390);class i{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,o.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*n);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,n));e++)this._items.push(this._allocator())}}const n=1024},46140:(e,t,r)=>{r.d(t,{R:()=>i});var o=r(49186);let i=class e{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new o.A(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new e(this.major,this.minor,this._context)}static parse(t,r=""){const[i,n]=t.split("."),a=/^\s*\d+\s*$/;if(!i?.match||!a.test(i))throw new o.A((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!n?.match||!a.test(n))throw new o.A((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const s=parseInt(i,10),l=parseInt(n,10);return new e(s,l,r)}}},61473:(e,t,r)=>{function o(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function i(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{EM:()=>i,b5:()=>o});const n=/^devext\.arcgis\.com$/,a=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,l=/^[\w-]*\.mapsqa\.arcgis\.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,n,a,/^jsapps\.esri\.com$/,s,l]},11964:(e,t,r)=>{r.d(t,{Cr:()=>c,_I:()=>d,vt:()=>l});var o=r(34727),i=r(4341),n=r(38954),a=r(51850),s=r(32114);function l(e){return e?{origin:(0,a.o8)(e.origin),vector:(0,a.o8)(e.vector)}:{origin:(0,a.vt)(),vector:(0,a.vt)()}}function c(e,t,r=l()){return(0,n.c)(r.origin,e),(0,n.f)(r.vector,t,e),r}function d(e,t,r){return function(e,t,r,i,a){const{vector:l,origin:c}=e,d=(0,n.f)(s.rq.get(),t,c),u=(0,n.m)(l,d)/(0,n.q)(l);return(0,n.j)(a,l,(0,o.qE)(u,0,1)),(0,n.g)(a,a,e.origin)}(e,t,0,0,r)}(0,a.vt)(),(0,a.vt)(),new i.I((()=>l()))},71351:(e,t,r)=>{r.d(t,{Cr:()=>c,LV:()=>l,oC:()=>d,vt:()=>a}),r(4576);var o=r(4341),i=r(38954),n=r(51850);function a(e){return e?s((0,n.o8)(e.origin),(0,n.o8)(e.direction)):s((0,n.vt)(),(0,n.vt)())}function s(e,t){return{origin:e,direction:t}}function l(e,t){const r=u.get();return r.origin=e,r.direction=t,r}function c(e,t,r=a()){return(0,i.c)(r.origin,e),(0,i.f)(r.direction,t,e),r}function d(e,t,r){const o=(0,i.m)(e.direction,(0,i.f)(r,t,e.origin));return(0,i.g)(r,e.origin,(0,i.j)(r,e.direction,o)),r}r(32114);const u=new o.I((()=>a()));(0,n.vt)()},55268:(e,t,r)=>{r.d(t,{fetch:()=>Mr});var o=r(61473),i=r(34727),n=r(77690),a=r(29242),s=r(58083),l=r(9093),c=r(48163),d=r(38954),u=r(51850),h=r(70328),m=r(11868),f=r(13030),p=r(73354),v=r(65686),g=r(43609),_=r(51737),x=r(78358),T=r(21015),b=r(4399),A=r(84498),y=r(51530),E=r(88340);function S(e){if(null==e)return null;const t=null!=e.offset?e.offset:E.uY,r=null!=e.rotation?e.rotation:0,o=null!=e.scale?e.scale:E.Un,i=(0,a.fA)(1,0,0,0,1,0,t[0],t[1],1),s=(0,a.fA)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,a.fA)(o[0],0,0,0,o[1],0,0,0,1),c=(0,a.vt)();return(0,n.lw)(c,s,l),(0,n.lw)(c,i,c),c}class M{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class w{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new M,this.numberOfVertices=0}}var C=r(78888),O=r(60999),R=r(86805),I=r(49186),N=r(53966);class P{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const o=this._outer.get(e);o?o.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}var L=r(74887),H=r(46140),D=r(97146);async function B(e,t){const{data:r}=await(0,C.A)(e,{responseType:"image",...t});return r}var F=r(46610),z=r(89192),V=r(34275);function G(e){if(e.length<V.y9)return Array.from(e);if((0,V.cy)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,V.jq)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var W=r(3694),U=r(620);class j{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,U.vA)(e.length>=1),(0,U.vA)(3===r.size||4===r.size);const{data:o,size:i,indices:n}=r;(0,U.vA)(n.length%this._numIndexPerPrimitive==0),(0,U.vA)(n.length>=e.length*this._numIndexPerPrimitive);const a=e.length;let s=i*n[this._numIndexPerPrimitive*e[0]];q.clear(),q.push(s);const l=(0,u.fA)(o[s],o[s+1],o[s+2]),c=(0,u.o8)(l);for(let t=0;t<a;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=i*n[r+e],q.push(s);let t=o[s];l[0]=Math.min(t,l[0]),c[0]=Math.max(t,c[0]),t=o[s+1],l[1]=Math.min(t,l[1]),c[1]=Math.max(t,c[1]),t=o[s+2],l[2]=Math.min(t,l[2]),c[2]=Math.max(t,c[2])}}this.bbMin=l,this.bbMax=c;const h=(0,d.o)((0,u.vt)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(c[0]-l[0],c[1]-l[1]),c[2]-l[2]);let m=this.radius*this.radius;for(let e=0;e<q.length;++e){s=q.at(e);const t=o[s]-h[0],r=o[s+1]-h[1],i=o[s+2]-h[2],n=t*t+r*r+i*i;if(n<=m)continue;const a=Math.sqrt(n),l=.5*(a-this.radius);this.radius=this.radius+l,m=this.radius*this.radius;const c=l/a;h[0]+=t*c,h[1]+=r*c,h[2]+=i*c}this.center=h,q.clear()}getChildren(){if(this._children||(0,d.a)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,d.o)((0,u.vt)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),o=new Array(8);for(let e=0;e<8;++e)o[e]=0;const{data:i,size:n,indices:a}=this.position;for(let s=0;s<t;++s){let t=0;const l=this._numIndexPerPrimitive*this.primitiveIndices[s];let c=n*a[l],d=i[c],u=i[c+1],h=i[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=n*a[l+e];const t=i[c],r=i[c+1],o=i[c+2];t<d&&(d=t),r<u&&(u=r),o<h&&(h=o)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[s]=t,++o[t]}let s=0;for(let e=0;e<8;++e)o[e]>0&&++s;if(s<2)return;const l=new Array(8);for(let e=0;e<8;++e)l[e]=o[e]>0?new Uint32Array(o[e]):void 0;for(let e=0;e<8;++e)o[e]=0;for(let e=0;e<t;++e){const t=r[e];l[t][o[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==l[e]&&this._children.push(new j(l[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){q.prune()}}const q=new W.A({deallocator:null});var k=r(69720),$=r(96672),Y=r(4341),X=r(11964);function Z(e,t,r){return(0,d.f)(J,t,e),(0,d.f)(K,r,e),.5*(0,d.l)((0,d.b)(J,J,K))}r(32114),new Y.I(X.vt),new Y.I((()=>{return e?{p0:(0,u.o8)(e.p0),p1:(0,u.o8)(e.p1),p2:(0,u.o8)(e.p2)}:{p0:(0,u.vt)(),p1:(0,u.vt)(),p2:(0,u.vt)()};var e}));const J=(0,u.vt)(),K=(0,u.vt)(),Q=(0,u.vt)(),ee=(0,u.vt)(),te=(0,u.vt)(),re=(0,u.vt)();var oe=r(24326);class ie{constructor(e){this.channel=e,this.id=(0,oe.c)()}}var ne=r(46540);r(28449),(0,u.vt)(),new Float32Array(6);class ae extends k.J{constructor(e,t,r=null,o=$.X.Mesh,i=null,n=-1){super(),this.material=e,this.mapPositions=r,this.type=o,this.objectAndLayerIdColor=i,this.edgeIndicesLength=n,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[e,r]of t)this._attributes.set(e,{...r,indices:(0,D.Dg)(r.indices)}),e===ne.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(e).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new ae(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:G(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===$.X.Mesh?this._computeAttachmentOriginTriangles(e):this.type===$.X.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,d.h)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:o,indices:i}=e;(0,d.s)(t,0,0,0),(0,d.s)(re,0,0,0);let n=0,a=0;for(let e=0;e<i.length-2;e+=3){const s=i[e]*r,l=i[e+1]*r,c=i[e+2]*r;(0,d.s)(Q,o[s],o[s+1],o[s+2]),(0,d.s)(ee,o[l],o[l+1],o[l+2]),(0,d.s)(te,o[c],o[c+1],o[c+2]);const u=Z(Q,ee,te);u?((0,d.g)(Q,Q,ee),(0,d.g)(Q,Q,te),(0,d.j)(Q,Q,1/3*u),(0,d.g)(t,t,Q),n+=u):((0,d.g)(re,re,Q),(0,d.g)(re,re,ee),(0,d.g)(re,re,te),a+=3)}return!(0===a&&0===n||(0!==n?((0,d.j)(t,t,1/n),0):0===a||((0,d.j)(t,re,1/a),0)))}(this.attributes.get(ne.r.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(ne.r.POSITION);return function(e,t,r){if(!e)return!1;(0,d.s)(r,0,0,0),(0,d.s)(re,0,0,0);let o=0,i=0;const{size:n,data:a,indices:s}=e,l=s.length-1,c=l+(t?2:0);for(let e=0;e<c;e+=2){const t=e<l?e+1:0,c=s[e<l?e:l]*n,u=s[t]*n;Q[0]=a[c],Q[1]=a[c+1],Q[2]=a[c+2],ee[0]=a[u],ee[1]=a[u+1],ee[2]=a[u+2],(0,d.j)(Q,(0,d.g)(Q,Q,ee),.5);const h=(0,d.F)(Q,ee);h>0?((0,d.g)(r,r,(0,d.j)(Q,Q,h)),o+=h):0===o&&((0,d.g)(re,re,Q),i++)}return 0!==o?((0,d.j)(r,r,1/o),!0):0!==i&&((0,d.j)(r,re,1/i),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:o,indices:i}=e;(0,d.s)(t,0,0,0);let n=-1,a=0;for(let e=0;e<i.length;e++){const s=i[e]*r;n!==s&&(t[0]+=o[s],t[1]+=o[s+1],t[2]+=o[s+2],a++),n=s}return a>1&&(0,d.j)(t,t,1/a),a>0}(this.attributes.get(ne.r.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(ne.r.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===$.X.Mesh?3:1;(0,U.vA)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,D.tM)(e.indices.length/t);return new j(r,t,e)}get transformation(){return this._transformation??l.zK}set transformation(e){this._transformation=e&&e!==l.zK?(0,l.o8)(e):null}addHighlight(){const e=new ie(z.Mg.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}var se=r(44208),le=r(65529),ce=r(97768),de=r(84952),ue=r(56058),he=r(2741);let me;var fe,pe;(pe=fe||(fe={}))[pe.ETC1_RGB=0]="ETC1_RGB",pe[pe.ETC2_RGBA=1]="ETC2_RGBA",pe[pe.BC1_RGB=2]="BC1_RGB",pe[pe.BC3_RGBA=3]="BC3_RGBA",pe[pe.BC4_R=4]="BC4_R",pe[pe.BC5_RG=5]="BC5_RG",pe[pe.BC7_M6_RGB=6]="BC7_M6_RGB",pe[pe.BC7_M5_RGBA=7]="BC7_M5_RGBA",pe[pe.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",pe[pe.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",pe[pe.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",pe[pe.ATC_RGB=11]="ATC_RGB",pe[pe.ATC_RGBA=12]="ATC_RGBA",pe[pe.FXT1_RGB=17]="FXT1_RGB",pe[pe.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",pe[pe.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",pe[pe.ETC2_EAC_R11=20]="ETC2_EAC_R11",pe[pe.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",pe[pe.RGBA32=13]="RGBA32",pe[pe.RGB565=14]="RGB565",pe[pe.BGR565=15]="BGR565",pe[pe.RGBA4444=16]="RGBA4444";var ve=r(63907),ge=r(21231),_e=r(42293);let xe=null,Te=null;async function be(){return null==Te&&(me??=(async()=>{const e=await r.e(9321).then(r.bind(r,49321)),t=await e.default({locateFile:e=>(0,he.s)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),Te=me,xe=await Te),Te}function Ae(e,t,r,o,i){const n=(0,_e.IB)(t?ve.CQ.COMPRESSED_RGBA8_ETC2_EAC:ve.CQ.COMPRESSED_RGB8_ETC2),a=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*o*n*a)}function ye(e){return e.getNumImages()>=1&&!e.isUASTC()}function Ee(e){return e.getFaces()>=1&&e.isETC1S()}function Se(e,t,r,o,i,n,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?o?[fe.ETC2_RGBA,ve.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[fe.ETC1_RGB,ve.CQ.COMPRESSED_RGB8_ETC2]:c?o?[fe.BC3_RGBA,ve.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[fe.BC1_RGB,ve.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[fe.RGBA32,ve.Ab.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(a(e,d))),s(e,d,m[e]);return t.internalFormat=u,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?ve.Cj.LINEAR_MIPMAP_LINEAR:ve.Cj.LINEAR,t.width=i,t.height=n,new ge.g(e,t,{type:"compressed",levels:m})}const Me=()=>N.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function we(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Ce=we("DXT1"),Oe=we("DXT3"),Re=we("DXT5");function Ie(e,t,r){if(e instanceof ImageData)return Ie(Ne(e),t,r);const o=document.createElement("canvas");return o.width=t,o.height=r,o.getContext("2d").drawImage(e,0,0,o.width,o.height),o}function Ne(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new I.A("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var Pe,Le,He=r(67171);class De extends k.J{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=$.X.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new le.A,this._parameters={...Fe,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,de.w8)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,de.DB)(e.src)||(0,de.w8)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new He.R;return t.wrapMode=this._parameters.wrap??ve.pF.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?ve.Cj.LINEAR_MIPMAP_LINEAR:ve.Cj.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,V.mw)(e)||(0,V.mg)(e))return t.encoding===z.JS.KTX2_ENCODING?function(e,t){if(null==xe)return e.byteLength;const r=new xe.KTX2File(new Uint8Array(e)),o=Ee(r)?Ae(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),o}(e,!!t.mipmap):t.encoding===z.JS.BASIS_ENCODING?function(e,t){if(null==xe)return e.byteLength;const r=new xe.BasisFile(new Uint8Array(e)),o=ye(r)?Ae(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),o}(e,!!t.mipmap):e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Be(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new ge.g(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,V.mw)(t)||(0,V.mg)(t))&&this._parameters.encoding===z.JS.DDS_ENCODING?this._loadFromDDSData(e,t):((0,V.mw)(t)||(0,V.mg)(t))&&this._parameters.encoding===z.JS.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,V.mw)(t)||(0,V.mg)(t))&&this._parameters.encoding===z.JS.BASIS_ENCODING?this._loadFromBasis(e,t):(0,V.mg)(t)?this._loadFromPixelData(e,t):(0,V.mw)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<Pe.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const o=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Me().error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Me().error("Unsupported format, must contain a FourCC code"),null;const o=r[21];let i,n;switch(o){case Ce:i=8,n=ve.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Oe:i=16,n=ve.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Re:i=16,n=ve.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Me().error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(o)),null}let a=1,s=r[4],l=r[3];(3&s||3&l)&&(Me().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7]));let m=r[1]+4;const f=[];for(let t=0;t<a;++t)h=(s+3>>2)*(l+3>>2)*i,u=new Uint8Array(e,m,h),f.push(u),m+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:n,width:c,height:d}}(r,t.hasMipmap??!1);if(null==o)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:n,width:a,height:s}=o;return t.samplingMode=i.levels.length>1?ve.Cj.LINEAR_MIPMAP_LINEAR:ve.Cj.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new ge.g(e,t,i)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==xe&&(xe=await be());const o=new xe.KTX2File(new Uint8Array(r));if(!Ee(o))return null;o.startTranscoding();const i=Se(e,t,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),((e,t)=>o.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>o.transcodeImage(r,e,0,0,t,0,-1,-1)));return o.close(),o.delete(),i}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==xe&&(xe=await be());const o=new xe.BasisFile(new Uint8Array(r));if(!ye(o))return null;o.startTranscoding();const i=Se(e,t,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),((e,t)=>o.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>o.transcodeImage(r,0,e,t,0,0)));return o.close(),o.delete(),i}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,U.vA)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?ve.Ab.LUMINANCE:3===this._parameters.components?ve.Ab.RGB:ve.Ab.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new ge.g(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const o=await B(t,{signal:r});return(0,L.Te)(r),this._loadFromImage(e,o)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const o=await(0,ue.Sx)(t,t.src,!1,r);return(0,L.Te)(r),this._loadFromImage(e,o)}))}_loadFromVideoElement(e,t){return t.readyState>=Pe.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((o,i)=>{const n=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,ce.xt)(l)},a=()=>{t.readyState>=Pe.HAVE_CURRENT_DATA&&(n(),o(this._loadFromImage(e,t)))},s=e=>{n(),i(e||new I.A("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const l=(0,L.u7)(r,(()=>s((0,L.NK)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?Ne(e):e;let o=e.width,i=e.height;do{o=Math.ceil(o/2),i=Math.ceil(i/2),r=o*i}while(r>1048576||null!=t&&(o>t||i>t));return Ie(e,o,i)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const o=t/r;return Ie(e,Math.round(e.width*o),Math.round(e.height*o))}(r,t)}const o=Be(r);this._parameters.width=o.width,this._parameters.height=o.height;const i=this._createDescriptor(e);return i.pixelFormat=3===this._parameters.components?ve.Ab.RGB:ve.Ab.RGBA,i.width=o.width,i.height=o.height,this._glTexture=new ge.g(e,i,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const o=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(o,o),r}unload(){if(this._glTexture=(0,ce.WD)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Be(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}(Le=Pe||(Pe={}))[Le.HAVE_NOTHING=0]="HAVE_NOTHING",Le[Le.HAVE_METADATA=1]="HAVE_METADATA",Le[Le.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",Le[Le.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",Le[Le.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";const Fe={wrap:{s:ve.pF.REPEAT,t:ve.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var ze=r(24151),Ve=r(1843),Ge=r(49255),We=r(96336),Ue=r(62602),je=r(59469),qe=r(25634),ke=r(14903),$e=r(14327),Ye=r(90644);const Xe=(0,Ye.p3)(ve.dn.SRC_ALPHA,ve.dn.ONE,ve.dn.ONE_MINUS_SRC_ALPHA,ve.dn.ONE_MINUS_SRC_ALPHA),Ze=(0,Ye.p3)(ve.dn.ONE,ve.dn.ZERO,ve.dn.ONE,ve.dn.ONE_MINUS_SRC_ALPHA);function Je(e){return e===$e.y.FrontFace?null:Ze}const Ke={factor:-1,units:-2};function Qe(e,t=ve.MT.LESS){return e===$e.y.NONE||e===$e.y.FrontFace?t:ve.MT.LEQUAL}function et(e){return e===$e.y.ColorAlpha?{buffers:[ve.Nm.COLOR_ATTACHMENT0,ve.Nm.COLOR_ATTACHMENT1]}:null}class tt{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}const rt=(0,h.vt)();function ot(e,t,r,o,i,n){if(!e.visible)return;const a=(0,d.z)(vt,o,r),s=(e,t,r)=>{n(e,r,t,!1)},l=new tt(!1,t.options.normalRequired);if(e.boundingInfo){(0,U.vA)(e.type===$.X.Mesh);const o=t.tolerance;nt(e.boundingInfo,r,a,o,i,l,s)}else{const t=e.attributes.get(ne.r.POSITION),o=t.indices;!function(e,t,r,o,i,n,a,s,l,c){const u=t,h=gt,m=Math.abs(u[0]),f=Math.abs(u[1]),p=Math.abs(u[2]),v=m>=f?m>=p?0:2:f>=p?1:2,g=v,_=u[g]<0?2:1,x=(v+_)%3,T=(v+(3-_))%3,b=u[x]/u[g],A=u[T]/u[g],y=1/u[g],E=st,S=lt,M=ct,{normalRequired:w}=l;for(let t=r;t<o;++t){const r=3*t,o=a*i[r];(0,d.s)(h[0],n[o+0],n[o+1],n[o+2]);const l=a*i[r+1];(0,d.s)(h[1],n[l+0],n[l+1],n[l+2]);const u=a*i[r+2];(0,d.s)(h[2],n[u+0],n[u+1],n[u+2]),s&&((0,d.c)(h[0],s.applyToVertex(h[0][0],h[0][1],h[0][2],t)),(0,d.c)(h[1],s.applyToVertex(h[1][0],h[1][1],h[1][2],t)),(0,d.c)(h[2],s.applyToVertex(h[2][0],h[2][1],h[2][2],t))),(0,d.z)(E,h[0],e),(0,d.z)(S,h[1],e),(0,d.z)(M,h[2],e);const m=E[x]-b*E[g],f=E[T]-A*E[g],p=S[x]-b*S[g],v=S[T]-A*S[g],_=M[x]-b*M[g],C=M[T]-A*M[g],O=_*v-C*p,R=m*C-f*_,I=p*f-v*m;if((O<0||R<0||I<0)&&(O>0||R>0||I>0))continue;const N=O+R+I;if(0===N)continue;const P=O*(y*E[g])+R*(y*S[g])+I*(y*M[g]);if(P*Math.sign(N)<0)continue;const L=P/N;L>=0&&c(L,t,w?ut(h):null)}}(r,a,0,o.length/3,o,t.data,t.stride,i,l,s)}}const it=(0,u.vt)();function nt(e,t,r,o,i,n,a){if(null==e)return;const s=function(e,t){return(0,d.s)(t,1/e[0],1/e[1],1/e[2])}(r,it);if((0,h.Ne)(rt,e.bbMin),(0,h.vI)(rt,e.bbMax),null!=i&&i.applyToAabb(rt),function(e,t,r,o){return function(e,t,r,o,i){const n=(e[0]-o-t[0])*r[0],a=(e[3]+o-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-o-t[1])*r[1],d=(e[4]+o-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-o-t[2])*r[2],h=(e[5]+o-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<1/0)}(e,t,r,o)}(rt,t,s,o)){const{primitiveIndices:s,position:l}=e,c=s?s.length:l.indices.length/3;if(c>ft){const s=e.getChildren();if(void 0!==s){for(const e of s)nt(e,t,r,o,i,n,a);return}}!function(e,t,r,o,i,n,a,s,l,c,d){const u=e[0],h=e[1],m=e[2],f=t[0],p=t[1],v=t[2],{normalRequired:g}=c;for(let e=0;e<o;++e){const t=s[e],r=3*t,o=a*i[r];let c=n[o],_=n[o+1],x=n[o+2];const T=a*i[r+1];let b=n[T],A=n[T+1],y=n[T+2];const E=a*i[r+2];let S=n[E],M=n[E+1],w=n[E+2];null!=l&&([c,_,x]=l.applyToVertex(c,_,x,e),[b,A,y]=l.applyToVertex(b,A,y,e),[S,M,w]=l.applyToVertex(S,M,w,e));const C=b-c,O=A-_,R=y-x,I=S-c,N=M-_,P=w-x,L=p*P-N*v,H=v*I-P*f,D=f*N-I*p,B=C*L+O*H+R*D;if(Math.abs(B)<=pt)continue;const F=u-c,z=h-_,V=m-x,G=F*L+z*H+V*D;if(B>0){if(G<0||G>B)continue}else if(G>0||G<B)continue;const W=z*R-O*V,U=V*C-R*F,j=F*O-C*z,q=f*W+p*U+v*j;if(B>0){if(q<0||G+q>B)continue}else if(q>0||G+q<B)continue;const k=(I*W+N*U+P*j)/B;k>=0&&d(k,t,g?dt(C,O,R,I,N,P,at):null)}}(t,r,0,c,l.indices,l.data,l.stride,s,i,n,a)}}const at=(0,u.vt)();const st=(0,u.vt)(),lt=(0,u.vt)(),ct=(0,u.vt)();function dt(e,t,r,o,i,n,a){return(0,d.s)(ht,e,t,r),(0,d.s)(mt,o,i,n),(0,d.b)(a,ht,mt),(0,d.n)(a,a),a}function ut(e){return(0,d.z)(ht,e[1],e[0]),(0,d.z)(mt,e[2],e[0]),(0,d.b)(at,ht,mt),(0,d.n)(at,at),at}const ht=(0,u.vt)(),mt=(0,u.vt)(),ft=1e3,pt=1e-7,vt=(0,u.vt)(),gt=[(0,u.vt)(),(0,u.vt)(),(0,u.vt)()];var _t,xt;(xt=_t||(_t={}))[xt.INTEGRATED_MESH=0]="INTEGRATED_MESH",xt[xt.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",xt[xt.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",xt[xt.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",xt[xt.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",xt[xt.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",xt[xt.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",xt[xt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",xt[xt.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",xt[xt.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",xt[xt.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",xt[xt.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",xt[xt.OPAQUE_ENVIRONMENT=12]="OPAQUE_ENVIRONMENT",xt[xt.TRANSPARENT_ENVIRONMENT=13]="TRANSPARENT_ENVIRONMENT",xt[xt.LASERLINES=14]="LASERLINES",xt[xt.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",xt[xt.HUD_MATERIAL=16]="HUD_MATERIAL",xt[xt.LABEL_MATERIAL=17]="LABEL_MATERIAL",xt[xt.LINE_CALLOUTS=18]="LINE_CALLOUTS",xt[xt.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",xt[xt.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",xt[xt.DRAPED_WATER=21]="DRAPED_WATER",xt[xt.VIEWSHED=22]="VIEWSHED",xt[xt.VOXEL=23]="VOXEL",xt[xt.MAX_SLOTS=24]="MAX_SLOTS";var Tt=r(76412),bt=r(57005);const At=new class{constructor(e=0){this.offset=e,this.sphere=(0,Tt.c)(),this.tmpVertex=(0,u.vt)()}applyToVertex(e,t,r){const o=this.objectTransform.transform,i=(0,d.s)(yt,e,t,r),n=(0,d.h)(i,i,o),a=this.offset/(0,d.l)(n);(0,d.r)(n,n,n,a);const s=this.objectTransform.inverse;return(0,d.h)(this.tmpVertex,n,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,d.l)(e);(0,d.r)(e,e,e,r);const o=this.offset/(0,d.l)(t);(0,d.r)(t,t,t,o)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,d.l)((0,Tt.g)(e)),r=this.offset/t;return(0,d.r)((0,Tt.g)(this.sphere),(0,Tt.g)(e),(0,Tt.g)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,u.vt)(),this._tmpMbs=(0,Tt.c)(),this._tmpObb=new bt.ab,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,d.l)(e)}applyToVertex(e,t,r){const o=(0,d.s)(yt,e,t,r),i=(0,d.s)(Et,e,t,r+this.componentLocalOriginLength),n=this._totalOffset/(0,d.l)(i);return(0,d.r)(this._tmpVertex,o,i,n),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],o=e[1],i=e[2]+t,n=e[3],a=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(o),d=Math.abs(i),u=Math.abs(n),h=Math.abs(a),m=Math.abs(s),f=.5*(1+Math.sign(r*n))*Math.min(l,u),p=.5*(1+Math.sign(o*a))*Math.min(c,h),v=.5*(1+Math.sign(i*s))*Math.min(d,m),g=Math.max(l,u),_=Math.max(c,h),x=Math.max(d,m),T=Math.sqrt(f*f+p*p+v*v),b=Math.sign(l+r),A=Math.sign(c+o),y=Math.sign(d+i),E=Math.sign(u+n),S=Math.sign(h+a),M=Math.sign(m+s),w=this._totalOffset;if(T<w)return e[0]-=(1-b)*w,e[1]-=(1-A)*w,e[2]-=(1-y)*w,e[3]+=E*w,e[4]+=S*w,e[5]+=M*w,e;const C=w/Math.sqrt(g*g+_*_+x*x),O=w/T,R=O-C,I=-R;return e[0]+=r*(b*I+O),e[1]+=o*(A*I+O),e[2]+=i*(y*I+O),e[3]+=n*(E*R+C),e[4]+=a*(S*R+C),e[5]+=s*(M*R+C),e}applyToMbs(e){const t=(0,d.l)((0,Tt.g)(e)),r=this._totalOffset/t;return(0,d.r)((0,Tt.g)(this._tmpMbs),(0,Tt.g)(e),(0,Tt.g)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,bt.gm)(e,this._totalOffset,this._totalOffset,ze.RT.Global,this._tmpObb),this._tmpObb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,u.vt)()}applyToVertex(e,t,r){const o=(0,d.s)(yt,e,t,r),i=(0,d.g)(Et,o,this.localOrigin),n=this.offset/(0,d.l)(i);return(0,d.r)(this.tmpVertex,o,i,n),this.tmpVertex}applyToAabb(e){const t=St,r=Mt,o=wt;for(let i=0;i<3;++i)t[i]=e[0+i]+this.localOrigin[i],r[i]=e[3+i]+this.localOrigin[i],o[i]=t[i];const i=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=i[t],e[t+3]=i[t];const n=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let i=0;i<3;++i)o[i]=e&1<<i?r[i]:t[i];n(o)}let a=0;for(let e=0;e<3;++e)t[e]*r[e]<0&&(a|=1<<e);if(0!==a&&7!==a)for(let e=0;e<8;++e)if(!(a&e)){for(let i=0;i<3;++i)o[i]=a&1<<i?0:e&1<<i?t[i]:r[i];n(o)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const yt=(0,u.vt)(),Et=(0,u.vt)(),St=(0,u.vt)(),Mt=(0,u.vt)(),wt=(0,u.vt)();function Ct(e,t,r){const{data:o,indices:i}=e,n=t.typedBuffer,a=t.typedBufferStride,s=i.length;r*=a;for(let e=0;e<s;++e){const t=2*i[e];n[r]=o[t],n[r+1]=o[t+1],r+=a}}function Ot(e,t,r,o){const{data:i,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,l=n.length;if(r*=s,null==o||1===o)for(let e=0;e<l;++e){const t=3*n[e];a[r]=i[t],a[r+1]=i[t+1],a[r+2]=i[t+2],r+=s}else for(let e=0;e<l;++e){const t=3*n[e];for(let e=0;e<o;++e)a[r]=i[t],a[r+1]=i[t+1],a[r+2]=i[t+2],r+=s}}function Rt(e,t,r,o=1){const{data:i,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,l=n.length;if(r*=s,1===o)for(let e=0;e<l;++e){const t=4*n[e];a[r]=i[t],a[r+1]=i[t+1],a[r+2]=i[t+2],a[r+3]=i[t+3],r+=s}else for(let e=0;e<l;++e){const t=4*n[e];for(let e=0;e<o;++e)a[r]=i[t],a[r+1]=i[t+1],a[r+2]=i[t+2],a[r+3]=i[t+3],r+=s}}function It(e,t,r,o,i=1){const n=t.typedBuffer,a=t.typedBufferStride;if(o*=a,1===i)for(let t=0;t<r;++t)n[o]=e[0],n[o+1]=e[1],n[o+2]=e[2],n[o+3]=e[3],o+=a;else for(let t=0;t<r;++t)for(let t=0;t<i;++t)n[o]=e[0],n[o+1]=e[1],n[o+2]=e[2],n[o+3]=e[3],o+=a}function Nt(e,t,r,o,i,n){switch(e){case ne.r.POSITION:{(0,U.vA)(3===t.size);const o=i.getField(e,f.xs);(0,U.vA)(!!o,`No buffer view for ${e}`),o&&function(e,t,r,o,i=1){if(!t)return void Ot(e,r,o,i);const{data:n,indices:a}=e,l=r.typedBuffer,c=r.typedBufferStride,d=a.length,u=t[0],h=t[1],m=t[2],f=t[4],p=t[5],v=t[6],g=t[8],_=t[9],x=t[10],T=t[12],b=t[13],A=t[14];o*=c;let y=0,E=0,S=0;const M=(0,s.tZ)(t)?e=>{y=n[e]+T,E=n[e+1]+b,S=n[e+2]+A}:e=>{const t=n[e],r=n[e+1],o=n[e+2];y=u*t+f*r+g*o+T,E=h*t+p*r+_*o+b,S=m*t+v*r+x*o+A};if(1===i)for(let e=0;e<d;++e)M(3*a[e]),l[o]=y,l[o+1]=E,l[o+2]=S,o+=c;else for(let e=0;e<d;++e){M(3*a[e]);for(let e=0;e<i;++e)l[o]=y,l[o+1]=E,l[o+2]=S,o+=c}}(t,r,o,n);break}case ne.r.NORMAL:{(0,U.vA)(3===t.size);const r=i.getField(e,f.xs);(0,U.vA)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,o,i=1){if(!t)return void Ot(e,r,o,i);const{data:n,indices:a}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=a.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,s.ut)(l),A=1e-6,y=1-A;o*=d;let E=0,S=0,M=0;const w=(0,s.tZ)(l)?e=>{E=n[e],S=n[e+1],M=n[e+2]}:e=>{const t=n[e],r=n[e+1],o=n[e+2];E=h*t+p*r+_*o,S=m*t+v*r+x*o,M=f*t+g*r+T*o};if(1===i)if(b)for(let e=0;e<u;++e){w(3*a[e]);const t=E*E+S*S+M*M;if(t<y&&t>A){const e=1/Math.sqrt(t);c[o]=E*e,c[o+1]=S*e,c[o+2]=M*e}else c[o]=E,c[o+1]=S,c[o+2]=M;o+=d}else for(let e=0;e<u;++e)w(3*a[e]),c[o]=E,c[o+1]=S,c[o+2]=M,o+=d;else for(let e=0;e<u;++e){if(w(3*a[e]),b){const e=E*E+S*S+M*M;if(e<y&&e>A){const t=1/Math.sqrt(e);E*=t,S*=t,M*=t}}for(let e=0;e<i;++e)c[o]=E,c[o+1]=S,c[o+2]=M,o+=d}}(t,o,r,n);break}case ne.r.NORMALCOMPRESSED:{(0,U.vA)(2===t.size);const r=i.getField(e,f.mJ);(0,U.vA)(!!r,`No buffer view for ${e}`),r&&Ct(t,r,n);break}case ne.r.UV0:{(0,U.vA)(2===t.size);const r=i.getField(e,f.gH);(0,U.vA)(!!r,`No buffer view for ${e}`),r&&Ct(t,r,n);break}case ne.r.COLOR:case ne.r.SYMBOLCOLOR:{const r=i.getField(e,f.XP);(0,U.vA)(!!r,`No buffer view for ${e}`),(0,U.vA)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||function(e,t,r,o,i=1){const{data:n,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length;if(o*=l,t!==n.length||4!==t)if(1!==i)if(4!==t)for(let e=0;e<c;++e){const t=3*a[e];for(let e=0;e<i;++e)s[o]=n[t],s[o+1]=n[t+1],s[o+2]=n[t+2],s[o+3]=255,o+=l}else for(let e=0;e<c;++e){const t=4*a[e];for(let e=0;e<i;++e)s[o]=n[t],s[o+1]=n[t+1],s[o+2]=n[t+2],s[o+3]=n[t+3],o+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*a[e];s[o]=n[t],s[o+1]=n[t+1],s[o+2]=n[t+2],s[o+3]=n[t+3],o+=l}return}for(let e=0;e<c;++e){const t=3*a[e];s[o]=n[t],s[o+1]=n[t+1],s[o+2]=n[t+2],s[o+3]=255,o+=l}}else{s[o]=n[0],s[o+1]=n[1],s[o+2]=n[2],s[o+3]=n[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,a=e[o/=4];o+=t;const d=c*i;for(let r=1;r<d;++r)e[o]=a,o+=t}}(t,t.size,r,n);break}case ne.r.COLORFEATUREATTRIBUTE:{const r=i.getField(e,f.Y$);(0,U.vA)(!!r,`No buffer view for ${e}`),(0,U.vA)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:o,indices:i}=e,n=t.typedBuffer,a=t.typedBufferStride,s=i.length,l=o[0];r*=a;for(let e=0;e<s;++e)n[r]=l,r+=a}(t,r,n);break}case ne.r.TANGENT:{(0,U.vA)(4===t.size);const o=i.getField(e,f.Eq);(0,U.vA)(!!o,`No buffer view for ${e}`),o&&function(e,t,r,o,i=1){if(!t)return void Rt(e,r,o,i);const{data:n,indices:a}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=a.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,s.ut)(l),A=1e-6,y=1-A;if(o*=d,1===i)for(let e=0;e<u;++e){const t=4*a[e],r=n[t],i=n[t+1],s=n[t+2],l=n[t+3];let u=h*r+p*i+_*s,E=m*r+v*i+x*s,S=f*r+g*i+T*s;if(b){const e=u*u+E*E+S*S;if(e<y&&e>A){const t=1/Math.sqrt(e);u*=t,E*=t,S*=t}}c[o]=u,c[o+1]=E,c[o+2]=S,c[o+3]=l,o+=d}else for(let e=0;e<u;++e){const t=4*a[e],r=n[t],s=n[t+1],l=n[t+2],u=n[t+3];let E=h*r+p*s+_*l,S=m*r+v*s+x*l,M=f*r+g*s+T*l;if(b){const e=E*E+S*S+M*M;if(e<y&&e>A){const t=1/Math.sqrt(e);E*=t,S*=t,M*=t}}for(let e=0;e<i;++e)c[o]=E,c[o+1]=S,c[o+2]=M,c[o+3]=u,o+=d}}(t,r,o,n);break}case ne.r.PROFILERIGHT:case ne.r.PROFILEUP:case ne.r.PROFILEVERTEXANDNORMAL:case ne.r.FEATUREVALUE:{(0,U.vA)(4===t.size);const r=i.getField(e,f.Eq);(0,U.vA)(!!r,`No buffer view for ${e}`),r&&Rt(t,r,n)}}}class Pt{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(ne.r.POSITION).indices.length}write(e,t,r,o,i){!function(e,t,r,o,i,n){for(const a of t.fields.keys()){const t=e.attributes.get(a),s=t?.indices;if(t&&s)Nt(a,t,r,o,i,n);else if(a===ne.r.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(ne.r.POSITION)?.indices;if(t){const r=t.length,o=i.getField(a,f.XP);It(e.objectAndLayerIdColor,o,r,n)}}}}(r,this.vertexBufferLayout,e,t,o,i)}}var Lt=r(19245),Ht=r(91829),Dt=r(53466),Bt=r(72824),Ft=r(35093),zt=r(97220),Vt=r(84867),Gt=r(39341),Wt=r(34886);ve.MT.LESS,ve.MT.ALWAYS;const Ut={mask:255},jt={function:{func:ve.MT.ALWAYS,ref:z.dd.OutlineVisualElementMask,mask:z.dd.OutlineVisualElementMask},operation:{fail:ve.eA.KEEP,zFail:ve.eA.KEEP,zPass:ve.eA.ZERO}},qt={function:{func:ve.MT.ALWAYS,ref:z.dd.OutlineVisualElementMask,mask:z.dd.OutlineVisualElementMask},operation:{fail:ve.eA.KEEP,zFail:ve.eA.KEEP,zPass:ve.eA.REPLACE}};ve.MT.EQUAL,z.dd.OutlineVisualElementMask,z.dd.OutlineVisualElementMask,ve.eA.KEEP,ve.eA.KEEP,ve.eA.KEEP,ve.MT.NOTEQUAL,z.dd.OutlineVisualElementMask,z.dd.OutlineVisualElementMask,ve.eA.KEEP,ve.eA.KEEP,ve.eA.KEEP;const kt=[1,1,.5],$t=[0,.6,.2],Yt=[0,1,.2];var Xt=r(28491);class Zt extends Bt.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,u.ci)(kt),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=z.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,u.fA)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=We.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,u.fA)(.2,.2,.2),this.diffuse=(0,u.fA)(.8,.8,.8),this.externalColor=(0,Ht.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,u.vt)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=z.it.Less,this.textureAlphaMode=z.sf.Blend,this.textureAlphaCutoff=Ft.H,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=ke.m$.Occlude,this.isDecoration=!1}}Bt.gy;class Jt extends Vt.w{initializeConfiguration(e,t){t.spherical=e.viewingMode===ze.RT.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?Dt.q.Default:Dt.q.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,Jt.shader)}_initializeProgram(e,t){return new Wt.B(e.rctx,t.get().build(this.configuration),Gt.D)}_makePipeline(e,t){const r=this.configuration,o=e===$e.y.NONE,i=e===$e.y.FrontFace;return(0,Ye.Ey)({blending:r.output===Ge.V.Color&&r.transparent?o?Xe:Je(e):null,culling:Qt(r)?(0,Ye.Xt)(r.cullFace):null,depthTest:{func:Qe(e,Kt(r.customDepthTest))},depthWrite:(o||i)&&r.writeDepth?Ye.kn:null,drawBuffers:r.output===Ge.V.Depth?{buffers:[ve.Hr.NONE]}:et(e),colorWrite:Ye.wE,stencilWrite:r.hasOccludees?Ut:null,stencilTest:r.hasOccludees?t?qt:jt:null,polygonOffset:o||i?null:(n=r.enableOffset,n?Ke:null)});var n}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function Kt(e){return e===z.it.Lequal?ve.MT.LEQUAL:ve.MT.LESS}function Qt(e){return e.cullFace!==z.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Jt.shader=new zt.$(Xt.D,(()=>r.e(5141).then(r.bind(r,5141))));var er=r(90237),tr=r(99769),rr=r(82991),or=r(46263);class ir extends rr.nW{}(0,er._)([(0,tr.W)({constValue:!0})],ir.prototype,"hasSliceHighlight",void 0),(0,er._)([(0,tr.W)({constValue:!1})],ir.prototype,"hasSliceInVertexProgram",void 0),(0,er._)([(0,tr.W)({constValue:or.c.Pass})],ir.prototype,"pbrTextureBindType",void 0);class nr extends ir{constructor(){super(...arguments),this.output=Ge.V.Color,this.alphaDiscardMode=z.sf.Opaque,this.doubleSidedMode=Ue.W.None,this.pbrMode=je.A9.Disabled,this.cullFace=z.s2.None,this.transparencyPassType=$e.y.NONE,this.normalType=We.W.Attribute,this.textureCoordinateType=Dt.q.None,this.customDepthTest=z.it.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,er._)([(0,tr.W)({count:Ge.V.COUNT})],nr.prototype,"output",void 0),(0,er._)([(0,tr.W)({count:z.sf.COUNT})],nr.prototype,"alphaDiscardMode",void 0),(0,er._)([(0,tr.W)({count:Ue.W.COUNT})],nr.prototype,"doubleSidedMode",void 0),(0,er._)([(0,tr.W)({count:je.A9.COUNT})],nr.prototype,"pbrMode",void 0),(0,er._)([(0,tr.W)({count:z.s2.COUNT})],nr.prototype,"cullFace",void 0),(0,er._)([(0,tr.W)({count:$e.y.COUNT})],nr.prototype,"transparencyPassType",void 0),(0,er._)([(0,tr.W)({count:We.W.COUNT})],nr.prototype,"normalType",void 0),(0,er._)([(0,tr.W)({count:Dt.q.COUNT})],nr.prototype,"textureCoordinateType",void 0),(0,er._)([(0,tr.W)({count:z.it.COUNT})],nr.prototype,"customDepthTest",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"spherical",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasVertexColors",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasSymbolColors",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasVerticalOffset",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasSlicePlane",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasSliceHighlight",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasColorTexture",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasMetallicRoughnessTexture",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasEmissionTexture",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasOcclusionTexture",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasNormalTexture",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasScreenSizePerspective",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasVertexTangents",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasOccludees",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"multipassEnabled",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasModelTransformation",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"offsetBackfaces",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"vvSize",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"vvColor",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"receiveShadows",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"receiveAmbientOcclusion",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"textureAlphaPremultiplied",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"instanced",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"instancedColor",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"objectAndLayerIdColorInstanced",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"instancedDoublePrecision",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"writeDepth",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"transparent",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"enableOffset",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"cullAboveGround",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"snowCover",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasColorTextureTransform",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasEmissionTextureTransform",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasNormalTextureTransform",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasOcclusionTextureTransform",void 0),(0,er._)([(0,tr.W)()],nr.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,er._)([(0,tr.W)({constValue:!1})],nr.prototype,"occlusionPass",void 0),(0,er._)([(0,tr.W)({constValue:!0})],nr.prototype,"hasVvInstancing",void 0),(0,er._)([(0,tr.W)({constValue:!1})],nr.prototype,"useCustomDTRExponentForWater",void 0),(0,er._)([(0,tr.W)({constValue:!1})],nr.prototype,"supportsTextureAtlas",void 0),(0,er._)([(0,tr.W)({constValue:!0})],nr.prototype,"useFillLights",void 0);var ar=r(57323);class sr extends Jt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=We.W.Attribute,t.doubleSidedMode=Ue.W.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,sr.shader)}}sr.shader=new zt.$(ar.R,(()=>r.e(9933).then(r.bind(r,39933))));class lr extends ke.im{constructor(e){super(e,dr),this.supportsEdges=!0,this.produces=new Map([[_t.OPAQUE_MATERIAL,e=>((0,Ge.XY)(e)||(0,Ge.PJ)(e))&&!this.parameters.transparent],[_t.TRANSPARENT_MATERIAL,e=>((0,Ge.XY)(e)||(0,Ge.PJ)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[_t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>((0,Ge.XY)(e)||(0,Ge.PJ)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new nr,this._vertexBufferLayout=function(e){const t=(0,Ve.BP)().vec3f(ne.r.POSITION);return e.normalType===We.W.Compressed?t.vec2i16(ne.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(ne.r.NORMAL),e.hasVertexTangents&&t.vec4f(ne.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(ne.r.UV0),e.hasVertexColors&&t.vec4u8(ne.r.COLOR),e.hasSymbolColors&&t.vec4u8(ne.r.SYMBOLCOLOR),(0,se.A)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(ne.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==Ge.V.Shadow&&e!==Ge.V.ShadowExcludeHighlight&&e!==Ge.V.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:o,vvColor:i}=e,n="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||i||o;return r&&l?n||a:r?n?s:a:l?n||a:n?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?z.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e===Ge.V.Color&&(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Ue.W.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Ue.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Ue.W.WindingOrder:Ue.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?je.A9.Schematic:je.A9.Normal:je.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,o,i,n){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,d.s)(vr,t[12],t[13],t[14]);let n=null;switch(r.viewingMode){case ze.RT.Global:n=(0,d.n)(fr,vr);break;case ze.RT.Local:n=(0,d.c)(fr,mr)}let a=0;const s=(0,d.f)(gr,vr,e.eye),l=(0,d.l)(s),c=(0,d.j)(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,d.m)(n,c)),a+=(0,Lt.kE)(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,d.j)(n,n,a),(0,d.t)(pr,n,r.transform.inverseRotation),o=(0,d.f)(ur,o,pr),i=(0,d.f)(hr,i,pr)}var a;ot(e,r,o,i,null!=(a=r.verticalOffset)?(At.offset=a,At):null,n)}createGLMaterial(e){return new cr(e)}createBufferWriter(){return new Pt(this._vertexBufferLayout)}}class cr extends qe.m{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===Ge.V.Color&&(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,d.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?sr:Jt,e)}}const dr=new class extends Zt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},ur=(0,u.vt)(),hr=(0,u.vt)(),mr=(0,u.fA)(0,0,1),fr=(0,u.vt)(),pr=(0,u.vt)(),vr=(0,u.vt)(),gr=(0,u.vt)(),_r=()=>N.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function xr(e){throw new I.A("",`Request for object resource failed: ${e}`)}function Tr(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(_r().warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(_r().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(_r().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(_r().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else _r().warn("Indexed geometries must specify faces"),o=!1;break}default:_r().warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(_r().warn("Geometry requires material"),o=!1);const i=e.params.vertexAttributes;for(const e in i)i[e].values||(_r().warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function br(e){const t=(0,h.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,h.iT)(t,r.bbMin),(0,h.iT)(t,r.bbMax))})),t}function Ar(e){switch(e){case"mask":return z.sf.Mask;case"maskAndTransparency":return z.sf.MaskBlend;case"none":return z.sf.Opaque;default:return z.sf.Blend}}function yr(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Er=new H.R(1,2,"wosr");var Sr=r(61765);async function Mr(e,t){const r=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,o.EM)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const o=await(0,O.Ke)(t.request(e,"json",r));if(!0===o.ok)return o.value;(0,L.QP)(o.error),xr(o.error.details.url)}(e,r,t);const o=await(0,O.Ke)((0,C.A)(e,t));if(!0===o.ok)return o.value.data;(0,L.QP)(o.error),xr(o.error)}(e,t),o=await async function(e,t){const r=new Array;for(const o in e){const i=e[o],n=i.images[0].data;if(!n){_r().warn("Externally referenced texture data is not yet supported");continue}const a=i.encoding+";base64,"+n,s="/textureDefinitions/"+o,l="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:ve.pF.REPEAT,t:ve.pF.REPEAT},preMultiplyAlpha:Ar(l)!==z.sf.Opaque},d=t?.disableTextures?Promise.resolve(null):B(a,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const o=await Promise.all(r),i={};for(const e of o)i[e.refId]=e;return i}(r.textureDefinitions??{},t);let i=0;for(const e in o)if(o.hasOwnProperty(e)){const t=o[e];i+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:o,size:i+(0,R.iL)(r)}}(r.url,t)),{engineResources:o,referenceBoundingBox:i}=function(e,t){const r=new Array,o=new Array,i=new Array,n=new P,a=e.resource,s=H.R.parse(a.version||"1.0","wosr");Er.validate(s);const l=a.model.name,c=a.model.geometries,d=a.materialDefinitions??{},h=e.textures;let m=0;const f=new Map;for(let e=0;e<c.length;e++){const a=c[e];if(!Tr(a))continue;const s=yr(a),l=a.params.vertexAttributes,p=[],v=e=>{if("PerAttributeArray"===a.params.topology)return null;const t=a.params.faces;for(const r in t)if(r===e)return t[r].values;return null},g=l[ne.r.POSITION],_=g.values.length/g.valuesPerElement;for(const e in l){const t=l[e],r=t.values,o=v(e)??(0,D.tM)(_);p.push([e,new F.n(r,o,t.valuesPerElement,!0)])}const x=s.texture,T=h&&h[x];if(T&&!f.has(x)){const{image:e,parameters:t}=T,r=new De(e,t);o.push(r),f.set(x,r)}const b=f.get(x),A=b?b.id:void 0,y=s.material;let E=n.get(y,x);if(null==E){const e=d[y.substring(y.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=T&&T.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,i=T?Ar(T.alphaChannelUsage):void 0,a={ambient:(0,u.ci)(e.diffuse),diffuse:(0,u.ci)(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:i,textureAlphaCutoff:.33,textureId:A,initTextureTransparent:!0,doubleSided:!0,cullFace:z.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:T?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),E=new lr(a),n.set(y,x,E)}i.push(E);const S=new ae(E,p);m+=p.find((e=>e[0]===ne.r.POSITION))?.[1]?.indices.length??0,r.push(S)}return{engineResources:[{name:l,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:br(r)}}(e,t);return{lods:o,referenceBoundingBox:i,isEsriSymbolResource:!1,isWosr:!0}}const a=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,b.y)(new T.R(t.streamDataRequester),r.url,t,t.usePBR)),E=a.model.meta?.ESRI_proxyEllipsoid,M=a.meta.isEsriSymbolResource&&null!=E&&"EsriRealisticTreesStyle"===a.meta.ESRI_webstyle;M&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];for(const i of o.parts){const o=i.attributes.normal;if(null==o)return;const n=i.attributes.position,a=n.count,c=(0,u.vt)(),h=(0,u.vt)(),m=(0,u.vt)(),p=new Uint8Array(4*a),v=new Float64Array(3*a),g=(0,s.B8)((0,l.vt)(),i.transform);let _=0,x=0;for(let s=0;s<a;s++){n.getVec(s,h),o.getVec(s,c),(0,d.h)(h,h,i.transform),(0,d.f)(m,h,t.center),(0,d.D)(m,m,t.radius);const a=m[2],l=(0,d.l)(m),u=Math.min(.45+.55*l*l,1);(0,d.D)(m,m,t.radius),null!==g&&(0,d.h)(m,m,g),(0,d.n)(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,d.o)(m,m,c,a>-1?.2:Math.min(-4*a-3.8,1)),v[_]=m[0],v[_+1]=m[1],v[_+2]=m[2],_+=3,p[x]=255*u,p[x+1]=255*u,p[x+2]=255*u,p[x+3]=255,x+=4}i.attributes.normal=new f.xs(v),i.attributes.color=new f.XP(p)}}}(a,E));const I=!!t.usePBR,N=a.meta.isEsriSymbolResource?{usePBR:I,isSchematic:!1,treeRendering:M,mrrFactors:[...Yt]}:{usePBR:I,isSchematic:!1,treeRendering:!1,mrrFactors:[...kt]},V={...t.materialParameters,treeRendering:M},{engineResources:G,referenceBoundingBox:W}=function(e,t,r,o){const a=e.model,s=new Array,l=new Map,T=new Map,b=a.lods.length,E=(0,h.Ie)();return a.lods.forEach(((e,M)=>{const C=!0===o.skipHighLods&&(b>1&&0===M||b>3&&1===M)||!1===o.skipHighLods&&null!=o.singleLodIndex&&M!==o.singleLodIndex;if(C&&0!==M)return;const O=new w(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const o=C?new lr({}):function(e,t,r,o,i,n,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),h=null!=t.attributes.texCoord0,m=null!=t.attributes.normal;if(null==l)return null;const f=function(e){switch(e){case"BLEND":return z.sf.Blend;case"MASK":return z.sf.Mask;case"OPAQUE":case null:case void 0:return z.sf.Opaque}}(l.alphaMode);if(!n.has(s)){if(h){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const o=e.textures.get(t);if(null!=o){const e=o.data;a.set(t,new De((0,y.x3)(e)?e.data:e,{...o.parameters,preMultiplyAlpha:!(0,y.x3)(e)&&r,encoding:(0,y.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,f!==z.sf.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const r=l.color[0]**(1/Sr.T),p=l.color[1]**(1/Sr.T),v=l.color[2]**(1/Sr.T),g=l.emissiveFactor[0]**(1/Sr.T),_=l.emissiveFactor[1]**(1/Sr.T),x=l.emissiveFactor[2]**(1/Sr.T),T=null!=l.textureColor&&h?a.get(l.textureColor):null,b=function({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:o,emissiveTexture:i,emissiveFactor:n,occlusionTexture:a}){return null==e&&null==t&&null==i&&(null==n||(0,d.e)(n,u.uY))&&null==a&&(null==o||1===o)&&(null==r||1===r)}({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion}),A=null!=l.normalTextureTransform?.scale?l.normalTextureTransform?.scale:c.Un;n.set(s,new lr({...o,transparent:f===z.sf.Blend,customDepthTest:z.it.Lequal,textureAlphaMode:f,textureAlphaCutoff:l.alphaCutoff,diffuse:[r,p,v],ambient:[r,p,v],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?z.s2.None:z.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:m?We.W.Attribute:We.W.ScreenDerivative,castShadows:!0,receiveShadows:l.receiveShadows,receiveAmbientOcclusion:l.receiveAmbientOcclustion,textureId:null!=T?T.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&h?a.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=T&&!!T.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&h?a.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&h?a.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&h?a.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[g,_,x],mrrFactors:b?[...$t]:[l.metallicFactor,l.roughnessFactor,o.mrrFactors[2]],isSchematic:b,colorTextureTransformMatrix:S(l.colorTextureTransform),normalTextureTransformMatrix:S(l.normalTextureTransform),scale:[A[0],A[1]],occlusionTextureTransformMatrix:S(l.occlusionTextureTransform),emissiveTextureTransformMatrix:S(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:S(l.metallicRoughnessTextureTransform),...i}))}const p=n.get(s);if(r.stageResources.materials.push(p),h){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return p}(a,e,O,t,r,l,T),{geometry:s,vertexCount:b}=function(e,t){const r=e.attributes.position.count,o=(0,A.x)(e.indices||r,e.primitiveType),a=(0,m.oe)(3*r),{typedBuffer:s,typedBufferStride:l}=e.attributes.position;(0,p.a)(a,s,e.transform,3,l);const c=[[ne.r.POSITION,new F.n(a,o,3,!0)]];if(null!=e.attributes.normal){const t=(0,m.oe)(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.normal;(0,n.Ge)(wr,e.transform),(0,p.t)(t,a,wr,3,s),(0,i.or)(wr)&&(0,p.n)(t,t),c.push([ne.r.NORMAL,new F.n(t,o,3,!0)])}if(null!=e.attributes.tangent){const t=(0,m.oe)(4*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.tangent;(0,n.z0)(wr,e.transform),(0,v.t)(t,a,wr,4,s),(0,i.or)(wr)&&(0,p.n)(t,t,4),c.push([ne.r.TANGENT,new F.n(t,o,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,m.oe)(2*r),{typedBuffer:i,typedBufferStride:n}=e.attributes.texCoord0;(0,g.n)(t,i,2,n),c.push([ne.r.UV0,new F.n(t,o,2,!0)])}const d=e.attributes.color;if(null!=d){const t=new Uint8Array(4*r);4===d.elementCount?d instanceof f.Eq?(0,v.s)(t,d,255):d instanceof f.XP?(0,x.c)(t,d):d instanceof f.Uz&&(0,v.s)(t,d,1/256):(t.fill(255),d instanceof f.xs?(0,p.s)(t,d.typedBuffer,255,4,d.typedBufferStride):e.attributes.color instanceof f.eI?(0,_.c)(t,d.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof f.nS&&(0,p.s)(t,d.typedBuffer,1/256,4,d.typedBufferStride)),c.push([ne.r.COLOR,new F.n(t,o,4,!0)])}return{geometry:new ae(t,c),vertexCount:r}}(e,null!=o?o:new lr({})),w=s.boundingInfo;null!=w&&0===M&&((0,h.iT)(E,w.bbMin),(0,h.iT)(E,w.bbMax)),null!=o&&(O.stageResources.geometries.push(s),O.numberOfVertices+=b)})),C||s.push(O)})),{engineResources:s,referenceBoundingBox:E}}(a,N,V,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:G,referenceBoundingBox:W,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}const wr=(0,a.vt)()},66104:(e,t,r)=>{var o,i;r.d(t,{k5:()=>o}),r(34727),(i=o||(o={}))[i.Multiply=1]="Multiply",i[i.Ignore=2]="Ignore",i[i.Replace=3]="Replace",i[i.Tint=4]="Tint"},42583:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(66104),i=r(2597);function n(e){e.vertex.code.add(i.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.H.int(o.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.H.int(o.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.H.int(o.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.H.int(o.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},46686:(e,t,r)=>{r.d(t,{i$:()=>c,oD:()=>d,xJ:()=>l});var o=r(49255),i=r(33752),n=r(47286),a=r(2597);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new n.G("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case o.V.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case o.V.Shadow:case o.V.ShadowHighlight:case o.V.ShadowExcludeHighlight:case o.V.ViewshedShadow:return e.include(i.em,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},32680:(e,t,r)=>{r.d(t,{M:()=>i});var o=r(2597);function i(e){e.vertex.code.add(o.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},82048:(e,t,r)=>{r.d(t,{c:()=>n});var o=r(2597),i=r(46540);function n(e,t=!0){e.attributes.add(i.r.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(o.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?o.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},49255:(e,t,r)=>{var o;function i(e){return e===o.Shadow||e===o.ShadowHighlight||e===o.ShadowExcludeHighlight||e===o.ViewshedShadow}function n(e){return function(e){return function(e){return s(e)||a(e)}(e)||l(e)}(e)||e===o.Normal}function a(e){return e===o.Highlight||e===o.ObjectAndLayerIdColor}function s(e){return e===o.Color}function l(e){return e===o.Depth}r.d(t,{PJ:()=>i,V:()=>o,XY:()=>n}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.ViewshedShadow=6]="ViewshedShadow",e[e.Highlight=7]="Highlight",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(o||(o={}))},76591:(e,t,r)=>{r.d(t,{HQ:()=>c});var o=r(58083),i=r(9093),n=r(38954),a=r(51850),s=r(40710),l=(r(33079),r(2597));function c(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const o=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.hasSliceHighlight?l.H`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(o),e.fragment.code.add(o),e.fragment.code.add(n)}(e,t,new s.W("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return a.uY;const o=d(e,t,r),i=u(o,r.slicePlane),s=h(e,o,r);return null!=s?(0,n.h)(p,i,s):i}(t,e,r))),new s.W("slicePlaneBasis1",((e,r)=>m(t,e,r,r.slicePlane?.basis1))),new s.W("slicePlaneBasis2",((e,r)=>m(t,e,r,r.slicePlane?.basis2))))}function d(e,t,r){return e.instancedDoublePrecision?(0,n.s)(f,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function u(e,t){return null!=e?(0,n.f)(p,t.origin,e):t.origin}function h(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,o.Tl)(g,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function m(e,t,r,o){if(null==o||null==r.slicePlane)return a.uY;const i=d(e,t,r),s=u(i,r.slicePlane),l=h(e,i,r);return null!=l?((0,n.g)(v,o,s),(0,n.h)(p,s,l),(0,n.h)(v,v,l),(0,n.f)(v,v,p)):o}l.Y;const f=(0,a.vt)(),p=(0,a.vt)(),v=(0,a.vt)(),g=(0,i.vt)()},76597:(e,t,r)=>{r.d(t,{d:()=>n});var o=r(46686),i=r(2597);function n(e){(0,o.i$)(e),e.vertex.code.add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(i.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},82991:(e,t,r)=>{r.d(t,{BK:()=>b,nW:()=>x});var o=r(90237),i=r(77690),n=r(29242),a=r(9093),s=r(38954),l=r(51850),c=r(49255),d=r(26425),u=r(20693),h=r(40710),m=r(2597),f=r(35644),p=r(40095),v=r(99769),g=r(46540),_=r(28449);class x extends v.K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,o._)([(0,v.W)()],x.prototype,"instancedDoublePrecision",void 0),(0,o._)([(0,v.W)()],x.prototype,"hasModelTransformation",void 0),m.Y;const T=(0,n.vt)();function b(e,t){const r=t.hasModelTransformation,o=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new p.X("model",(e=>e.modelTransformation??a.zK))),e.vertex.uniforms.add(new f.k("normalLocalOriginFromModel",(e=>((0,i.Ge)(T,e.modelTransformation??a.zK),T))))),t.instanced&&o&&(e.attributes.add(g.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(g.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(g.r.INSTANCEMODEL,"mat3"),e.attributes.add(g.r.INSTANCEMODELNORMAL,"mat3"));const n=e.vertex;o&&(n.include(d.u,t),n.uniforms.add(new h.W("viewOriginHi",((e,t)=>(0,_.Zo)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))),new h.W("viewOriginLo",((e,t)=>(0,_.jA)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))))),n.code.add(m.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?m.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(m.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.V.Normal&&((0,u.S7)(n),n.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&n.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const A=(0,l.vt)()},96336:(e,t,r)=>{r.d(t,{W:()=>o,Y:()=>l});var o,i,n=r(21818),a=r(2597),s=r(46540);function l(e,t){switch(t.normalType){case o.Compressed:e.attributes.add(s.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case o.Attribute:e.attributes.add(s.r.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`);break;case o.ScreenDerivative:e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,n.Xb)(t.normalType);case o.COUNT:case o.Ground:}}(i=o||(o={}))[i.Attribute=0]="Attribute",i[i.Compressed=1]="Compressed",i[i.Ground=2]="Ground",i[i.ScreenDerivative=3]="ScreenDerivative",i[i.COUNT=4]="COUNT"},10764:(e,t,r)=>{r.d(t,{I:()=>n});var o=r(2597),i=r(46540);function n(e){e.attributes.add(i.r.POSITION,"vec3"),e.vertex.code.add(o.H`vec3 positionModel() { return position; }`)}},39014:(e,t,r)=>{r.d(t,{K:()=>l});var o=r(42583),i=r(93588),n=r(2597),a=r(46540),s=r(19245);function l(e,t){t.hasSymbolColors?(e.include(o.A),e.attributes.add(a.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(n.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new i.c("colorMixMode",(e=>s.Um[e.colorMixMode]))),e.vertex.code.add(n.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},53466:(e,t,r)=>{r.d(t,{U:()=>l,q:()=>o});var o,i,n=r(21818),a=r(2597),s=r(46540);function l(e,t){switch(t.textureCoordinateType){case o.Default:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case o.Compressed:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case o.Atlas:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.r.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,n.Xb)(t.textureCoordinateType);case o.None:return void e.vertex.code.add(a.H`void forwardTextureCoordinates() {}`);case o.COUNT:return}}(i=o||(o={}))[i.None=0]="None",i[i.Default=1]="Default",i[i.Atlas=2]="Atlas",i[i.Compressed=3]="Compressed",i[i.COUNT=4]="COUNT"},92700:(e,t,r)=>{r.d(t,{c:()=>n});var o=r(2597),i=r(46540);function n(e,t){t.hasVertexColors?(e.attributes.add(i.r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},72824:(e,t,r)=>{r.d(t,{Mh:()=>u,Zo:()=>h,gy:()=>m});var o=r(21818),i=r(29242),n=r(91829),a=r(96336),s=r(33752),l=r(2597),c=r(98353),d=r(35644);function u(e,t){switch(t.normalType){case a.W.Attribute:case a.W.Compressed:e.include(a.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.W.Ground:e.include(s.em,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?l.H`normalize(vPositionWorldCameraRelative);`:l.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a.W.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,o.Xb)(t.normalType);case a.W.COUNT:}}class h extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,i.vt)()}}class m extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,i.vt)(),this.toMapSpace=(0,n.vt)()}}},33752:(e,t,r)=>{r.d(t,{EM:()=>v,dO:()=>p,em:()=>f});var o=r(29242),i=r(9093),n=r(51850),a=r(10764),s=r(26425),l=r(40710),c=r(33079),d=r(2597),u=r(98353),h=r(35644),m=r(40095);function f(e,t){e.include(a.I);const r=e.vertex;r.include(s.u,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.X("transformProjFromView",(e=>e.transformProjFromView)),new u.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(d.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?d.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends d.Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.vt)(),this.transformWorldFromViewTL=(0,n.vt)(),this.transformViewFromCameraRelativeRS=(0,o.vt)(),this.transformProjFromView=(0,i.vt)()}}class v extends d.Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,o.vt)(),this.transformWorldFromModelTH=(0,n.vt)(),this.transformWorldFromModelTL=(0,n.vt)()}}},99208:(e,t,r)=>{r.d(t,{r:()=>s});var o=r(21818),i=r(53466),n=r(2597);function a(e){e.fragment.code.add(n.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function s(e,t){switch(e.include(i.U,t),t.textureCoordinateType){case i.q.Default:case i.q.Compressed:return void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case i.q.Atlas:return e.include(a),void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,o.Xb)(t.textureCoordinateType);case i.q.None:case i.q.COUNT:return}}},54154:(e,t,r)=>{r.d(t,{G:()=>m});var o=r(87317),i=r(91829),n=r(38954),a=r(51850),s=r(33079),l=r(2597);function c(e){e.vertex.code.add(l.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(l.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(l.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(l.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const d=(0,a.vt)();var u=r(20693),h=r(71988);function m(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new h.E("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:i,screenLength:n}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,o.s)(f,n*s,a,r,i)})))}(r),t.hasScreenSizePerspective&&(e.include(c),function(e){e.uniforms.add(new s.t("screenSizePerspectiveAlignment",(e=>function(e){return(0,n.s)(d,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,u.yu)(e.vertex,t)),r.code.add(l.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const f=(0,i.vt)()},30815:(e,t,r)=>{r.d(t,{E:()=>E});var o=r(46686),i=r(49255),n=r(76591),a=r(76597),s=r(96336),l=r(2597),c=r(46540);function d(e,t){const r=t.output===i.V.ObjectAndLayerIdColor,o=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),o?e.attributes.add(c.r.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(c.r.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(l.H`
     void forwardObjectAndLayerIdColor() {
      ${r?o?l.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:l.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:l.H``} }`),e.fragment.code.add(l.H`
      void outputObjectAndLayerIdColor() {
        ${r?l.H`fragColor = objectAndLayerIdColorVarying;`:l.H``} }`)}var u=r(53466),h=r(72824),m=r(80730);function f(e,t){switch(t.output){case i.V.Shadow:case i.V.ShadowHighlight:case i.V.ShadowExcludeHighlight:case i.V.ViewshedShadow:e.fragment.include(m.U),e.fragment.code.add(l.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}var p=r(91829),v=r(63761);const g=(0,p.fA)(1,1,0,1),_=(0,p.fA)(1,0,1,1);function x(e){e.fragment.uniforms.add(new v.N("depthTexture",((e,t)=>t.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",g).add("unoccludedHighlightFlag","vec4",_),e.fragment.code.add(l.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var T=r(986),b=r(52919),A=r(20693),y=r(89192);function E(e,t){const{vertex:r,fragment:c}=e,m=t.hasColorTexture&&t.alphaDiscardMode!==y.sf.Opaque;switch(t.output){case i.V.Depth:(0,A.NB)(r,t),e.include(a.d,t),e.include(n.HQ,t),e.include(u.U,t),m&&c.uniforms.add(new v.N("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(b.S,t),c.code.add(l.H`
          void main(void) {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case i.V.Shadow:case i.V.ShadowHighlight:case i.V.ShadowExcludeHighlight:case i.V.ViewshedShadow:case i.V.ObjectAndLayerIdColor:(0,A.NB)(r,t),e.include(a.d,t),e.include(u.U,t),e.include(T.A,t),e.include(f,t),e.include(n.HQ,t),e.include(d,t),(0,o.xJ)(e),e.varyings.add("depth","float"),m&&c.uniforms.add(new v.N("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(b.S,t),c.code.add(l.H`
          void main(void) {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===i.V.ObjectAndLayerIdColor?l.H`outputObjectAndLayerIdColor();`:l.H`outputDepth(depth);`}
          }
        `);break;case i.V.Normal:{(0,A.NB)(r,t),e.include(a.d,t),e.include(s.Y,t),e.include(h.Mh,t),e.include(u.U,t),e.include(T.A,t),m&&c.uniforms.add(new v.N("tex",(e=>e.texture))),t.normalType===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const o=t.normalType===s.W.Attribute||t.normalType===s.W.Compressed;r.code.add(l.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${o?l.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:l.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(n.HQ,t),e.include(b.S,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===s.W.ScreenDerivative?l.H`vec3 normal = screenDerivativeNormal(vPositionView);`:l.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case i.V.Highlight:(0,A.NB)(r,t),e.include(a.d,t),e.include(u.U,t),e.include(T.A,t),m&&c.uniforms.add(new v.N("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(n.HQ,t),e.include(b.S,t),e.include(x,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},52540:(e,t,r)=>{r.d(t,{E:()=>s});var o=r(37585),i=r(48163),n=(r(26835),r(47286)),a=r(2597);function s(e){e.uniforms.add(new n.G("zProjectionMap",((e,t)=>function(e){const t=e.projectionMatrix;return(0,o.hZ)(l,t[14],t[10])}(t.camera)))),e.code.add(a.H`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(a.H`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(a.H`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}const l=(0,i.vt)()},77695:(e,t,r)=>{r.d(t,{W:()=>p});var o=r(29242),i=r(48163),n=r(53466),a=r(99208),s=r(62602),l=r(47286),c=r(2597),d=r(35644),u=r(15976),h=r(63761),m=r(46263),f=r(46540);function p(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(f.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==n.q.None&&(e.include(a.r,t),r.uniforms.add(t.pbrTextureBindType===m.c.Pass?new h.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new l.G("scale",(e=>e.scale??i.Un))),r.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??o.zK)))),r.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(c.H`return tangentSpace * rawNormal;
}`))}},3452:(e,t,r)=>{r.d(t,{n:()=>G});var o,i,n,a=r(2597),s=r(63761),l=r(90237),c=r(34727),d=r(97768),u=r(36708),h=r(78659),m=r(10107),f=(r(44208),r(53966),r(87811),r(40608)),p=r(37585);(n=o||(o={}))[n.RED=0]="RED",n[n.RG=1]="RG",n[n.RGBA4=2]="RGBA4",n[n.RGBA=3]="RGBA",n[n.RGBA_MIPMAP=4]="RGBA_MIPMAP",n[n.R16F=5]="R16F",n[n.RGBA16F=6]="RGBA16F",function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(i||(i={}));var v=r(69622),g=r(49186),_=r(89192);let x=class extends v.A{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this._context=null,this._dirty=!0}initialize(){this.addHandles([(0,u.wB)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),u.Vh)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}render(){throw new g.A("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===_.C7.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,t){this._context=t,this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,l._)([(0,m.MZ)({constructOnly:!0})],x.prototype,"view",void 0),(0,l._)([(0,m.MZ)({constructOnly:!0})],x.prototype,"consumes",void 0),(0,l._)([(0,m.MZ)()],x.prototype,"produces",void 0),x=(0,l._)([(0,f.$)("esri.views.3d.webgl.RenderNode")],x);const T=x;var b=r(97220),A=r(84867),y=r(39341),E=r(34886),S=r(95774),M=r(90644);class w extends A.w{initializeProgram(e){return new E.B(e.rctx,w.shader.get().build(),y.D)}initializePipeline(){return(0,M.Ey)({colorWrite:M.wE})}}w.shader=new b.$(S.S,(()=>r.e(9384).then(r.bind(r,59384))));var C=r(48163);class O extends a.Y{constructor(){super(...arguments),this.projScale=1}}class R extends O{constructor(){super(...arguments),this.intensity=1}}class I extends a.Y{}class N extends I{constructor(){super(...arguments),this.blurSize=(0,C.vt)()}}var P=r(15581);class L extends A.w{initializeProgram(e){return new E.B(e.rctx,L.shader.get().build(),y.D)}initializePipeline(){return(0,M.Ey)({colorWrite:M.wE})}}L.shader=new b.$(P.S,(()=>r.e(191).then(r.bind(r,90191))));var H=r(63907),D=r(21231),B=r(67171);const F=2;let z=class extends T{constructor(e){super(e),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=(0,h.l5)(0),this._passParameters=new R,this._drawParameters=new N}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new B.R;t.wrapMode=H.pF.CLAMP_TO_EDGE,t.pixelFormat=H.Ab.RGB,t.wrapMode=H.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new D.g(this.renderingContext,t,e),this._ssaoTechnique=this.techniques.acquire(L),this._blurTechnique=this.techniques.acquire(w),this.addHandles((0,u.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,h.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,d.WD)(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(e){const t=this.bindParameters,r=e.find((({name:e})=>"normals"===e)),i=r?.getTexture(),n=r?.getTexture(H.nI),a=this.fboCache,s=t.camera,l=s.fullViewport[2],d=s.fullViewport[3],u=Math.round(l/F),m=Math.round(d/F);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=(0,h.l5)(performance.now()),this.requestRender(),a.acquire(u,m,"ssao",o.RED);0===this._enableTime&&(this._enableTime=(0,h.l5)(performance.now()));const f=this.renderingContext,v=this.view.qualitySettings.fadeDuration,g=s.relativeElevation,x=(0,c.qE)((5e5-g)/2e5,0,1),T=v>0?Math.min(v,performance.now()-this._enableTime)/v:1,b=T*x;this._passParameters.normalTexture=i,this._passParameters.depthTexture=n,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*V/(0,P.g)(s)**6*b;const A=a.acquire(l,d,"ssao input",o.RG);f.unbindTexture(A.fbo.colorTexture),f.bindFramebuffer(A.fbo),f.setViewport(0,0,l,d),f.bindTechnique(this._ssaoTechnique,t,this._passParameters,this._drawParameters),f.screen.draw();const y=a.acquire(u,m,"ssao blur",o.RED);f.unbindTexture(y.fbo.colorTexture),f.bindFramebuffer(y.fbo),this._drawParameters.colorTexture=A.getTexture(),(0,p.hZ)(this._drawParameters.blurSize,0,F/d),f.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),f.setViewport(0,0,u,m),f.screen.draw(),A.release();const E=a.acquire(u,m,"ssao",o.RED);return f.unbindTexture(E.fbo.colorTexture),f.bindFramebuffer(E.fbo),f.setViewport(0,0,l,d),f.setClearColor(1,1,1,0),f.clear(H.hn.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=y.getTexture(),(0,p.hZ)(this._drawParameters.blurSize,F/l,0),f.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),f.setViewport(0,0,u,m),f.screen.draw(),f.setViewport4fv(s.fullViewport),y.release(),T<1&&this.requestRender(_.C7.UPDATE),E}};(0,l._)([(0,m.MZ)()],z.prototype,"consumes",void 0),(0,l._)([(0,m.MZ)()],z.prototype,"produces",void 0),(0,l._)([(0,m.MZ)({constructOnly:!0})],z.prototype,"techniques",void 0),(0,l._)([(0,m.MZ)({constructOnly:!0})],z.prototype,"isEnabled",void 0),z=(0,l._)([(0,f.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],z);const V=.5;function G(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new s.N("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/F),r.code.add(a.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(a.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},8881:(e,t,r)=>{r.d(t,{kA:()=>M,a8:()=>E,eU:()=>S});var o=r(21818),i=r(38954),n=r(51850),a=r(87317),s=r(91829),l=r(59469),c=r(33079),d=r(71988),u=r(2597);function h(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,i.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add(new d.E("lightingAmbientSH_R",((e,t)=>(0,a.s)(f,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.E("lightingAmbientSH_G",((e,t)=>(0,a.s)(f,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.E("lightingAmbientSH_B",((e,t)=>(0,a.s)(f,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,i.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.E("lightingAmbientSH_R1",((e,t)=>(0,a.s)(f,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.E("lightingAmbientSH_G1",((e,t)=>(0,a.s)(f,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.E("lightingAmbientSH_B1",((e,t)=>(0,a.s)(f,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.E("lightingAmbientSH_R2",((e,t)=>(0,a.s)(f,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.E("lightingAmbientSH_G2",((e,t)=>(0,a.s)(f,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.E("lightingAmbientSH_B2",((e,t)=>(0,a.s)(f,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==l.A9.Normal&&t.pbrMode!==l.A9.Schematic||r.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,n.vt)(),f=(0,s.vt)();var p=r(3452),v=r(98619),g=r(22393),_=r(89786),x=r(39589),T=r(46263);class b extends x.n{constructor(e,t){super(e,"bool",T.c.Pass,((r,o,i)=>r.setUniform1b(e,t(o,i))))}}var A=r(20304);r(34727),(0,n.vt)();const y=.4;function E(e){e.constants.add("ambientBoostFactor","float",y)}function S(e){e.uniforms.add(new A.m("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function M(e,t){const r=e.fragment;switch(e.include(p.n,t),t.pbrMode!==l.A9.Disabled&&e.include(g.c,t),e.include(h,t),e.include(_.p),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),E(r),S(r),(0,v.Gc)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.O4)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.A9.Disabled:case l.A9.WaterOnIntegratedMesh:case l.A9.Water:e.include(v.qU),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.A9.Normal:case l.A9.Schematic:r.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new A.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new A.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.A9.Schematic||t.hasColorTexture?u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.A9.Simplified:case l.A9.TerrainWithWater:e.include(v.qU),r.code.add(u.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,o.Xb)(t.pbrMode);case l.A9.COUNT:}}(0,n.vt)()},98619:(e,t,r)=>{r.d(t,{Gc:()=>n,O4:()=>a,qU:()=>s});var o=r(33079),i=r(2597);function n(e){e.uniforms.add(new o.t("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new o.t("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){n(e.fragment),a(e.fragment),e.fragment.code.add(i.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},51343:(e,t,r)=>{r.d(t,{Q:()=>a});var o=r(52540),i=r(2597),n=r(63761);function a(e,t){if(!t.multipassEnabled)return;e.fragment.include(o.E),e.fragment.uniforms.add(new n.N("terrainDepthTexture",((e,t)=>t.multipassTerrain.depth?.attachment)));const r=t.occlusionPass;e.fragment.code.add(i.H`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?i.H`return fragmentDepth < linearDepth && depth < 1.0;`:i.H`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}},62602:(e,t,r)=>{r.d(t,{W:()=>o,r:()=>s});var o,i,n=r(21818),a=r(2597);function s(e,t){const r=e.fragment;switch(r.code.add(a.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case o.None:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case o.View:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case o.WindingOrder:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Xb)(t.doubleSidedMode);case o.COUNT:}}(i=o||(o={}))[i.None=0]="None",i[i.View=1]="View",i[i.WindingOrder=2]="WindingOrder",i[i.COUNT=3]="COUNT"},22393:(e,t,r)=>{r.d(t,{c:()=>s});var o=r(2597);function i(e){const t=e.fragment.code;t.add(o.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(o.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(o.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var n=r(59469),a=r(89786);function s(e,t){const r=e.fragment.code;e.include(a.p),t.pbrMode!==n.A9.Normal&&t.pbrMode!==n.A9.Schematic&&t.pbrMode!==n.A9.Simplified&&t.pbrMode!==n.A9.TerrainWithWater||(r.add(o.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(o.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==n.A9.Normal&&t.pbrMode!==n.A9.Schematic||(e.include(i),r.add(o.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(o.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(o.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(o.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},59469:(e,t,r)=>{r.d(t,{A9:()=>o,_Z:()=>h});var o,i,n=r(99208),a=r(40710),s=r(33079),l=r(2597),c=r(15976),d=r(63761),u=r(46263);function h(e,t){const r=e.fragment,i=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===o.Normal&&i&&e.include(n.r,t),t.pbrMode!==o.Schematic)if(t.pbrMode!==o.Disabled){if(t.pbrMode===o.Normal){r.code.add(l.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===u.c.Pass?new d.N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new c.o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(l.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===u.c.Pass?new d.N("texEmission",(e=>e.textureEmissive)):new c.o("texEmission",(e=>e.textureEmissive))),r.code.add(l.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===u.c.Pass?new d.N("texOcclusion",(e=>e.textureOcclusion)):new c.o("texOcclusion",(e=>e.textureOcclusion))),r.code.add(l.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`),e===u.c.Pass?r.uniforms.add(new s.t("emissionFactor",(e=>e.emissiveFactor)),new s.t("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new a.W("emissionFactor",(e=>e.emissiveFactor)),new a.W("mrrFactors",(e=>e.mrrFactors))),r.code.add(l.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?l.H`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?l.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?l.H`applyEmission(${t.hasEmissiveTextureTransform?l.H`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?l.H`applyOcclusion(${t.hasOcclusionTextureTransform?l.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(l.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}r(25634),(i=o||(o={}))[i.Disabled=0]="Disabled",i[i.Normal=1]="Normal",i[i.Schematic=2]="Schematic",i[i.Water=3]="Water",i[i.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",i[i.Simplified=5]="Simplified",i[i.TerrainWithWater=6]="TerrainWithWater",i[i.COUNT=7]="COUNT"},89786:(e,t,r)=>{r.d(t,{p:()=>i});var o=r(2597);function i(e){e.vertex.code.add(o.H`const float PI = 3.141592653589793;`),e.fragment.code.add(o.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},25618:(e,t,r)=>{r.d(t,{Bz:()=>m,G:()=>h}),r(9093),r(51850);var o=r(80730),i=r(71988),n=r(93588),a=r(2597),s=r(39589),l=r(46263);class c extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Draw,((r,o,i,n)=>r.setUniformMatrix4fv(e,t(o,i,n))),r)}}class d extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Pass,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))),r)}}var u=r(63761);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function f(e){const t=e.fragment;t.include(o.U),t.uniforms.add(new u.N("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new n.c("numCascades",((e,t)=>t.shadowMap.numCascades)),new i.E("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}a.Y,a.Y},51406:(e,t,r)=>{r.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var o=r(29242),i=r(53466),n=r(2597),a=r(35644);function s(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new a.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??o.zK))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(n.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==i.q.None?(e.vertex.uniforms.add(new a.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??o.zK))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(n.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==i.q.None?(e.vertex.uniforms.add(new a.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??o.zK))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(n.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==i.q.None?(e.vertex.uniforms.add(new a.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??o.zK))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(n.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==i.q.None?(e.vertex.uniforms.add(new a.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??o.zK))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(n.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardMetallicRoughnessUV(){}`)}},986:(e,t,r)=>{r.d(t,{A:()=>A});var o=r(33079),i=r(39589),n=r(46263);class a extends i.n{constructor(e,t,r){super(e,"vec4",n.c.Pass,((r,o,i)=>r.setUniform4fv(e,t(o,i))),r)}}class s extends i.n{constructor(e,t,r){super(e,"float",n.c.Pass,((r,o,i)=>r.setUniform1fv(e,t(o,i))),r)}}var l=r(2597),c=r(35644),d=r(46540),u=(r(44208),r(34727),r(77690),r(29242),r(58083),r(9093)),h=(r(38954),r(51850)),m=(r(31756),r(90237)),f=r(69622),p=r(10107),v=(r(53966),r(87811),r(40608));let g=class extends f.A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};var _,x,T;(0,m._)([(0,p.MZ)()],g.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LABELS_SHOW_BORDER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TEXT_SHOW_BASELINE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TEXT_SHOW_BORDER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"SHOW_POI",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LINE_WIREFRAMES",void 0),g=(0,m._)([(0,v.$)("esri.views.3d.support.debugFlags")],g),new g,(T=_||(_={}))[T.Undefined=0]="Undefined",T[T.DefinedSize=1]="DefinedSize",T[T.DefinedScale=2]="DefinedScale",function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(x||(x={})),l.Y,(0,u.vt)(),(0,h.vt)(),(0,u.vt)(),r(14903);const b=8;function A(e,t){const{vertex:r,attributes:i}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&i.add(d.r.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new o.t("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new o.t("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new o.t("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new o.t("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.k("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new o.t("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",b),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),b),new a("vvColorColors",(e=>e.vvColor.colors),b)),r.code.add(l.H`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?l.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},35093:(e,t,r)=>{r.d(t,{H:()=>o,y:()=>i});const o=.1,i=.001},52919:(e,t,r)=>{r.d(t,{S:()=>c});var o=r(35093),i=r(2597);function n(e){e.fragment.code.add(i.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${i.H.float(o.y)}) { discard; } }
  `)}var a=r(39589);r(46263),a.n;var s=r(20304),l=r(89192);function c(e,t){!function(e,t,r){const o=e.fragment;switch(t.alphaDiscardMode!==l.sf.Mask&&t.alphaDiscardMode!==l.sf.MaskBlend||o.uniforms.add(r),t.alphaDiscardMode){case l.sf.Blend:return e.include(n);case l.sf.Opaque:o.code.add(i.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case l.sf.Mask:o.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case l.sf.MaskBlend:e.fragment.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new s.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},34845:(e,t,r)=>{r.d(t,{Ir:()=>d});var o=r(37585),i=r(48163),n=r(87317),a=r(91829),s=r(47286),l=r(71988),c=r(2597);function d(e){e.fragment.uniforms.add(new l.E("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,n.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,n.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.G("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?(0,o.hZ)(h,0,1):(0,o.hZ)(h,1,0)}(t.camera)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.vt)(),h=(0,i.vt)()},26425:(e,t,r)=>{r.d(t,{u:()=>i});var o=r(2597);function i({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(o.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(o.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},37077:(e,t,r)=>{r.d(t,{N:()=>a});var o=r(66104),i=r(2597);function n(e){e.code.add(i.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(n),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(o.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(o.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(o.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(o.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(o.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},80730:(e,t,r)=>{r.d(t,{U:()=>i});var o=r(2597);function i(e){e.code.add(o.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},26835:(e,t,r)=>{r(2597)},20693:(e,t,r)=>{r.d(t,{yu:()=>m,NB:()=>f,S7:()=>g});var o=r(58083),i=r(9093),n=r(38954),a=r(51850),s=r(40710),l=r(33079),c=(r(20304),r(39589)),d=r(46263);class u extends c.n{constructor(e,t){super(e,"mat4",d.c.Draw,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))))}}var h=r(40095);function m(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.uY):e.uniforms.add(new s.W("cameraPosition",((e,t)=>(0,n.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function f(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new h.X("proj",((e,t)=>t.camera.projectionMatrix)),new u("view",((e,t)=>(0,o.Tl)(p,t.camera.viewMatrix,e.origin))),new s.W("localOrigin",(e=>e.origin)));const r=e=>(0,n.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new h.X("proj",((e,t)=>t.camera.projectionMatrix)),new h.X("view",((e,t)=>(0,o.Tl)(p,t.camera.viewMatrix,r(t)))),new l.t("localOrigin",((e,t)=>r(t))))}const p=(0,i.vt)(),v=(0,a.vt)();function g(e){e.uniforms.add(new h.X("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},68259:(e,t,r)=>{r.d(t,{t:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"vec2",i.c.Draw,((r,o,i,n)=>r.setUniform2fv(e,t(o,i,n))))}}},47286:(e,t,r)=>{r.d(t,{G:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"vec2",i.c.Pass,((r,o,i)=>r.setUniform2fv(e,t(o,i))))}}},40710:(e,t,r)=>{r.d(t,{W:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"vec3",i.c.Draw,((r,o,i,n)=>r.setUniform3fv(e,t(o,i,n))))}}},33079:(e,t,r)=>{r.d(t,{t:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"vec3",i.c.Pass,((r,o,i)=>r.setUniform3fv(e,t(o,i))))}}},71988:(e,t,r)=>{r.d(t,{E:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"vec4",i.c.Pass,((r,o,i)=>r.setUniform4fv(e,t(o,i))))}}},20304:(e,t,r)=>{r.d(t,{m:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"float",i.c.Pass,((r,o,i)=>r.setUniform1f(e,t(o,i))))}}},93588:(e,t,r)=>{r.d(t,{c:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"int",i.c.Pass,((r,o,i)=>r.setUniform1i(e,t(o,i))))}}},98353:(e,t,r)=>{r.d(t,{h:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"mat3",i.c.Draw,((r,o,i)=>r.setUniformMatrix3fv(e,t(o,i))))}}},35644:(e,t,r)=>{r.d(t,{k:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"mat3",i.c.Pass,((r,o,i)=>r.setUniformMatrix3fv(e,t(o,i))))}}},40095:(e,t,r)=>{r.d(t,{X:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"mat4",i.c.Pass,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))))}}},85977:(e,t,r)=>{r.d(t,{N5:()=>l});var o=r(49186),i=(r(44208),r(53966)),n=r(46263),a=r(620);class s{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class l extends s{constructor(){super(...arguments),this.vertex=new u,this.fragment=new u,this.attributes=new h,this.varyings=new m,this.extensions=new f,this.constants=new v,this.outputs=new p}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),o=this.varyings.generateSource(e),i="vertex"===e?this.vertex:this.fragment,n=i.uniforms.generateSource(),a=i.code.generateSource(),s="vertex"===e?_:g,l=this.constants.generateSource().concat(i.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}\n\n${c.join("\n")}\n\n${a.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),o=r.length;return(t,i)=>{for(let n=0;n<o;++n)r[n](e,t,i)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),o=r.length;return(t,i,n)=>{for(let a=0;a<o;++a)r[a](e,t,i,n)}}}class c{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new o.A(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else i.A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder").error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class u extends s{constructor(){super(...arguments),this.uniforms=new c(this),this.code=new d(this),this.constants=new v}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.vA)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,o)=>t.push("vertex"===e?`out ${r} ${o};`:`in ${r} ${o};`))),t}}class f{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?f.ALLOWLIST_VERTEX:f.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}f.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],f.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=new Map}add(e,t,r=0){const o=this._entries.get(r);o?(0,a.vA)(o.name===e&&o.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:p.DEFAULT_NAME,type:p.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}p.DEFAULT_TYPE="vec4",p.DEFAULT_NAME="fragColor";class v{constructor(){this._entries=new Set}add(e,t,r){let o="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":o=v._numberToFloatStr(r);break;case"int":o=v._numberToIntStr(r);break;case"bool":o=r.toString();break;case"vec2":o=`vec2(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])})`;break;case"vec3":o=`vec3(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])},                            ${v._numberToFloatStr(r[2])})`;break;case"vec4":o=`vec4(${v._numberToFloatStr(r[0])},                            ${v._numberToFloatStr(r[1])},                            ${v._numberToFloatStr(r[2])},                            ${v._numberToFloatStr(r[3])})`;break;case"ivec2":o=`ivec2(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])})`;break;case"ivec3":o=`ivec3(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])},                             ${v._numberToIntStr(r[2])})`;break;case"ivec4":o=`ivec4(${v._numberToIntStr(r[0])},                             ${v._numberToIntStr(r[1])},                             ${v._numberToIntStr(r[2])},                             ${v._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${t}(${Array.prototype.map.call(r,(e=>v._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${o};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const g="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",_="precision highp float;\nprecision highp sampler2D;"},15976:(e,t,r)=>{r.d(t,{o:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"sampler2D",i.c.Draw,((r,o,i)=>r.bindTexture(e,t(o,i))))}}},63761:(e,t,r)=>{r.d(t,{N:()=>n});var o=r(39589),i=r(46263);class n extends o.n{constructor(e,t){super(e,"sampler2D",i.c.Pass,((r,o,i)=>r.bindTexture(e,t(o,i))))}}},39589:(e,t,r)=>{r.d(t,{n:()=>i});var o=r(46263);class i{constructor(e,t,r,i,n=null){if(this.name=e,this.type=t,this.arraySize=n,this.bind={[o.c.Pass]:null,[o.c.Draw]:null},i)switch(r){case o.c.Pass:this.bind[o.c.Pass]=i;break;case o.c.Draw:this.bind[o.c.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},2597:(e,t,r)=>{r.d(t,{H:()=>i,Y:()=>o});const o=class{};function i(e,...t){let r="";for(let o=0;o<t.length;o++)r+=e[o]+t[o];return r+=e[e.length-1],r}var n;(n=i||(i={})).int=function(e){return Math.round(e).toString()},n.float=function(e){return e.toPrecision(8)}},97220:(e,t,r)=>{r.d(t,{$:()=>o});class o{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},84867:(e,t,r)=>{r.d(t,{w:()=>n});var o=r(97768),i=r(63907);class n{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=(0,o.WD)(this._program),this._pipeline=this._configuration=null}reload(e){(0,o.WD)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return i.WR.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}}},99769:(e,t,r)=>{r.d(t,{K:()=>i,W:()=>n});var o=r(2597);class i extends o.Y{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function n(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const o=t._parameterNames.length-1,i=e.count||2,n=Math.ceil(Math.log2(i)),a=t._parameterBits??[0];let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<n)-1<<l;a[s]+=n,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},69720:(e,t,r)=>{r.d(t,{J:()=>i});var o=r(24326);class i{constructor(){this.id=(0,o.c)()}}},96672:(e,t,r)=>{var o;r.d(t,{X:()=>o}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(o||(o={}))},39341:(e,t,r)=>{r.d(t,{D:()=>i});var o=r(46540);const i=new Map([[o.r.POSITION,0],[o.r.NORMAL,1],[o.r.NORMALCOMPRESSED,1],[o.r.UV0,2],[o.r.COLOR,3],[o.r.COLORFEATUREATTRIBUTE,3],[o.r.SIZE,4],[o.r.TANGENT,4],[o.r.CENTEROFFSETANDDISTANCE,5],[o.r.SYMBOLCOLOR,5],[o.r.FEATUREATTRIBUTE,6],[o.r.INSTANCEFEATUREATTRIBUTE,6],[o.r.INSTANCECOLOR,7],[o.r.OBJECTANDLAYERIDCOLOR,7],[o.r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[o.r.INSTANCEMODEL,8],[o.r.INSTANCEMODELNORMAL,12],[o.r.INSTANCEMODELORIGINHI,11],[o.r.INSTANCEMODELORIGINLO,15]])},25634:(e,t,r)=>{r.d(t,{m:()=>l});var o=r(97768),i=r(74887),n=r(2597),a=r(89192);class s{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(e,t){return this._technique=this._techniques.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Am.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,o.Gz)(this._texture),this._textureNormal=(0,o.Gz)(this._textureNormal),this._textureEmissive=(0,o.Gz)(this._textureEmissive),this._textureOcclusion=(0,o.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,o.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Am.LOADED:a.Am.LOADING}get textureBindParameters(){return new c(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,o.Gz)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,i.$X)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,o.Gz)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends n.Y{constructor(e=null,t=null,r=null,o=null,i=null,n,a){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=o,this.textureMetallicRoughness=i,this.scale=n,this.normalTextureTransformMatrix=a}}},14903:(e,t,r)=>{r.d(t,{im:()=>h,m$:()=>o});var o,i,n=r(51850),a=r(2597),s=r(89192),l=r(69720),c=r(96672),d=r(39341),u=r(19245);class h extends l.J{constructor(e,t){super(),this.type=c.X.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=d.D,this._pp0=(0,n.fA)(0,0,1),this._pp1=(0,n.fA)(0,0,0),this._parameters=(0,u.qu)(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,u.MB)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===s.ID.ON)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,r,o,i,n){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,t,r,this._pp0,this._pp1,i)}}(i=o||(o={}))[i.None=0]="None",i[i.Occlude=1]="Occlude",i[i.Transparent=2]="Transparent",i[i.OccludeAndTransparent=4]="OccludeAndTransparent",i[i.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",i[i.Opaque=16]="Opaque",a.Y},34886:(e,t,r)=>{r.d(t,{B:()=>n});var o=r(3694),i=r(94656);class n{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new o.A({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,i.en)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},14327:(e,t,r)=>{var o;r.d(t,{y:()=>o}),function(e){e[e.ColorAlpha=0]="ColorAlpha",e[e.FrontFace=1]="FrontFace",e[e.NONE=2]="NONE",e[e.COUNT=3]="COUNT"}(o||(o={}))},19245:(e,t,r)=>{r.d(t,{Um:()=>u,qu:()=>l,MB:()=>c,kE:()=>s});var o=r(4576),i=r(34727);function n(e,t,r,o){return function(e,t){return(0,i.Cc)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}(e,function(e,t,r){const o=r.parameters;return a.scale=Math.min(o.divisor/(t-o.offset),1),a.factor=function(e){return Math.abs(e*e*e)}(e),a}(t,r,o))}r(24151),(0,i.kU)(10),(0,i.kU)(12),(0,i.kU)(70),(0,i.kU)(40);const a={scale:0,factor:0,minScaleFactor:0};function s(e,t,r,o,a){let s=(r.screenLength||0)*e.pixelRatio;null!=a&&(s=n(s,o,t,a));const l=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,i.qE)(l*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function l(e,t){const r=t?l(t):{};for(const t in e){let o=e[t];o?.forEach&&(o=d(o)),null==o&&t in r||(r[t]=o)}return r}function c(e,t){let r=!1;for(const i in t){const n=t[i];void 0!==n&&(Array.isArray(n)?null===e[i]?(e[i]=n.slice(),r=!0):(0,o.yo)(e[i],n)&&(r=!0):e[i]!==n&&(r=!0,e[i]=n))}return r}function d(e){const t=[];return e.forEach((e=>t.push(e))),t}const u={multiply:1,ignore:2,replace:3,tint:4}},28449:(e,t,r)=>{function o(e,t){const r=e.length;for(let o=0;o<r;++o)n[0]=e[o],t[o]=n[0];return t}function i(e,t){const r=e.length;for(let o=0;o<r;++o)n[0]=e[o],n[1]=e[o]-n[0],t[o]=n[1];return t}r.d(t,{Zo:()=>o,jA:()=>i});const n=new Float32Array(2)},90644:(e,t,r)=>{r.d(t,{Ey:()=>T,Xt:()=>l,kn:()=>c,p3:()=>n,wE:()=>d});var o=r(89192),i=r(63907);function n(e,t,r,o,n=i.Tb.ADD,a=i.Tb.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:o,opRgb:n,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const a={face:i.Y7.BACK,mode:i.Ac.CCW},s={face:i.Y7.FRONT,mode:i.Ac.CCW},l=e=>e===o.s2.Back?a:e===o.s2.Front?s:null,c={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function u(e){return y.intern(e)}function h(e){return S.intern(e)}function m(e){return w.intern(e)}function f(e){return O.intern(e)}function p(e){return I.intern(e)}function v(e){return P.intern(e)}function g(e){return H.intern(e)}function _(e){return B.intern(e)}function x(e){return z.intern(e)}function T(e){return G.intern(e)}class b{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function A(e){return"["+e.join(",")+"]"}const y=new b(E,(e=>({__tag:"Blending",...e})));function E(e){return e?A([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const S=new b(M,(e=>({__tag:"Culling",...e})));function M(e){return e?A([e.face,e.mode]):null}const w=new b(C,(e=>({__tag:"PolygonOffset",...e})));function C(e){return e?A([e.factor,e.units]):null}const O=new b(R,(e=>({__tag:"DepthTest",...e})));function R(e){return e?A([e.func]):null}const I=new b(N,(e=>({__tag:"StencilTest",...e})));function N(e){return e?A([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const P=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?A([e.zNear,e.zFar]):null}const H=new b(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?A([e.r,e.g,e.b,e.a]):null}const B=new b(F,(e=>({__tag:"StencilWrite",...e})));function F(e){return e?A([e.mask]):null}const z=new b(V,(e=>({__tag:"DrawBuffers",...e})));function V(e){return e?A(e.buffers):null}const G=new b((function(e){return e?A([E(e.blending),M(e.culling),C(e.polygonOffset),R(e.depthTest),N(e.stencilTest),L(e.depthWrite),D(e.colorWrite),F(e.stencilWrite),V(e.drawBuffers)]):null}),(e=>({blending:u(e.blending),culling:h(e.culling),polygonOffset:m(e.polygonOffset),depthTest:f(e.depthTest),stencilTest:p(e.stencilTest),depthWrite:v(e.depthWrite),colorWrite:g(e.colorWrite),stencilWrite:_(e.stencilWrite),drawBuffers:x(e.drawBuffers)})))}}]);