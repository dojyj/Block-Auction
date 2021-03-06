import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import img_test from "../../lib/img_test.jpg";
import heart from "../../lib/heart.png";
import HeartButton from "../../components/HeartButton";
import { Link } from "react-router-dom";

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Contents = styled.div`
  width: 50rem;
  height: auto;
`;

const Img = styled.div`
  width: 300px;
  height: 300px;
  float: left;
`;

const Infos = styled.div`
  width: auto;
  height: 300px;
  font-size: 1.1em;
  font-weight: bold;
  float: left;
`;

const Views = styled.div`
  width: 300px;
  height: auto;
  border: 1px solid green;
  float: left;
  span {
    justify-content: space-between;
  }
`;

const Buttons = styled.div`
  width: 400px;
  height: auto;
  float: left;
  button {
    justify-content: space-between;
    height: 30px;
    width: 100px;
    margin-right: 30px;
    font-weight: bold;
    background-color: #e1e0e0;
    border: 1px solid white;
    img {
      height: 15px;
    }
  }
`;

const DetailWrapper = ({ auction_img, auction_infos, like_auction }) => {
  const [like, setLike] = useState(false);

  useEffect(async () => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/detail/art");
      if (res.data.type === "liked") setLike(true);
    };
    fetchData();
  }, []);

  const toggleLike = async (e) => {
    const res = await axios.post();
    setLike(!like);
  };
  return (
    <Positioner>
      <Contents>
        <Img>
          <img src={img_test} height="280px" alt=""></img>
        </Img>
        <Infos>
          {" "}
          <div>• 카테고리 : 예술품</div>
          <div>• 상품명 : 예술품</div>
          <br></br>
          <div>• 작품설명: 예술품</div>
          <br />
          <span>• 경매시작일 : 2021-06-02 5시&nbsp; &nbsp;</span>
          <span>• 경매종료일 : 2021-06-02 6시</span>
          <br />
          <br></br>
          <span>• 경매시작가 : 5,000,000원 &nbsp;</span>
          <span>• 경매종료가 : -</span>
          <br></br>
          <br></br>
          <div>• 경매유찰횟수 : 0회</div>
        </Infos>
      </Contents>
      <Views>
        <HeartButton like={like}></HeartButton>
        <span>조회수 : 10회</span>
      </Views>
      <Buttons>
        <button>찜하기</button>
        <button>경매입장</button>
        <Link to="/send">
          <button>쪽지보내기</button>
        </Link>
      </Buttons>
    </Positioner>
  );
};

export default DetailWrapper;
