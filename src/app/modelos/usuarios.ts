export interface Usuario {
    
        id: number;
        name: string;
        username: string;
        email: string;
        address: Direccion ;
        phone: string;
        website: string;
        company: Compania;
      
}
export interface Compania{
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Direccion{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    
}
