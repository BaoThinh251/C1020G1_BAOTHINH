let a = prompt('Nhap diem Vat ly: ');
let b = prompt('Nhap diem Sinh hoc: ');
let c = prompt('Nhap diem Hoa hoc: ');
let Vatly = parseInt(a)
let Sinhhoc = parseInt(b)
let Hoahoc = parseInt(c)
let Tongdiem = Vatly + Hoahoc + Sinhhoc ;
let Diemtb = Tongdiem/3;
document.write('Điểm tổng: ' + Tongdiem);

document.write( '<br>Điểm trung bình: ' + Diemtb);