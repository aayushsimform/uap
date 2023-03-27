export class Photos{
    public album_id: string;
    public user_id : string;
    public name : string;
    public image_url : string;
  
    constructor(album_id: string, user_id: string, name: string , image_url: string){
        this.album_id = album_id;
        this.user_id = user_id;
        this.name = name;
        this.image_url = image_url
       
    }
}