import { Request, Response } from 'express';
import { SalaryCalculatorInput } from '../models/SalaryCalculatorInput';
import { SalaryCalculatorOutput } from '../models/SalaryCalculatorOutput';
import { SalaryCalculatorService } from '../services/salaryCalculator.service';

export class SalaryCalculatorController {
  private salaryCalculatorService: SalaryCalculatorService;

  constructor(salaryCalculatorService: SalaryCalculatorService) {
    this.salaryCalculatorService = salaryCalculatorService;
  }

  calculateSalary = (req: Request, res: Response) => {
    const { netSalary, allowances, employeePensionContribution }: SalaryCalculatorInput = req.body;
    const salaryCalculatorOutput: SalaryCalculatorOutput = this.salaryCalculatorService.calculateSalary({
      netSalary,
      allowances,
      employeePensionContribution
    });
    res.status(200).json(salaryCalculatorOutput);
  };
}
