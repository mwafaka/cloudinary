// 1. Import classes
// ==================

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Import any actions required for transformations.
import { fill } from "@cloudinary/url-gen/actions/resize";

const CloudinaryTest = () => {
  // 2. Set your cloud name
  //========================

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dvhstztqh",
    },
  });

  // 3. Get your image
  //===================

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const img1 = cld.image("Screenshot_from_2023-06-03_13-52-07_gjdned");
  const img2 = cld.image("cld-sample-5");
  const img3 = cld.image("cld-sample-4");


  const arr = [img1, img2, img3];
  // 4. Transform your image
  //=========================


  // first option is using fill 

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  // myImage.resize(fill().width(250).height(250));

  // 5. Deliver your image
  // =========================

  // Render the image in a React component.
  return (
    <div className="CloudinaryTest-body">
      <h1>React Quick Start</h1>
      <div>
        {
          arr.map((img,index)=>{
return( 
  <AdvancedImage key={index}
  cldImg={img}
  // adding inline style 
  style={{ width: "150px", height: "150px" ,margin:'20px'}}
  />
  )

            
          }
          )
        }
      </div>
    </div>
  );
};

export default CloudinaryTest;
