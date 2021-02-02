"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _makeStyles = require("@material-ui/core/styles/makeStyles");

var _makeStyles2 = _interopRequireDefault(_makeStyles);

var _Grid = require("@material-ui/core/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _Button = require("@material-ui/core/Button");

var _Button2 = _interopRequireDefault(_Button);

var _reactWebcam = require("react-webcam");

var _reactWebcam2 = _interopRequireDefault(_reactWebcam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var useStyles = (0, _makeStyles2.default)(function (theme) {
  return {
    button: {
      marginLeft: theme.spacing(1)
    },
    input: {
      display: "none"
    },
    upload: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      padding: "2px 4px 2px 4px",
      borderRadius: "2px"
    }
  };
});

var UploadBtn = function UploadBtn(_ref) {
  var action = _ref.action,
      uploadProps = _ref.uploadProps,
      uploadBtnLabel = _ref.uploadBtnLabel;

  var classes = useStyles();
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement("input", {
      accept: "image/*",
      className: classes.input,
      id: "contained-button-file",
      onChange: action,
      type: "file"
    }),
    _react2.default.createElement(
      "label",
      { htmlFor: "contained-button-file" },
      _react2.default.createElement(
        _Button2.default,
        _extends({
          variant: "outlined",
          color: "primary",
          component: "span",
          className: classes.button
        }, uploadProps),
        uploadBtnLabel
      )
    )
  );
};

var imageUpload = function imageUpload(props) {
  var styles = props.styles,
      camera = props.camera,
      defaultImage = props.defaultImage,
      returnImage = props.returnImage,
      uploadBtnProps = props.uploadBtnProps,
      cameraBtnProps = props.cameraBtnProps,
      cancelBtnProps = props.cancelBtnProps,
      takeBtnProps = props.takeBtnProps,
      maxImgSize = props.maxImgSize,
      sizeErrorMsg = props.sizeErrorMsg,
      isNotImgErrorMsg = props.isNotImgErrorMsg,
      imageType = props.imageType;

  var uploadBtnLabel = uploadBtnProps.label,
      _up = uploadBtnProps.onClick,
      restUploadBtnProps = _objectWithoutProperties(uploadBtnProps, ["label", "onClick"]);

  var cameraBtnLabel = cameraBtnProps.label,
      _cam = cameraBtnProps.onClick,
      restCameraBtnProps = _objectWithoutProperties(cameraBtnProps, ["label", "onClick"]);

  var cancelBtnLabel = cancelBtnProps.label,
      _can = cancelBtnProps.onClick,
      restCancelBtnProps = _objectWithoutProperties(cancelBtnProps, ["label", "onClick"]);

  var takeBtnLabel = takeBtnProps.label,
      _tak = takeBtnProps.onClick,
      restTakeBtnProps = _objectWithoutProperties(takeBtnProps, ["label", "onClick"]);

  var classes = useStyles();

  var _React$useState = _react2.default.useState(defaultImage),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      image = _React$useState2[0],
      setImage = _React$useState2[1];

  var _React$useState3 = _react2.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _React$useState5 = _react2.default.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      webCam = _React$useState6[0],
      setWebCamVisibility = _React$useState6[1];

  var webcamRef = _react2.default.createRef();

  var handlerImage = function handlerImage(files) {
    var reader = new FileReader();
    var file = files.target.files[0];
    if (file) {
      if (!file.type.match("image.*")) {
        setError(isNotImgErrorMsg);
        setImage(defaultImage);
      } else if (file.size > maxImgSize) {
        setError(sizeErrorMsg);
        setImage(defaultImage);
      } else {
        if (imageType === 'base64') {
          reader.onloadend = function () {
            setError(false);
            setImage(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          setError(false);
          setImage(file);
        }
      }
    }
  };

  _react2.default.useEffect(function () {
    if (returnImage instanceof Function && !error) returnImage(image);
  }, [image]);

  var IMAGE_VIEW = _react2.default.createElement("img", { style: styles, alt: "Image preview", src: image });
  var WEBCAM = _react2.default.createElement(
    "div",
    { style: styles },
    _react2.default.createElement(_reactWebcam2.default, {
      style: { margin: 2 },
      audio: false,
      ref: webcamRef,
      videoConstraints: {
        facingMode: "user"
      },
      screenshotFormat: "image/jpeg",
      width: styles.width - 5,
      height: styles.height - 5
    })
  );

  var cancelPhoto = function cancelPhoto() {
    return setWebCamVisibility(false);
  };

  var takePhoto = function takePhoto() {
    if (!webCam) {
      setWebCamVisibility(true);
    } else {
      var imageSrc = webcamRef.current.getScreenshot();
      setWebCamVisibility(false);
      setImage(imageSrc);
    }
  };

  var camBtnProp = webCam ? restTakeBtnProps : restCameraBtnProps;

  return _react2.default.createElement(
    "div",
    { style: { width: styles.width } },
    _react2.default.createElement(
      _Grid2.default,
      { container: true, spacing: 1 },
      _react2.default.createElement(
        _Grid2.default,
        { item: true, xs: 12 },
        !webCam ? IMAGE_VIEW : WEBCAM,
        error && _react2.default.createElement(
          "label",
          {
            className: classes.upload },
          error
        )
      ),
      _react2.default.createElement(
        _Grid2.default,
        { item: true, xs: camera ? 6 : 12 },
        webCam ? _react2.default.createElement(
          _Button2.default,
          _extends({
            variant: "outlined",
            color: "secondary",
            className: classes.button,
            onClick: cancelPhoto
          }, restCancelBtnProps),
          cancelBtnLabel
        ) : _react2.default.createElement(UploadBtn, {
          action: handlerImage,
          uploadProps: restUploadBtnProps,
          uploadBtnLabel: uploadBtnLabel
        })
      ),
      camera && _react2.default.createElement(
        _Grid2.default,
        { item: true, xs: 6 },
        _react2.default.createElement(
          _Button2.default,
          _extends({
            variant: "outlined",
            color: "inherit",
            className: classes.button,
            onClick: takePhoto
          }, camBtnProp),
          webCam ? takeBtnLabel : cameraBtnLabel
        )
      )
    )
  );
};

imageUpload.propTypes = {
  styles: _propTypes2.default.object,
  camera: _propTypes2.default.bool,
  defaultImage: _propTypes2.default.any,
  returnImage: _propTypes2.default.func.isRequired,
  uploadBtnProps: _propTypes2.default.object,
  cameraBtnProps: _propTypes2.default.object,
  cancelBtnProps: _propTypes2.default.object,
  takeBtnProps: _propTypes2.default.object,
  maxImgSize: _propTypes2.default.number,
  sizeErrorMsg: _propTypes2.default.string,
  isNotImgErrorMsg: _propTypes2.default.string,
  imageType: _propTypes2.default.oneOf(['file', 'base64'])
};
imageUpload.defaultProps = {
  styles: { height: 200, width: 200, margin: 2, border: "2px dashed #263238" },
  camera: false,
  defaultImage: "https://thenounproject.com/term/no-image/25683/",
  uploadBtnProps: { onClick: function onClick() {}, label: "Upload" },
  cameraBtnProps: { onClick: function onClick() {}, label: "Camera" },
  cancelBtnProps: { onClick: function onClick() {}, label: "Cancel" },
  takeBtnProps: { onClick: function onClick() {}, label: "Take" },
  maxImgSize: 1048576,
  sizeErrorMsg: 'File size exceeds (1MB)',
  isNotImgErrorMsg: 'Only image are allowed',
  imageType: 'base64'
};

exports.default = imageUpload;