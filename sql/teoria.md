sql

Aquí trataremos el lenguaje DDL (Lenguaje de definición de datos) y el DML, (Lenguaje de Manipulación de datos).
Tengan presente que la gran diferencia entre estos es que DDL nos permite definir y modificar la base de datos a nivel estructura, 
es decir, crear bases de datos, crear tablas, modificarlas, etc, mientras que DML son aquellas sentencias que nos permiten manipular los 
datos propiamente dichos, por ejemplo agregar registros a una tabla, modificar estos registros o mostrarlos.

sequel = preculsor de sql

sql esta estandarizado por ANSI

sentencias para distintas tareas:
 - consulta de datos
 - insercion, actualizacion y supresion de filas en una tabla
 - creacion, sustitucion, modificacion y borrado de objetos
 - garantia de integridad u consistencia de datos

 cuatro grupos de sentencias

 - DML: manipulaciond e datos. select, insert, update, delete, merge.
 - DDL: definicion de datos. create, alter, drop, rename, truncate, comment.
 - DCL: control de datos, dar permisos a los usuarios y privilegios.
 - control de transacciones: efectivisar o revocar una sentencia. culmina con la afirmacion a traves de un commit, rollbak (volver para atras), savepoint (va a un punto en particular)

 # create database

 crea la base de datos

 create database if not exist (nombre de la bd)

 # show database

 lista todas las bd creadas

 # use

 pone en uso la bd

 # create table

 crea las tablas

 create table (nombre de la tabla)
 (
    <nombre de la columna> <tipo de dato> (longitud),
    <nombre de la columna> <tipo de dato> (longitud),
    <nombre de la columna> <tipo de dato> (longitud),
    <nombre de la columna> <tipo de dato> (longitud),

 );

# insert into

insertar datos

