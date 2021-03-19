//// 1. Viết một chương trình để nhập một chuỗi từ bàn phím và in ra màn hình độ dài của chuỗi đó.
function stringLength (string) {
    return string.length;
}
console.log("Bài 1: Chuỗi dài " +stringLength('qobgfwo') +" ký tự")


//// 2: Viết hàm tính trung bình cộng của một mảng. mảng này người dùng nhập từ màn hình
function avarage (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log("Bài 2: "+ avarage([1,2,3]));


////3: Viết hàm tìm giá trị lớn nhất, giá trị nhỏ nhất của một mảng. Mảng này người dùng nhập từ màn hình
function minmax (arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}
console.log("Bài 3: " + minmax([1,2,3,4]));

////Bài 4: Viết hàm cộng trừ nhân chia hai số nhập từ màn hình
function calculate (operator) {
    let first =  1;
    let second = 2;
    switch (operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
    }
    return result;
}
console.log("Bài 4: "+calculate("+"));


//// Bài 5: Viết hàm kiểm tra giá trị người dùng nhập có phải là số nguyên hay không. hiển thị thông báo
function checkDataType (input) {
    if (!isNaN(input)) {
        console.log("Bài 5: Bạn nhập vào số nguyên");
    }
    else console.log("Bài 5: Bạn không nhập số nguyên");
}
checkDataType(2);

//// Bài 6: Viết hàm cho phép người dùng nhập tên là hiển thị lời chào
function welcome (input) {
    do {
    input = prompt("Nhập tên");
    }
    while (input !== "admin")
    alert("Welcome");
}
// welcome("1");

//// Bài 7: Viết chương trình cho phép thêm mới một phần tử trong mảng
function addElement (arr) {
    let element = 4;
    arr.push(element);
    console.log("Bài 7: "+arr);
}
addElement([1,2,3])

///// Bài 8: Viết chương trình cho phép xóa một phần tử trong mảng
function deleteElement(arr) {
    let element = 3;
    let step = 0;
    while (step < arr.length) {
        if (arr[step] == element) {
            arr.splice(step,1);
        }
        else step++;
    }
    console.log("Bài 8: "+arr);

}
deleteElement([1,2,3,3,4])


////Bài 9: Viết chương trình cho phép tìm kiếm một phần tử trong mảng
function findElement(arr){
    let element = 3;
    let position = "";
    for (let i = 0; i < arr.length; i++) {
        if (element == arr[i]) {
            position += i + " ";
        }
    }
    return position;
}
console.log("Bài 9: " +findElement([1,2,3,3,4,5]));

////Bài 10: Viết chương trình đếm các số lượng các phần tử lặp trong mảng
function countElement(arr) {
    while (arr.length > 0) {
        let count = 0;
        let check = arr[0];
        for (let j = 0; j < arr.length; j++) {
            if ((check == arr[j]) && (typeof check == typeof arr[j])) {
                count += 1
            }
        }
        if (count > 1) {
            console.log(check + " xuất hiện " + count + " lần");
            let step = 0;
            while (step < arr.length) {
                if ((check == arr[step]) && (typeof check == typeof arr[step])) {
                    arr.splice(step, 1);
                } else step++;
            }
        }
        else arr.splice(0, 1);

    }
}
console.log("Bài 10:")
countElement(['0',0,1,1,'1',2,3,'0',1,1,2,0,3,4,4,4,5,5,10,10,0]);

