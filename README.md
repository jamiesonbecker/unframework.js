unframework.js
==============

unframework.js is my non-massive framework, currently 2.9k. All except background.js require jquery.


[background.js](https://github.com/jamiesonbecker/background.js)

Add a method to have it run every 1/4 second:

    background.runseveryquarter = function(){console.log("logging")}



[formscrape.js](https://github.com/jamiesonbecker/formscrape.js)

Given a form that has data in it, extract all the data into a JSON dictionary:

    var formdata = {};
    $("form").formscrape(formdata);



[formplode.js](https://github.com/jamiesonbecker/formplode.js)

Given a JSON dictionary formdata and an empty form, fill in the input fields (opposite of formscrape):

    $("form").formplode(formdata)



[fillup.js](https://github.com/jamiesonbecker/fillup.js)

Super-simple HTML templating engine:

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

Contains both strict and unstrict HTML safifying according to OWASP standards. You should always safify data fields like message board comments, profile descriptions, posts, signatures, etc before putting it on screen to prevent XSS. Unstrict safify allows certain bare safe HTML such as `<b>` and `<h1>` so your visitors can still use some HTML in their comments. *All data fields that a visitor can edit should be safified.*

    $("p").html($(comment).safify);



