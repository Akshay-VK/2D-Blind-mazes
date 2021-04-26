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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\n/* harmony import */ var _util_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/Color */ \"./src/util/Color.ts\");\n\r\nclass Canvas {\r\n    constructor(rows, columns, cellSize) {\r\n        //setting vars\r\n        this.cellSize = cellSize;\r\n        this.rows = rows;\r\n        this.columns = columns;\r\n        //setting default value of canvas as black (0)\r\n        this.canvas[0][0] = new _util_Color__WEBPACK_IMPORTED_MODULE_0__.Color();\r\n        // for(let y = 0; y < this.rows;y++){\r\n        //   for(let x = 0; x < this.columns;x++){\r\n        //     console.log(x,y);\r\n        //     this.canvas[x][y] = new Color();\r\n        //   }      \r\n        // }\r\n    }\r\n    //setColorVALS is to set the color value of the canvas pixels without replacing them\r\n    setColorVals(arg) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                this.canvas[x][y].setColorVal(arg[x][y]);\r\n            }\r\n        }\r\n    }\r\n    //setCOLOR on the other hand replaces the canvas with the specified array of colors\r\n    setColors(arg) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                this.canvas[x][y] = arg[x][y];\r\n            }\r\n        }\r\n    }\r\n    //method for renderring the pixels/colors to the screen\r\n    render(ctx) {\r\n        for (var y = 0; y < this.rows; y++) {\r\n            for (var x = 0; x < this.columns; x++) {\r\n                var val = this.canvas[x][y].getColorVal();\r\n                ctx.fillStyle = `rgba(${val},${val},${val})`;\r\n                ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);\r\n            }\r\n        }\r\n    }\r\n    //GETTERS\r\n    getCanvasRows() {\r\n        return this.rows;\r\n    }\r\n    getCanvasColumns() {\r\n        return this.columns;\r\n    }\r\n    getCanvasCellSize() {\r\n        return this.cellSize;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy9jYW52YXMudHM/NDg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFxQztBQUU5QixNQUFNLE1BQU07SUFRakIsWUFBWSxJQUFZLEVBQUUsT0FBZSxFQUFFLFFBQWdCO1FBQ3pELGNBQWM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2Qiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLDhDQUFLLEVBQUUsQ0FBQztRQUNoQyxxQ0FBcUM7UUFFckMsMENBQTBDO1FBQzFDLHdCQUF3QjtRQUV4Qix1Q0FBdUM7UUFFdkMsWUFBWTtRQUNaLElBQUk7SUFDTixDQUFDO0lBQ0Qsb0ZBQW9GO0lBQ3BGLFlBQVksQ0FBQyxHQUF5QjtRQUVsQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBQztZQUVoQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBQztnQkFFbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFFMUM7U0FDRjtJQUVMLENBQUM7SUFDRCxtRkFBbUY7SUFDbkYsU0FBUyxDQUFDLEdBQXdCO1FBRWhDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBRSxFQUFDO1lBRS9CLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxFQUFDO2dCQUVsQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUUvQjtTQUNGO0lBRUgsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxNQUFNLENBQUMsR0FBNkI7UUFDbEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFFL0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBRWxDLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRWxELEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUM3QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBRTdFO1NBQ0Y7SUFDSCxDQUFDO0lBSUQsU0FBUztJQUNGLGFBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxpQkFBaUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRiIsImZpbGUiOiIuL3NyYy9jYW52YXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL3V0aWwvQ29sb3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXN7XHJcblxyXG5cclxuICBjYW52YXM6IENvbG9yW11bXTtcclxuICByb3dzOiBudW1iZXI7XHJcbiAgY29sdW1uczogbnVtYmVyO1xyXG4gIGNlbGxTaXplOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJvd3M6IG51bWJlciwgY29sdW1uczogbnVtYmVyLCBjZWxsU2l6ZTogbnVtYmVyKXtcclxuICAgIC8vc2V0dGluZyB2YXJzXHJcbiAgICB0aGlzLmNlbGxTaXplID0gY2VsbFNpemU7XHJcblxyXG4gICAgdGhpcy5yb3dzID0gcm93cztcclxuICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XHJcblxyXG4gICAgLy9zZXR0aW5nIGRlZmF1bHQgdmFsdWUgb2YgY2FudmFzIGFzIGJsYWNrICgwKVxyXG4gICAgdGhpcy5jYW52YXNbMF1bMF0gPSBuZXcgQ29sb3IoKTtcclxuICAgIC8vIGZvcihsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7eSsrKXtcclxuXHJcbiAgICAvLyAgIGZvcihsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHVtbnM7eCsrKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh4LHkpO1xyXG5cclxuICAgIC8vICAgICB0aGlzLmNhbnZhc1t4XVt5XSA9IG5ldyBDb2xvcigpO1xyXG5cclxuICAgIC8vICAgfSAgICAgIFxyXG4gICAgLy8gfVxyXG4gIH1cclxuICAvL3NldENvbG9yVkFMUyBpcyB0byBzZXQgdGhlIGNvbG9yIHZhbHVlIG9mIHRoZSBjYW52YXMgcGl4ZWxzIHdpdGhvdXQgcmVwbGFjaW5nIHRoZW1cclxuICBzZXRDb2xvclZhbHMoYXJnOiBBcnJheTxBcnJheTxudW1iZXI+Pil7XHJcblxyXG4gICAgICBmb3IodmFyIHkgPSAwOyB5IDwgdGhpcy5yb3dzOyB5Kyspe1xyXG5cclxuICAgICAgICBmb3IodmFyIHggPSAwOyB4IDwgdGhpcy5jb2x1bW5zOyB4Kyspe1xyXG5cclxuICAgICAgICAgIHRoaXMuY2FudmFzW3hdW3ldLnNldENvbG9yVmFsKGFyZ1t4XVt5XSk7XHJcblxyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgfVxyXG5cclxuICB9XHJcbiAgLy9zZXRDT0xPUiBvbiB0aGUgb3RoZXIgaGFuZCByZXBsYWNlcyB0aGUgY2FudmFzIHdpdGggdGhlIHNwZWNpZmllZCBhcnJheSBvZiBjb2xvcnNcclxuICBzZXRDb2xvcnMoYXJnOiBBcnJheTxBcnJheTxDb2xvcj4+KXtcclxuXHJcbiAgICBmb3IodmFyIHkgPSAwOyB5IDwgdGhpcy5yb3dzO3krKyl7XHJcblxyXG4gICAgICBmb3IodmFyIHggPSAwOyB4IDwgdGhpcy5jb2x1bW5zO3grKyl7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzW3hdW3ldID0gYXJnW3hdW3ldO1xyXG4gICAgICAgIFxyXG4gICAgICB9ICAgICAgXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy9tZXRob2QgZm9yIHJlbmRlcnJpbmcgdGhlIHBpeGVscy9jb2xvcnMgdG8gdGhlIHNjcmVlblxyXG4gIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCl7XHJcbiAgICBmb3IodmFyIHkgPSAwOyB5IDwgdGhpcy5yb3dzO3krKyl7XHJcblxyXG4gICAgICBmb3IodmFyIHggPSAwOyB4IDwgdGhpcy5jb2x1bW5zO3grKyl7XHJcblxyXG4gICAgICAgIHZhciB2YWw6IG51bWJlciA9IHRoaXMuY2FudmFzW3hdW3ldLmdldENvbG9yVmFsKCk7XHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3ZhbH0sJHt2YWx9LCR7dmFsfSlgO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh4KnRoaXMuY2VsbFNpemUsIHkqdGhpcy5jZWxsU2l6ZSwgdGhpcy5jZWxsU2l6ZSx0aGlzLmNlbGxTaXplKTtcclxuICAgICAgICBcclxuICAgICAgfSAgICAgIFxyXG4gICAgfSBcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAvL0dFVFRFUlNcclxuICBwdWJsaWMgZ2V0Q2FudmFzUm93cygpOiBudW1iZXJ7XHJcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENhbnZhc0NvbHVtbnMoKTogbnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDYW52YXNDZWxsU2l6ZSgpOiBudW1iZXJ7XHJcbiAgICByZXR1cm4gdGhpcy5jZWxsU2l6ZTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/canvas.ts\n");

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