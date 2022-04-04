INSERT INTO
    meetingrooms (room_name, room_capacity, room_floor)
VALUES
    ('Meeting Room 1', 6, 22),
    ('Boardroom 2', 6, 12),
    ('Hub', 30, 23);


INSERT INTO bookings ( meeting_name, attendees, start_date, end_date, meetingroom_id)
VALUES 
('Introduction meeting', 5,'07-04-2022 9:30:00', '07-04-2022 10:00:00',1),
('Sprint', 10, '08-04-2022 10:00:00', '07-04-2022 11:00:00',1 ),
('Review meeting', 3, '10-04-2022 11:00:00', '10-04-2022 12:00:00',2),
('Production meeting', 5, '07-04-2022 14:00:00', '07-04-2022 15:00:00',2),
('Launch meeting', 15, '07-04-2022 9:30:00', '07-04-2022 10:00:00',3),
('holiday party', 20, '07-04-2022 11:00:00', '07-04-2022 11:30:00',3);