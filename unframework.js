;// unframework.js
// Copyright (c) 2013 Jamieson Becker (MIT)
// https://github.com/jamiesonbecker/unframework.js
$.fn.formplode = function(data){
var form = this; $.each(data, function(name, value){
var inp = $("[name='" + name + "']", form);
if (inp.attr("type") === "radio"){$("[type='radio'][value='" + value + "']").attr("checked", "")}
else if (inp.attr("type") === "checkbox"){if (value === true) inp.attr("checked", ""); else inp.removeAttr("checked")}
else {inp.val(value)}
}); return form}
$.fn.formscrape = function(data){var form = this;
$("[type=checkbox], [type=radio]", this).each(function(){var name = $(this).attr("name");delete data[name]});
$.each($(form).serializeArray(), function(i, field){data[field.name] = field.value});
$("[type=checkbox]". this).each(function(){var name = $(this).attr("name");data[name] = name in data}); return form}
$.fn.fillup = function(src){return $(this).empty().html($("<div/>").addClass(src.slice(1)).html($(src + "-offstage").children().clone(false)))}
var background = {};
(run_background_tasks = function(){
for (var taskname in background){background[taskname]()}
setTimeout(run_background_tasks, 250)})();
function strict_safify(htm){return (htm||"").replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;').replace(/\//g,'&#x2F;').replace(/\n/g,'<br>')}
function safify(htm) {
return strict_safify(htm)
.replace(/&lt;b&gt;/gi, " <b> ")
.replace(/&lt;&#x2F;b&gt;/gi, " </b> ")
.replace(/&lt;strong&gt;/gi, " <strong> ")
.replace(/&lt;&#x2F;strong&gt;/gi, " </strong> ")
.replace(/&lt;em&gt;/gi, " <em> ")
.replace(/&lt;&#x2F;em&gt;/gi, " </em> ")
.replace(/&lt;i&gt;/gi, " <i> ")
.replace(/&lt;&#x2F;i&gt;/gi, " </i> ")
.replace(/&lt;li&gt;/gi, " <li> ")
.replace(/&lt;&#x2F;li&gt;/gi, " </li> ")
.replace(/&lt;ul&gt;/gi, " <ul> ")
.replace(/&lt;&#x2F;ul&gt;/gi, " </ul> ")
.replace(/&lt;ol&gt;/gi, " <ol> ")
.replace(/&lt;&#x2F;ol&gt;/gi, " </ol> ")
.replace(/&lt;h1&gt;/gi, " <h1> ")
.replace(/&lt;&#x2F;h1&gt;/gi, " </h1> ")
.replace(/&lt;h2&gt;/gi, " <h2> ")
.replace(/&lt;&#x2F;h2&gt;/gi, " </h2> ")
.replace(/&lt;h3&gt;/gi, " <h3> ")
.replace(/&lt;&#x2F;h3&gt;/gi, " </h3> ")
.replace(/&lt;h4&gt;/gi, " <h4> ")
.replace(/&lt;&#x2F;h4&gt;/gi, " </h4> ")
.replace(/&lt;h5&gt;/gi, " <h5> ")
.replace(/&lt;&#x2F;h5&gt;/gi, " </h5> ")
.replace(/&lt;h6&gt;/gi, " <h6> ")
.replace(/&lt;&#x2F;h6&gt;/gi, " </h6> ")
.replace(/&lt;table&gt;/gi, " <table> ")
.replace(/&lt;&#x2F;table&gt;/gi, " </table> ")
.replace(/&lt;tr&gt;/gi, " <tr> ")
.replace(/&lt;&#x2F;tr&gt;/gi, " </tr> ")
.replace(/&lt;td&gt;/gi, " <td> ")
.replace(/&lt;&#x2F;td&gt;/gi, " </td> ")
.replace(/&lt;p&gt;/gi, " <p> ")
.replace(/&lt;&#x2F;p&gt;/gi, " </p> ")
.replace(/&lt;br&gt;/gi, " <br> ")}
function unstrict_safify(htm){return (htm || "").replace(/<br>/g,'\n').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&#x2F;/g,'/')}
$.fn.safify = function(evil){this.html(safify(evil));return this}
$.fn.strict_safify = function(evil){this.html(strict_safify(evil));return this}
