/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screen_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen/Canvas */ \"./src/screen/Canvas.ts\");\n\r\n//SETUP\r\nconst MYCANVAS = document.querySelector('canvas');\r\nconst ctx = MYCANVAS.getContext('2d');\r\nconst CELLSIZE = 20;\r\nconst WIDTH = window.innerWidth - (window.innerWidth % CELLSIZE);\r\nconst HEIGHT = window.innerHeight - (window.innerHeight % CELLSIZE);\r\nctx.canvas.width = WIDTH;\r\nctx.canvas.height = HEIGHT;\r\n//_________________________\r\n//VARIABLES\r\nvar canvas = new _screen_Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas(HEIGHT / CELLSIZE, WIDTH / CELLSIZE, CELLSIZE);\r\nfunction main() {\r\n    //MAIN CODE HERE\r\n    //_______BACKGROUND_________\r\n    //--------------------------//\r\n    ctx.fillStyle = 'rgba(0,0,0,255)';\r\n    ctx.fillRect(0, 0, WIDTH, HEIGHT);\r\n    //--------------------------//\r\n    canvas.render(ctx);\r\n    requestAnimationFrame(main);\r\n}\r\nrequestAnimationFrame(main);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy9pbmRleC50cz9mZmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQXlDO0FBRXpDLE9BQU87QUFDUCxNQUFNLFFBQVEsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyRSxNQUFNLEdBQUcsR0FBNkIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVoRSxNQUFNLFFBQVEsR0FBVyxFQUFFLENBQUM7QUFDNUIsTUFBTSxLQUFLLEdBQVcsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDekUsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFFNUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMzQiwyQkFBMkI7QUFFM0IsV0FBVztBQUNYLElBQUksTUFBTSxHQUFXLElBQUksa0RBQU0sQ0FBQyxNQUFNLEdBQUMsUUFBUSxFQUFFLEtBQUssR0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFM0UsU0FBUyxJQUFJO0lBQ1gsZ0JBQWdCO0lBRWhCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsR0FBRyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztJQUNsQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLDhCQUE4QjtJQUU5QixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBTW5CLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTlCLENBQUM7QUFFRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhcyB9IGZyb20gXCIuL3NjcmVlbi9DYW52YXNcIjtcblxuLy9TRVRVUFxuY29uc3QgTVlDQU5WQVM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5jb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IE1ZQ0FOVkFTLmdldENvbnRleHQoJzJkJyk7XG5cbmNvbnN0IENFTExTSVpFOiBudW1iZXIgPSAyMDtcbmNvbnN0IFdJRFRIOiBudW1iZXIgPSB3aW5kb3cuaW5uZXJXaWR0aCAtICh3aW5kb3cuaW5uZXJXaWR0aCAlIENFTExTSVpFKTtcbmNvbnN0IEhFSUdIVDogbnVtYmVyID0gd2luZG93LmlubmVySGVpZ2h0IC0gKHdpbmRvdy5pbm5lckhlaWdodCAlIENFTExTSVpFKTtcblxuY3R4LmNhbnZhcy53aWR0aCA9IFdJRFRIO1xuY3R4LmNhbnZhcy5oZWlnaHQgPSBIRUlHSFQ7XG4vL19fX19fX19fX19fX19fX19fX19fX19fX19cblxuLy9WQVJJQUJMRVNcbnZhciBjYW52YXM6IENhbnZhcyA9IG5ldyBDYW52YXMoSEVJR0hUL0NFTExTSVpFLCBXSURUSC9DRUxMU0laRSwgQ0VMTFNJWkUpO1xuXG5mdW5jdGlvbiBtYWluKCl7XG4gIC8vTUFJTiBDT0RFIEhFUkVcblxuICAvL19fX19fX19CQUNLR1JPVU5EX19fX19fX19fXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMjU1KSc7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgY2FudmFzLnJlbmRlcihjdHgpO1xuXG5cblxuXG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1haW4pO1xuXG59XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/screen/Canvas.ts":
/*!******************************!*\
  !*** ./src/screen/Canvas.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\n/* harmony import */ var _util_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Color */ \"./src/util/Color.ts\");\n\r\nclass Canvas {\r\n    constructor(rows, columns, cellSize) {\r\n        //setting vars\r\n        this.cellSize = cellSize;\r\n        this.rows = rows;\r\n        this.columns = columns;\r\n        //setting default value of canvas as black (0)\r\n        this.canvas = new Array(rows * columns);\r\n        //test\r\n        var counter = 0;\r\n        for (let y = 0; y < this.rows; y++) {\r\n            for (let x = 0; x < this.columns; x++) {\r\n                this.canvas[this.getIndex(x, y)] = new _util_Color__WEBPACK_IMPORTED_MODULE_0__.Color(counter);\r\n                //test\r\n                counter = (x + y) % 2 * 255;\r\n            }\r\n        }\r\n    }\r\n    //setColorVALS is to set the color value of the canvas pixels without replacing them\r\n    setColorVals(arg) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                this.canvas[this.getIndex(x, y)].setColorVal(arg[this.getIndex(x, y)]);\r\n            }\r\n        }\r\n    }\r\n    //setCOLOR on the other hand replaces the canvas with the specified array of colors\r\n    setColors(arg) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                this.canvas[this.getIndex(x, y)] = arg[this.getIndex(x, y)];\r\n            }\r\n        }\r\n    }\r\n    //method for renderring the pixels/colors to the screen\r\n    render(ctx) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                var pixel = this.canvas[this.getIndex(x, y)];\r\n                //console.log(this.canvas);\r\n                //console.log(pixel);\r\n                //console.log(pixel.getColorVal());\r\n                var val = pixel.getColorVal();\r\n                if (val == 0) {\r\n                    ctx.fillStyle = 'black';\r\n                }\r\n                else {\r\n                    ctx.fillStyle = `rgba(${val},${val},${val},255)`;\r\n                }\r\n                ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);\r\n            }\r\n        }\r\n    }\r\n    //GETTERS\r\n    getCanvasRows() {\r\n        return this.rows;\r\n    }\r\n    getCanvasColumns() {\r\n        return this.columns;\r\n    }\r\n    getCanvasCellSize() {\r\n        return this.cellSize;\r\n    }\r\n    getIndex(x, y) {\r\n        let index = y * this.columns + x;\r\n        return index;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy9zY3JlZW4vQ2FudmFzLnRzPzc5MTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFFL0IsTUFBTSxNQUFNO0lBUWpCLFlBQVksSUFBWSxFQUFFLE9BQWUsRUFBRSxRQUFnQjtRQUN6RCxjQUFjO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsOENBQThDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQVEsSUFBSSxHQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE1BQU07UUFDTixJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUM7UUFDeEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDL0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLDhDQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JELE1BQU07Z0JBQ04sT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxHQUFHLENBQUM7YUFDdkI7U0FDRjtJQUNILENBQUM7SUFDRCxvRkFBb0Y7SUFDcEYsWUFBWSxDQUFDLEdBQWtCO1FBRTNCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBRWhDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFDO2dCQUVuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFFdEU7U0FDRjtJQUVMLENBQUM7SUFDRCxtRkFBbUY7SUFDbkYsU0FBUyxDQUFDLEdBQWlCO1FBRXpCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBRS9CLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUVsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFFM0Q7U0FDRjtJQUVILENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsTUFBTSxDQUFDLEdBQTZCO1FBQ2xDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBRS9CLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUVsQyxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELDJCQUEyQjtnQkFDM0IscUJBQXFCO2dCQUNyQixtQ0FBbUM7Z0JBRW5DLElBQUksR0FBRyxHQUFXLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFdEMsSUFBRyxHQUFHLElBQUksQ0FBQyxFQUFDO29CQUNWLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2lCQUN6QjtxQkFBSTtvQkFDSCxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztpQkFDbEQ7Z0JBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUVqRjtTQUNGO0lBQ0gsQ0FBQztJQUlELFNBQVM7SUFDRixhQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRU0saUJBQWlCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ00sUUFBUSxDQUFDLENBQVMsRUFBQyxDQUFTO1FBQ2pDLElBQUksS0FBSyxHQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN6QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRiIsImZpbGUiOiIuL3NyYy9zY3JlZW4vQ2FudmFzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi4vdXRpbC9Db2xvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc3tcclxuXHJcblxyXG4gIGNhbnZhczogQ29sb3JbXTtcclxuICByb3dzOiBudW1iZXI7XHJcbiAgY29sdW1uczogbnVtYmVyO1xyXG4gIGNlbGxTaXplOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJvd3M6IG51bWJlciwgY29sdW1uczogbnVtYmVyLCBjZWxsU2l6ZTogbnVtYmVyKXtcclxuICAgIC8vc2V0dGluZyB2YXJzXHJcbiAgICB0aGlzLmNlbGxTaXplID0gY2VsbFNpemU7XHJcblxyXG4gICAgdGhpcy5yb3dzID0gcm93cztcclxuICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XHJcblxyXG4gICAgLy9zZXR0aW5nIGRlZmF1bHQgdmFsdWUgb2YgY2FudmFzIGFzIGJsYWNrICgwKVxyXG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQXJyYXk8Q29sb3I+KHJvd3MqY29sdW1ucyk7XHJcbiAgICAvL3Rlc3RcclxuICAgIHZhciBjb3VudGVyOiBudW1iZXIgPSAwO1xyXG4gICAgZm9yKGxldCB5ID0gMDsgeSA8IHRoaXMucm93czt5Kyspe1xyXG4gICAgICBmb3IobGV0IHggPSAwOyB4IDwgdGhpcy5jb2x1bW5zO3grKyl7XHJcbiAgICAgICAgdGhpcy5jYW52YXNbdGhpcy5nZXRJbmRleCh4LHkpXSA9IG5ldyBDb2xvcihjb3VudGVyKTtcclxuICAgICAgICAvL3Rlc3RcclxuICAgICAgICBjb3VudGVyID0gKHgreSklMioyNTU7XHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vc2V0Q29sb3JWQUxTIGlzIHRvIHNldCB0aGUgY29sb3IgdmFsdWUgb2YgdGhlIGNhbnZhcyBwaXhlbHMgd2l0aG91dCByZXBsYWNpbmcgdGhlbVxyXG4gIHNldENvbG9yVmFscyhhcmc6IEFycmF5PG51bWJlcj4pe1xyXG5cclxuICAgICAgZm9yKHZhciB5ID0gMDsgeSA8IHRoaXMucm93czsgeSsrKXtcclxuXHJcbiAgICAgICAgZm9yKHZhciB4ID0gMDsgeCA8IHRoaXMuY29sdW1uczsgeCsrKXtcclxuXHJcbiAgICAgICAgICB0aGlzLmNhbnZhc1t0aGlzLmdldEluZGV4KHgseSldLnNldENvbG9yVmFsKGFyZ1t0aGlzLmdldEluZGV4KHgseSldKTtcclxuXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gIH1cclxuICAvL3NldENPTE9SIG9uIHRoZSBvdGhlciBoYW5kIHJlcGxhY2VzIHRoZSBjYW52YXMgd2l0aCB0aGUgc3BlY2lmaWVkIGFycmF5IG9mIGNvbG9yc1xyXG4gIHNldENvbG9ycyhhcmc6IEFycmF5PENvbG9yPil7XHJcblxyXG4gICAgZm9yKHZhciB5ID0gMDsgeSA8IHRoaXMucm93czt5Kyspe1xyXG5cclxuICAgICAgZm9yKHZhciB4ID0gMDsgeCA8IHRoaXMuY29sdW1uczt4Kyspe1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc1t0aGlzLmdldEluZGV4KHgseSldID0gYXJnW3RoaXMuZ2V0SW5kZXgoeCx5KV07XHJcbiAgICAgICAgXHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvL21ldGhvZCBmb3IgcmVuZGVycmluZyB0aGUgcGl4ZWxzL2NvbG9ycyB0byB0aGUgc2NyZWVuXHJcbiAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKXtcclxuICAgIGZvcih2YXIgeSA9IDA7IHkgPCB0aGlzLnJvd3M7eSsrKXtcclxuXHJcbiAgICAgIGZvcih2YXIgeCA9IDA7IHggPCB0aGlzLmNvbHVtbnM7eCsrKXtcclxuXHJcbiAgICAgICAgdmFyIHBpeGVsOiBDb2xvciA9IHRoaXMuY2FudmFzW3RoaXMuZ2V0SW5kZXgoeCx5KV07XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwaXhlbCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwaXhlbC5nZXRDb2xvclZhbCgpKTtcclxuXHJcbiAgICAgICAgdmFyIHZhbDogbnVtYmVyID0gcGl4ZWwuZ2V0Q29sb3JWYWwoKTtcclxuXHJcbiAgICAgICAgaWYodmFsID09IDApe1xyXG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2YWx9LCR7dmFsfSwke3ZhbH0sMjU1KWA7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHggKiB0aGlzLmNlbGxTaXplLCB5ICogdGhpcy5jZWxsU2l6ZSwgdGhpcy5jZWxsU2l6ZSx0aGlzLmNlbGxTaXplKTtcclxuICAgICAgICBcclxuICAgICAgfSAgICAgIFxyXG4gICAgfSBcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAvL0dFVFRFUlNcclxuICBwdWJsaWMgZ2V0Q2FudmFzUm93cygpOiBudW1iZXJ7XHJcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENhbnZhc0NvbHVtbnMoKTogbnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDYW52YXNDZWxsU2l6ZSgpOiBudW1iZXJ7XHJcbiAgICByZXR1cm4gdGhpcy5jZWxsU2l6ZTtcclxuICB9XHJcbiAgcHVibGljIGdldEluZGV4KHg6IG51bWJlcix5OiBudW1iZXIpOiBudW1iZXJ7XHJcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IHkgKiB0aGlzLmNvbHVtbnMgKyB4O1xyXG4gICAgcmV0dXJuIGluZGV4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/screen/Canvas.ts\n");

