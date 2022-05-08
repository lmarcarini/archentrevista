declare type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    stock: number;
    tags: string[];
    images: string[];
    videos: string[];
    options: {
        [key: string]: string[];
    };
}