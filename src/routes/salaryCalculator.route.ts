import { Router } from 'express';
import { SalaryCalculatorController } from '../controllers/salaryCalculator.controller';
import { SalaryCalculatorService } from '../services/salaryCalculator.service';
import { SalaryCalculatorRepository } from '../repositories/salaryCalculator.repo';

const router = Router();

const salaryCalculatorRepository = new SalaryCalculatorRepository();
const salaryCalculatorService = new SalaryCalculatorService(salaryCalculatorRepository);
const salaryCalculatorController = new SalaryCalculatorController(salaryCalculatorService);

router.post('/api/salary-calculator', salaryCalculatorController.calculateSalary);

export { router as salaryCalculatorRoutes };
