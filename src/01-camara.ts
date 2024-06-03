import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
    direction: CameraDirection.Front
  });


  var imageUrl = image.webPath;

  // Can be set to the src of an image now
};
