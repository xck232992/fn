# 数据库表的信息

> 在 MySQL 数据库中有 4 个默认的数据库，分别是 information_schema，mysql，perfomance_schema，test 。这些数据库被叫做元数据库。而这些元数据就是表示数据的数据，像列名、数据库名、用户名，只要不是我们存储到数据库里的数据都可以叫做元数据。

> 参考资料：

<br>

MySQL 是单进程多线程，也就是说 MySQL 实例在系统上表现就是一个服务进程。

MySQL 实例是线程和内存组成的，而实例才是正常操作数据库文件的。

一般情况下一个实例操作一个或者是多个数据库



### 1，information_schema

它提供了访问数据库元数据的方式，确切的说是信息数据库。其中保存着关于 MySQL 服务器所维护的所有其他数据库信息。如数据库名，数据库的表，表栏的数量类型和访问权限。

information_schema 中部分主要数据表说明：

- **schemata** 

  当前数据库实例中所有数据库的信息。

  show database 的结果就取之此表。

- **tables**

  提供了关于数据库中的表的信息，包括了视图，详细描述了某个表属于哪个 schema，表类型，表引擎，创建时间等信息。

  show tables from schemaname 的结果取之于此

- **columns**

  提供了表中的列信息，详细表述了某张表的所有列以及每个列的信息。

- **statistics**

  关于表索引的信息

  show index from schemaname.tablename 的结果取之于此

- **user_privileges**

  给出了关于全部权限的信息，

- **schema_provileges**

  给出了关于数据库权限的信息

- **table_constraints**

  描述了存在约束的表

- **views**

  给出了关于数据库中视图的信息



### 2，mysql

这是 mysql 的核心数据库，要负责存储数据库的用户、权限设置、关键字等mysql自己需要使用的控制和管理信息。不可以删除，如果对mysql不是很了解，也不要轻易修改这个数据库里面的表信息。



### 3，performance_schema

mysql 5.5 新增加了一个性能优化的引擎，preformance_schema 这个功能默认是关闭的。需要设置参数 performance_schema 才可以启动该功能，这个参数是静态参数，只能写在 my.cnf 中不能动态修改。



### 4，test

这个是安装的时候创建的一个测试数据库，和它的名字一样，是一个完全空的数据库，没有任何表，可以删除。