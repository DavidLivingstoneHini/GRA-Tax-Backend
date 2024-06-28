export class SalaryCalculatorError extends Error {
    status: number;
  
    constructor(message: string, status: number = 500) {
      super(message);
      this.name = 'SalaryCalculatorError';
      this.status = status;
    }
  }
  