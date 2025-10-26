class Bank {
  private accounts = new Map<number, number>();

  constructor(balance: number[]) {
    for (let i = 0; i < balance.length; i++) {
      this.accounts.set(i + 1, balance[i]);
    }
  }

  private isValid(account: number): boolean {
    if (this.accounts.has(account)) return true;
    else return false;
  }

  transfer(account1: number, account2: number, money: number): boolean {
    if (!this.isValid(account1) || !this.isValid(account2)) return false;

    const isSuccess = this.withdraw(account1, money);
    if (isSuccess) return this.deposit(account2, money);

    return false;
  }

  deposit(account: number, money: number): boolean {
    if (this.isValid(account)) {
      this.accounts.set(account, (this.accounts.get(account)! || 0) + money);
      return true;
    } else return false;
  }

  withdraw(account: number, money: number): boolean {
    if (this.isValid(account) && this.accounts.get(account)! >= money) {
      this.accounts.set(account, this.accounts.get(account)! - money);
      return true;
    } else return false;
  }
}
