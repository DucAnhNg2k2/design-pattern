export interface Command {
  execute(): void;
}

export class Account {
  constructor() {}
  openAccount(): void {
    console.log("Account opened");
  }
  closeAccount(): void {
    console.log("Account closed");
  }
}

export class OpenAccountCommand implements Command {
  private account: Account;
  constructor(account: Account) {
    this.account = account;
  }
  execute(): void {
    this.account.openAccount();
  }
}

export class CloseAccountCommand implements Command {
  private account: Account;
  constructor(account: Account) {
    this.account = account;
  }
  execute(): void {
    this.account.closeAccount();
  }
}

const main = () => {
  const account = new Account();
  const openAccountCommand = new OpenAccountCommand(account);
  const closeAccountCommand = new CloseAccountCommand(account);
  openAccountCommand.execute();
  closeAccountCommand.execute();
};
main();
