const arr = [
  { user: "pp", in: "com1" },
  { user: "jef", in: "com2" },
  { user: "jef", in: "com3" },
];

const newp = arr.reduce((ob, a) => {
  if (!ob.includes(a.user)) {
    ob.push(a.user);
  }
  return ob;
}, []);

arr.forEach((a) => {
  if (a.user == newp[0]) {
    console.log(`[${a.user}] you`);
  } else {
    console.log(`[${a.user}] him`);
  }
});
