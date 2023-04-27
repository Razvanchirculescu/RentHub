insert into property (name, description, price_per_night, rating, location_id) VALUES ('Real fairy castle with pool ideal for wedding also',
                                                                                       'Amazing panoramic Castle with big pool. The property is surrounded by vineyards and olive groves! Located In the heart of Tuscany between Florence and Siena! A train station is just 1 Km away! Wifi always working in the entire property. Air Conditioning. 5 Double Bedrooms, 6 Bathrooms. A very big Living area ideal for events! Many terraces with view and an amazing big courtyard from where you have direct access to the small private church of the castle itself. Private Parking!', 180.00, 5, 1);





insert into property (name, description, price_per_night, rating, location_id) VALUES ('Villa Georgina - private pool & stunning sea view',
                                                                                       'Welcome to Villa Georgina! A two-bedroom villa nestled among the lush vegetation of Nisaki, overlooking the Ionian sea. Fully equipped in order to offer memorable vacation for up to 4 persons. It consists of two bedrooms, one double and one twin, both leading to the main spacious terrace with a breathtaking view of open sea, where you can enjoy meals prepared in the fully equipped kitchen of the house, or at the BBQ. Villa Georgina offers a private infinity pool for moments of pure relaxation.', 160.00, 5, 2);
insert into property (name, description, price_per_night, rating, location_id) VALUES ('Arctic Dome Namdalen - seterdomen', 'Enjoy the silence and tranquility in an arctic dome located right next to a historic sederland in Høylandet municipality, in the north of Trøndelag. Høylandet municipality is located along county road 17, and is a perfect place to stop if you are driving the E6 or the Kystriksveien (F17) north or south. Here you rent the entire space, and choose whether you want to live as the seatertausa did in the 1950s, or perhaps more comfortably in the seater dome which is nearby.', 100.00, 5, 3);


insert into property (name, description, price_per_night, rating, location_id) VALUES ('Cabana Șapte Brazi Colibita', 'Situated 5 min walk from the lake in a secluded area with astonishing lake views,this cabin offers you the perfect getaway with family/friends.
Spațiul
The cabin has on the ground floor a big living room with open kitchen,fully equipped and a bathroom with shower and a separate toilet.First floor has 4 bedrooms with double beds & 1 double-decker bed and also bathroom with shower& separate toilet.The garden has an bbq area+open kitchen and private parking+playground/trampoline&toboggan', 401.00, 4, 3);
insert into property (name, description, price_per_night, rating, location_id) VALUES ('Amazing 2bed`s / stunning views to Empire State', 'Amazing apartment with stunning skyline views to Manhattan and the Empire State. don''t look further if you need a quick access  to to Hudson Yards, Time Square, Hell''s Kitchen, Javits Center, the Summit Vanderbilt , Bryant Park, The Vessel and many more', 377.00, 4.5, 4);

insert into property (name, description, price_per_night, rating, location_id) VALUES ('Golden Square Penthouse', 'Created by the renowned global design team MAWD, the penthouse at Golden Square is the pinnacle of sophistication in the heart of the Soho neighborhood in London. Within easy walking distance, near Covent Gardens and Berkeley Theatre, you’ll find world-class retail, restaurants, and nightlife. From your penthouse perch, you’ll have an exceptional city view to help get a lay of the land. ', 3321.00, 5, 5);

insert into property_category (property_id, category_id) VALUES (1, 3);
insert into property_category (property_id, category_id) VALUES (2, 1);
insert into property_category (property_id, category_id) VALUES (3, 2);
insert into property_category (property_id, category_id) VALUES (4, 5);
insert into property_category (property_id, category_id) VALUES (4, 1);
insert into property_category (property_id, category_id) VALUES (5, 5);
insert into property_category (property_id, category_id) VALUES (5, 1);
insert into property_category (property_id, category_id) VALUES (6, 6);
insert into property_category (property_id, category_id) VALUES (6, 3);


insert into rental_unit (property_id, rental_unit_type) VALUES (1, 'SINGLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (1, 'SINGLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (1, 'SINGLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (2, 'DOUBLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (2, 'DOUBLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (2, 'DOUBLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (2, 'APARTMENT');
insert into rental_unit (property_id, rental_unit_type) VALUES (2, 'DOUBLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (1, 'SINGLE');