export type ListedToken = {
    tokenId: string;
    owner: string;
    seller: string;
    price: string;
    currentlyListed: boolean;
    tokenURI: string;
    reservedUntil: number;
    lastReservedBy: string;
    metadata?: object
}