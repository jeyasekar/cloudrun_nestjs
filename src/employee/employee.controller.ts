import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService, Order } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller()
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('order')
  create(@Body() order: Order) {
    return this.employeeService.create(order);
  }

  @Get('shop')
  findAll() {
    console.log('console.log')
    console.info('console.info')
    console.debug('console.debug')
    return this.employeeService.findAll();
  }

  @Get('category')
  findOne() {
    return this.employeeService.findOne();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
