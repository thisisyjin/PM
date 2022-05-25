import styled from 'styled-components';
import map from '../assets/map.png';

// 지도 좌표 예시
const mapPosition = [
  { city: '강남구', left: 455, top: 509, width: 538 - 433, height: 558 - 509 },
  { city: '강동구', left: 578, top: 368, width: 673 - 578, height: 407 - 368 },
  { city: '강서구', left: 38, top: 311, width: 131 - 38, height: 386 - 311 },
  { city: '강북구', left: 381, top: 173, width: 451 - 381, height: 222 - 173 },
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
  background-color: #0044ff2e;
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
          />
        ))}
      </div>
    </SeoulMapBlock>
  );
};

export default SeoulMap;
