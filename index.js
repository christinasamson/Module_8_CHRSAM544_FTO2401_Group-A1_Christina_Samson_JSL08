let bankBranchInstance = null;
//This line declares a variable 

class BankBranch {
    // This class definition implements the Singleton pattern for a Bank Branch.


    
    //This line defines the constructor method for the BankBranch class.
    constructor(branchInfo) {
        // Check if the singleton instance doesn't exist 
        if (!BankBranch.bankBranchInstance) {
            // Initialize branchInfo with provided value
            this.branchInfo = branchInfo;
            // Assign this instance to the singleton instance
            BankBranch.bankBranchInstance = this;
        }
        // this line returns the singleton instance of the BankBranch class. 
        return BankBranch.bankBranchInstance;
    }

    // Method to retrieve branch information
    getBranchInfo() {
        return this.branchInfo;
        
    }
}

 // Usage
 // Create a new instance of BankBranch with branch information "Branch A Information"
 const branchA = new BankBranch("Branch A Information");
 console.log(branchA.getBranchInfo());
 // Output: Branch A Information


// Create another instance of BankBranch with branch information "Branch B Information"
const branchB=new BankBranch("Branch B Information");
console.log(branchB.getBranchInfo());
 // Output: Branch A Information (same as branchA)

// Verify if branchA and branchB refer to the same object
console.log(branchA === branchB); // Output: true (both instances refer to the same object)
