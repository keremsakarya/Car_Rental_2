export type CarType = {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: "rwd" | "fwd" | "awd" | "4wd";
    fuel_type: "gas" | "diesel" | "electricity";
    highway_mpg: number;
    make: string;
    model: string;
    transmission: "m" | "a";
    year: number;
};