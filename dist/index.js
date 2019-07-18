'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _core = require('@material-ui/core');

var _reactWebcam = require('react-webcam');

var _reactWebcam2 = _interopRequireDefault(_reactWebcam);

require('./Style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
    return {
        button: {
            marginLeft: theme.spacing(1)
        },
        input: {
            display: 'none'
        }
    };
});

var UploadBtn = function UploadBtn(_ref) {
    var action = _ref.action;

    var classes = useStyles();
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement('input', {
            accept: 'image/*',
            className: classes.input,
            id: 'contained-button-file',
            onChange: action,
            type: 'file'
        }),
        _react2.default.createElement(
            'label',
            { htmlFor: 'contained-button-file' },
            _react2.default.createElement(
                _core.Button,
                { variant: 'outlined', color: 'primary', component: 'span', className: classes.button },
                'Upload'
            )
        )
    );
};

var imageUpload = function imageUpload(props) {
    var styles = props.styles,
        camera = props.camera,
        defaultImage = props.defaultImage,
        returnImage = props.returnImage;

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
            if (!file.type.match('image.*')) {
                setError('Only image are allowed');
                setImage(defaultImage);
            } else if (file.size > 1048576) {
                setError('File size exceeds (1MB)');
                setImage(defaultImage);
            } else {
                reader.onloadend = function () {
                    setImage(reader.result);
                    setError(false);
                };
                reader.readAsDataURL(file);
            }
        }
    };

    _react2.default.useEffect(function () {
        if (returnImage instanceof Function) returnImage(image);
    }, [image]);

    var IMAGE_VIEW = _react2.default.createElement('img', { style: styles, alt: '', src: image });
    var WEBCAM = _react2.default.createElement(
        'div',
        { style: styles },
        _react2.default.createElement(_reactWebcam2.default, {
            style: { margin: 2 },
            audio: false,
            ref: webcamRef,
            videoConstraints: {
                facingMode: "user"
            },
            screenshotFormat: 'image/jpeg',
            width: styles.width - 5, height: styles.height - 5
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

    return _react2.default.createElement(
        'div',
        { style: { width: styles.width } },
        _react2.default.createElement(
            _core.Grid,
            { container: true, spacing: 1 },
            _react2.default.createElement(
                _core.Grid,
                { item: true, xs: 12 },
                !webCam ? IMAGE_VIEW : WEBCAM,
                error && _react2.default.createElement(
                    'label',
                    { className: 'label-upload' },
                    error
                )
            ),
            _react2.default.createElement(
                _core.Grid,
                { item: true, xs: camera ? 6 : 12 },
                webCam ? _react2.default.createElement(
                    _core.Button,
                    { variant: 'outlined', color: 'secondary', className: classes.button, onClick: cancelPhoto },
                    'Cancel'
                ) : _react2.default.createElement(UploadBtn, { action: handlerImage })
            ),
            camera && _react2.default.createElement(
                _core.Grid,
                { item: true, xs: 6 },
                _react2.default.createElement(
                    _core.Button,
                    { variant: 'outlined', color: 'inherit', className: classes.button, onClick: takePhoto },
                    webCam ? "Take" : "Photo"
                )
            )
        )
    );
};

imageUpload.propTypes = {
    styles: _propTypes2.default.object,
    camera: _propTypes2.default.bool,
    defaultImage: _propTypes2.default.any,
    returnImage: _propTypes2.default.func.isRequired

};
imageUpload.defaultProps = {
    styles: { height: 200, width: 200, margin: 2, border: "2px dashed #263238" },
    camera: false,
    defaultImage: "https://thenounproject.com/term/no-image/25683/"

};

exports.default = imageUpload;