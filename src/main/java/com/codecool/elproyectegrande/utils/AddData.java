package com.codecool.elproyectegrande.utils;

import com.codecool.elproyectegrande.model.Category;
import com.codecool.elproyectegrande.model.Location;
import com.codecool.elproyectegrande.model.Property;
import com.codecool.elproyectegrande.model.Review;

import java.math.BigDecimal;
import java.util.List;

public class AddData {

    public static void addData(List<Property> properties) {
        Property palo = new Property(1, "Palo", "The Palo Cabins, ofera cazare in doua casute tip A-Frame," +
                " cu o capacitate de 2-4 persoane fiecare, situate in orașul Predeal, la marginea padurii, cu acces la râu, " +
                "la doar cateva minute de mers cu masina de centrul orasului si de pârtiile de ski. Ofera cazare cu TV cu Wi-fi, " +
                "Wi-fi gratuit, parcare privata, zona BBQ, Ciubar/Jacuzzi (extra cost), cinema in aer liber si igloo. Cele doua " +
                "unități de cazare au bucatarie complet utilata, baie privata cu duș, terasa si curte prin care trece râul.",
                new Location("Semilunei", 6, "Bucuresti", "Romania"), new BigDecimal("560"));
        palo.addCategory(new Category("CABANA"));
        palo.addReview(new Review("Mini vacanta petrecuta la MoodySun Studio a fost extrem de relaxanta. Cabana este " +
                "echipata complet ,am fost impreuna cu bebelusul de 9 luni si nu ne-a lipsit nimic.", 5));
        palo.addReview(new Review("Am petrecut două zile minunate în această casă. Seara a fost perfectă, locuința " +
                "are tot ce ai nevoie. Loc foarte curat și modern.", 4));
        properties.add(palo);

        Property MoodySun = new Property(2, "MoodySun", "Studio-ul are un design cu etaj deschis. Livingul și baia " +
                "sunt situate la parter, iar zona de dormit este la etaj, concepută pentru a vă oferi senzația de cuib. Este " +
                "dimensionat perfect pentru un cuplu sau o familie tânără și este dotat cu toate facilitățile esențiale." +
                "Vă puteți bucura de vederi panoramice în timp ce savurați o ceașcă de ceai sau un pahar de vin pe canapea." +
                "Chicineta are tot ce aveți nevoie, inclusiv un frigider, plită cu inducție de blat, chiuvetă, tacâmuri, vase " +
                "și articole din sticlă.", new Location("Semilunei", 2, "Bucuresti", "Romania"), new BigDecimal("280"));
        MoodySun.addCategory(new Category("STUDIO"));
        properties.add(MoodySun);
    }
}
