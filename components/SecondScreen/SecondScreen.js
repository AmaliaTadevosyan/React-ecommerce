import React from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import "./SecondScreen.css";

const SecondScreen = () => {
  return (
    <section className='second-container'>
      <div className='second-heading'>
        <h2>High quality home decor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue eu
          sagittis feugiat nunc sit est vitae eget. Nisl at sed ultrices
          pharetra massa consectetur lobortis velit fames. Iaculis arcu rhoncus
          tellus porta ornare nunc libero. Accumsan nisi, ullamcorper non
          venenatis egestas convallis sed dignissim massa.
        </p>
      </div>
      <div className='departments'>
        <div>
          <div className='block'>
            <img src={img1} alt='sofa' />
            <h3>Living Room</h3>
          </div>
          <div className='block'>
            <img src={img2} alt='sofa' />
            <h3>Kitchen</h3>
          </div>
        </div>
        <div>
          <div className='block'>
            <img src={img4} alt='sofa' />
            <h3>Bedroom</h3>
          </div>
          <div className='block'>
            <img src={img3} alt='sofa' />
            <h3>Bathroom</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondScreen;
