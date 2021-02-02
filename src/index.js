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
  const [imagefile, setImageFile] = React.useState(null);
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
        setImageFile(null);
      } else if (file.size > maxImgSize) {
        setError(sizeErrorMsg);
        setImage(defaultImage);
        setImageFile(null);
      } else {
        reader.onloadend = () => {
          if (imageType === 'file') {
            setImageFile(file);
          }
          setError(false);
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  React.useEffect(() => {
    if (returnImage instanceof Function && !error) {
      if (imageType === 'file') {
        returnImage(imagefile);
      } else {
        returnImage(image)
      }
    }
    ;
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
  imageType: PropTypes.oneOf(['file', 'base64'])
};
imageUpload.defaultProps = {
  styles: { height: 200, width: 200, backgroundColor: '#eee', borderRadius: '5px' },
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
