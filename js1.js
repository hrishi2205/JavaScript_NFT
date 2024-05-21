const nftList=[];
function mintNFT(name,eyeColor,shirtType,bling)
{
    const nftData = {
        name:name,
        eyeColor:eyeColor,
        shirtType:shirtType,
        bling:bling
};
    nftList.push(nftData);
}
function listNFTs(){
    for (let index = 0; index < nftList.length; index++) {
        const nftData = nftList[index];
        console.log(`NFT #${index + 1}`);
        console.log(`Name: ${nftData.name}`);
        console.log(`Eye Color: ${nftData.eyeColor}`);
        console.log(`Shirt Type: ${nftData.shirtType}`);
        console.log(`Bling: ${nftData.bling}`);
      }
}
function getTotalSupply()
{
    return nftList.length;
}

mintNFT('CryptoPunk', 'Blue', 'T-Shirt', 'Gold Chain');
mintNFT('EtherAlien', 'Green', 'Hoodie', 'Diamond Earrings');
mintNFT('BitBot', 'Red', 'Tank Top', 'Silver Watch');

listNFTs();

console.log(`Total NFTs Minted: ${getTotalSupply}`); 