/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("const CANVAS = document.querySelector('canvas');\r\nconst ctx = CANVAS.getContext('2d');\r\nconst WIDTH = 800;\r\nconst HEIGHT = 600;\r\nctx.canvas.width = WIDTH;\r\nctx.canvas.height = HEIGHT;\r\nvar t = 0;\r\nfunction main() {\r\n    //MAIN CODE HERE\r\n    ctx.fillStyle = 'black';\r\n    ctx.fillRect(0, 0, WIDTH, HEIGHT);\r\n    ctx.fillStyle = 'white';\r\n    ctx.fillRect(t % WIDTH, 50, 50, 50);\r\n    t++;\r\n    requestAnimationFrame(main);\r\n}\r\nrequestAnimationFrame(main);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1ibGluZC1tYXplcy8uL3NyYy9pbmRleC50cz9lOTRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDQU5WQVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuY29uc3QgY3R4ID0gQ0FOVkFTLmdldENvbnRleHQoJzJkJyk7XHJcbmNvbnN0IFdJRFRIID0gODAwO1xyXG5jb25zdCBIRUlHSFQgPSA2MDA7XHJcbmN0eC5jYW52YXMud2lkdGggPSBXSURUSDtcclxuY3R4LmNhbnZhcy5oZWlnaHQgPSBIRUlHSFQ7XHJcbnZhciB0ID0gMDtcclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICAgIC8vTUFJTiBDT0RFIEhFUkVcclxuICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XHJcbiAgICBjdHguZmlsbFJlY3QodCAlIFdJRFRILCA1MCwgNTAsIDUwKTtcclxuICAgIHQrKztcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcclxufVxyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWFpbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;