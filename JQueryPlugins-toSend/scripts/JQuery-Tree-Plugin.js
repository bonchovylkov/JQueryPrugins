
(function ($) {
    $.fn.makeTree = function () {
        var elements = this;
        console.log(this);
        console.log($(this).children());
        $(this).children().find("ul").addClass("hidden");
        $(this).find("a").on("click", showChildren);

        function showChildren() {
            //(this) means the clicked element!
            if ($(this).next().hasClass("hidden")) {
                hideAllExpand(this);
                $(this).next().removeClass("hidden");
                $(this).next().addClass("expand");
            }
            else {
                $(this).next().removeClass("expand");
                $(this).next().addClass("hidden");
            }
            
        }

        function hideAllExpand(clickedElement) {
            $("ul .expand").removeClass("expand").addClass("hidden");
            $(clickedElement).next().parent().parent().removeClass("hidden").addClass("expand");

        }

        return this;
    }
}(jQuery));

$("#tree").makeTree();



//test with hide and show..

//(function ($) {
//    $.fn.makeTree = function () {
//        var elements = this;
//        console.log(this);
//        console.log($(this).children());
//        $(this).children().find("ul").addClass("hidden yes");
//        $(this).find("a").on("click", showChildren);
//        function showChildren() {
//            //(this) means the clicked element!
//            if ($(this).next().hasClass("yes")) {
//                hideAllExpand(this);
//                $(this).next().removeClass("yes");
//                $(this).next().removeClass("no");
//                $(this).next().show(1000);
//            }
//            else {
//                $(this).next().removeClass("no");
//                $(this).next().addClass("yes");
//                $(this).next().hide(1000);
//            }

//        }

//        function hideAllExpand(clickedElement) {
//            $("ul .no").removeClass("no").addClass("yes").hide(1000);
//            $(clickedElement).next().parent().parent().removeClass("yes").addClass("no").show(1000);

//        }

//        return this;
//    }
//}(jQuery));

//$("#tree").makeTree();