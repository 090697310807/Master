$.each($("[data-download-count=true]"), function (i, e) {
    var elem = $(e).parent().find("#download-count").addClass("mbtloading");
    var id = $(e).closest(".post-body").siblings("a[name]").attr("name") + &quot;-&quot; + $(e).attr("id");
                          var downloadStats = new Firebase(&quot;https://hippomu-31123.firebaseio.com/downloads/id/&quot; + id);
    var data = {}, isnew = false;
    downloadStats.once("value", function (snapshot) {
        data = snapshot.val();
        if (data == null) {
            data = {};
            data.value = 0;
            data.url = window.location.href;
            data.id = id;
            isnew = true;
        }
        elem.removeClass("mbtloading").text(data.value);
    });
    $(e).click(function (e) {
        data.value++;
        if (isnew) downloadStats.set(data);
        else downloadStats.child("value").set(data.value);
    });
});
