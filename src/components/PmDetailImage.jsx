import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PmLevelICO from '../assets/pmLevel.svg';

import verybad from '../assets/photos/sky1.jpg';
import bad from '../assets/photos/sky2.jpg';
import soso from '../assets/photos/sky3.jpg';
import good from '../assets/photos/sky4.jpg';

const PmDetailImageBlock = styled.div`
  position: relative;
  width: 340px;
  height: 230px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 16px;

  /* &::after {
    content: '';
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${PmLevelICO});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  } */
`;

const PmDetailImage = ({ level }) => {
  const imgPath = useRef(null);

  useEffect(() => {
    console.log(level, imgPath);
    switch (level) {
      case '매우 나쁨':
        imgPath.current = verybad;
        return;
      case '나쁨':
        imgPath.current = bad;
        return;
      case '보통':
        imgPath.current = soso;
        return;
      case '좋음':
        imgPath.current = good;
        return;
      default:
        imgPath.current = soso;
    }
  }, [level]);

  return (
    <PmDetailImageBlock>
      {imgPath.current && (
        <img src={imgPath.current} alt="sky" className="sky-img" />
      )}
    </PmDetailImageBlock>
  );
};

export default PmDetailImage;
