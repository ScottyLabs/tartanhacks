# Overview

## Announcements

There are three pretty straightforward endpoints for handling announcements.
`POST` and `DELETE` require Admin privileges.

- `GET /announcements`
- `POST /announcements`
- `DELETE /announcements/:id`

## Authentication

## `GET /auth/login`
Queries a session's login status.  Returns an object of the following form:
```
{
  'admin': Bool,
  'login': Bool,
}
```

## `POST /auth/login`
Logs in a user.  The request has one required parameter, the Google Client JWT.
The endpoint validates it, and if correct the endpoint sets the session
variables.

## `POST /auth/logout`
Logs a user out.

## `POST /auth/mkAdmin/:id`
Makes a user an admin.  The parameter is the user's ID in our database.
