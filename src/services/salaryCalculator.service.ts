import { SalaryCalculatorRepository } from '../repositories/salaryCalculator.repo';
import { SalaryCalculatorInput } from '../models/SalaryCalculatorInput';
import { SalaryCalculatorOutput } from '../models/SalaryCalculatorOutput';

export class SalaryCalculatorService {
  private salaryCalculatorRepository: SalaryCalculatorRepository;

  constructor(salaryCalculatorRepository: SalaryCalculatorRepository) {
    this.salaryCalculatorRepository = salaryCalculatorRepository;
  }

  calculateSalary(input: SalaryCalculatorInput): SalaryCalculatorOutput {
    return this.salaryCalculatorRepository.calculateSalary(input);
  }
}
