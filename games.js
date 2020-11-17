class ModelArme {
    constructor(Arme) {

        switch (Arme) {
            case 0:
                Arme = "Epee";
                break;
            case 1:
                Arme = "Sabre";
                break;
            case 2:
                Arme = "Arc";
                break;
            case 3:
                Arme = "Marteau";
                break;
            case 4:
                Arme = "Main_Vide";
                break;
            default:
                Arme = "Aucune"
        }

        var name = document.getElementById('Arme');
        var Armes = document.createElement("span");

        name.appendChild(Armes);

        Armes.innerHTML = "Nom de l'arme : " + Arme;

    }
}

class ModelPersonnage {
    constructor(Personnage) {

        switch (Personnage) {
            case 0:
                Personnage = "Lilou";
                break;
            case 1:
                Personnage = "Pierre";
                break;
            case 2:
                Personnage = "Patate";
                break;
            default:
                Personnage = "Aucun"
        }

        var namepersonnage = document.getElementById('Personnage');
        var personnage = document.createElement("span");

        namepersonnage.appendChild(personnage);

        personnage.innerHTML = "Pseudo du Personnage : " + Personnage;
    }
}

class ModelMagie {
    constructor(Air, Terre, Eau, Feu) {
        this.Magical_1 = Air;
        this.Magical_2 = Terre;
        this.Magical_3 = Eau;
        this.Magical_4 = Feu;
    }

}

class ModelLevel {

    constructor(level) {

        var Level_Personnage = level;

        var namelevel = document.getElementById('Level');
        var Level = document.createElement("span");

        namelevel.appendChild(Level);

        Level.innerHTML = "Pseudo du Personnage : " + level;
    }
}

//Choix du personnage
new ModelPersonnage(0);

//Choix de l'arme du personnage
new ModelArme(0);

//Ajoute des levels au différent personnage
new ModelLevel(1 + 2);