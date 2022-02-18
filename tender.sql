create database tender;
drop database tender;
use tender;
create table admin(
userId int primary key,
password varchar(50)
);
drop table admin;
select * from admin;
insert into admin
values(1001, "laser");



create table contractor(
admin boolean default false,
firstName varchar(50),
lastName varchar(50),
dob varchar(50),
gender varchar(10),
contactNumber long,
category varchar(50),
userId int primary key,
password varchar(50));


drop table contractor;
select * from contractor;
insert into contractor values(1, "sumit", "kumar", '2018-01-01', "M", 1234567890, "abc", 9001, "accessMe");




create table contractorContact(
id int,
address varchar(150),
email varchar(50));



alter table contractorContact
Add constraint fk foreign key (id) references contractor(userId);



create table tenderDetails(
id int primary key,
type varchar(50),
tenderDate date,
minimumQuote int,
description varchar(250));



create table Application(
application_id int primary key,
tender_id int,
quotation int,
contractor_id int
);



alter table Application
add constraint fk_tender foreign key (tender_id) references tenderDetails(id);




alter table Application
add constraint fk_contractor foreign key (contractor_id) references contractor(userId)