/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{d as r}from"./calcite-input-time-picker.js";import"../widgets/Widget.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./form.js";import"./dom.js";import"./guid.js";import"./interactive.js";import"./key.js";import"./label2.js";import"./component.js";import"./loadable.js";import"./locale2.js";import"./observers.js";import"./focusTrapComponent.js";import"./t9n.js";import"./math.js";import"./icon.js";import"./openCloseComponent.js";import"./Validation.js";import"./action.js";import"./loader.js";import"./input-message.js";import"./input-text.js";import"./input.js";import"./progress.js";import"./popover.js";import"./floating-ui.js";import"./debounce.js";import"./Heading2.js";import"./FloatingArrow.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */
var t={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function(r,t){return r%10>=1&&r%10<=4&&(r%100<10||r%100>=20)?r%10==1?t[0]:t[1]:t[2]},relativeTimeFormatter:function(r,e,o,i){var s=t.words[o];if(1===o.length)return"y"===o&&e?"jedna godina":i||e?s[0]:s[1];var m=t.correctGrammarCase(r,s);return"yy"===o&&e&&"%d godinu"===m?r+" godina":m.replace("%d",r)}},e={name:"sr",weekdays:"Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:"Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),monthsShort:"Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),weekStart:1,relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:t.relativeTimeFormatter,mm:t.relativeTimeFormatter,h:t.relativeTimeFormatter,hh:t.relativeTimeFormatter,d:t.relativeTimeFormatter,dd:t.relativeTimeFormatter,M:t.relativeTimeFormatter,MM:t.relativeTimeFormatter,y:t.relativeTimeFormatter,yy:t.relativeTimeFormatter},ordinal:function(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};r.locale(e,null,!0);export{e as default};