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

/***/ "./src/canvas.ts":
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\n/* harmony import */ var _util_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/Color */ \"./src/util/Color.ts\");\n\r\nclass Canvas {\r\n    constructor(rows, columns, cellSize) {\r\n        //setting vars\r\n        this.cellSize = cellSize;\r\n        this.rows = rows;\r\n        this.columns = columns;\r\n        //setting default value of canvas as black (0)\r\n        for (let y = 0; y < this.rows; y++) {\r\n            for (let x = 0; x < this.columns; x++) {\r\n                this.canvas[x][y] = new _util_Color__WEBPACK_IMPORTED_MODULE_0__.Color();\r\n            }\r\n        }\r\n    }\r\n    //setColorVALS is to set the color value of the canvas pixels without replacing them\r\n    setColorVals(arg) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                this.canvas[x][y].setColorVal(arg[x][y]);\r\n            }\r\n        }\r\n    }\r\n    //setCOLOR on the other hand replaces the canvas with the specified array of colors\r\n    setColors(arg) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                this.canvas[x][y] = arg[x][y];\r\n            }\r\n        }\r\n    }\r\n    //method for renderring the pixels/colors to the screen\r\n    render(ctx) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                var val = this.canvas[x][y].getColorVal();\r\n                ctx.fillStyle = `rgba(${val},${val},${val})`;\r\n                ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);\r\n            }\r\n        }\r\n    }\r\n    //GETTERS\r\n    getCanvasRows() {\r\n        return this.rows;\r\n    }\r\n    getCanvasColumns() {\r\n        return this.columns;\r\n    }\r\n    getCanvasCellSize() {\r\n        return this.cellSize;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy9jYW52YXMudHM/NDg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFxQztBQUU5QixNQUFNLE1BQU07SUFRakIsWUFBWSxJQUFZLEVBQUUsT0FBZSxFQUFFLFFBQWdCO1FBQ3pELGNBQWM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2Qiw4Q0FBOEM7UUFDOUMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFFL0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBRWxDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSw4Q0FBSyxFQUFFLENBQUM7YUFFakM7U0FDRjtJQUNILENBQUM7SUFDRCxvRkFBb0Y7SUFDcEYsWUFBWSxDQUFDLEdBQXlCO1FBRWxDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBRWhDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFDO2dCQUVuQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUUxQztTQUNGO0lBRUwsQ0FBQztJQUNELG1GQUFtRjtJQUNuRixTQUFTLENBQUMsR0FBd0I7UUFFaEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFFL0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBRWxDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBRS9CO1NBQ0Y7SUFFSCxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELE1BQU0sQ0FBQyxHQUE2QjtRQUNsQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUUsRUFBQztZQUUvQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUUsRUFBQztnQkFFbEMsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFbEQsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQzdDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFFN0U7U0FDRjtJQUNILENBQUM7SUFJRCxTQUFTO0lBQ0YsYUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztDQUNGIiwiZmlsZSI6Ii4vc3JjL2NhbnZhcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vdXRpbC9Db2xvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc3tcclxuXHJcblxyXG4gIGNhbnZhczogQXJyYXk8QXJyYXk8Q29sb3I+PjtcclxuICByb3dzOiBudW1iZXI7XHJcbiAgY29sdW1uczogbnVtYmVyO1xyXG4gIGNlbGxTaXplOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJvd3M6IG51bWJlciwgY29sdW1uczogbnVtYmVyLCBjZWxsU2l6ZTogbnVtYmVyKXtcclxuICAgIC8vc2V0dGluZyB2YXJzXHJcbiAgICB0aGlzLmNlbGxTaXplID0gY2VsbFNpemU7XHJcblxyXG4gICAgdGhpcy5yb3dzID0gcm93cztcclxuICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XHJcblxyXG4gICAgLy9zZXR0aW5nIGRlZmF1bHQgdmFsdWUgb2YgY2FudmFzIGFzIGJsYWNrICgwKVxyXG4gICAgZm9yKGxldCB5ID0gMDsgeSA8IHRoaXMucm93czt5Kyspe1xyXG5cclxuICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sdW1uczt4Kyspe1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc1t4XVt5XSA9IG5ldyBDb2xvcigpO1xyXG5cclxuICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICAvL3NldENvbG9yVkFMUyBpcyB0byBzZXQgdGhlIGNvbG9yIHZhbHVlIG9mIHRoZSBjYW52YXMgcGl4ZWxzIHdpdGhvdXQgcmVwbGFjaW5nIHRoZW1cclxuICBzZXRDb2xvclZhbHMoYXJnOiBBcnJheTxBcnJheTxudW1iZXI+Pil7XHJcblxyXG4gICAgICBmb3IodmFyIHkgPSAwOyB5IDwgdGhpcy5yb3dzOyB5Kyspe1xyXG5cclxuICAgICAgICBmb3IodmFyIHggPSAwOyB4IDwgdGhpcy5jb2x1bW5zOyB4Kyspe1xyXG5cclxuICAgICAgICAgIHRoaXMuY2FudmFzW3hdW3ldLnNldENvbG9yVmFsKGFyZ1t4XVt5XSk7XHJcblxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgfVxyXG5cclxuICB9XHJcbiAgLy9zZXRDT0xPUiBvbiB0aGUgb3RoZXIgaGFuZCByZXBsYWNlcyB0aGUgY2FudmFzIHdpdGggdGhlIHNwZWNpZmllZCBhcnJheSBvZiBjb2xvcnNcclxuICBzZXRDb2xvcnMoYXJnOiBBcnJheTxBcnJheTxDb2xvcj4+KXtcclxuXHJcbiAgICBmb3IodmFyIHkgPSAwOyB5IDwgdGhpcy5yb3dzO3krKyl7XHJcblxyXG4gICAgICBmb3IodmFyIHggPSAwOyB4IDwgdGhpcy5jb2x1bW5zO3grKyl7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzW3hdW3ldID0gYXJnW3hdW3ldO1xyXG4gICAgICAgIFxyXG4gICAgICB9ICAgICAgXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy9tZXRob2QgZm9yIHJlbmRlcnJpbmcgdGhlIHBpeGVscy9jb2xvcnMgdG8gdGhlIHNjcmVlblxyXG4gIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCl7XHJcbiAgICBmb3IodmFyIHkgPSAwOyB5IDwgdGhpcy5yb3dzO3krKyl7XHJcblxyXG4gICAgICBmb3IodmFyIHggPSAwOyB4IDwgdGhpcy5jb2x1bW5zO3grKyl7XHJcblxyXG4gICAgICAgIHZhciB2YWw6IG51bWJlciA9IHRoaXMuY2FudmFzW3hdW3ldLmdldENvbG9yVmFsKCk7XHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3ZhbH0sJHt2YWx9LCR7dmFsfSlgO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh4KnRoaXMuY2VsbFNpemUsIHkqdGhpcy5jZWxsU2l6ZSwgdGhpcy5jZWxsU2l6ZSx0aGlzLmNlbGxTaXplKTtcclxuICAgICAgICBcclxuICAgICAgfSAgICAgIFxyXG4gICAgfSBcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAvL0dFVFRFUlNcclxuICBwdWJsaWMgZ2V0Q2FudmFzUm93cygpOiBudW1iZXJ7XHJcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENhbnZhc0NvbHVtbnMoKTogbnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDYW52YXNDZWxsU2l6ZSgpOiBudW1iZXJ7XHJcbiAgICByZXR1cm4gdGhpcy5jZWxsU2l6ZTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/canvas.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.ts\");\n\r\n//SETUP\r\nconst MYCANVAS = document.querySelector('canvas');\r\nconst ctx = MYCANVAS.getContext('2d');\r\nconst WIDTH = 800;\r\nconst HEIGHT = 600;\r\nconst CELLSIZE = 10;\r\nctx.canvas.width = WIDTH;\r\nctx.canvas.height = HEIGHT;\r\n//_________________________\r\n//VARIABLES\r\nvar canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas(HEIGHT / CELLSIZE, WIDTH / CELLSIZE, CELLSIZE);\r\nfunction main() {\r\n    //MAIN CODE HERE\r\n    //_______BACKGROUND_________\r\n    //--------------------------//\r\n    ctx.fillStyle = 'black';\r\n    ctx.fillRect(0, 0, WIDTH, HEIGHT);\r\n    //--------------------------//\r\n    canvas.render(ctx);\r\n    requestAnimationFrame(main);\r\n}\r\nrequestAnimationFrame(main);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy9pbmRleC50cz9mZmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWtDO0FBRWxDLE9BQU87QUFDUCxNQUFNLFFBQVEsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyRSxNQUFNLEdBQUcsR0FBNkIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVoRSxNQUFNLEtBQUssR0FBVyxHQUFHLENBQUM7QUFDMUIsTUFBTSxNQUFNLEdBQVcsR0FBRyxDQUFDO0FBQzNCLE1BQU0sUUFBUSxHQUFXLEVBQUUsQ0FBQztBQUU1QixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzNCLDJCQUEyQjtBQUUzQixXQUFXO0FBQ1gsSUFBSSxNQUFNLEdBQVcsSUFBSSwyQ0FBTSxDQUFDLE1BQU0sR0FBQyxRQUFRLEVBQUUsS0FBSyxHQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUUzRSxTQUFTLElBQUk7SUFDWCxnQkFBZ0I7SUFFaEIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUN4QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLDhCQUE4QjtJQUU5QixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBTW5CLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTlCLENBQUM7QUFFRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xuXG4vL1NFVFVQXG5jb25zdCBNWUNBTlZBUzogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbmNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gTVlDQU5WQVMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY29uc3QgV0lEVEg6IG51bWJlciA9IDgwMDtcbmNvbnN0IEhFSUdIVDogbnVtYmVyID0gNjAwO1xuY29uc3QgQ0VMTFNJWkU6IG51bWJlciA9IDEwO1xuXG5jdHguY2FudmFzLndpZHRoID0gV0lEVEg7XG5jdHguY2FudmFzLmhlaWdodCA9IEhFSUdIVDtcbi8vX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vL1ZBUklBQkxFU1xudmFyIGNhbnZhczogQ2FudmFzID0gbmV3IENhbnZhcyhIRUlHSFQvQ0VMTFNJWkUsIFdJRFRIL0NFTExTSVpFLCBDRUxMU0laRSk7XG5cbmZ1bmN0aW9uIG1haW4oKXtcbiAgLy9NQUlOIENPREUgSEVSRVxuXG4gIC8vX19fX19fX0JBQ0tHUk9VTkRfX19fX19fX19cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIGNhbnZhcy5yZW5kZXIoY3R4KTtcblxuXG5cblxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcblxufVxuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWFpbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/util/Color.ts":
/*!***************************!*\
  !*** ./src/util/Color.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Color\": () => (/* binding */ Color)\n/* harmony export */ });\n//the color class\r\nclass Color {\r\n    constructor(color) {\r\n        if (color) {\r\n            //chacking if the value specified is within the color range\r\n            if (color >= 0 && color <= 255) {\r\n                this.color = color;\r\n            }\r\n            else {\r\n                throw new Error(\"Color value specified exceeds bounds.\");\r\n            }\r\n        }\r\n        else {\r\n            this.color = 127;\r\n        }\r\n    }\r\n    //get the VALUE of the color\r\n    getColorVal() {\r\n        return this.color;\r\n    }\r\n    //get the color OBJECT\r\n    getColor() {\r\n        return this;\r\n    }\r\n    //there is only a color VALUE setter method as I dont think u can change the object itself.. -\\_(^v^)_/-\r\n    setColorVal(val) {\r\n        this.color = val;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy91dGlsL0NvbG9yLnRzPzY0MzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlCQUFpQjtBQUNWLE1BQU0sS0FBSztJQUVkLFlBQVksS0FBYztRQUN0QixJQUFHLEtBQUssRUFBQztZQUNMLDJEQUEyRDtZQUMzRCxJQUFHLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBQztnQkFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDdEI7aUJBQ0c7Z0JBQ0EsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2FBQzVEO1NBQ0o7YUFBSTtZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUNELDRCQUE0QjtJQUNyQixXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQkFBc0I7SUFDZixRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdHQUF3RztJQUNqRyxXQUFXLENBQUMsR0FBVztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDO0NBQ0oiLCJmaWxlIjoiLi9zcmMvdXRpbC9Db2xvci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdGhlIGNvbG9yIGNsYXNzXHJcbmV4cG9ydCBjbGFzcyBDb2xvcntcclxuICAgIHByaXZhdGUgY29sb3I6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGNvbG9yPzogbnVtYmVyKXtcclxuICAgICAgICBpZihjb2xvcil7XHJcbiAgICAgICAgICAgIC8vY2hhY2tpbmcgaWYgdGhlIHZhbHVlIHNwZWNpZmllZCBpcyB3aXRoaW4gdGhlIGNvbG9yIHJhbmdlXHJcbiAgICAgICAgICAgIGlmKGNvbG9yID49IDAgJiYgY29sb3IgPD0gMjU1KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29sb3IgdmFsdWUgc3BlY2lmaWVkIGV4Y2VlZHMgYm91bmRzLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gMTI3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vZ2V0IHRoZSBWQUxVRSBvZiB0aGUgY29sb3JcclxuICAgIHB1YmxpYyBnZXRDb2xvclZhbCgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3I7XHJcbiAgICB9IFxyXG5cclxuICAgIC8vZ2V0IHRoZSBjb2xvciBPQkpFQ1RcclxuICAgIHB1YmxpYyBnZXRDb2xvcigpOiBDb2xvcntcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvL3RoZXJlIGlzIG9ubHkgYSBjb2xvciBWQUxVRSBzZXR0ZXIgbWV0aG9kIGFzIEkgZG9udCB0aGluayB1IGNhbiBjaGFuZ2UgdGhlIG9iamVjdCBpdHNlbGYuLiAtXFxfKF52XilfLy1cclxuICAgIHB1YmxpYyBzZXRDb2xvclZhbCh2YWw6IG51bWJlcik6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHZhbDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/Color.ts\n");

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