import { Like } from './Like'
import { Tweet } from './Tweet'


export class User {
    constructor(
        public id: string, 
        public name: string, 
        public userName: string, 
        public email: string, 
        public password: string) { }

        sednTweet():string{
            return ``
        }

        follow(): string{
            return ``
        }

        showFeed(): void {

        }

        showTweet(): void{

        }
}