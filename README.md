unframework.js
==============

unframework.js is my non-massive framework, currently about 3k. All except background.js require jquery.

Installation
============

Add to your code:

    <script src="https://raw.github.com/jamiesonbecker/unframework.js/master/unframework.js"></script>


Included Plugins
================

[background.js](https://github.com/jamiesonbecker/background.js)

Add a method to have it run every 1/4 second. Make sure it doesn't block! See source README above for more docs.

    background.sillylogger = function(){
        // fill up your log console fast!
        console.log("logging")
    }



[formscrape.js](https://github.com/jamiesonbecker/formscrape.js)

Extract all form fields in a form into a JSON dictionary, see source README above for more docs:

    var formdata = {};
    $("form").formscrape(formdata);



[formplode.js](https://github.com/jamiesonbecker/formplode.js)

The reverse of formscrape: if you have a JSON dictionary called 'formdata' and an empty form, instantly fill in the input fields:

    $("form").formplode(formdata)



[fillup.js](https://github.com/jamiesonbecker/fillup.js)

Here's a super-simple HTML templating engine that works by copying in a chunk of HTML that's not displayed onto the page where you can modify it without changing the original:

    <div class="contactform1"><div>
    <div style="display:none">
        <div class="contacttemplate-offstage"><form><input name='firstname'/></form></div>
    </div>
    data = {"firstname": "Jamieson"}
    $(".contactform1")
        .fillup("contacttemplate")
        .find("form")
        .formplode(data);


[safify.js](https://github.com/jamiesonbecker/safify.js)

Safify can be run against some text data such as a comment and removes potentially unsafe (XSS) tags. There are both strict and unstrict (leaves some 'safe' tags in, such as <b>) HTML safifying methods and they are written according to the OWASP standards. You should always safify data fields like message board comments, profile descriptions, posts, signatures, etc before putting it on screen to prevent XSS. Unstrict safify allows certain bare safe HTML such as `<b>` and `<h1>` so your visitors can still use some HTML in their comments. *All data fields that a visitor can edit should be safified.*

    $("p").html($(comment).safify);



