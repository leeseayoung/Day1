// sum.test.js
import sum from "./sum";

test("1 + 2는 3이다", () => {
  expect(sum(1, 2)).toBe(3);
});

test("0 + 0은 0이다", () => {
  expect(sum(0, 0)).toBe(0);
});

test("-1 + 1은 0이다", () => {
  expect(sum(-1, 1)).toBe(0);
});
