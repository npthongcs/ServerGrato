-- len postman tao account SV co id 101 - account GV co id 901

-- mon hoc
Insert into subject (id, image, name) values ('CH1003', 'bk.png', 'Hoa dai cuong');
Insert into subject (id, image, name) values ('MT1003', 'bk.png', 'Giao duc quoc phong');
Insert into subject (id, image, name) values ('PH1003', 'bk.png', 'Vat ly 1');
Insert into subject (id, image, name) values ('CO1005', 'bk.png', 'Nhap mon dien toan');
Insert into subject (id, image, name) values ('CO1007', 'bk.png', 'Cau truc roi rac');
Insert into subject (id, image, name) values ('MT1005', 'bk.png', 'Giai tich 2');
Insert into subject (id, image, name) values ('MT1007', 'bk.png', 'Dai so tuyen tinh');
Insert into subject (id, image, name) values ('CO1009', 'bk.png', 'Phuong phap tinh');
Insert into subject (id, image, name) values ('CO2007', 'bk.png', 'Kien truc may tinh');
Insert into subject (id, image, name) values ('CO2005', 'bk.png', 'Lap trinh huong doi tuong');
Insert into subject (id, image, name) values ('CO2003', 'bk.png', 'Cau truc du lieu va giai thuat');
Insert into subject (id, image, name) values ('PH1005', 'bk.png', 'Vat ly 2');
Insert into subject (id, image, name) values ('MT2001', 'bk.png', 'Xac suat va thong ke');
Insert into subject (id, image, name) values ('CO2011', 'bk.png', 'Mo hinh hoa toan hoc');
Insert into subject (id, image, name) values ('CO3001', 'bk.png', 'Cong nghe phan mem');
Insert into subject (id, image, name) values ('CO2017', 'bk.png', 'He dieu hanh');
Insert into subject (id, image, name) values ('CO2001', 'bk.png', 'Ky nang chuyen nghiep cho ky su');
Insert into subject (id, image, name) values ('SP1007', 'bk.png', 'Phap luat');
Insert into subject (id, image, name) values ('CO2013', 'bk.png', 'He co so du lieu');
Insert into subject (id, image, name) values ('CO3003', 'bk.png', 'Mang may tinh');
Insert into subject (id, image, name) values ('CO3005', 'bk.png', 'Nguyen ly ngon ngu lap trinh');

-- mon hoc mo trong hoc ki
Insert into subject_in_semester (sub_id, semester_id) values ('CO3005', 202);
Insert into subject_in_semester (sub_id, semester_id) values ('SP1007', 202);
Insert into subject_in_semester (sub_id, semester_id) values ('CO3003', 202);
Insert into subject_in_semester (sub_id, semester_id) values ('CO2013', 202);

-- thong tin ve lop hoc
Insert into class (sub_id, semester_id,class_id,room,start_time,end_time) values ('CO2013', 202,'L01','221H1','7:00 AM','9:00 AM');
Insert into class (sub_id, semester_id,class_id,room,start_time,end_time) values ('CO2013', 202,'L02','221H1','9:00 AM','11:00 AM');
Insert into class (sub_id, semester_id,class_id,room,start_time,end_time) values ('CO2013', 202,'L03','410H1','7:00 AM','9:00 AM');
Insert into class (sub_id, semester_id,class_id,room,start_time,end_time) values ('CO2013', 202,'L04','410H1','9:00 AM','11:00 AM');
Insert into class (sub_id, semester_id,class_id,room,start_time,end_time) values ('CO3003', 202,'L01','212H1','7:00 AM','9:00 AM');
Insert into class (sub_id, semester_id,class_id,room,start_time,end_time) values ('CO3003', 202,'L02','212H1','9:00 AM','11:00 AM');
Insert into class (sub_id, semester_id,class_id,room,start_time,end_time) values ('SP1007', 202,'L01','112H1','9:00 AM','11:00 AM');
Insert into class (sub_id, semester_id,class_id,room,start_time,end_time) values ('CO3005', 202,'L01','210H1','9:00 AM','11:00 AM');
Insert into class (sub_id, semester_id,class_id,room,start_time,end_time) values ('CO3005', 202,'L02','210H1','9:00 AM','11:00 AM');
Insert into class (sub_id, semester_id,class_id,room,start_time,end_time) values ('CO3005', 202,'L03','210H1','9:00 AM','11:00 AM');

