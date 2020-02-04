export class Room{
    RoomId:number;
    Name:String;
    RoomType:string;
    RoomStatus:string;
    
    constructor(Name?:string,RoomType?:string){
        this.Name = Name;
        this.RoomType = RoomType;
        this.RoomStatus='Available';
    }
}
