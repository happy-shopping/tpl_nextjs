"use client";

import styled from "styled-components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCount } from "@/store/reducer/counter";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function SampleCounter() {
  const [isCount, setIsCount] = useState(0);
  const reduxCount = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const onClickAddCount = () => {
    setIsCount(isCount + 1);
    dispatch(setCount(isCount + 1));
  };
  return (
    <Wrapper>
      <h1> redux counter 테스트 페이지</h1>
      <div>
        <span>현재 카운트 :{isCount}</span>
        <button type="button" onClick={onClickAddCount}>
          증가
        </button>
      </div>
      <div>리덕스 Store :{reduxCount}</div>
    </Wrapper>
  );
}
