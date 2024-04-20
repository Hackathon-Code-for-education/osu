import { Pannellum } from '@clovis818/pannellum-react';
import imagePanorama1 from '../../../public/panorama-test-1.jpg';
import imagePanorama2 from '../../../public/panorama-test-2.jpg';
import imagePanorama3 from '../../../public/panorama-test-3.jpg';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

export const PanoramaPage = () => {
  const { id } = useParams();

  const [image, setImage] = useState(imagePanorama1);

  useEffect(() => {}, [id]);

  const handleChangePoint = () => {
    setImage(prev => {
      if (prev === imagePanorama1) {
        return imagePanorama2;
      }
      if (prev === imagePanorama2) {
        return imagePanorama3;
      }
      if (prev === imagePanorama3) {
        return imagePanorama2;
      }

      return imagePanorama1;
    });
  };
  const pitch = useMemo(() => {
    if (image === imagePanorama1) {
      return 0;
    }
    if (image === imagePanorama2) {
      return 0;
    }
    if (image === imagePanorama3) {
      return 0;
    }

    return 0;
  }, [image]);
  const yaw = useMemo(() => {
    if (image === imagePanorama1) {
      return 50;
    }
    if (image === imagePanorama2) {
      return 150;
    }
    if (image === imagePanorama3) {
      return 50;
    }

    return 0;
  }, [image]);

  return (
    <>
      <Pannellum
        width="100%"
        height="700px"
        image={image}
        pitch={1}
        yaw={1}
        hfov={500}
        autoLoad
        onLoad={() => console.log('panorama loaded')}
      >
        <Pannellum.Hotspot type="custom" pitch={pitch} yaw={yaw} handleClick={handleChangePoint} />
      </Pannellum>
    </>
  );
};
