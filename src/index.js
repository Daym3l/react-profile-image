import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Webcam from 'react-webcam';
import "./Style.css";

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const UploadBtn = ({ action, uploadProps, uploadBtnLabel }) => {

  const classes = useStyles();
  return <React.Fragment>
    <input
      accept="image/*"
      className={classes.input}
      id="contained-button-file"
      onChange={action}
      type="file"
    />
    <label htmlFor="contained-button-file">
      <Button variant="outlined" color="primary" component="span" className={classes.button} {...uploadProps} >
        {uploadBtnLabel}
      </Button>
    </label>
  </React.Fragment>
}

const imageUpload = props => {
  const { styles, camera, defaultImage, returnImage, uploadBtnProps, cameraBtnProps, cancelBtnProps, takeBtnProps } = props;

  const { label: uploadBtnLabel, ...restUploadBtnProps } = uploadBtnProps;
  const { label: cameraBtnLabel, ...restCameraBtnProps } = cameraBtnProps;
  const { label: cancelBtnLabel, ...restCancelBtnProps } = cancelBtnProps;
  const { label: takeBtnLabel, ...restTakeBtnProps } = takeBtnProps;


  const classes = useStyles();
  const [image, setImage] = React.useState(defaultImage);
  const [error, setError] = React.useState(false);
  const [webCam, setWebCamVisibility] = React.useState(false);
  let webcamRef = React.createRef();

  const handlerImage = files => {
    let reader = new FileReader();
    let file = files.target.files[0];
    if (file) {
      if (!file.type.match('image.*')) {
        setError('Only image are allowed');
        setImage(defaultImage);
      } else if (file.size > 1048576) {
        setError('File size exceeds (1MB)');
        setImage(defaultImage);
      }
      else {
        reader.onloadend = () => {
          setImage(reader.result);
          setError(false);
        }
        reader.readAsDataURL(file)
      }
    }

  }

  React.useEffect(() => {
    if (returnImage instanceof Function)
      returnImage(image);
  }, [image]);


  const IMAGE_VIEW = <img style={styles} alt="" src={image} />;
  const WEBCAM = (
    <div style={styles}>
      <Webcam
        style={{ margin: 2 }}
        audio={false}
        ref={webcamRef}
        videoConstraints={{
          facingMode: "user"
        }}
        screenshotFormat='image/jpeg'
        width={styles.width - 5} height={styles.height - 5}
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

  }

  const camBtnProp = webCam ? restTakeBtnProps : restCameraBtnProps;

  return <div style={{ width: styles.width }}>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        {!webCam ? IMAGE_VIEW : WEBCAM}
        {error && <label className="label-upload">{error}</label>}
      </Grid>

      <Grid item xs={camera ? 6 : 12}>
        {webCam
          ? (
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={cancelPhoto}
              {...restCancelBtnProps}
            >
              {cancelBtnLabel}
            </Button>
          )
          : (
            <UploadBtn action={handlerImage} uploadProps={restUploadBtnProps} uploadBtnLabel={uploadBtnLabel} />
          )
        }

      </Grid>
      {camera && <Grid item xs={6}>
        <Button variant="outlined" color="inherit" className={classes.button} onClick={takePhoto} {...camBtnProp}>
          {webCam ? takeBtnLabel : cameraBtnLabel}
        </Button>
      </Grid>}
    </Grid>
  </div>
}

imageUpload.propTypes = {
  styles: PropTypes.object,
  camera: PropTypes.bool,
  defaultImage: PropTypes.any,
  returnImage: PropTypes.func.isRequired,
  uploadBtnProps: PropTypes.object,
  cameraBtnProps: PropTypes.object,
  cancelBtnProps: PropTypes.object,
  takeBtnProps: PropTypes.object

}
imageUpload.defaultProps = {
  styles: { height: 200, width: 200, margin: 2, border: "2px dashed #263238" },
  camera: false,
  defaultImage: "https://thenounproject.com/term/no-image/25683/",
  uploadBtnProps: { onCLick: null, label: 'Upload' },
  cameraBtnProps: { onCLick: null, label: 'Camera' },
  cancelBtnProps: { onCLick: null, label: 'Cancel' },
  takeBtnProps: { onCLick: null, label: 'Take' }
}

export default imageUpload
