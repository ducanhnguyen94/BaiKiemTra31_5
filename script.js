/* 
1. Có 3 kiểu khai báo biến: var, let, const.
2. Các kiểu dữ liệu đã được học:
    - Number: 1, 2, 2.3, 0, -9
    - Boolen: 
        - Falsy: giá trị rỗng, 0, false, null, undefined, NaN
        - Truthy: true
    - String: '1234abc', 'I love you chucamo'
    - Null: dữ liệu rỗng
    - Undefined: dữ liệu không xác định, không có thực
3. Cách quy định kiểu dữ liệu cho một biến là dùng dấu '=' để gán kiểu dữ liệu cho biến đó.
4. Có 4 cách để thể hiện chữ 'Hello' ra từ JS:
    1- alert('Hello');
    2- document.write('Hello');
    3- console.log('Hello');
    4- <tagname>.innerHTML = 'Hello';
5. Các cách nhập vào biến với JS:
    1- let a = 'Hello';
    2- let a = prompt('Nhap vao gia tri bien a');
    3- let a = document.getElementById('#tagid').value;
*/   

// 6. 
// const btn = document.getElementById('button');
// btn.addEventListener('click', () => {
//     document.write('<h1>Day la the h1</h1> <br>');
//     document.write('<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvkfVc3qX1xVVO0Yu5Vi9L_v5aGy_tZon8uORJ9fetFaOTzdxsavRWhNAnZ2-yhcI2l045q1pM0zKrdInDEZQUow" alt="MTP"><br>')
//     document.write('<a href="https://james.codegym.vn/login/index.php" target="_blank">abc</a>');
// });

// 7.
// const btn = document.getElementById('button');
// let link = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvkfVc3qX1xVVO0Yu5Vi9L_v5aGy_tZon8uORJ9fetFaOTzdxsavRWhNAnZ2-yhcI2l045q1pM0zKrdInDEZQUow";
// btn.addEventListener('click', () => {
//     document.write(`<a href=${link} target="_blank"><img src=${link} alt="MTP"></a>`);
// });

// 8.
// let age = +prompt('Nhập tuổi');
// if (age >= 18) {
//     alert('Đủ tuổi');
// };

// 9.
// let a = +prompt('Nhập a');
// let b = +prompt('Nhập b');
// if (a > b) {
//     alert(a + b);
// } else if (a < b) {
//     alert(a * b);
// } else {
//     alert('a = b');
// };

// 10.
// let a = +prompt('Nhap a');
// let b = +prompt('Nhap b');
// let c = +prompt('Nhap c');

// if (b > a) {
//     if (c > b) {
//         alert('c is max');
//     } else {
//         alert('b is max');
//     };
// } else if (c > a) {
//     alert('c is max');
// } else {
//     alert('a is max');
// };

// 11.
// let i = 0;
// while (i < 100) {
//     if (i % 2 == 0) {
//         document.write('<h1>Hi</h1>');
//     } else {
//         document.write('<p>Hello</p>')
//     };
//     i++;
// };

// 12.
// let n = +prompt('Nhap N');
// for (let i = 0; i < n; i++) {
//     document.write('Hello' + i + '<br>');
// }

// 13 - 14

// const btn = document.getElementById('button');
// const a = document.getElementById('a');
// const b = document.getElementById('b');

// 13.
// btn.addEventListener('click', () => {
//     let aVal = Number(a.value);
//     let bVal = Number(b.value);

//     if (aVal < bVal) {
//         for (aVal; aVal <= bVal; aVal++) {
//             document.write(aVal + '<br>');
//         };
//     } else if (aVal > bVal) {
//         for (aVal; aVal >= bVal; aVal--) {
//             document.write(aVal + '<br>');
//         };
//     } else {
//         document.write(aVal + '<br>');
//         document.write(bVal + '<br>');
//     }
// });

// 14.
// btn.addEventListener('click', () => {
//     let aVal = Number(a.value);
//     let bVal = Number(b.value);

//     if (aVal < bVal) {
//         for (aVal; aVal <= bVal; aVal++) {
//             if (aVal % 2 == 0) {
//                 document.write(`<h2>${aVal}</h2>`);
//             } else {
//                 document.write(`<h1>${aVal}</h1>`);
//             };
//         };
//     } else if (aVal > bVal) {
//         for (aVal; aVal >= bVal; aVal--) {
//             if (aVal % 2 == 0) {
//                 document.write(`<h2>${aVal}</h2>`);
//             } else {
//                 document.write(`<h1>${aVal}</h1>`);
//             };
//         };
//     } else {
//         if (aVal % 2 == 0) {
//                 document.write(`<h2>${aVal}</h2>`);
//                 document.write(`<h2>${aVal}</h2>`);
//             } else {
//                 document.write(`<h1>${aVal}</h1>`);
//                 document.write(`<h1>${aVal}</h1>`);
//             };
//     };
// });

// 15.
// btn.addEventListener('click', () => {
//     let sum = 0;
//     let count = 0;
//     let aVal = Number(a.value);
//     let bVal = Number(b.value);

//     if (aVal < bVal) {
//         for (aVal; aVal <= bVal; aVal++) {
//             sum += aVal;
//             count++;
//         };
//         document.write(sum / count);
//     } else if (aVal > bVal) {
//         for (aVal; aVal >= bVal; aVal--) {
//             sum += aVal;
//             count++;
//         };
//         document.write(sum / count);
//     } else {
//         document.write(aVal + '<br>');
//     };  
// });

// 16-17-18-19-20-21-22

// let arr = [24,2,65,2,4,6,0,2,23,44,100];
// let sum = 0;
// let count = 0;

// 16.
// arr.forEach(el => {
//     if (el % 2 == 0) {
//         document.write(`<h2>${el}</h2>`);
//     } else {
//         document.write(`<h1>${el}</h1>`);
//     }
// });

// 17.
// arr.forEach(el => {
//     if (el % 5 == 2) {
//         sum += el;
//         count++;
//     }
// });
// document.write(sum / count);

// 18.
// arr.forEach(el => {   
//     if (el > 0) {
//         let uoc = 0;
//         for (let i = 1; i <= el; i++) {
//             if (el % i == 0) {
//                 uoc++;
//             };
//             if (uoc > 2) {
//                 break;
//             };
//         };
//         if (uoc == 2) {
//             count++;
//         };
//     };
// });
// document.write(count);

// 19.
// let a = +prompt('Nhap a');
// if (arr.includes(a)) {
//     document.write(arr.indexOf(a));
// } else {
//     document.write(a + ' khong co trong mang');
// };

// 20.
// let newArr = [arr[0]];

// for (let i = 1; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//         newArr.push(arr[i]);
//     }
// };

// newArr.sort((a,b) => a - b);
// if (newArr.length > 1) {
//     document.write(newArr[newArr.length - 2]);
// } else {
//     document.write('Khong co so lon thu hai');
// };

// 21 - 22

// 21.
// let evenArr = [];
// arr.forEach(el => {
//     if (el % 2 == 0) {
//         evenArr.push(el);
//     }
// });
// evenArr.sort((a,b) => a - b);
// let minEven = evenArr[0];
// document.write(minEven);

// 22.
// let minIndex = [];

// while (arr.includes(minEven)) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == minEven) {
//             minIndex.push(i);
//             arr.splice(i,1);
//             break;
//         };
//     }
// };

// for (let i = 1; i < minIndex.length; i++) {
//     minIndex[i] += 1;
// };
// document.write(minIndex);


