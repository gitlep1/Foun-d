\c foun_d

INSERT INTO users (username, password, email, profileImg, address, zipcode, rating, finder, joinedDate) VALUES 
('test1', 'test1', 'test1@test.com', 'https://i.imgur.com/8puTSd9.png', '1 test rd', 11111, 3, false, NOW()),
('test2', 'test2', 'test2@test.com', 'https://i.imgur.com/MmLQSDV.png', '2 test rd', 22222, 1, false, NOW()),
('test3', 'test3', 'test3@test.com', 'https://i.imgur.com/ZlrcYvd.png', '3 test rd', 33333, 5, true, NOW());

INSERT INTO items (userId, itemName, itemImg, category, description, isFound, request, giveaway, latitude, longitude, neighborhood, borough, zipcode, itemDate, status) VALUES 
(1, 'itemname1', 'https://www.kroger.com/product/images/large/front/0079652034548', 'testcategory1', 'this is a fake item description.', false, false, false, 40.6729662, -73.9761605, 'Park Slope', 'Brooklyn', 00000, '2021-01-01T13:15:45.044Z', 'Pending'),
(2, 'itemname2', 'https://media.istockphoto.com/id/503237961/vector/cartoon-baseball-bat.jpg?s=612x612&w=0&k=20&c=1SCggGqrHPUeXYiGjkbiNS18EgFAXec7ZYAJ2p3krDA=', 'testcategory2', 'this is a fake item description.', false, false, false, 40.828549, -73.904656, 'Fordam Road', 'Bronx', 00000, NOW(), 'Completed'),
(3, 'itemname3', 'https://m.media-amazon.com/images/I/51npNziCpTL._AC_UY1000_.jpg', 'testcategory3', 'this is a fake item description.', false, true, true, 40.7402996, -73.9357344, 'Sunnyside', 'Queens', 00000, NOW(), 'Donated'),
(1, 'itemname4', 'https://cdn.shopify.com/s/files/1/0514/6794/4099/products/stately_blue_brooklyn_space_modern_sofa_-_brooklyn_space_3.jpg?v=1645581175&width=1445', 'testcategory4', 'this is a fake item description.', false, false, true, 40.8619216, -73.8982491, 'Valentine Ave.', 'Manhattan', 00000, NOW(), 'Pending');

INSERT INTO found_items (foundUserId, itemsId) VALUES 
(1, 1),
(2, 2),
(3, 3),
(1, 4);

INSERT INTO messages ( receiver, sender, itemName, content, isRead) VALUES 
('test1', 'test2', 'itemname1', 'Hey, how are you today?', false),
('test2', 'test3', 'itemname1', 'Hey, how are you today?', true),
('test3', 'test1', 'itemname1', 'Hey, how are you today?', false);

-- Testing FAQ backend data *Delete if needed*
-- -isaac
-- INSERT INTO faq (userQuestion, questionId ) VALUES
-- ('How do I make money on Found It?', 1),
-- ('How long does it take to become a trusted Finder?', 2),
-- ('How do I tip my finder?', 3);