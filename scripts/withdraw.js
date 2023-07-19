const hre = require("hardhat"); 

async function main() {

    const contractAddress = "0x1aF415793ffA1fD4a116fF125da48bf1BA6f0F66";

    const LockArtifact = await hre.artifacts.readArtifact("Lock");

    const [signer] = await hre.ethers.getSigners();

    const lockContract = new hre.ethers.Contract(
        contractAddress, 
        LockArtifact.abi,
        signer
      );

    const tx = await lockContract.withdraw();

    await tx.wait();

    console.log("Withdrawn!");


}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
  