insert into property (name, description, price_per_night, rating, location_id) VALUES ('Palo',
                                                                                       'The Palo Cabins, ofera cazare in doua casute tip A-Frame, cu o capacitate de 2-4 persoane fiecare, ' ||
                                                                                       'situate in orașul Predeal, la marginea padurii, cu acces la râu, la doar cateva minute de mers cu masina ' ||
                                                                                       'de centrul orasului si de pârtiile de ski. Ofera cazare cu TV cu Wi-fi, Wi-fi gratuit, parcare privata, ' ||
                                                                                       'zona BBQ, Ciubar/Jacuzzi (extra cost), cinema in aer liber si igloo. Cele doua unități de cazare au bucatarie ' ||
                                                                                       'complet utilata, baie privata cu duș, terasa si curte prin care trece râul.', 180.00, 5, 1);
insert into property (name, description, price_per_night, rating, location_id) VALUES ('MoodySun',
                                                                                       'Studio-ul are un design cu etaj deschis. Livingul și baia sunt situate la parter, iar zona de dormit este ' ||
                                                                                       'la etaj, concepută pentru a vă oferi senzația de cuib. Este dimensionat perfect pentru un cuplu sau o familie ' ||
                                                                                       'tânără și este dotat cu toate facilitățile esențiale. Vă puteți bucura de vederi panoramice în timp ce savurați ' ||
                                                                                       'o ceașcă de ceai sau un pahar de vin pe canapea. Chicineta are tot ce aveți nevoie, inclusiv un frigider, plită ' ||
                                                                                       'cu inducție de blat, chiuvetă, tacâmuri, vase și articole din sticlă.', 160.00, 5, 2);
insert into property (name, description, price_per_night, rating, location_id) VALUES ('Kube', 'Studio-ul are un design cu etaj ' ||
                                                                                        'deschis. Livingul și baia sunt situate la parter.', 100.00, 5, 3);

insert into property (name, description, price_per_night, rating, location_id) VALUES ('northern lights cabins ..."crazy loon"', 'Going back to simpler life is not a step backward" (Yvon Chouinard)Less ' ||
                                                                                                                                    'is often more... If you would like to exchange nature for concrete and city ' ||
                                                                                                                                    'life, cracking wood fire for central heating, silence  and quietness for noise, ' ||
                                                                                                                                    'solitude for overcrowding, calm for restlessness, spectacular northern lights for ' ||
                                                                                                                                    'TV and if you can accept wild animals in your neighbourhood, you are exactly right ' ||
                                                                                                                                    'with us. Have a memorable time emid the laplandic nature."stay wild!"', 401.00, 4, 3);
insert into property (name, description, price_per_night, rating, location_id) VALUES ('Log Cabin by Lake ★ open fire ★ lake view ★ sauna', 'Easy access by bus: Super cozy traditional Swedish log cabin with open fire in bedroom. ' ||
                                                                                                                                 'Refurnished 2021. View on the lake, tiled bathroom, hard wood floors and lots of nature around. ' ||
                                                                                                                                 '5 mins from Luleå by car, 15 min by bus. Perfect chill-out spot with Luleå just a bike ride away. ' ||
                                                                                                                                 'Trails for running and skiing right by house. Ski/skate/snow shoe rental available. See the nothern ' ||
                                                                                                                                 'lights over the frozen lake - the location and view is stunnning. Wifi 500/500, dishwasher & washing machine. ', 377.00, 4.5, 4);
insert into property (name, description, price_per_night, rating, location_id) VALUES ('Villa Bianca - Prestige Villas of Corfu', 'With a Mediterranean theme, the white washed walls are a stark contrast to the vivid turquoise sea which ' ||
                                                                                                                                  'dominates the picture perfect view of this stunning property. The owners have transformed this once traditional ' ||
                                                                                                                                  'family home into a magnificent contemporary style villa worthy of front cover status of a glossy magazine. The views ' ||
                                                                                                                                  'and the location of Villa Bianca are hard to beat.', 3321.00, 5, 5);

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