-- mo phong tao account cho sv
Insert into user (id,name,job_type,hashed_pass) values ('102', 'Nguyen Van B','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('103', 'Nguyen Van C','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('104', 'Nguyen Van D','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('105', 'Nguyen Van E','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('106', 'Nguyen Van F','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('107', 'Nguyen Van Q','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('108', 'Nguyen Van W','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('109', 'Nguyen Van E','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('110', 'Nguyen Van R','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('111', 'Nguyen Van T','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('112', 'Nguyen Van Y','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('113', 'Nguyen Van U','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('114', 'Nguyen Van I','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('115', 'Nguyen Van O','SV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('116', 'Nguyen Van P','SV','hashed_pass');

-- mo phong tao account cho gv
Insert into user (id,name,job_type,hashed_pass) values ('902', 'Anderson','GV','hashed_pass');
Insert into user (id,name,job_type,hashed_pass) values ('903', 'Yuki Ishi','GV','hashed_pass');

-- add sv,gv vao mon hoc sv dang ki
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3005', 202,'101');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3005', 202,'102');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3005', 202,'103');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3005', 202,'104');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3005', 202,'105');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3005', 202,'106');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3005', 202,'107');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3005', 202,'108');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3005', 202,'109');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3005', 202,'110');

Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('SP1007', 202,'101');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('SP1007', 202,'102');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('SP1007', 202,'111');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('SP1007', 202,'112');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('SP1007', 202,'116');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('SP1007', 202,'106');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('SP1007', 202,'107');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('SP1007', 202,'110');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('SP1007', 202,'109');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('SP1007', 202,'113');

Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3003', 202,'101');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3003', 202,'102');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3003', 202,'111');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3003', 202,'112');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3003', 202,'103');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3003', 202,'106');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3003', 202,'107');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3003', 202,'113');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3003', 202,'109');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3003', 202,'114');

Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO2013', 202,'101');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO2013', 202,'106');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO2013', 202,'107');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO2013', 202,'110');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO2013', 202,'109');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO2013', 202,'113');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO2013', 202,'116');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO2013', 202,'102');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO2013', 202,'111');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO2013', 202,'112');

Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO3005', 202,'901');
Insert into user_of_subject_in_semester (sub_id,semester_id,user_id) values ('CO2013', 202,'901');

-- add sv vao lop cua moi mon hoc - 1 SV chi thuoc 1 lop/ mon

-- CO2013 101 106 107 110 109 113 116 102 111 112 - 4 lop
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L01','101');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L01','106');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L02','107');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L02','110');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L03','109');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L03','113');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L03','116');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L04','102');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L04','111');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L04','112');

-- CO3005 101 102 103 104 105 106 107 108 109 110 - 3 lop
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L01','101');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L01','102');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L01','103');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L02','104');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L02','105');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L02','106');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L03','107');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L03','108');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L03','109');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L03','110');

-- SP1007 101 102 111 112 116 106 107 110 109 113 - 1 lop
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('SP1007', 202,'L01','101');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('SP1007', 202,'L01','102');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('SP1007', 202,'L01','111');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('SP1007', 202,'L01','112');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('SP1007', 202,'L01','116');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('SP1007', 202,'L01','106');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('SP1007', 202,'L01','107');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('SP1007', 202,'L01','110');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('SP1007', 202,'L01','109');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('SP1007', 202,'L01','113');

-- CO3003 101 102 111 112 103 106 107 113 109 114 - 2 lop
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3003', 202,'L01','101');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3003', 202,'L01','102');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3003', 202,'L01','111');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3003', 202,'L02','112');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3003', 202,'L02','103');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3003', 202,'L01','106');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3003', 202,'L01','107');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3003', 202,'L02','113');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3003', 202,'L02','109');
Insert into user_of_class (sub_id,semester_id,class_id,user_id) values ('CO3003', 202,'L02','114');

-- add gv day lop nao
Insert into teacher_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L01','901');
Insert into teacher_of_class (sub_id,semester_id,class_id,user_id) values ('CO3005', 202,'L02','901');
Insert into teacher_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L01','901');
Insert into teacher_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L03','901');
Insert into teacher_of_class (sub_id,semester_id,class_id,user_id) values ('CO2013', 202,'L04','901');

-- tao group
Insert into `group` (sub_id, semester_id,class_id,gname,no_student,max_student) values ('CO3005', 202,'L01','G1',0,4);
Insert into `group` (sub_id, semester_id,class_id,gname,no_student,max_student) values ('CO3005', 202,'L01','G2',0,5);
Insert into `group` (sub_id, semester_id,class_id,gname,no_student,max_student) values ('CO3005', 202,'L02','Group 1',0,2);

-- add sv vao group
Insert into student_in_group (sub_id,semester_id,class_id,gname,user_id) values ('CO3005',202,'L01','G1','102');
Insert into student_in_group (sub_id,semester_id,class_id,gname,user_id) values ('CO3005',202,'L01','G1','110');
Insert into student_in_group (sub_id,semester_id,class_id,gname,user_id) values ('CO3005',202,'L01','G1','103');
Insert into student_in_group (sub_id,semester_id,class_id,gname,user_id) values ('CO3005',202,'L01','G2','104');
