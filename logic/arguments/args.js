const args = process.argv.slice(2); // ตัดอาร์กิวเมนต์ 2 ตัวแรกที่ไม่ใช่อาร์กิวเมนต์ที่คุณส่งเข้ามาออกไป
const argObj = {};

args.forEach(arg => {
  const [key, value] = arg.split('='); // แยกค่า key และ value ด้วยเครื่องหมาย =
  argObj[key.slice(1)] = value; // นำ key ที่แยกได้มาตัดเครื่องหมาย - และนำค่า value เก็บไว้ใน Object
});

console.log(argObj); // { test: 'Hello world' }