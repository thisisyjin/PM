import styled from 'styled-components';
import PmDetailImage from './PmDetailImage';
import PmDetailText from './PmDetailText';

// 임시 데이터

// API 데이터 요청
const city = 0; // 배열 Index로. - 0은 강남구.
const level = '좋음'; // '좋음', '보통', '나쁨', '매우나쁨' - API 데이터에서 가져오기
// response.RealtimeCityAir.row[도시인덱스].IDEX_NM

const PmDetailBlock = styled.div`
  width: 400px;
  border-radius: 15px;
  border: 2.5px solid #000;
  text-align: center;

  .detail-title {
    padding: 8px 0;
    font-size: 20px;
    border-bottom: 2.5px solid #000;
    margin-bottom: 14px;
  }
`;

const PmDetail = () => {
  return (
    <PmDetailBlock>
      <h3 className="detail-title">Info</h3>
      <PmDetailImage level={level} />
      <PmDetailText level={level} city={city} />
    </PmDetailBlock>
  );
};

export default PmDetail;
