$(document).ready(function() {
    $("#search-filters-icon").click(function () {
        $(".filter-column").slideToggle("slow");
    });
    /*اختيار خيار واحد من كل عمود من صناديق التأشير*/
    $("input:checkbox").click(function () {
        var $box = $(this);

        if ($box.is(":checked")) {
            var group = "input:checkbox[name='" + $box.attr("name")+ "']";
            $(group).prop("checked", false);//تحديد خطأ لجميع صناديق التأشير الموجودة في المجموعة التي لها الاسم الذي جلبناه في السطر السابق
            $box.prop("checked", true);//تحديد صح فقط لصندوق التأشير الذي ضغطنا عليه
        }
    });
});