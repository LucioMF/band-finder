import { v4 as uuidv4 } from 'uuid';

type Message = {
  username: string,
  avatar: string,
  body: string
}

export const resolvers = {
  Mutation: {
    messageCreate: (_, input: Message) => {
      return {
        id: uuidv4(),  // Generar un ID único
        username: input.username,
        avatar: input.avatar,
        body: input.body
      };
    },
  },
};
