import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("버튼 컴포넌트 테스트", () => {
  test("버튼 텍스트가 존재하는지 확인", () => {
    // Button 컴포넌트를 "회원가입" 텍스트와 함께 렌더링합니다.
    render(<Button>회원가입</Button>);

    // 화면에서 "회원가입" 텍스트를 가진 요소를 찾습니다.
    const buttonElement = screen.getByText("회원가입");

    // 찾은 요소가 문서에 존재하는지 확인합니다.
    expect(buttonElement).toBeInTheDocument();
  });

  test("onClick 함수가 호출되는지 확인", () => {
    // handleClick이라는 mock 함수를 생성합니다.
    const handleClick = jest.fn();

    // Button 컴포넌트를 렌더링하고, onClick 속성에 handleClick을 전달합니다.
    render(<Button onClick={handleClick}>회원가입</Button>);

    // "Click Me" 텍스트를 가진 버튼 요소를 가져옵니다.
    const buttonElement = screen.getByText(/회원가입/i);

    // 버튼 요소를 클릭합니다.
    fireEvent.click(buttonElement);

    // handleClick 함수가 한 번 호출되었는지 확인합니다.
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("추가 속성이 버튼 요소에 적용되는지 확인", () => {
    // Button 컴포넌트를 렌더링하고 data-testid 속성을 "custom-button"으로 설정
    render(<Button data-testid="custom-button">회원가입</Button>);

    // data-testid가 "custom-button"인 버튼 요소를 가져옴
    const buttonElement = screen.getByTestId("custom-button");

    // 버튼 요소가 문서에 존재하는지 확인
    expect(buttonElement).toBeInTheDocument();
  });
});
