const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const resolvers = {
  Query: {
    getAlltodos(parent, args, ctx, id) {
      return ctx.prisma.todoes({ })
    }
  } ,
  Mutation: {
    createTodo(parent, { description, completed }, ctx) {
      return ctx.prisma.createtodo(
        {
            description: description,
            completed: completed,
          },
      )
    },
    deleteTodo(parent, { id }, ctx) {
      return ctx.prisma.deletetodo({ 
             id 
      })
    },
    updateTodo(parent, { id, completed }, ctx) {
      return ctx.prisma.updatetodo(
        {
          where: { id },
          data: { completed },
        },
      )
    },
  },
}


const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  debug: true,
  context: {
    prisma
  }
});

server.start(() => console.log('Server is running on http://localhost:4000'))
