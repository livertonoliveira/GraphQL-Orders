import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'OrderInput',
    fields: {
        _id: { type: GraphQLString },
        OrderNumber: { type: GraphQLString },
        PurchaseDate: { type: GraphQLString },
        Channel: { type: GraphQLString },
        Code: { type: GraphQLString },
        Company: { type: GraphQLString },
        Ip: { type: GraphQLString },
        Status: { type: GraphQLString }, 
        ConsumerBirth: { type: GraphQLString },
        ConsumerEmail: { type: GraphQLString },
        ConsumerName: { type: GraphQLString },
        ConsumerSex: { type: GraphQLString },
        ConsumerCellphone: { type: GraphQLString },
        ConsumerPhone: { type: GraphQLString },
        ConsumerMotherName: { type: GraphQLString },
        Street: { type: GraphQLString },
        City: { type: GraphQLString },
        StateRegion: { type: GraphQLString },
        PostalCode: { type: GraphQLString },
        Country: { type: GraphQLString }
    }
});