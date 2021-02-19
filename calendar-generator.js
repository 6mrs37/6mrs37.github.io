function dealWithColorChange(event) {
    const columnNum = event.data;
    colorsDoubled = "";
    for (let i = 1; i < columns + 1; i++) {
        colorsDoubled += ", " + $("#color" + i).val();
        colorsDoubled += ", " + $("#color" + i).val();
    }
    $("h1").css("background-image", "linear-gradient(to right" + colorsDoubled + ")");
    console.log("linear-gradient(to right" + colorsDoubled + ")");
    for (let monthNum = columnNum - 1; monthNum < 12; monthNum += columns) {
        $("." + months[monthNum] + " td.normal").css("color", $("#color" + columnNum).val());
        $("." + months[monthNum] + " td.faded").css("color", $("#color" + columnNum).val() + "50");
        $("." + months[monthNum] + " th").css("background-color", $("#color" + columnNum).val());
    }
}

function dealWithChangeInNumberOfColumns() {
    columns = $("#numberOfColumns").val() * 1; // *1 converts to int
    $(".color-selector").css("width", 100/columns + "%");
    for (let columnNum = 1; columnNum < columns + 1; columnNum++) {
        $("#color" + columnNum).show();
        $("#label" + columnNum).show();
        dealWithColorChange({data: columnNum});
    }
    for (let columnNum = columns + 1; columnNum < maxColumns + 1; columnNum++) {
        $("#color" + columnNum).hide();
        $("#label" + columnNum).hide();
    }
    $("table").css("width", 100 / columns + "%");
    $("th").css("font-size", 15 / columns + "vw");
    $("td").css("font-size", 9 / columns + "vw");
    

}

let columns;
const maxColumns = 6;
const months = [
	'jan', 
	'feb', 
	'mar', 
	'apr', 
	'may', 
	'jun', 
	'jul', 
	'aug', 
	'sep', 
	'oct', 
	'nov', 
	'dec'
];

for (let columnNum = 1; columnNum < maxColumns + 1; columnNum++) {
    $("#color" + columnNum).on("input", columnNum, dealWithColorChange);
}

dealWithChangeInNumberOfColumns();
$("#numberOfColumns").on('input', dealWithChangeInNumberOfColumns);
