INSERT INTO users (username, password, email, profileImg, address, zipcode, rating, finder, joinedDate) VALUES 
('Isaac', 'Isaac', 'isaac@test.com', 'https://i.imgur.com/8puTSd9.png', '123 E 135th St.', 10042, 3, false, NOW()),
('George', 'George', 'george@test.com', 'https://i.imgur.com/MmLQSDV.png', '123 Greenpoint Ave.', 12229, 1, false, NOW()),
('Emily', 'Emily', 'emily@test.com', 'https://i.imgur.com/ZlrcYvd.png', '123 Bond St.', 11218, 5, true, NOW());

INSERT INTO items (userId, itemName, itemImg, category, description, isFound, request, giveaway, latitude, longitude, neighborhood, borough, zipcode, itemDate, status) VALUES 
(1, 'Beach Ball', 'https://www.kroger.com/product/images/large/front/0079652034548', 'Toys', 'Found this beach ball while walking down Park Slope', false, false, false, 40.6729662, -73.9761605, 'Park Slope', 'Brooklyn', 11215, '2021-01-01T13:15:45.044Z', 'Pending'),
(2, 'Baseball Bat', 'https://media.istockphoto.com/id/503237961/vector/cartoon-baseball-bat.jpg?s=612x612&w=0&k=20&c=1SCggGqrHPUeXYiGjkbiNS18EgFAXec7ZYAJ2p3krDA=', 'Sports', 'Found this bat by the baseball field in the Bronx', false, false, false, 40.828549, -73.904656, 'Fordam Road', 'Bronx', 00000, NOW(), 'Completed'),
(3, 'Scythe', 'https://m.media-amazon.com/images/I/51npNziCpTL._AC_UY1000_.jpg', 'Weapon', 'You should be more careful. This thing can hurt someone!', false, true, true, 40.7402996, -73.9357344, 'Sunnyside', 'Queens', 12567, NOW(), 'Donated'),
(1, 'Sofa', 'https://cdn.shopify.com/s/files/1/0514/6794/4099/products/stately_blue_brooklyn_space_modern_sofa_-_brooklyn_space_3.jpg?v=1645581175&width=1445', 'Furniture', 'Found this in front of GameStop.', false, false, true, 40.8619216, -73.8982491, 'Valentine Ave.', 'Bronx', 15890, NOW(), 'Pending'),
(2, 'Mac & Cheese Ring', 'https://i.etsystatic.com/10253266/r/il/724316/894308240/il_1588xN.894308240_fwlj.jpg', 'Jewelry', 'Found this weird ring at the bar last night', false, false, false, 40.7459904, -74.0012404, 'West Village', 'Manhattan', 10015, '2021-01-01T13:15:45.044Z', 'Active'),
(2, 'Monstera Plant', 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_monstera_alt_charcoal-e1633461158128.jpg', 'Plant', 'Random plant I found', false, false, false, 40.7290305, -73.950561, 'Greenpoint', 'Brooklyn', 11215, NOW(), 'Completed'),
(3, 'The Desk Of Truth"', 'https://a.1stdibscdn.com/early-20th-century-mahogany-desk-for-sale/1121189/f_242768621624552661846/24276862_master.jpg', 'Furniture', 'This Desk only tells the truth.', false, true, true, 40.757954, -73.977207, 'Midtown', 'Manhattan', 100022, NOW(), 'Active'),
(1, 'Filthy moldy sandwich', 'https://media.istockphoto.com/id/1167621773/photo/moldy-sandwich-with-smoked-meat-in-a-plastic-bag-dark-bread-with-grains-covered-with-white.jpg?s=612x612&w=0&k=20&c=aKcY-bNuqH_ckARljPBMBWEUgZpxxkTblHMzbQAorDU=', 'Food', 'Honestly, this is gross.', false, false, true, 40.721015, -73.984074, 'East Village', 'Manhattan', 100020, NOW(), 'Pending'),
(3, 'Faster than the speed of love', 'https://m.media-amazon.com/images/I/41kPWl719SL.jpg', 'Book', 'I wrote this novel. Would I say its too good? No Id say its just right.', false, false, false, 40.6356145, -73.9634749, 'Midwood', 'Brooklyn', 10215, '2021-01-01T13:15:45.044Z', 'Active'),
(2, 'The One True Morty"', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1c1dea64-92a2-4bc9-a5be-88f23638eb5a/dbewl8k-be820785-c2ba-45ad-a378-f674a566799d.png/v1/fill/w_1024,h_1453,q_80,strp/pocket_mortys___the_one_true_morty_by_xx_sonicx49_xx_dbewl8k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1MyIsInBhdGgiOiJcL2ZcLzFjMWRlYTY0LTkyYTItNGJjOS1hNWJlLTg4ZjIzNjM4ZWI1YVwvZGJld2w4ay1iZTgyMDc4NS1jMmJhLTQ1YWQtYTM3OC1mNjc0YTU2Njc5OWQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lHbJCMPLV-bDMYGTe7ea0NNtuOLhxtcNILtdBnKrmDA', 'Alien', 'I wanna get rid of this morty *burp*. Can someone take him?', false, false, false, 40.7699158, -73.9730879, 'Central Park', 'Manhattan', 11215, NOW(), 'Active'),
(3, 'C137s Portal Gun', 'https://m.media-amazon.com/images/I/419Sby6mVTL.jpg', 'Gadget', 'I used this ones. Never again!', false, true, true, 40.6517658, -73.800053, 'Howard Beach', 'Queens', 100022, NOW(), 'Active'),
(1, 'Someones Mona', 'https://media.npr.org/assets/img/2012/02/02/mona-lisa-copy_custom-cf935c261c640b9ff7e214059a0328c880c22f50-s1100-c50.jpg', 'Painting', 'Honestly, can you make me one of me?.', false, false, true, 40.713729, -73.848805, 'Forest Hills', 'Queens', 12020, NOW(), 'Pending');

INSERT INTO found_items (foundUserId, itemsId) VALUES 
(1, 1),
(2, 2),
(3, 3),
(1, 4),
(2, 5),
(2, 6),
(3, 7),
(1, 8),
(3, 9),
(2, 10),
(3, 11),
(1, 12);

INSERT INTO messages ( receiver, sender, itemName, content, isRead) VALUES 
('Isaac', 'George', 'Sofa', 'Hey, how are you today?', false),
('George', 'Emily', 'Baseball Bat', 'Hey, how are you today?', true),
('Emily', 'Isaac', 'Beach Ball', 'Hey, how are you today?', false);