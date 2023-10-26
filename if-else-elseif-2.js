let a = 11;

// 1, 2, 3, 4, 5
if (a >= 1 && a <= 3) {
  console.log("a가 1 ~ 3 사이의 숫자입니다.");
  // 6, 7, 8
} else if (a >= 4 && a <= 6) {
  console.log("a가 4 ~ 6 사이의 숫자입니다.");
  // 9
} else if (a >= 7 && a <= 9) {
  console.log("a가 7 ~ 9 사이의 숫자입니다.");
} else {
  console.log("a가 1 ~ 9 사이의 숫자가 아닙니다.");
}
