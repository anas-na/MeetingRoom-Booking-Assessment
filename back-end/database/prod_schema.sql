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
    meeting_name TEXT NOT NULL,
    attendees INT NOT NULL,
    start_date timestamp NOT NULL,
    end_date timestamp NOT NULL,
    meetingroom_id INT REFERENCES meetingrooms(id)
);

