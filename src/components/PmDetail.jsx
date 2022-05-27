import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PmDetailImage from './PmDetailImage';
import PmDetailText from './PmDetailText';
import axios from 'axios';
import { useEffect, useState } from 'react';
import colors from '../lib/styles/colors';

// API 데이터 요청

const PmDetailBlock = styled.div`
  width: 400px;
  min-height: 425px;
  border-radius: 15px;
  border: 2.5px solid #000;
  text-align: center;

  .detail-title {
    padding: 8px 0;
    font-size: 20px;
    border-bottom: 2.5px solid #000;
    margin-bottom: 14px;
  }

  .error-msg {
    padding: 150px 0;
    font-size: 22px;

    .error-point {
      font-size: 24px;
      font-weight: 700;
    }
    b {
      display: inline-block;
      background-color: ${colors.green[2]};
      color: #fff;
      padding: 2px 8px;
      border-radius: 6px;
    }
  }
`;

const PmDetail = () => {
  const [level, setLevel] = useState(null);
  const [pm10, setPm10] = useState(0);
  const [pm25, setPm25] = useState(0);

  const { city } = useParams();
  // '좋음', '보통', '나쁨', '매우나쁨' - API 데이터에서 가져오기
  // response.RealtimeCityAir.row[도시인덱스].IDEX_NM

  useEffect(() => {
    if (city === 'undefined') return;
    axios
      .get(
        'http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99'
      )
      .then((response) => {
        setLevel(response.data.RealtimeCityAir.row[city].IDEX_NM);
        setPm10(response.data.RealtimeCityAir.row[city].PM10);
        setPm25(response.data.RealtimeCityAir.row[city].PM25);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <PmDetailBlock>
      {city !== 'undefined' ? (
        <>
          <h3 className="detail-title">Info</h3>
          <PmDetailImage level={level} />
          <PmDetailText level={level} city={city} pm10={pm10} pm25={pm25} />
        </>
      ) : (
        <>
          <h3 className="detail-title">Info</h3>
          <p className="error-msg">
            <span className="error-point">지역을 선택</span>한 후, <b>조회</b>를
            눌러주세요.
          </p>
        </>
      )}
    </PmDetailBlock>
  );
};

export default PmDetail;
