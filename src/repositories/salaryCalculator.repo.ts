import { SalaryCalculatorError } from '../helpers/SalaryCalculatorError';
import { SalaryCalculatorInput } from '../models/SalaryCalculatorInput';
import { SalaryCalculatorOutput } from '../models/SalaryCalculatorOutput';

export class SalaryCalculatorRepository {
  calculateSalary(input: SalaryCalculatorInput): SalaryCalculatorOutput {
    try {
      // Calculate Gross Salary
      const grossSalary = input.netSalary / (1 - 0.075 - 0.055 - 0.05);

      // Calculate Basic Salary
      const basicSalary = grossSalary - input.allowances;

      // Calculate PAYE Tax
      const payeTax = this.calculatePayeTax(basicSalary + input.allowances - input.employeePensionContribution);

      // Calculate Employee Pension Contribution
      const employeePensionContributionAmount = basicSalary * 0.055 + basicSalary * 0.05;

      // Calculate Employer Pension Contribution
      const employerPensionContributionAmount = basicSalary * 0.13;

      return {
        grossSalary: Number(grossSalary.toFixed(2)),
        basicSalary: Number(basicSalary.toFixed(2)),
        payeTax: Number(payeTax.toFixed(2)),
        employeePensionContribution: Number(employeePensionContributionAmount.toFixed(2)),
        employerPensionContribution: Number(employerPensionContributionAmount.toFixed(2))
      };
    } catch (error) {
      if (error instanceof SalaryCalculatorError) {
        throw error;
      } else {
        throw new SalaryCalculatorError('Error calculating salary', 500);
      }
    }
  }

  private calculatePayeTax(taxableIncome: number): number {
    try {
      let tax = 0;

      if (taxableIncome <= 3000) {
        tax = taxableIncome * 0.05;
      } else if (taxableIncome > 3000 && taxableIncome <= 5000) {
        tax = 150 + (taxableIncome - 3000) * 0.1;
      } else if (taxableIncome > 5000 && taxableIncome <= 10000) {
        tax = 350 + (taxableIncome - 5000) * 0.175;
      } else {
        tax = 1225 + (taxableIncome - 10000) * 0.25;
      }

      return Number(tax.toFixed(2));
    } catch (error) {
      throw new SalaryCalculatorError('Error calculating PAYE tax', 500);
    }
  }
}
