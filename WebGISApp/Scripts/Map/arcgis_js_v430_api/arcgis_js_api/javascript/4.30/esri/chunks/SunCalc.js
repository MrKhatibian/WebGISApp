// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers"],function(Q,t){var B={exports:{}};(function(R){(function(h){h=h();void 0!==h&&(R.exports=h)})(function(){function h(a){return new Date(864E5*(a+.5-2440588))}function C(a,b){return u(d(a)*f(p)-v(b)*d(p),f(a))}function w(a,b){return D(d(b)*f(p)+f(b)*d(p)*d(a))}function E(a,b,c){return u(d(a),f(a)*d(b)-v(c)*f(b))}function F(a,b,c){return D(d(b)*d(c)+f(b)*f(c)*f(a))}function G(a){return e*(1.9148*d(a)+.02*d(2*a)+3E-4*d(3*a))}function H(a,b){a=e*(357.5291+.98560028*
a);var c=G(a);a=a+c+102.9372*e+m;b||={dec:0,ra:0};b.dec=w(a,0);b.ra=C(a,0);return b}function I(a,b,c){return 2451545+a+.0053*d(b)-.0069*d(2*c)}function J(a){var b=e*(134.963+13.064993*a),c=e*(93.272+13.22935*a);a=e*(218.316+13.176396*a)+6.289*e*d(b);c=5.128*e*d(c);b=385001-20905*f(b);return{ra:C(a,c),dec:w(a,c),dist:b}}var m=Math.PI,d=Math.sin,f=Math.cos,v=Math.tan,D=Math.asin,u=Math.atan2,K=Math.acos,e=m/180,S={dec:0,ra:0},p=23.4397*e,k={PolarException:{NORMAL:0,MIDNIGHT_SUN:1,POLAR_NIGHT:2},getPosition:function(a,
b,c,g){c=e*-c;b*=e;var n=a.valueOf()/864E5-.5+2440588-2451545;a=H(n,S);c=e*(280.16+360.9856235*n)-c-a.ra;g||={azimuth:0,altitude:0};g.azimuth=E(c,b,a.dec);g.altitude=F(c,b,a.dec);return g}},q=[[-.83,"sunrise","sunset"]];k.addTime=function(a,b,c){q.push([a,b,c])};k.getTimes=function(a,b,c){function g(l){var L=x,M=y;l=K((d(l)-d(L)*d(M))/(f(L)*f(M)));return I(9E-4+(l+n)/(2*m)+N,r,z)}var n=e*-c,x=e*b,N=Math.round(a.valueOf()/864E5-.5+2440588-2451545-9E-4-n/(2*m));a=9E-4+(0+n)/(2*m)+N;var r=e*(357.5291+
.98560028*a);b=G(r);var z=r+b+102.9372*e+m,y=w(z,0);a=I(a,r,z);b={solarNoon:h(a),nadir:h(a-.5),polarException:k.PolarException.NORMAL};var O;c=0;for(O=q.length;c<O;c+=1){var A=q[c];var P=g(A[0]*e);var T=a-(P-a);b[A[1]]=h(T);b[A[2]]=h(P)}b.polarException=function(l){l=(d(l)-d(x)*d(y))/(f(x)*f(y));return-1>l?k.PolarException.MIDNIGHT_SUN:1<l?k.PolarException.POLAR_NIGHT:k.PolarException.NORMAL}(q[0][0]*e);return b};k.getMoonPosition=function(a,b,c){c=e*-c;b*=e;var g=a.valueOf()/864E5-.5+2440588-2451545;
a=J(g);c=e*(280.16+360.9856235*g)-c-a.ra;g=F(c,b,a.dec);g+=.017*e/v(g+10.26*e/(g+5.1*e));return{azimuth:E(c,b,a.dec),altitude:g,distance:a.dist}};k.getMoonFraction=function(a){var b=a.valueOf()/864E5-.5+2440588-2451545;a=H(b);b=J(b);a=K(d(a.dec)*d(b.dec)+f(a.dec)*f(b.dec)*f(a.ra-b.ra));a=u(149598E3*d(a),b.dist-149598E3*f(a));return(1+f(a))/2};return k})})(B);t=t.getDefaultExportFromCjs(B.exports);Q.SunCalc=t});