import Ticket from '../Models/ticket';
import { Status } from '../Models/Enums/enums';

export default class Api{
    static GetAllTickets(){
        return new Promise( (resolve, reject) => {
            let data = [                
                // {
                //     id: 1,
                //     createDate: new Date(),
                //     updateDate: new Date(),
                //     summary: "summary 1",
                //     description: "description 1",
                //     status: 0,
                //     severity: 0,
                // },
                // {
                //     id: 2,
                //     createDate: new Date(),
                //     updateDate: new Date(),
                //     summary: "summary 2",
                //     description: "description 2",
                //     status: 0,
                //     severity: 0,
                // },
            ];
            for (let index = 1; index <= 2; index++) {
                let element = new Ticket(`summary_${index}`,`description_${index}`,0,0)
                element.Id = index;
                element.Status = Status.OPEN.value;
                element.Severity = Math.floor(Math.random() * 3) + 1;
                data.push(element);
            }
            resolve(data);
        });
    }
}