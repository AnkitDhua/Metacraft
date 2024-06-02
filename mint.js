// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, image) {
    let nft = {
        name: name,
        description: description,
        image: image,
        tokenId: nftCollection.length + 1
    };
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("Name: " + nftCollection[i].name);
        console.log("Description: " + nftCollection[i].description);
        console.log("Image: " + nftCollection[i].image);
        console.log("Token ID: " + nftCollection[i].tokenId);
        console.log("------------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs: " + nftCollection.length);
}

// call your functions below this line
mintNFT("NFT 1", "This is NFT 1", "image1.jpg");
mintNFT("NFT 2", "This is NFT 2", "image2.jpg");
mintNFT("NFT 3", "This is NFT 3", "image3.jpg");

listNFTs();

getTotalSupply();

// Additional functionality

// Function to get NFT by token ID
function getNFTbyTokenId(tokenId) {
 return nftCollection.find(nft => nft.tokenId === tokenId);
}

// Function to get the current owner of an NFT
function getCurrentOwner(tokenId) {
 let nft = getNFTbyTokenId(tokenId);
 if (nft) {
 return nft.owner;
 } else {
 return "NFT not found";
 }
}

// Function to transfer ownership of an NFT
function transferOwnership(tokenId, newOwner) {
 let nft = getNFTbyTokenId(tokenId);
 if (nft) {
 nft.owner = newOwner;
 console.log("Ownership of NFT with token ID " + tokenId + " has been transferred to " + newOwner);
 } else {
 console.log("NFT not found");
 }
}

// Example usage
mintNFT("NFT 4", "This is NFT 4", "image4.jpg");
console.log("Current owner of NFT with token ID 4: " + getCurrentOwner(4));
transferOwnership(4, "John Doe");
console.log("Current owner of NFT with token ID 4: " + getCurrentOwner(4));
