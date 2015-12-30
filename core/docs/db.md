# Database Documentation

## Table: `announcements`
```
+-----------------+--------------+------+-----+-------------------+----------------+
| Field           | Type         | Null | Key | Default           | Extra          |
+-----------------+--------------+------+-----+-------------------+----------------+
| announcement_id | int(11)      | NO   | PRI | NULL              | auto_increment |
| text            | varchar(500) | NO   |     | NULL              |                |
| timestamp       | timestamp    | NO   |     | CURRENT_TIMESTAMP |                |
+-----------------+--------------+------+-----+-------------------+----------------+
```

## Table: `users`
```
+-----------------+--------------+------+-----+---------+----------------+
| Field           | Type         | Null | Key | Default | Extra          |
+-----------------+--------------+------+-----+---------+----------------+
| id              | int(11)      | NO   | PRI | NULL    | auto_increment |
| google_id       | varchar(200) | NO   |     | NULL    |                |
| first_name      | varchar(100) | YES  |     | NULL    |                |
| middle_name     | varchar(100) | YES  |     | NULL    |                |
| last_name       | varchar(100) | YES  |     | NULL    |                |
| andrewID        | varchar(100) | NO   |     | NULL    |                |
| preferred_email | varchar(100) | NO   |     | NULL    |                |
| student_major   | varchar(100) | YES  |     | NULL    |                |
| student_class   | varchar(100) | YES  |     | NULL    |                |
| personal_url    | varchar(100) | YES  |     | NULL    |                |
| in_resume_drop  | tinyint(1)   | YES  |     | NULL    |                |
| is_admin        | tinyint(1)   | YES  |     | NULL    |                |
+-----------------+--------------+------+-----+---------+----------------+
```