insert into <nombre de la tabla> (tipo, estado) values ('chanchito', 'feliz);

# alter table

modificar tabla

alter table <nombre tabla> modify column id int auto_increment;

q hacer: modificar (modify)
donde: en la columna
cual: id
que agregar: auto_increment

# ctrl + enter = ejecutar

# -- = ignorar

# show create table <tabla>

muestra el comando para crear la misma tabla

# SELECT

seleccionar elementos que se encuentran dentro de una tabla

select * from <tabla>;

selecciona toda la tabla

# where

condicional

select * from <tabla> where id = 1;

selecciona todo donde se cumple esa condicion

select * from animales ehere estado = 'feliz' and tipo = 'chanchito';

# Create Read Update Delete (CRUD)

# update

actualiza un registro

upate animales set estado = 'feliz' where id = 3;

set estado: actualizara esta columna
'feliz' sera el nuevo estadp
solo en donde id sea igual a 3

# delete

eliminar

delete from animales where estado = 'feliz';

si el delete no tiene un where dara error para no eliminar todo. tmb pasa con update

# Create

create table user (
 id int not null auto_increment,
 name varchar (50) not null,
 edad int not null,
 email varchar (100) not null,
 primary key (id),
 );
 
# insert

insertar datos a la bd

insert into user (name, edad, email) values ('oscar', 25, 'oscar@gmail.com');
insert into user (name, edad, email) values ('layla', 15, 'layla@gmail.com');
insert into user (name, edad, email) values ('nico', 36, 'nico@gmail.com');
insert into user (name, edad, email) values ('chanchito', 7, 'chanchito@gmail.com');

# limit
limita los recursos que se van a retornar

select * from user limit 1

1 oscar 25 oscar@gmail.com

mayor a

select * from user where edad > 15;

1 oscar 25 oscar@gmail.com
3 nico 36 nico@gmail.com

# and: condicion de dos
# or: minimo uno de dos
# !=: negacion

# between: buscar dentro de los parametros

select * from user where edad between 15 and 30;

1 oscar 25 oscar@gmail.com
3 layla 15 layla@gmail.com

# Like

buscar dentro de lops registros que se ingresan a traves de un formulario. Se toman los datos que ingresa el usuario y se hace la consulta. Primero debe
sanitizarse.

select * from user where email like `%gmail%`;

busca en el campo la cadena sin importa lo que este al inicio o al final
si lo pongo de el lado izquierdo (%gmail) buscara lo que empiece con eso y al final lo q termine


# order by

ordenar en orden ascendente o descendente

select * from user order by edad asc

# max y min

dara el numero mayor o menor

select max (edad) as mayor from user

as sirve para dar un alias al resultado

# seleccionar solo las columnas que quiero

select id, name from user

# hago otra tabla para luego relacionar

create table products (
 id int not null auto_increment,
 name varchar (50) not null,
 created_by int not null,
 marca varchar (50), not null,
 primary_key (id),
 foreing key (create_by) reference user (id)
 );
 
  created_by int not null sera la referencia a user
  foreing key (create_by) indico que create_by sea la llave foranea de products
  reference user (id) indica a la tabla y la columna de donde tomar la clave
  

# rename table

cambiar el nombre de la tabla

rename table products to product;

# insertar datos en una sola consulta

insert into product (name, created_by, marca)
 values
   (`ipad`, 1, `apple`),
   (`iphone`, 1, `apple`),
   (`watch`, 2, `apple`),  
   (`macbook`, 1, `apple`), 
   (`imac`, 3, `apple`);

# read

# left join

trae todos los registros que encuentra en la tabla de la izquierda. Si hay usuarios que no crearon productos mostrara null. pero mostrara al usuario.

select u.id, u.email, p.name from user u left join product p on u.id = p.created_by;

user u: le asigno un alias a user (u)
product p: le asigno un alias a product e indico la tabla que quiero relacionar con user
select u.id, u.email: selecciono lo que quiero ver de user
on u.id = p.created_by: hago que se una el id de user con created_by de product. si el id es uno va a ir a buscar el 1 a user

  1 oscar@gmail.com ipad
  1 oscar@gmail.com iphone
  1 oscar@gmail.com macbook
  2 layla@gmail.com watch
  3 nico@gmail.com imac
  4 chanchito@gmail.com NULL
  
# right join

trae los datos de la tabla que este a la derecha. si no encuentra ningun usuario relacionado a un producto no lo mostrara. por ej chanchito

select u.id, u.email, p.name from user u right join product p on u.id = p.created_by;

# inner join

solo traera la interseccion de las dos tablas. es decir solo los que esten relacionados.

# cross join

hace una realcion cartesiana, relaciona un elemento con todo el resto de la otra tabla y asi susesivamante. puede traer demasiada informacion.

select u.id, u.email, p.id, p.name from user u cross join product p;

4 chanchito 1 ipad 
3 nicolas 1 ipad
2 layla 1 ipad
1 oscar 1 ipad
4 chanchito 2 iphone 
3 nicolas 2 iphone
2 layla 2 iphone
1 oscar 2 iphone
4 chanchito 3 imac 
3 nicolas 3 imac
2 layla 3 imac
1 oscar 3 imac
4 chanchito 4 watch 
3 nicolas 4 watch 
2 layla 4 watch 
1 oscar 4 watch 

# group by

agrupar elemntos.
count: indicara la cantidad almacenada. ej, si quisiera saber cuantos productos tengo de marca apple serian 4.

select count (id), marca from product group by marca

count (id)   marca

4            apple

select count (p.id), u.name from product p left join user u on u.id = p.created_by group by p.created_by;

count (p.id)   name
3              oscar 
2              layla
1              nicolas

select count (p.id), u.name from product p left join user u having count (p.id) >=2 on u.id = p.created_by group by p.created_by;

 having count (p.id) >=2 : mostrara solo los count mayor a 2
 
 # drop table
 
 elimina la tabla
 
 drop table user
 
 # cardinalidad
 
 cuando la realacion es de muchos a muchos se establece otra tabla que tendra un id para poder relacionarse con las demas tablas de uno a muchos.
 
 # uq : unique, para que pueda agregarse solo un dato
 
 # index : permite que los datos se guarden en la memoria RAM y sean encontrados muchos mas rapido.
 
 





<<<<<<< HEAD
=======
 

>>>>>>> 4fa21d32ca759510cafd3dc6548ae4bf73f2a7be
