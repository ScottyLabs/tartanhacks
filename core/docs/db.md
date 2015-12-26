# Database Documentation

Table: `announcements`
```
+-----------------+--------------+------+-----+-------------------+----------------+
| Field           | Type         | Null | Key | Default           | Extra          |
+-----------------+--------------+------+-----+-------------------+----------------+
| announcement_id | int(11)      | NO   | PRI | NULL              | auto_increment |
| text            | varchar(500) | NO   |     | NULL              |                |
| timestamp       | timestamp    | NO   |     | CURRENT_TIMESTAMP |                |
+-----------------+--------------+------+-----+-------------------+----------------+
```
