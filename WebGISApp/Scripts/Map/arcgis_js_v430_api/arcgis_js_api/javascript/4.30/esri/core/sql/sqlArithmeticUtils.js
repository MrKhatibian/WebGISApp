// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../arcade/featureset/support/errorsupport","./sqlDateParsingUtils","./SqlInterval","./StandardizedFunctions"],function(f,d,e,g,ja){function h(c,b,a){switch(a){case "+":return c+b;case "-":return c-b;case "*":return c*b;case "/":return c/b}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function k(c,b,a){switch(a){case "+":return b.plus({milliseconds:c.valueInMilliseconds()});case "-":return c.valueInMilliseconds()-b.toMillis()}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);
}function l(c,b,a){switch(a){case "+":return b.plus("milliseconds",c.valueInMilliseconds())}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function m(c,b,a){switch(a){case "+":return b.plus("milliseconds",c.valueInMilliseconds())}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function n(c,b,a){switch(a){case "+":return c.plus("milliseconds",b.valueInMilliseconds());case "-":return c.plus("milliseconds",-1*b.valueInMilliseconds())}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);
}function p(c,b,a){switch(a){case "+":return b.addMilliseconds(c.valueInMilliseconds())}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function q(c,b,a){switch(a){case "+":return g.SqlInterval.createFromMilliseconds(c.valueInMilliseconds()+b.valueInMilliseconds());case "-":return g.SqlInterval.createFromMilliseconds(c.valueInMilliseconds()-b.valueInMilliseconds());case "*":return g.SqlInterval.createFromMilliseconds(c.valueInMilliseconds()*b.valueInMilliseconds());case "/":return g.SqlInterval.createFromMilliseconds(c.valueInMilliseconds()/
b.valueInMilliseconds())}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function r(c,b,a){switch(a){case "+":return g.SqlInterval.createFromMilliseconds(c.valueInMilliseconds()+b);case "-":return g.SqlInterval.createFromMilliseconds(c.valueInMilliseconds()-b);case "*":return g.SqlInterval.createFromMilliseconds(c.valueInMilliseconds()*b);case "/":return g.SqlInterval.createFromMilliseconds(c.valueInMilliseconds()/b)}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function t(c,b,a){switch(a){case "+":return g.SqlInterval.createFromMilliseconds(c+
b.valueInMilliseconds());case "-":return g.SqlInterval.createFromMilliseconds(c-b.valueInMilliseconds());case "*":return g.SqlInterval.createFromMilliseconds(c*b.valueInMilliseconds());case "/":return g.SqlInterval.createFromMilliseconds(c/b.valueInMilliseconds())}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function u(c,b,a){switch(a){case "+":return c.plus("milliseconds",b.valueInMilliseconds());case "-":return c.plus("milliseconds",-1*b.valueInMilliseconds())}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);
}function v(c,b,a){switch(a){case "+":return c.plus({milliseconds:b.valueInMilliseconds()});case "-":return c.minus({milliseconds:b.valueInMilliseconds()})}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function w(c,b,a){switch(a){case "+":return c.addMilliseconds(b.valueInMilliseconds());case "-":return c.addMilliseconds(-1*b.valueInMilliseconds())}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function x(c,b,a){b*=864E5;switch(a){case "+":return c.plus({milliseconds:b});case "-":return c.minus({milliseconds:b})}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);
}function y(c,b,a){b*=864E5;switch(a){case "+":return c.plus("milliseconds",b);case "-":return c.plus("milliseconds",-1*b)}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function z(c,b,a){b*=864E5;switch(a){case "+":return c.plus("milliseconds",b);case "-":return c.plus("milliseconds",-1*b)}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function A(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function B(c,b,a){b*=864E5;switch(a){case "+":return c.addMilliseconds(b);
case "-":return c.addMilliseconds(-1*b)}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function C(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function D(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function E(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function F(c,b,a){b=parseFloat(b);if(isNaN(b))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);return h(c,b,a)}function G(c,b,a){c=parseFloat(c);if(isNaN(c))throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);
return h(c,b,a)}function H(c,b,a){switch(a){case "+":return c+b}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function I(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function J(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function K(c,b,a){switch(a){case "-":return c.toDateTimeLuxon(b.zone).diff(b).as("days")}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function L(c,b,a){switch(a){case "-":return c.toDateTimeLuxon(b.toDateTime().zone).diff(b.toDateTime()).as("days")}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);
}function M(c,b,a){switch(a){case "-":return c.toDateTimeLuxon("UTC").diff(b.toDateTimeLuxon("UTC")).as("days")}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function N(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function O(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function P(c,b,a){switch(a){case "-":return c.toDateTime().diff(b.toDateTimeLuxon(c.toDateTime().zone)).as("days")}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function Q(c,b,a){switch(a){case "-":return c.toDateTime().diff(b).as("days")}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);
}function R(c,b,a){switch(a){case "-":return c.toDateTime().diff(b.toDateTime()).as("days")}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function S(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function T(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function U(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function V(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function W(c,b,a){switch(a){case "-":return c.diff(b).as("days")}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);
}function X(c,b,a){switch(a){case "-":return c.diff(b.toDateTimeLuxon(c.zone)).as("days")}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function Y(c,b,a){switch(a){case "-":return c.diff(b.toDateTime()).as("days")}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function Z(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function aa(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function ba(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function ca(c,
b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function da(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function ea(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function fa(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function ha(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}function ia(c,b,a){throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);}f.calculateDateOnlyAndDateOnly=M;f.calculateDateOnlyAndDateTime=K;f.calculateDateOnlyAndNumber=
y;f.calculateDateOnlyAndSqlInterval=u;f.calculateDateOnlyAndString=aa;f.calculateDateOnlyAndTimeOnly=N;f.calculateDateOnlyAndTimestamp=L;f.calculateDateTimeAndDateOnly=X;f.calculateDateTimeAndDateTime=W;f.calculateDateTimeAndNumber=x;f.calculateDateTimeAndSqlInterval=v;f.calculateDateTimeAndString=ca;f.calculateDateTimeAndTimeOnly=Z;f.calculateDateTimeAndTimestamp=Y;f.calculateNumberAndDateOnly=E;f.calculateNumberAndDateTime=A;f.calculateNumberAndNumber=h;f.calculateNumberAndSqlInterval=t;f.calculateNumberAndString=
F;f.calculateNumberAndTimeOnly=D;f.calculateNumberAndTimestamp=C;f.calculateSqlIntervalAndDateOnly=m;f.calculateSqlIntervalAndDateTime=k;f.calculateSqlIntervalAndNumber=r;f.calculateSqlIntervalAndSqlInterval=q;f.calculateSqlIntervalAndString=I;f.calculateSqlIntervalAndTimeOnly=l;f.calculateSqlIntervalAndTimestamp=p;f.calculateStringAndDateOnly=fa;f.calculateStringAndDateTime=ha;f.calculateStringAndNumber=G;f.calculateStringAndSqlInterval=J;f.calculateStringAndString=H;f.calculateStringAndTimeOnly=
ea;f.calculateStringAndTimestamp=ia;f.calculateTimeOnlyAndDateOnly=T;f.calculateTimeOnlyAndDateTime=S;f.calculateTimeOnlyAndNumber=z;f.calculateTimeOnlyAndSqlInterval=n;f.calculateTimeOnlyAndString=ba;f.calculateTimeOnlyAndTimeOnly=V;f.calculateTimeOnlyAndTimestamp=U;f.calculateTimestampAndDateOnly=P;f.calculateTimestampAndDateTime=Q;f.calculateTimestampAndNumber=B;f.calculateTimestampAndSqlInterval=w;f.calculateTimestampAndString=da;f.calculateTimestampAndTimeOnly=O;f.calculateTimestampAndTimestamp=
R;f.sqlCalculateFunction=function(c,b,a,ka){if("||"===c)return ja.evaluateFunction("concat",[b,a],ka);if(null===b||null===a)return null;if(e.isNumber(b)){if(e.isNumber(a))return h(b,a,c);if(e.isSqlInterval(a))return t(b,a,c);if(e.isTimeOnly(a))return D();if(e.isDateOnly(a))return E();if(e.isTimestampOffset(a))return C();if(e.isDateTime(a))return A();if(e.isString(a))return F(b,a,c)}else if(e.isDateOnly(b)){if(e.isNumber(a))return y(b,a,c);if(e.isSqlInterval(a))return u(b,a,c);if(e.isTimeOnly(a))return N();
if(e.isDateOnly(a))return M(b,a,c);if(e.isTimestampOffset(a))return L(b,a,c);if(e.isDateTime(a))return K(b,a,c);if(e.isString(a))return aa()}else if(e.isTimeOnly(b)){if(e.isNumber(a))return z(b,a,c);if(e.isSqlInterval(a))return n(b,a,c);if(e.isTimeOnly(a))return V();if(e.isDateOnly(a))return T();if(e.isTimestampOffset(a))return U();if(e.isDateTime(a))return S();if(e.isString(a))return ba()}else if(e.isSqlInterval(b)){if(e.isNumber(a))return r(b,a,c);if(e.isSqlInterval(a))return q(b,a,c);if(e.isTimeOnly(a))return l(b,
a,c);if(e.isDateOnly(a))return m(b,a,c);if(e.isTimestampOffset(a))return p(b,a,c);if(e.isDateTime(a))return k(b,a,c);if(e.isString(a))return I()}else if(e.isDateTime(b)){if(e.isNumber(a))return x(b,a,c);if(e.isSqlInterval(a))return v(b,a,c);if(e.isTimeOnly(a))return Z();if(e.isDateOnly(a))return X(b,a,c);if(e.isTimestampOffset(a))return Y(b,a,c);if(e.isDateTime(a))return W(b,a,c);if(e.isString(a))return ca()}else if(e.isTimestampOffset(b)){if(e.isNumber(a))return B(b,a,c);if(e.isSqlInterval(a))return w(b,
a,c);if(e.isTimeOnly(a))return O();if(e.isDateOnly(a))return P(b,a,c);if(e.isTimestampOffset(a))return R(b,a,c);if(e.isDateTime(a))return Q(b,a,c);if(e.isString(a))return da()}else if(e.isString(b)){if(e.isNumber(a))return G(b,a,c);if(e.isSqlInterval(a))return J();if(e.isTimeOnly(a))return ea();if(e.isDateOnly(a))return fa();if(e.isTimestampOffset(a))return ia();if(e.isDateTime(a))return ha();if(e.isString(a))return H(b,a,c)}throw new d.SqlError(d.SqlErrorCodes.InvalidOperator);};Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});