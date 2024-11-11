const recettes =  [
    {
      "id": 1,
      "source": "Le Gourmet",
      "user_id": 101,
      "ingredients": [
        {
          "ingredient_id": 1,
          "quantity": 200,
          "unit_id": 1
        },
        {
          "ingredient_id": 3,
          "quantity": 100,
          "unit_id": 2
        }
      ],
      "instructions": [
        "Lavez les tomates et coupez-les en dés.",
        "Faites cuire les pâtes selon les instructions du paquet.",
        "Mélangez les tomates avec les pâtes et servez chaud."
      ],
      "favorisCount": 15,
      "photo": "https://example.com/photo1.jpg",
      "createdAt": "2024-10-01T12:00:00Z"
    },
    {
      "id": 2,
      "source": "Cuisiner Avec Amour",
      "user_id": 102,
      "ingredients": [
        {
          "ingredient_id": 2,
          "quantity": 1,
          "unit_id": 1
        },
        {
          "ingredient_id": 4,
          "quantity": 500,
          "unit_id": 2
        }
      ],
      "instructions": [
        "Hachez l'oignon finement.",
        "Faites revenir le poulet dans une poêle jusqu'à ce qu'il soit doré.",
        "Ajoutez l'oignon et faites cuire jusqu'à ce qu'il soit translucide."
      ],
      "favorisCount": 10,
      "photo": "https://example.com/photo2.jpg",
      "createdAt": "2024-10-02T12:00:00Z"
    },
    {
      "id": 3,
      "source": "Délices de Mamie",
      "user_id": 103,
      "ingredients": [
        {
          "ingredient_id": 5,
          "quantity": 250,
          "unit_id": 3
        },
        {
          "ingredient_id": 6,
          "quantity": 100,
          "unit_id": 3
        }
      ],
      "instructions": [
        "Dans un bol, mélangez la crème fraîche avec le fromage.",
        "Étalez ce mélange sur la pâte à tarte.",
        "Cuisez au four pendant 30 minutes à 180°C."
      ],
      "favorisCount": 20,
      "photo": "https://example.com/photo3.jpg",
      "createdAt": "2024-10-03T12:00:00Z"
    },
    {
      "id": 4,
      "source": "Recettes Faciles",
      "user_id": 104,
      "ingredients": [
        {
          "ingredient_id": 3,
          "quantity": 250,
          "unit_id": 2
        },
        {
          "ingredient_id": 2,
          "quantity": 1,
          "unit_id": 1
        }
      ],
      "instructions": [
        "Faites cuire les pâtes dans une grande casserole.",
        "Ajoutez les oignons hachés à la fin de la cuisson.",
        "Servez chaud avec un peu d'huile d'olive."
      ],
      "favorisCount": 8,
      "photo": null,
      "createdAt": "2024-10-04T12:00:00Z"
    },
    {
      "id": 5,
      "source": "Gastronomie Moderne",
      "user_id": 105,
      "ingredients": [
        {
          "ingredient_id": 2,
          "quantity": 150,
          "unit_id": 1
        },
        {
          "ingredient_id": 4,
          "quantity": 300,
          "unit_id": 2
        }
      ],
      "instructions": [
        "Faites chauffer une poêle à feu moyen.",
        "Ajoutez l'oignon et faites revenir pendant 5 minutes.",
        "Ajoutez le poulet et faites cuire jusqu'à ce qu'il soit bien cuit."
      ],
      "favorisCount": 12,
      "photo": "https://example.com/photo5.jpg",
      "createdAt": "2024-10-05T12:00:00Z"
    }
  ]
  
  export default recettes