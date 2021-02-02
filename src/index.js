import React from "react";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Webcam from "react-webcam";

const useStyles = makeStyles(theme => ({
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
}));

const UploadBtn = ({ action, uploadProps, uploadBtnLabel }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        onChange={action}
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="outlined"
          color="primary"
          component="span"
          className={classes.button}
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
    imageType
  } = props;

  const {
    label: uploadBtnLabel,
    onClick: _up,
    ...restUploadBtnProps
  } = uploadBtnProps;
  const {
    label: cameraBtnLabel,
    onClick: _cam,
    ...restCameraBtnProps
  } = cameraBtnProps;
  const {
    label: cancelBtnLabel,
    onClick: _can,
    ...restCancelBtnProps
  } = cancelBtnProps;
  const {
    label: takeBtnLabel,
    onClick: _tak,
    ...restTakeBtnProps
  } = takeBtnProps;

  const classes = useStyles();
  const [image, setImage] = React.useState(defaultImage);
  const [error, setError] = React.useState(false);
  const [webCam, setWebCamVisibility] = React.useState(false);
  let webcamRef = React.createRef();

  const handlerImage = files => {
    let reader = new FileReader();
    let file = files.target.files[0];
    if (file) {
      if (!file.type.match("image.*")) {
        setError(isNotImgErrorMsg);
        setImage(defaultImage);
      } else if (file.size > maxImgSize) {
        setError(sizeErrorMsg);
        setImage(defaultImage);
      } else {
        if (imageType === 'base64') {
          reader.onloadend = () => {
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

  React.useEffect(() => {
    if (returnImage instanceof Function && !error) returnImage(image);
  }, [image]);

  const IMAGE_VIEW = <img style={styles} alt="Image preview" src={image} />;
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
    <div style={{ width: styles.width }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {!webCam ? IMAGE_VIEW : WEBCAM}
          {error && (
            <label
              className={classes.upload}>
              {error}
            </label>
          )}
        </Grid>

        <Grid item xs={camera ? 6 : 12}>
          {webCam ? (
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
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
        </Grid>
        {camera && (
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.button}
              onClick={takePhoto}
              {...camBtnProp}
            >
              {webCam ? takeBtnLabel : cameraBtnLabel}
            </Button>
          </Grid>
        )}
      </Grid>
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
  imageType: PropTypes.oneOf(['file', 'base64'])
};
imageUpload.defaultProps = {
  styles: { height: 200, width: 200, margin: 2, border: "2px dashed #263238" },
  camera: false,
  defaultImage: "https://thenounproject.com/term/no-image/25683/",
  uploadBtnProps: { onClick: () => { }, label: "Upload" },
  cameraBtnProps: { onClick: () => { }, label: "Camera" },
  cancelBtnProps: { onClick: () => { }, label: "Cancel" },
  takeBtnProps: { onClick: () => { }, label: "Take" },
  maxImgSize: 1048576,
  sizeErrorMsg: 'File size exceeds (1MB)',
  isNotImgErrorMsg: 'Only image are allowed',
  imageType: 'base64'
};

export default imageUpload;