/***/ }),

/***/ "./src/util/Color.ts":
/*!***************************!*\
  !*** ./src/util/Color.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Color\": () => (/* binding */ Color)\n/* harmony export */ });\n//the color class\r\nclass Color {\r\n    constructor(color) {\r\n        if (color) {\r\n            //chacking if the value specified is within the color range\r\n            if (color >= 0 && color <= 255) {\r\n                this.color = color;\r\n            }\r\n            else {\r\n                console.log(\"Color value specified exceeds bounds.\");\r\n            }\r\n        }\r\n        else {\r\n            this.color = 127;\r\n        }\r\n    }\r\n    //get the VALUE of the color\r\n    getColorVal() {\r\n        return this.color;\r\n    }\r\n    //get the color OBJECT\r\n    getColor() {\r\n        return this;\r\n    }\r\n    //there is only a color VALUE setter method as I dont think u can change the object itself.. -\\_(^v^)_/-\r\n    setColorVal(val) {\r\n        this.color = val;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy91dGlsL0NvbG9yLnRzPzY0MzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlCQUFpQjtBQUNWLE1BQU0sS0FBSztJQUVkLFlBQVksS0FBYztRQUN0QixJQUFHLEtBQUssRUFBQztZQUNMLDJEQUEyRDtZQUMzRCxJQUFHLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBQztnQkFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDdEI7aUJBQ0c7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7YUFBSTtZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUNELDRCQUE0QjtJQUNyQixXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQkFBc0I7SUFDZixRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdHQUF3RztJQUNqRyxXQUFXLENBQUMsR0FBVztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDO0NBQ0oiLCJmaWxlIjoiLi9zcmMvdXRpbC9Db2xvci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdGhlIGNvbG9yIGNsYXNzXHJcbmV4cG9ydCBjbGFzcyBDb2xvcntcclxuICAgIHByaXZhdGUgY29sb3I6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGNvbG9yPzogbnVtYmVyKXtcclxuICAgICAgICBpZihjb2xvcil7XHJcbiAgICAgICAgICAgIC8vY2hhY2tpbmcgaWYgdGhlIHZhbHVlIHNwZWNpZmllZCBpcyB3aXRoaW4gdGhlIGNvbG9yIHJhbmdlXHJcbiAgICAgICAgICAgIGlmKGNvbG9yID49IDAgJiYgY29sb3IgPD0gMjU1KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb2xvciB2YWx1ZSBzcGVjaWZpZWQgZXhjZWVkcyBib3VuZHMuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSAxMjc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9nZXQgdGhlIFZBTFVFIG9mIHRoZSBjb2xvclxyXG4gICAgcHVibGljIGdldENvbG9yVmFsKCk6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xvcjtcclxuICAgIH0gXHJcblxyXG4gICAgLy9nZXQgdGhlIGNvbG9yIE9CSkVDVFxyXG4gICAgcHVibGljIGdldENvbG9yKCk6IENvbG9ye1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhlcmUgaXMgb25seSBhIGNvbG9yIFZBTFVFIHNldHRlciBtZXRob2QgYXMgSSBkb250IHRoaW5rIHUgY2FuIGNoYW5nZSB0aGUgb2JqZWN0IGl0c2VsZi4uIC1cXF8oXnZeKV8vLVxyXG4gICAgcHVibGljIHNldENvbG9yVmFsKHZhbDogbnVtYmVyKTogdm9pZHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gdmFsO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/Color.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;