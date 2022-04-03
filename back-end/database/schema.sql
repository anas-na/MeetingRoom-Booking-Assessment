-- DROP DATABASE IF EXISTS meetingroom_bookings;

-- CREATE DATABASE meetingroom_bookings;

\c meetingroom_bookings;

DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS meetingrooms;

CREATE TABLE meetingrooms (
    id SERIAL PRIMARY KEY,
    room_name TEXT NOT NULL,
    room_capacity INT NOT NULL,
    room_floor INT NOT NULL
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY UNIQUE,
    meetingroom_id INT REFERENCES meetingrooms(id),
    meeting_name TEXT NOT NULL,
    attendees INT NOT NULL,
    start_date timestamptz NOT NULL,
    end_date timestamptz NOT NULL
);

