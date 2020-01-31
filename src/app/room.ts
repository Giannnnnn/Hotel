export class Room{
    RoomId:number;
    Name:String;
    RoomType:'classic'|'deluxe'='deluxe';
    RoomStatus:'Occupied'|'Reserved'|'Available'='Available';
    
    constructor(RoomId?:number,RoomType?:'classic'|'deluxe'){
        this.RoomId = RoomId;
        this.RoomType = RoomType;
        this.RoomStatus='Available';
    }
}
