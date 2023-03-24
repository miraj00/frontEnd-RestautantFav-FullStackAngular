// The properties here need to mirror what is in the JSON casing and spelling wise and not the database
export interface Order {
    id?:         number;
    description: string;
    restaurant : string;
    rating:      number;
    orderAgain:  boolean;
}

