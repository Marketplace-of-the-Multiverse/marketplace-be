export type ListedToken = {
    tokenId: string;
    owner: string;
    seller: string;
    price: string;
    currentlyListed: boolean;
    reservedUntil: number;
    lastReservedBy: string;
    metadata?: object
}