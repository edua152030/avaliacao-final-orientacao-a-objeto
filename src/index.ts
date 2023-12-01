import { User } from './models/User';
import { Tweets } from './database/tweets';
import { Users } from './database/users';

const userId = '2'; 

const locatedUser = Users.find(user => user.id === userId);

if (locatedUser) {
    User.sendTweet('1', 'comentario ok', 'publico')
} else {
  console.log('Usuário não encontrado');
}