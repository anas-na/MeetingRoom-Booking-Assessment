\c meetingroom_bookings
INSERT INTO
    meetingrooms (room_name, room_capacity, room_floor)
VALUES
    ('Board Room 1', 6, 15),
    ('Board Room 2', 6, 15),
    ('Executive Board Room', 20, 23);


INSERT INTO bookings (room_id, meeting_name, attendees, start_date, end_date)
VALUES 
(1, 'Introduction meeting', 5,'07-04-2022 9:30:00', '07-04-2022 10:00:00'),
(1, 'Sprint', 10, '08-04-2022 10:00:00', '07-04-2022 11:00:00' ),
(2, 'Review meeting', 3, '10-04-2022 11:00:00', '10-04-2022 12:00:00'),
(2, 'Production meeting', 5, '07-04-2022 14:00:00', '07-04-2022 15:00:00'),
(3, 'Launch meeting', 15, '07-04-2022 9:30:00', '07-04-2022 10:00:00'),
(3, 'holiday party', 20, '07-04-2022 11:00:00', '07-04-2022 11:30:00');