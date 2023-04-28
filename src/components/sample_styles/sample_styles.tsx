import styled from "styled-components";

const BlackButton = styled.button`
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 4px;
`;

const YellowButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.yellow};
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 4px;
`;

const BlueButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 4px;
`;

export default function SampleStyles() {
  return (
    <div>
      <h1>스타일 컴포넌트 theme 예제 페이지</h1>
      <ul>
        <li>
          <BlackButton>Button</BlackButton>
        </li>
        <li>
          <YellowButton>Button</YellowButton>
        </li>
        <li>
          <BlueButton>Button</BlueButton>
        </li>
      </ul>
    </div>
  );
}
