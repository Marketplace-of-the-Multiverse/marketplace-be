export type ListedToken = {
    tokenId: number;
    owner: string;
    seller: string;
    price: number;
    currentlyListed: boolean;
    reservedUntil: number;
    lastReservedBy: string;
    metadata?: object
}