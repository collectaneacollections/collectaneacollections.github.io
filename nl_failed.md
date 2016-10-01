---
layout: post
title: Something went wrong
---

Something went wrong
==========

There was an error with your subscription: <span id="reason"></span>

<script type="text/javascript">
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
document.getElementById("reason").innerHTML=getParameterByName("reason");
</script>
