import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  create(order: Order) {
    return order;
  }

  findAll() {
    return new Shop('pret','pret a manger','chennai');
  }

  findOne() {
    return new Category('Bread','Sweet Bread')
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}

export class Shop{
  constructor(public shopName?: string, public description?: string, public location?: string) {
    console.log('shop model created')
   
  }
}
  export class Category{
    constructor(public categoryName?: string, public description?: string) {
      console.log('Category model created')
     
    }
 
}

export class Order{
  constructor(public orderName?: string, public type?: string) {
    console.log('Order model created')
   
  }

}