import React from "react";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";

const useStyles = makeStyles(theme => ({
  input: {
    display: "none"
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    padding: "2px 4px 2px 4px",
    borderRadius: "2px",
    textAlign: 'center',
  }
}));

const UploadBtn = ({ action, uploadProps, uploadBtnLabel }) => {
  const classes = useStyles();
  const randomId = `contained-button-file-${Math.random()}`
  return (
    <React.Fragment>
      <input
        accept="image/*"
        className={classes.input}
        //id="contained-button-file"
        id={randomId}
        onChange={action}
        type="file"
        disabled={uploadProps.disabled}
      />
      <label htmlFor={randomId}
      //htmlFor="contained-button-file"
      >
        <Button
          variant="outlined"
          color="primary"
          component="span"
          {...uploadProps}
        >
          {uploadBtnLabel}
        </Button>
      </label>
    </React.Fragment>
  );
};

const imageUpload = props => {
  const {
    styles,
    camera,
    defaultImage,
    returnImage,
    uploadBtnProps,
    cameraBtnProps,
    cancelBtnProps,
    takeBtnProps,
    maxImgSize,
    sizeErrorMsg,
    isNotImgErrorMsg,
    imageType,
    clearPreview,
  } = props;

  const {
    label: uploadBtnLabel = 'Upload',
    onClick: _up,
    ...restUploadBtnProps
  } = uploadBtnProps;
  const {
    label: cameraBtnLabel = 'Camera',
    onClick: _cam,
    ...restCameraBtnProps
  } = cameraBtnProps;
  const {
    label: cancelBtnLabel = 'Cancel',
    onClick: _can,
    ...restCancelBtnProps
  } = cancelBtnProps;
  const {
    label: takeBtnLabel = 'Take',
    onClick: _tak,
    ...restTakeBtnProps
  } = takeBtnProps;

  const classes = useStyles();
  const [image, setImage] = React.useState(defaultImage);
  const [imagefile, setImageFile] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [webCam, setWebCamVisibility] = React.useState(false);
  const firstImgRef = React.useRef(defaultImage);
  let webcamRef = React.createRef();

  const handlerImage = files => {
    let reader = new FileReader();
    let file = files.target.files[0];
    if (file) {
      if (!file.type.match("image.*")) {
        setError(isNotImgErrorMsg);
        setImage(defaultImage);
        setImageFile(null);
      } else if (file.size > maxImgSize) {
        setError(sizeErrorMsg);
        setImage(defaultImage);
        setImageFile(null);
      } else {
        reader.onloadend = () => {
          setImageFile(file);
          setError(false);
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  React.useEffect(() => {
    if (returnImage instanceof Function && !error && firstImgRef.current !== image) {
      returnImage(image, imagefile);
    };
  }, [image, error]);

  const IMAGE_VIEW = <img style={styles} alt="Image preview" src={clearPreview ? firstImgRef.current : image} />;
  const WEBCAM = (
    <div style={styles}>
      <Webcam
        style={{ margin: 2 }}
        audio={false}
        ref={webcamRef}
        videoConstraints={{
          facingMode: "user"
        }}
        screenshotFormat="image/jpeg"
        width={styles.width - 5}
        height={styles.height - 5}
      />
    </div>
  );

  const cancelPhoto = () => setWebCamVisibility(false);

  const takePhoto = () => {
    if (!webCam) {
      setWebCamVisibility(true);
    } else {
      const imageSrc = webcamRef.current.getScreenshot();
      setWebCamVisibility(false);
      setImage(imageSrc);
    }
  };

  const camBtnProp = webCam ? restTakeBtnProps : restCameraBtnProps;

  return (
    <div style={{ width: styles.width, borderRadius: styles.borderRadius, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {!webCam ? IMAGE_VIEW : WEBCAM}
      {error && (
        <label
          className={classes.error}>
          {error}
        </label>
      )}
      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
        {webCam ? (
          <Button
            variant="outlined"
            color="secondary"

            onClick={cancelPhoto}
            {...restCancelBtnProps}
          >
            {cancelBtnLabel}
          </Button>
        ) : (
            <UploadBtn
              action={handlerImage}
              uploadProps={restUploadBtnProps}
              uploadBtnLabel={uploadBtnLabel}
            />
          )}
        {camera && (
          <Button
            variant="outlined"
            color="inherit"
            onClick={takePhoto}
            {...camBtnProp}
          >
            {webCam ? takeBtnLabel : cameraBtnLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

imageUpload.propTypes = {
  styles: PropTypes.object,
  camera: PropTypes.bool,
  defaultImage: PropTypes.any,
  returnImage: PropTypes.func.isRequired,
  uploadBtnProps: PropTypes.object,
  cameraBtnProps: PropTypes.object,
  cancelBtnProps: PropTypes.object,
  takeBtnProps: PropTypes.object,
  maxImgSize: PropTypes.number,
  sizeErrorMsg: PropTypes.string,
  isNotImgErrorMsg: PropTypes.string,
  clearPreview: PropTypes.bool,
};
imageUpload.defaultProps = {
  styles: { height: 200, width: 200, backgroundColor: '#eee', borderRadius: '5px' },
  camera: false,
  defaultImage: "data:image/png;base64,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",
  uploadBtnProps: { onClick: () => { }, label: "Upload" },
  cameraBtnProps: { onClick: () => { }, label: "Camera" },
  cancelBtnProps: { onClick: () => { }, label: "Cancel" },
  takeBtnProps: { onClick: () => { }, label: "Take" },
  maxImgSize: 1048576,
  sizeErrorMsg: 'File size exceeds (1MB)',
  isNotImgErrorMsg: 'Only image are allowed',
  clearPreview: false,
};

export default imageUpload;

