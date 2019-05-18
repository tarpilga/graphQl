const graph = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graph ;

// Mon tableau contenant des object ( livre )  

var books = [

        {
            name : 'Name of the wine', 
            genre : 'Fantasy', 
            id : '1',
            authorId : '1'
    },
        {
        name : 'The Final Empire', 
        genre : 'Fantasy', 
        id : '2',
        authorId : '2'
    },
        {
        name : 'The Long Heart', 
        genre : 'Sci-Fi', 
        id : '3',
        authorId : '2'
    }
];

// Mes auteurs

var authors = [

    {
        name : 'Sam Smith', 
        age : '27', 
        id : '1'
},
    {
    name : 'Maitre Gims', 
    age : '32', 
    id : '2'
},
    {
    name : 'Star Boy ', 
    age : '19', 
    id : '3'
}
];

// Le Schema de mon livre 
const BookType = new GraphQLObjectType ( {
    name : 'Book',
    fields : () => ({
        id : {type: GraphQLID},
        name : {type: GraphQLString},
        genre : {type: GraphQLString},

        author : {
            type : AuthorType,
            resolve(parent, args){
                console.log(parent.authorId);

               return _.find(authors, { id : parent.authorId});
            }
        }
    })
});

// Le Schema de mon livre 
const AuthorType = new GraphQLObjectType ( {
    name : 'Author',
    fields : () => ({
        id : {type: GraphQLID},
        name : {type: GraphQLString},
        age : {type: GraphQLInt}
    })
});


// La Route qui va recuperer les donner de mon livre
const RootQuery = new GraphQLObjectType ({
    name : 'RootQueryType',
    fields : {
        // MES CHAMPS 
        book : {
            type : BookType,
            args : { id : { type : GraphQLID } }, // book(id : String) html <p> </p> 

                resolve(parent, args){
                    // Code Pour recuperer les donnée de la base de donnéé
                    return _.find(books, {id : args.id})
                }
            },

            // fields : auteurs
            author : {
                type : AuthorType,
                args : { id : { type : GraphQLID } }, // book(id : String)
    
                    resolve(parent, args){
                        // Code Pour recuperer les donnée de la base de donnéé
                        return _.find(authors, {id : args.id})
                    }
                }

        }

});

// exportons notre module 

module.exports = new GraphQLSchema  ({
    query: RootQuery
}); 