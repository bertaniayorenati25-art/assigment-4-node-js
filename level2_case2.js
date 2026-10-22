const account = {
    owner: "Andi",
    balance: 1000,
    deposite(amount) {
        if (amount <= 0){
            return "Nominal deposit harus lebih dari 0.";
        }
        this.balance += amount;
        return 'Deposite berhasil. Saldo saat ini: $ {this.balance}';

    },
    withdraw(amount){
        if (amount <= 0) {
            return "Nominal penarikan harus lebih dari 0. ";
        }
        if (amount > this.balance) {
            return "Penarikan gagal: saldo tidak mencukupi."
        }
        this.balance -= amount;
        return 'Penarikan berhasil. Saldo tersisa: ${this.balance}';

    }
};

console.log(account.deposite(500));
console.log(account.withdraw(2000));
console.log(account.withdraw(300));
