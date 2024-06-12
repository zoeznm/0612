const component = () => {
  let obj = {
    name : '김보미',
    age : 24,
    job : '학생'
  };

  let innerFunc = () => {
    if(obj,age>20) {
      return "여름엔 역시 맥주가 최고지!";
    } else {
      return "여름엔 역시 콜라가 최고지!";
    }
  };

    let anotherFunc = () => {
      if(obj.job === '미남') {
        return "문제있음";
      } else {
        return "진짜임";
      }
    }
  return `
  <h1>${obj.name}</h1>
  <h2>${innerFunc()}</h2>
  <h3>${anotherFunc()}</h3>
  `;
}