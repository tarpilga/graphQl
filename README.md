# graphQl


GraphQL est un langage de requête pour votre API et un environnement d'exécution côté serveur permettant d'exécuter des requêtes à l'aide d'un système de types que vous définissez pour vos données. GraphQL n'est lié à aucune base de données ni à aucun moteur de stockage spécifique, mais est soutenu par votre code et vos données existants.

# Fields 


Dans sa forme la plus simple, GraphQL consiste à demander des champs spécifiques sur des objets
ex : 
{
  hero {
    name     et le resultat sera  
  }
}

// et le resultat sera

  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}

RQ :
Vous pouvez voir immédiatement que la requête a exactement la même forme que le résultat. Ceci est essentiel pour GraphQL, car vous obtenez toujours ce que vous attendez et le serveur sait exactement quels champs le client demande.

# Arguments 

Si la seule chose que nous pouvions faire était de parcourir les objets et leurs champs, GraphQL serait déjà un langage très utile pour la récupération de données. Mais lorsque vous ajoutez la possibilité de passer des arguments à des champs, les choses deviennent beaucoup plus intéressantes.

{
  human(id: "1000") {
    name
    height(unit: FOOT)
  }
}

# Les Alias  Aliases

 ils vous permettent de renommer le résultat d'un champ en tout ce que vous voulez.
 
 {
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}

///////////////////////////// Resultat 

{
  "data": {
    "empireHero": {
      "name": "Luke Skywalker"
    },
    "jediHero": {
      "name": "R2-D2"
    }
  }
}

RQ :
Dans l'exemple ci-dessus, les deux herochamps auraient été en conflit, mais comme nous pouvons les aliaser sous des noms différents, nous pouvons obtenir les deux résultats en une seule demande.

Operation name #
Nom de l' Operation 

décrit le type d'opération que vous souhaitez effectuer.

Type system 
Si vous avez déjà vu une requête GraphQL auparavant, vous savez que le langage de requête GraphQL consiste essentiellement à sélectionner des champs sur des objets

Parce que la forme d'une requête GraphQL correspond étroitement le résultat, vous pouvez prédire ce que la requête retourne sans savoir que beaucoup sur le serveur. Mais il est utile d'avoir une description exacte des données que nous pouvons demander - quels champs pouvons-nous sélectionner? Quels types d'objets pourraient-ils retourner? Quels champs sont disponibles sur ces sous-objets? C'est là que le schéma entre en jeu.

Chaque service GraphQL définit un ensemble de types décrivant complètement l'ensemble des données possibles que vous pouvez interroger sur ce service. Ensuite, lorsque les requêtes arrivent, elles sont validées et exécutées sur ce schéma.



 
