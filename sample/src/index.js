import React from 'react';
import { render } from 'react-dom';
import ImageUpload from '../../src/index';

const App = () => {

  const getImage = images => {
    console.log(images);
  }

  return <ImageUpload
    camera
    returnImage={getImage}
    uploadBtnProps={{
      variant: "contained",
      color: "#fff",
      label: 'Subir'
    }}
  />;
};


render(<App />, document.getElementById("root"));