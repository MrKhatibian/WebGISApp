"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3049],{93049:(t,n,e)=>{e.d(n,{a:()=>c,b:()=>u,g:()=>o});const r="randomUUID"in crypto;function o(){if(r)return crypto.randomUUID();const t=crypto.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const n=n=>t[n].toString(16).padStart(4,"0");return n(0)+n(1)+"-"+n(2)+"-"+n(3)+"-"+n(4)+"-"+n(5)+n(6)+n(7)}function c(){return`{${o().toUpperCase()}}`}function u(){return`{${o()}}`}}}]);