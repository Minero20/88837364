console.log("1) 5 > 4 =", 5 > 4);
console.log("2) 'apple' > 'pineapple' =", "apple" > "pineapple");
console.log("3) '2' > '12' =", "2" > "12");
console.log("4) undefined == null =", undefined == null);
console.log("5) undefined === null =", undefined === null);
console.log("6) null == '\\n0\\n' =", null == "\n0\n");
console.log("7) null === +\"\\n0\\n\" =", null === +"\n0\n");
console.log("8) 1 == +1 =", 1 == +1);
console.log("9) 2 === -(-2) =", 2 === -(-2));
console.log("10) -'2' > 2 =", -"2" > 2);

const value = 2;

function multiplicationTable(value) {
  for (let i = 1; i <= 12; i++) {
    const result = value * i;
    console.log(`${value} x ${i} = ${result}`);
  }
}

multiplicationTable(value);

