export class Personne {
   
    id: number ;
    firstname: string;
    lastname: string;
    email: string;
    path: string;
    department: string;
    job: string;
   datedebut:string;
   datefin: string;
   sujet: string;


    constructor(id= 0 , firstname= '' , lastname= '', department= '', path= '', email='', job= '', datedebut='', datefin='',sujet=''){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email= email;
        this.path = path;
        this.department = department;
        this.job = job;
        this.datedebut = datedebut;
        this.datefin = datefin;
        this.sujet = sujet;
    }

}