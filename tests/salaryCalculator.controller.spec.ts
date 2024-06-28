import request from 'supertest';
import express, { Express } from 'express';
import { SalaryCalculatorController } from '../src/controllers/salaryCalculator.controller';
import { SalaryCalculatorService } from '../src/services/salaryCalculator.service';
import { SalaryCalculatorRepository } from '../src/repositories/salaryCalculator.repo';

describe('SalaryCalculatorController', () => {
  let app: Express;

  beforeAll(() => {
    const salaryCalculatorRepository = new SalaryCalculatorRepository();
    const salaryCalculatorService = new SalaryCalculatorService(salaryCalculatorRepository);
    const salaryCalculatorController = new SalaryCalculatorController(salaryCalculatorService);

    app = express();
    app.use(express.json());
    app.post('/api/salary-calculator', salaryCalculatorController.calculateSalary);
  });

  test('should calculate the salary correctly', async () => {
    const response = await request(app)
      .post('/api/salary-calculator')
      .send({ netSalary: 80000, allowances: 10000, employeePensionContribution: 5000 });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      grossSalary: 95238.10,
      basicSalary: 85238.10,
      payeTax: 13475.00,
      employeePensionContribution: 4787.50,
      employerPensionContribution: 11080.75
    });
  });
});
