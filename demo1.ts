const count: number = 1;
console.log(count);

interface People {
  name: string;
  age: number;
}

const xiaoming: People = {
  name: "xiaoming",
  age: 18,
};

console.log(xiaoming);

function getTotal(one : number, two :number){
  return one + two
}

const total = getTotal(1,2)