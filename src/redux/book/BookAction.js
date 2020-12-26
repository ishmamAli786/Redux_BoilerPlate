import { BUY_BOOK} from './BookType';

export const buyBook=(number=1)=>{
    return {
        type: BUY_BOOK,
        payload:number
    }
}