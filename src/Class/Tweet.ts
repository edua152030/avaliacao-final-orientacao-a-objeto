import { Like } from './Like'
import { User } from './User'


export class Tweet{
    constructor(
        public id: string, 
        public content: string, 
        public type: string){}

    reply(): string{
        return ``
    }

    like(): void{

    }

    show(): string{
        return ``
    }

    showReplies(): void{

    }
}