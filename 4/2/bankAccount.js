// Create an account object with owner, balance, and methods deposit(amount) and withdraw(amount). Reject negative amounts and withdrawals that exceed the balance.

const account = {
    owner: "John Doe",
    balance: 1000,
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            return this.balance;
        } else {
            console.log("Invalid amount");
        }
    },
    withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return this.balance;
        } else {
            console.log("Insufficient balance");
        }
    }
}

console.log(account.deposit(100));
console.log(account.withdraw(50));