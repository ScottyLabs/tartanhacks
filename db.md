
To dump the database table structure with NO DATA:
```
mysqldump -d -u [SQL_USER] -p th_2016 > th.sql
```

To load the table structure WITH NO DATA:

*DO NOT DO THIS ON A PRODUCTION SERVER.*

I repeat.  *DO NOT DO THIS ON A PRODUCTION SERVER.*
```
mysql  -u [SQL_USER] -p th_2016 < th.sql
```
