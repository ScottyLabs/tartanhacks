
We need to occasionally dump some databases with data and some without.  This is
accomplished below:
```
mysqldump -d -u [SQL_USER] -p th_2016 > th.sql
mysqldump -u [SQL_USER] -p th_2016 user_statuses >> th.sql
```

To load the table structure WITH NO DATA:

*DO NOT DO THIS ON A PRODUCTION SERVER.*

I repeat.  *DO NOT DO THIS ON A PRODUCTION SERVER.*
```
mysql  -u [SQL_USER] -p th_2016 < th.sql
```
