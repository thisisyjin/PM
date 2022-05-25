import styled from 'styled-components';
import map from '../assets/map.png';
import colors from '../lib/styles/colors';

// 지도 좌표 예시
const mapPosition = [
  { index: 0, city: '강남구', left: 455, top: 509, width: 83, height: 49 },
  { index: 1, city: '강동구', left: 578, top: 368, width: 95, height: 39 },
  { index: 2, city: '강서구', left: 38, top: 311, width: 93, height: 75 },
  { index: 3, city: '강북구', left: 381, top: 173, width: 70, height: 49 },
  { index: 4, city: '관악구', left: 264, top: 550, width: 78, height: 65 },
  { index: 5, city: '광진구', left: 505, top: 356, width: 44, height: 72 },
  { index: 6, city: '구로구', left: 97, top: 485, width: 98, height: 41 },
  { index: 7, city: '금천구', left: 194, top: 543, width: 42, height: 79 },
  { index: 8, city: '노원구', left: 487, top: 104, width: 60, height: 113 },
  { index: 9, city: '동대문구', left: 454, top: 295, width: 56, height: 57 },
  { index: 10, city: '도봉구', left: 410, top: 103, width: 60, height: 58 },
  { index: 11, city: '동작구', left: 270, top: 470, width: 66, height: 33 },
  { index: 12, city: '마포구', left: 201, top: 342, width: 60, height: 47 },
  { index: 13, city: '서대문구', left: 256, top: 299, width: 60, height: 34 },
  { index: 14, city: '성동구', left: 419, top: 367, width: 68, height: 47 },
  { index: 15, city: '성북구', left: 387, top: 251, width: 76, height: 49 },
  { index: 16, city: '서초구', left: 369, top: 491, width: 59, height: 75 },
  { index: 17, city: '송파구', left: 522, top: 452, width: 71, height: 44 },
  { index: 18, city: '영등포구', left: 213, top: 421, width: 42, height: 71 },
  { index: 19, city: '용산구', left: 314, top: 398, width: 76, height: 47 },
  { index: 20, city: '양천구', left: 106, top: 428, width: 79, height: 34 },
  { index: 21, city: '은평구', left: 245, top: 172, width: 68, height: 94 },
  { index: 22, city: '종로구', left: 326, top: 243, width: 42, height: 90 },
  { index: 23, city: '중구', left: 343, top: 348, width: 66, height: 35 },
  { index: 24, city: '중랑구', left: 515, top: 254, width: 56, height: 65 },
];

const SeoulMapBlock = styled.div`
  display: flex;
  align-items: center;
  .map-wrap {
    position: relative;
  }
`;

const CityArea = styled.div`
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  &::after {
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    background-color: ${colors.gray[2]};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    &::after {
      background-color: ${colors.level[0]};
    }
  }
`;

const SeoulImg = styled.img`
  display: block;
  width: 700px;
  height: 700px;
  position: relative;
`;

const SeoulMap = () => {
  return (
    <SeoulMapBlock>
      <div className="map-wrap">
        <SeoulImg src={map} alt="seoul map" />
        {mapPosition.map((p) => (
          <CityArea
            key={p.left}
            top={p.top}
            left={p.left}
            width={p.width}
            height={p.height}
            city={p.city}
          />
        ))}
      </div>
    </SeoulMapBlock>
  );
};

export default SeoulMap;
