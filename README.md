# Profile Photo Upload with React js

[![Code version](https://img.shields.io/badge/version-1.1.0-blue.svg)](http://www.npmjs.com/package/react-profile-image)

See the Example [`Profile image`](https://daym3l.github.io/react-profile-image/)

Profile Photo Upload is a React Js component for upload or take photo

Features of `react-profile-image`

- upload image
- take a photo whit the webcam
- get the Base64 of the image

## Getting started

```
npm install react-profile-image
```

### Example

Need more? See [`sample/src/index.js`](https://github.com/Daym3l/react-profile-image/tree/master/sample/src/index.js)

```js
import ProfileImage from "react-profile-image";

export default () => {
	const getImages = (image) => {
		// Do something with the selected image)
		console.log(image);
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

- `styles`: React style object for the img tag.(default:{ height: 200, width: 200, margin: 2, border: "2px dashed #263238"}),
- `camera`: bool if you want take photos,
- `defaultImage`: default image for the component,
- `returnImage`: (required) Function that returns a base64 of the photo or image,
- `uploadBtnProps`: Object of type ButtonProps of material-ui, and "label" property to change the button text. IMPORTANT: "onClick" event will not work here,
- `cameraBtnProps`: Object of type ButtonProps of material-ui, and "label" property to change the button text. IMPORTANT: "onClick" event will not work here,
- `cancelBtnProps`: Object of type ButtonProps of material-ui, and "label" property to change the button text. IMPORTANT: "onClick" event will not work here,
- `takeBtnProps`: Object of type ButtonProps of material-ui, and "label" property to change the button text. IMPORTANT: "onClick" event will not work here

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
