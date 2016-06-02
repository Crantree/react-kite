import md5 from 'md5';

class Location
{
    constructor(name)
    {
        this.name = name;
        this.id = md5(name);
    }
    
    setFromObject(ob){
        this.name = ob.name;
        this.id = ob.id;
    }
    
    static fromObject(ob)
    {
        let d = new Location(ob.name);
        d.setFromObject(ob);
        return d;
    }
}