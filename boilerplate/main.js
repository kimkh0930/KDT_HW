// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.

function getItemByAmount(data, amount) {
    let max = { name : '', price:0}; //객체를 저장하기 위한 변수
    let count = 0; 
  
    data.forEach((element) => {
        count++;
  
      if (amount >= element.price && max.price < element.price) { // 가진 돈보다는 싼 물건들 중 가장 비싼 물건을 반환
        max = element;
      }
      else if(amount< element.price && count ===data.length || isNaN(amount)){ //data의 마지막까지 읽었을 때 내가 가진 돈보다 싼 물건이 없다면 false를 반환하여 3항 연산자를 충족
        max = false;
      }
    });
  
    return max;
  }
