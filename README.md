# Profile Photo Upload with React js

[![Code version](https://img.shields.io/badge/version-1.3.1-blue.svg)](http://www.npmjs.com/package/react-profile-image)

See the Example [`Profile image`](https://daym3l.github.io/react-profile-image/)

Profile Photo Upload is a React Js component for upload or take photo

Features of `react-profile-image`

- upload image
- take a photo whit the webcam
- get the Base64 of the image

## Getting started

```
npm i @daym3l/react-profile-image
```

### Example

Need more? See [`sample/src/index.js`](https://github.com/Daym3l/react-profile-image/tree/master/sample/src/index.js)

```js
import ProfileImage from "react-profile-image";

export default () => {
	const getImages = (base64Image, fileImage) => {
		// Do something with the selected image)
		console.log(base64Image);
		console.log(fileImage);
	};

	return (
		<ProfileImage
			camera
			returnImage={getImages}
			uploadBtnProps={{ variant: "contained", label: "Up" }}
		/>
	);
};
```

# Props

- `styles`: React style object for the img tag.(default:{ height: 200, width: 200, backgorundColor: '#fff'),
- `camera`: bool if you want take photos,
- `defaultImage`: default image for the component,
- `returnImage`: (required) Callback function that recieves the image in base64 format as first parameter and file format as second parameter,
- `uploadBtnProps`: Object of type ButtonProps of material-ui, and "label" property to change the button text. IMPORTANT: "onClick" event will not work here,
- `cameraBtnProps`: Object of type ButtonProps of material-ui, and "label" property to change the button text. IMPORTANT: "onClick" event will not work here,
- `cancelBtnProps`: Object of type ButtonProps of material-ui, and "label" property to change the button text. IMPORTANT: "onClick" event will not work here,
- `takeBtnProps`: Object of type ButtonProps of material-ui, and "label" property to change the button text. IMPORTANT: "onClick" event will not work here,
- `maxImgSize`: Max image size in bytes. (number),
- `sizeErrorMsg`: Error message to display when the image size is exceeded,
- `isNotImgErrorMsg`: Error message to display when the selected file to upload is not a image,
- `clearPreview`: Boolean prop. If it's true the preview is going to have the default image. Default to false.

# Build the example locally

```
git clone https://github.com/Daym3l/react-profile-image.git
cd react-profile-image
npm install
npm start
```

Then open [`localhost:3001`](http://localhost:3001) in a browser.

# License

MIT
