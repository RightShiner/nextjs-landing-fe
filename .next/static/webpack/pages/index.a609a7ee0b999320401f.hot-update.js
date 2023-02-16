webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Workspace_work_public_html_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Workspace_work_public_html_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Workspace_work_public_html_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Workspace_work_public_html_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _misc_ButtonPrimary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./misc/ButtonPrimary */ "./components/misc/ButtonPrimary.js");




var _jsxFileName = "D:\\Workspace\\work\\public_html\\components\\Hero.js",
    _this = undefined,
    _s = $RefreshSig$();





var Hero = function Hero(_ref) {
  _s();

  var _ref$listUser = _ref.listUser,
      listUser = _ref$listUser === void 0 ? [{
    name: "Users",
    number: "390",
    icon: "/assets/Icon/heroicons_sm-user.svg"
  }, {
    name: "Locations",
    number: "20",
    icon: "/assets/Icon/gridicons_location.svg"
  }, {
    name: "Server",
    number: "50",
    icon: "/assets/Icon/bx_bxs-server.svg"
  }] : _ref$listUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      firstname = _useState[0],
      setFirstname = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      lastname = _useState2[0],
      setLastname = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      birthdate = _useState3[0],
      setBirthdate = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      requirements = _useState5[0],
      setRequirements = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      occupation = _useState6[0],
      setOccupation = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      whatsap = _useState7[0],
      setWhatsap = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      country = _useState8[0],
      setCountry = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      duration = _useState9[0],
      setDuration = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      revenue = _useState10[0],
      setRevenue = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      flg = _useState11[0],
      setFlg = _useState11[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(D_Workspace_work_public_html_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Workspace_work_public_html_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      return D_Workspace_work_public_html_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setFirstname(event.target.firstname.value);
              setLastname(event.target.lastname.value);
              setBirthdate(event.target.birthdate.value);
              setEmail(event.target.email.value);
              setRequirements(event.target.requirements.value); //   lastname: event.target.lastname.value,
              //   birthdate: event.target.birthdate.value,
              //   email: event.target.email.value,
              //   requirements: event.target.requirements.value,
              // };
              // Send the data to the server in JSON format.
              // const JSONdata = JSON.stringify(data);
              // API endpoint where we send form data.
              // const endpoint = "http://localhost:8000/api/register/";
              // Form the request for sending data to the server.
              // const options = {
              // The method is POST because we are sending data.
              // method: "POST",
              // Tell the server we're sending JSON.
              // headers: {
              // "Content-Type": "application/json",
              // },
              // Body of the request is the JSON data we created above.
              // body: JSONdata,
              // };
              // console.log(options);
              // Send the form data to our forms API on Vercel and get a response.
              // const response = await fetch(endpoint, options);
              // fetch(endpoint, options)
              //   .then((res) => res.json())
              //   .catch((err) => console.log(err));
              // Get the response data from server as JSON.
              // If server returns the name submitted, that means the form works.
              // const result = await response.json();
              //console.log(result.status);
              // if (result.status == "success") {

              setFlg(1);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSubmit2 = /*#__PURE__*/function () {
    var _ref3 = Object(D_Workspace_work_public_html_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Workspace_work_public_html_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      var data, JSONdata, endpoint, options, response, result;
      return D_Workspace_work_public_html_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              data = {
                firstname: firstname,
                lastname: lastname,
                birthdate: birthdate,
                email: email,
                requirements: requirements,
                occupation: event.target.occupation.value,
                whatsap: event.target.whatsap.value,
                country: event.target.country.value,
                duration: event.target.duration.value,
                revenue: event.target.revenue.value
              };
              JSONdata = JSON.stringify(data);
              endpoint = "https://freudentag-shop.com/public/api/register2";
              options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSONdata
              };
              console.log(JSONdata);
              _context2.next = 8;
              return fetch(endpoint, options);

            case 8:
              response = _context2.sent;
              _context2.next = 11;
              return response.json();

            case 11:
              result = _context2.sent;

              if (result.status == "success") {
                setFlg(2);
              }

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit2(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "max-w-screen-xl mt-24 px-8 xl:px-4 mx-auto",
    id: "about",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: " flex flex-col justify-center items-start row-start-2 sm:row-start-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
          className: "text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal",
          children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "text-black-500 mt-4 mb-6",
          children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "flex w-full",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "h-full w-full",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
              src: "/assets/Illustration1.png",
              alt: "VPN Illustrasi",
              quality: 100,
              width: 612,
              height: 383,
              layout: "responsive"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "p-4",
        children: [flg != 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "flex flex-col justify-center items-center rounded-xl py-4 px-6 lg:px-16 xl:px-20 border border-gray-500 shadow shadow-lg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "w-full max-w-xs",
            children: [flg == 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
              onSubmit: handleSubmit,
              className: "bg-white  rounded pt-6 pb-8 mb-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
                  className: "text-2xl form-title p-4 text-center font-medium text-black-600 leading-normal",
                  children: "PERSONAL INFO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
                  className: "text-1xl form-title p-4 pt-0 text-center font-medium text-black-600 leading-normal",
                  children: "Lorem ipsum dolor sit amet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  className: "shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "firstname",
                  type: "text",
                  placeholder: "First name",
                  value: firstname,
                  onChange: function onChange(e) {
                    setFirstname(e.target.value);
                  },
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  className: "shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "lastname",
                  type: "text",
                  placeholder: "Last name",
                  value: lastname,
                  onChange: function onChange(e) {
                    setLastname(e.target.value);
                  },
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-4",
                children: " Birth date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-4 datebox",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  type: "date",
                  className: "shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "birthdate",
                  placeholder: "Birth date",
                  value: birthdate,
                  onChange: function onChange(e) {
                    setBirthdate(e.target.value);
                  },
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  className: "shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "email",
                  type: "email",
                  placeholder: "Email",
                  value: email,
                  onChange: function onChange(e) {
                    setEmail(e.target.value);
                  },
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  className: "shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "requirements",
                  type: "text",
                  placeholder: "Requirements",
                  value: requirements,
                  onChange: function onChange(e) {
                    setRequirements(e.target.value);
                  },
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                  className: "font-medium tracking-wide py-2 px-5 sm:px-8 border-none text-white-500 bg-green-500 outline-none rounded-lg",
                  type: "submit",
                  children: "Continue"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 19
            }, _this), flg == 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
              onSubmit: handleSubmit2,
              className: "bg-white  rounded pt-6 pb-8 mb-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
                  className: "text-2xl form-title p-4 text-center font-medium text-black-600 leading-normal",
                  children: "PERSONAL INFO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
                  className: "text-1xl form-title p-4 pt-0 text-center font-medium text-black-600 leading-normal",
                  children: "Lorem ipsum dolor sit amet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  className: "shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "occupation",
                  type: "text",
                  placeholder: "Occupation",
                  value: occupation,
                  onChange: function onChange(e) {
                    setOccupation(e.target.value);
                  },
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  className: "shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "whatsap",
                  type: "text",
                  placeholder: "whatsap number",
                  value: whatsap,
                  onChange: function onChange(e) {
                    setWhatsap(e.target.value);
                  },
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  className: "shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "country",
                  type: "text",
                  placeholder: "Country",
                  value: country,
                  onChange: function onChange(e) {
                    setCountry(e.target.value);
                  },
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  className: "shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "duration",
                  type: "text",
                  placeholder: "Duration",
                  value: duration,
                  onChange: function onChange(e) {
                    setDuration(e.target.value);
                  },
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                  className: "shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "revenue",
                  type: "text",
                  placeholder: "Revenue",
                  value: revenue,
                  onChange: function onChange(e) {
                    setRevenue(e.target.value);
                  },
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 304,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "flex items-center justify-center mt-8",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                  className: "font-medium tracking-wide py-2 px-5 sm:px-8 border-none text-white-500 bg-green-500 outline-none rounded-lg",
                  type: "submit",
                  children: "Continue"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 317,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, _this), flg == 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "flex flex-col justify-center items-center rounded-xl py-4 px-6 lg:px-16 xl:px-20",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal w-full max-w-xs",
            children: "Welcome"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "relative w-full flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10",
        children: listUser.map(function (listUsers, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "flex mx-auto w-40 sm:w-auto",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                  src: listUsers.icon,
                  className: "h-6 w-6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 347,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 346,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                  className: "text-xl text-black-600 font-bold",
                  children: [listUsers.number, "+"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                  className: "text-lg text-black-500",
                  children: listUsers.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 353,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 345,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0",
        style: {
          filter: "blur(114px)"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 5
  }, _this);
};

_s(Hero, "v+EbUGV3VHwKW3fI0JWGsTUrxVw=");

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvLmpzIl0sIm5hbWVzIjpbIkhlcm8iLCJsaXN0VXNlciIsIm5hbWUiLCJudW1iZXIiLCJpY29uIiwidXNlU3RhdGUiLCJmaXJzdG5hbWUiLCJzZXRGaXJzdG5hbWUiLCJsYXN0bmFtZSIsInNldExhc3RuYW1lIiwiYmlydGhkYXRlIiwic2V0QmlydGhkYXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInJlcXVpcmVtZW50cyIsInNldFJlcXVpcmVtZW50cyIsIm9jY3VwYXRpb24iLCJzZXRPY2N1cGF0aW9uIiwid2hhdHNhcCIsInNldFdoYXRzYXAiLCJjb3VudHJ5Iiwic2V0Q291bnRyeSIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJyZXZlbnVlIiwic2V0UmV2ZW51ZSIsImZsZyIsInNldEZsZyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdDIiLCJkYXRhIiwiSlNPTmRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZW5kcG9pbnQiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJzdGF0dXMiLCJlIiwibWFwIiwibGlzdFVzZXJzIiwiaW5kZXgiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9Ba0JQO0FBQUE7O0FBQUEsMkJBakJKQyxRQWlCSTtBQUFBLE1BakJKQSxRQWlCSSw4QkFqQk8sQ0FDVDtBQUNFQyxRQUFJLEVBQUUsT0FEUjtBQUVFQyxVQUFNLEVBQUUsS0FGVjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQURTLEVBTVQ7QUFDRUYsUUFBSSxFQUFFLFdBRFI7QUFFRUMs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QTtBQUFBO0FBQUEseUJBREYsZUFJRTtBQUFHLDJCQUFTLEVBQUMsd0JBQWI7QUFBQSw0QkFBdUNpRCxTQUFTLENBQUNsRDtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixhQUVPbUQsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXFCRTtBQUNFLGlCQUFTLEVBQUMsbUdBRFo7QUFFRSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1TkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5UEQsQ0F6V0Q7O0dBQU10RCxJOztLQUFBQSxJO0FBMldTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNjA5YTdlZTBiOTk5MzIwNDAxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgQnV0dG9uUHJpbWFyeSBmcm9tIFwiLi9taXNjL0J1dHRvblByaW1hcnlcIjtcclxuXHJcbmNvbnN0IEhlcm8gPSAoe1xyXG4gIGxpc3RVc2VyID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlVzZXJzXCIsXHJcbiAgICAgIG51bWJlcjogXCIzOTBcIixcclxuICAgICAgaWNvbjogXCIvYXNzZXRzL0ljb24vaGVyb2ljb25zX3NtLXVzZXIuc3ZnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkxvY2F0aW9uc1wiLFxyXG4gICAgICBudW1iZXI6IFwiMjBcIixcclxuICAgICAgaWNvbjogXCIvYXNzZXRzL0ljb24vZ3JpZGljb25zX2xvY2F0aW9uLnN2Z1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTZXJ2ZXJcIixcclxuICAgICAgbnVtYmVyOiBcIjUwXCIsXHJcbiAgICAgIGljb246IFwiL2Fzc2V0cy9JY29uL2J4X2J4cy1zZXJ2ZXIuc3ZnXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pID0+IHtcclxuICBjb25zdCBbZmlyc3RuYW1lLCBzZXRGaXJzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhc3RuYW1lLCBzZXRMYXN0bmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYmlydGhkYXRlLCBzZXRCaXJ0aGRhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVxdWlyZW1lbnRzLCBzZXRSZXF1aXJlbWVudHNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29jY3VwYXRpb24sIHNldE9jY3VwYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3doYXRzYXAsIHNldFdoYXRzYXBdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvdW50cnksIHNldENvdW50cnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmV2ZW51ZSwgc2V0UmV2ZW51ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2ZsZywgc2V0RmxnXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0Rmlyc3RuYW1lKGV2ZW50LnRhcmdldC5maXJzdG5hbWUudmFsdWUpO1xyXG4gICAgc2V0TGFzdG5hbWUoZXZlbnQudGFyZ2V0Lmxhc3RuYW1lLnZhbHVlKTtcclxuICAgIHNldEJpcnRoZGF0ZShldmVudC50YXJnZXQuYmlydGhkYXRlLnZhbHVlKTtcclxuICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC5lbWFpbC52YWx1ZSk7XHJcbiAgICBzZXRSZXF1aXJlbWVudHMoZXZlbnQudGFyZ2V0LnJlcXVpcmVtZW50cy52YWx1ZSk7XHJcblxyXG4gICAgLy8gICBsYXN0bmFtZTogZXZlbnQudGFyZ2V0Lmxhc3RuYW1lLnZhbHVlLFxyXG4gICAgLy8gICBiaXJ0aGRhdGU6IGV2ZW50LnRhcmdldC5iaXJ0aGRhdGUudmFsdWUsXHJcbiAgICAvLyAgIGVtYWlsOiBldmVudC50YXJnZXQuZW1haWwudmFsdWUsXHJcbiAgICAvLyAgIHJlcXVpcmVtZW50czogZXZlbnQudGFyZ2V0LnJlcXVpcmVtZW50cy52YWx1ZSxcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gU2VuZCB0aGUgZGF0YSB0byB0aGUgc2VydmVyIGluIEpTT04gZm9ybWF0LlxyXG4gICAgLy8gY29uc3QgSlNPTmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgIC8vIEFQSSBlbmRwb2ludCB3aGVyZSB3ZSBzZW5kIGZvcm0gZGF0YS5cclxuICAgIC8vIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlZ2lzdGVyL1wiO1xyXG5cclxuICAgIC8vIEZvcm0gdGhlIHJlcXVlc3QgZm9yIHNlbmRpbmcgZGF0YSB0byB0aGUgc2VydmVyLlxyXG4gICAgLy8gY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIC8vIFRoZSBtZXRob2QgaXMgUE9TVCBiZWNhdXNlIHdlIGFyZSBzZW5kaW5nIGRhdGEuXHJcbiAgICAvLyBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgLy8gVGVsbCB0aGUgc2VydmVyIHdlJ3JlIHNlbmRpbmcgSlNPTi5cclxuICAgIC8vIGhlYWRlcnM6IHtcclxuICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIEJvZHkgb2YgdGhlIHJlcXVlc3QgaXMgdGhlIEpTT04gZGF0YSB3ZSBjcmVhdGVkIGFib3ZlLlxyXG4gICAgLy8gYm9keTogSlNPTmRhdGEsXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgLy8gU2VuZCB0aGUgZm9ybSBkYXRhIHRvIG91ciBmb3JtcyBBUEkgb24gVmVyY2VsIGFuZCBnZXQgYSByZXNwb25zZS5cclxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIG9wdGlvbnMpO1xyXG4gICAgLy8gZmV0Y2goZW5kcG9pbnQsIG9wdGlvbnMpXHJcbiAgICAvLyAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIHJlc3BvbnNlIGRhdGEgZnJvbSBzZXJ2ZXIgYXMgSlNPTi5cclxuICAgIC8vIElmIHNlcnZlciByZXR1cm5zIHRoZSBuYW1lIHN1Ym1pdHRlZCwgdGhhdCBtZWFucyB0aGUgZm9ybSB3b3Jrcy5cclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vY29uc29sZS5sb2cocmVzdWx0LnN0YXR1cyk7XHJcbiAgICAvLyBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgc2V0RmxnKDEpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0MiA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZSxcclxuICAgICAgbGFzdG5hbWU6IGxhc3RuYW1lLFxyXG4gICAgICBiaXJ0aGRhdGU6IGJpcnRoZGF0ZSxcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICByZXF1aXJlbWVudHM6IHJlcXVpcmVtZW50cyxcclxuICAgICAgb2NjdXBhdGlvbjogZXZlbnQudGFyZ2V0Lm9jY3VwYXRpb24udmFsdWUsXHJcbiAgICAgIHdoYXRzYXA6IGV2ZW50LnRhcmdldC53aGF0c2FwLnZhbHVlLFxyXG4gICAgICBjb3VudHJ5OiBldmVudC50YXJnZXQuY291bnRyeS52YWx1ZSxcclxuICAgICAgZHVyYXRpb246IGV2ZW50LnRhcmdldC5kdXJhdGlvbi52YWx1ZSxcclxuICAgICAgcmV2ZW51ZTogZXZlbnQudGFyZ2V0LnJldmVudWUudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IEpTT05kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cHM6Ly9mcmV1ZGVudGFnLXNob3AuY29tL3B1YmxpYy9hcGkvcmVnaXN0ZXIyXCI7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OZGF0YSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhKU09OZGF0YSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCBvcHRpb25zKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgIHNldEZsZygyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4teGwgbXQtMjQgcHgtOCB4bDpweC00IG14LWF1dG9cIiBpZD1cImFib3V0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctcm93IHNtOmdyaWQtZmxvdy1jb2wgZ3JpZC1yb3dzLTIgbWQ6Z3JpZC1yb3dzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTggcHktNiBzbTpweS0xNiBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHJvdy1zdGFydC0yIHNtOnJvdy1zdGFydC0xXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC00eGwgeGw6dGV4dC01eGwgZm9udC1tZWRpdW0gdGV4dC1ibGFjay02MDAgbGVhZGluZy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrLTUwMCBtdC00IG1iLTZcIj5cclxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW1cclxuICAgICAgICAgICAgbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvSWxsdXN0cmF0aW9uMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiVlBOIElsbHVzdHJhc2lcIlxyXG4gICAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezYxMn1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MzgzfVxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAge2ZsZyAhPSAyICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLXhsIHB5LTQgcHgtNiBsZzpweC0xNiB4bDpweC0yMCBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHNoYWRvdyBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy14c1wiPlxyXG4gICAgICAgICAgICAgICAge2ZsZyA9PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlICByb3VuZGVkIHB0LTYgcGItOCBtYi02XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9ybS10aXRsZSBwLTQgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC1ibGFjay02MDAgbGVhZGluZy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUEVSU09OQUwgSU5GT1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtMXhsIGZvcm0tdGl0bGUgcC00IHB0LTAgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC1ibGFjay02MDAgbGVhZGluZy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpcnN0bmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMYXN0bmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPiBCaXJ0aCBkYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGRhdGVib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmlydGhkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCaXJ0aCBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JpcnRoZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmlydGhkYXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZXF1aXJlbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVxdWlyZW1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlcXVpcmVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVxdWlyZW1lbnRzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0cmFja2luZy13aWRlIHB5LTIgcHgtNSBzbTpweC04IGJvcmRlci1ub25lIHRleHQtd2hpdGUtNTAwIGJnLWdyZWVuLTUwMCBvdXRsaW5lLW5vbmUgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7ZmxnID09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQyfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlICByb3VuZGVkIHB0LTYgcGItOCBtYi02XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9ybS10aXRsZSBwLTQgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC1ibGFjay02MDAgbGVhZGluZy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUEVSU09OQUwgSU5GT1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LTF4bCBmb3JtLXRpdGxlIHAtNCBwdC0wIHRleHQtY2VudGVyIGZvbnQtbWVkaXVtIHRleHQtYmxhY2stNjAwIGxlYWRpbmctbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib2NjdXBhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPY2N1cGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29jY3VwYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9jY3VwYXRpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItZ3JheS01MDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIndoYXRzYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwid2hhdHNhcCBudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2hhdHNhcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2hhdHNhcChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY291bnRyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvdW50cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItZ3JheS01MDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImR1cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkR1cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2R1cmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREdXJhdGlvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmV2ZW51ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXZlbnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JldmVudWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJldmVudWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZSBweS0yIHB4LTUgc206cHgtOCBib3JkZXItbm9uZSB0ZXh0LXdoaXRlLTUwMCBiZy1ncmVlbi01MDAgb3V0bGluZS1ub25lIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGludWVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZmxnID09IDIgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQteGwgcHktNCBweC02IGxnOnB4LTE2IHhsOnB4LTIwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzp0ZXh0LTR4bCB4bDp0ZXh0LTV4bCBmb250LW1lZGl1bSB0ZXh0LWJsYWNrLTYwMCBsZWFkaW5nLW5vcm1hbCB3LWZ1bGwgbWF4LXcteHNcIj5cclxuICAgICAgICAgICAgICAgIFdlbGNvbWVcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgZmxleFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyB3LWZ1bGwgZ3JpZCBncmlkLWZsb3ctcm93IHNtOmdyaWQtZmxvdy1yb3cgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgcHktOSBkaXZpZGUteS0yIHNtOmRpdmlkZS15LTAgc206ZGl2aWRlLXgtMiBkaXZpZGUtZ3JheS0xMDAgYmctd2hpdGUtNTAwIHotMTBcIj5cclxuICAgICAgICAgIHtsaXN0VXNlci5tYXAoKGxpc3RVc2VycywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgc206anVzdGlmeS1jZW50ZXIgcHktNCBzbTpweS02IHctOC8xMiBweC00IHNtOnctYXV0byBteC1hdXRvIHNtOm14LTBcIlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtYXV0byB3LTQwIHNtOnctYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1vcmFuZ2UtMTAwIHctMTIgaC0xMiBtci02IHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdFVzZXJzLmljb259IGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWJsYWNrLTYwMCBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdFVzZXJzLm51bWJlcn0rXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWJsYWNrLTUwMFwiPntsaXN0VXNlcnMubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiZy1ibGFjay02MDAgb3BhY2l0eS01IHctMTEvMTIgcm91ZG5lZC1sZyBoLTY0IHNtOmgtNDggdG9wLTAgbXQtOCBteC1hdXRvIGxlZnQtMCByaWdodC0wXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGZpbHRlcjogXCJibHVyKDExNHB4KVwiIH19XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9