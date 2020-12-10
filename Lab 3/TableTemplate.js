"use strict";
function TableTemplate() {

}

TableTemplate.fillIn = function(id, dict, columnName) {
	var tableElem = document.getElementById(id);
	var headerElem = tableElem.rows.item(0);
    tableElem.style.visibility = "visible";
    var colNum;
    var numRows = tableElem.rows.length;
	var numCols = headerElem.cells.length;
	for (let j = 0; j < numCols; j++) {
		var currColName = headerElem.cells.item(j).innerHTML;
		var template = new Cs142TemplateProcessor(currColName);
		var filledCurrColName = template.fillIn(dict);
        headerElem.cells.item(j).innerHTML = filledCurrColName;
        if (filledCurrColName === columnName) {
            colNum = j;
        }
    }
    

	if (!columnName) {
		for (let i = 1; i < numRows; i++) {
			for (let j = 0; j < numCols; j++) {
				var curCell = tableElem.rows.item(i).cells.item(j);
				var curTemplate = new Cs142TemplateProcessor(curCell.innerHTML);
				var filledCurCell = curTemplate.fillIn(dict);
				curCell.innerHTML = filledCurCell;
			}
		}
	}
	else{
		for (let i = 1; i < numRows; i++) {
			var cell = tableElem.rows.item(i).cells.item(colNum);
			var temp = new Cs142TemplateProcessor(cell.innerHTML);
			var filled = temp.fillIn(dict);
			cell.innerHTML = filled;
		}
	}
};