DROP TABLE IF EXISTS public.homeowner;

CREATE TABLE public.homeowner (
    id serial NOT NULL PRIMARY KEY,
    name text NOT NULL
);

CREATE TABLE public.job (
    id serial NOT NULL PRIMARY KEY,
    name text NOT NULL ,
    description text NOT NULL,
    homeowner_id int NOT NULL
);

INSERT INTO public.homeowner (name) VALUES ('Angi');
INSERT INTO public.homeowner (name) VALUES ('Razvan');

INSERT INTO public.job (name, description, homeowner_id) VALUES ('Removing a fireplace - Restoration & Refurbishment job in Stoke On Trent, Staffordshire',
                                                                 'Knock down an old tile/brick fire surround. Brickfill the hole whilst including a vent. Make good the repair and repaint feature wall.', 1);
INSERT INTO public.job (name, description, homeowner_id) VALUES ('Removing a fireplace - Restoration & Refurbishment job in Stoke On Trent, Staffordshire',
                                                                 'Knock down an old tile/brick fire surround. Brickfill the hole whilst including a vent. Make good the repair and repaint feature wall.', 1);

ALTER TABLE ONLY public.job
    ADD CONSTRAINT fk_homeowner_id FOREIGN KEY (homeowner_id) REFERENCES public.homeowner(id);




