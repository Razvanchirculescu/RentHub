insert into location (street, street_nr, city, country) VALUES ('Semilunei', 2, 'Bucuresti', 'Romania');
insert into location (street, street_nr, city, country) VALUES ('Semilunei', 6, 'Bucuresti', 'Romania');
insert into location (street, street_nr, city, country) VALUES ('Rahova', 6, 'Bucuresti', 'Romania');


insert into category (name) VALUES ('Cabana');
insert into category (name) VALUES ('Castel');
insert into category (name) VALUES ('Vila');
insert into category (name) VALUES ('Casuta');
insert into category (name) VALUES ('Piscina');
insert into category (name) VALUES ('Popular');


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


insert into property_category (property_id, category_id) VALUES (1, 3);
insert into property_category (property_id, category_id) VALUES (2, 1);
insert into property_category (property_id, category_id) VALUES (3, 2);


insert into review (description, satisfaction, property_id) VALUES ('Mini vacanta petrecuta la MoodySun Studio a fost extrem ' ||
         'de relaxanta. Cabana este echipata complet ,am fost impreuna cu bebelusul de 9 luni si nu ne-a lipsit nimic.', 5, 1);
insert into review (description, satisfaction, property_id) VALUES ('Am petrecut două zile minunate în această casă. Seara a ' ||
         'fost perfectă, locuința are tot ce ai nevoie. Loc foarte curat și modern.', 5, 2);
insert into review (description, satisfaction, property_id) VALUES ('Seara a fost perfectă, locuința are tot ce ai nevoie.', 5, 3);


insert into rental_unit (property_id, rental_unit_type) VALUES (1, 'SINGLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (1, 'SINGLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (1, 'SINGLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (2, 'DOUBLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (2, 'DOUBLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (2, 'DOUBLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (2, 'APARTMENT');
insert into rental_unit (property_id, rental_unit_type) VALUES (2, 'DOUBLE');
insert into rental_unit (property_id, rental_unit_type) VALUES (1, 'SINGLE');

insert into image (path, property_id) VALUES ('https://drive.google.com/uc?id=1Uebxsb1syuN-DxnIOBEE4dO4GV3S1Eao', 1);
insert into image (path, property_id) VALUES ('https://drive.google.com/uc?id=1pEynjKYNmGGB_g9vFX_autjL5yfpb3cP', 1);
insert into image (path, property_id) VALUES ('https://drive.google.com/uc?id=163Tand_0XtKlqX8qmJEzjFl2e-JA9SZI', 2);
insert into image (path, property_id) VALUES ('https://drive.google.com/uc?id=1ITyPs0e-lwCzg5dYOJ6hepzU0UoXqKG4', 2);
insert into image (path, property_id) VALUES ('https://drive.google.com/uc?id=1aR4AsN8luDbc-joOdr6AhGT87HPiQERo', 3);
insert into image (path, property_id) VALUES ('https://drive.google.com/uc?id=1GGQx0xPUhLxvecBEUaOyp2luruDCuEwX', 3);
