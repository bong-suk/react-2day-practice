class 사람 {
  constructor(이름, 나이, 성별) {
    this.이름 = 이름;
    this.나이 = 나이;
    this.성별 = 성별;
  }
  말하기() {
    console.log(this.이름 + ": " + "안녕하세요!");
  }
}

const 홍길동 = new 사람("홍길동", 30, "남성");
console.log(홍길동);
홍길동.말하기();

const 김아무개 = new 사람("김아무개", 40, "여성");
console.log(김아무개);
김아무개.말하기();
