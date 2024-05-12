import { Injectable } from '@nestjs/common';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {DeleteEmployeeDto} from './dto/delete-empolyee.dto'

@Injectable()
export class EmployeeService {
  getMeployeeList(param:any) {
    const list = [
      {
        id: 1,
        employeeCode: "1045",
        name: "秦始皇",
        gender: 1,
        dept: "001",
        phone: "13045678901",
        roleId: 2,
        state: 1,
        createTime: "2023-10-23 22:14:36"
      },
      {
        id: 2,
        employeeCode: "2098",
        name: "李白",
        gender: 1,
        dept: "002",
        phone: "13987654321",
        roleId: 3,
        state: 1,
        createTime: "2023-11-15 08:42:19"
      },
      { 
        id: 3,
        employeeCode: "3012",
        name: "王昭君",
        gender: 0,
        dept: "003",
        phone: "13765432109",
        roleId: 1,
        state: 1,
        createTime: "2023-12-03 17:29:54"
      },
      {
        id: 4,
        employeeCode: "4123",
        name: "诸葛亮",
        gender: 1,
        dept: "004",
        phone: "13256478901",
        roleId: 2,
        state: 1,
        createTime: "2023-12-19 11:56:43"
      },
      {
        id: 4,
        employeeCode: "4123",
        name: "诸葛亮",
        gender: 1,
        dept: "004",
        phone: "13256478901",
        roleId: 2,
        state: 1,
        createTime: "2023-12-19 11:56:43"
      },
      {
        id: 5,
        employeeCode: "5087",
        name: "花木兰",
        gender: 0,
        dept: "005",
        phone: "13678901234",
        roleId: 3,
        state: 1,
        createTime: "2024-01-07 09:18:27"
      },
      {
        id: 6,
        employeeCode: "6071",
        name: "张良",
        gender: 1,
        dept: "006",
        phone: "13567890123",
        roleId: 1,
        state: 1,
        createTime: "2024-01-22 14:37:09"
      },
      {
        id: 7,
        employeeCode: "7124",
        name: "貂蝉",
        gender: 0,
        dept: "007",
        phone: "13456789012",
        roleId: 2,
        state: 1,
        createTime: "2024-02-09 19:05:14"
      },
      {
        id: 8,
        employeeCode: "8076",
        name: "关羽",
        gender: 1,
        dept: "008",
        phone: "13890123456",
        roleId: 3,
        state: 1,
        createTime: "2024-02-24 23:22:38"
      },
      {
        id: 9,
        employeeCode: "9083",
        name: "妲己",
        gender: 0,
        dept: "009",
        phone: "13367890123",
        roleId: 1,
        state: 1,
        createTime: "2024-03-12 05:49:57"
      },
    
      {
        id: 10,
        employeeCode: "10032",
        name: "项羽",
        gender: 1,
        dept: "010",
        phone: "13178901234",
        roleId: 2,
        state: 1,
        createTime: "2024-03-28 12:17:43",
      },
    
      {
        id: 11,
        employeeCode: "11049",
        name: "貂蝉",
        gender: 0,
        dept: "011",
        phone: "13689012345",
        roleId: 3,
        state: 1,
        createTime: "2024-04-14 16:44:29"
      },
    
      {
        id: 12,
        employeeCode: "12056",
        name: "刘备",
        gender: 1,
        dept: "012",
        phone: "13790123456",
        roleId: 1,
        state: 1,
        createTime: "2024-04-30 21:11:05"
      },
    
      {
        id: 13,
        employeeCode: "13012",
        name: "杨玉环",
        gender: 0,
        dept: "013",
        phone: "13901234567",
        roleId: 2,
        state: 1,
        createTime: "2024-05-16 01:38:21"
      },
    
      {
        id: 14,
        employeeCode: "14078",
        name: "孙悟空",
        gender: 1,
        dept: "014",
        phone: "13878901234",
        roleId: 3,
        state: 1,
        createTime: "2024-06-01 07:05:46"
      },
    
      {
        id: 15,
        employeeCode: "15092",
        name: "西施",
        gender: 0,
        dept: "015",
        phone: "13767890123",
        roleId: 1,
        state: 1,
        createTime: "2024-06-17 12:32:33"
      },
    
      {
        id: 16,
        employeeCode: "16037",
        name: "李元芳",
        gender: 1,
        dept: "016",
        phone: "13656789012",
        roleId: 2,
        state: 1,
        createTime: "2024-07-03 17:59:19"
      },
    
      {
        id: 17,
        employeeCode: "17083",
        name: "武则天",
        gender: 0,
        dept: "017",
        phone: "13578901234",
        roleId: 3,
        state: 1,
        createTime: "2024-07-19 22:26:45"
      },
    
      {
        id: 18,
        employeeCode: "18019",
        name: "诸葛亮",
        gender: 1,
        dept: "018",
        phone: "13967890123",
        roleId: 1,
        state: 1,
        createTime: "2024-08-04 03:53:59"
      },
    
      {
        id: 19,
        employeeCode: "19027",
        name: "王昭君",
        gender: 0,
        dept: "019",
        phone: "13789012345",
        roleId: 2,
        state: 1,
        createTime: "2024-08-20 09:20:37"
      },
    
      {
        id: 20,
        employeeCode: "20058",
        name: "李白",
        gender: 1,
        dept: "020",
        phone: "13601234567",
        roleId: 3,
        state: 1,
        createTime: "2024-09-05 14:47:14"
      },
    
      {
        id: 21,
        employeeCode: "21074",
        name: "关羽",
        gender: 1,
        dept: "021",
        phone: "13890123456",
        roleId: 1,
        state: 1,
        createTime: "2024-09-21 20:13:42"
      },
    
    ]
    console.log('param',param);
    return {
      code: 0,
      data: list,
      count: 22,
      success: true
    };
  }

  getEmployeeInfo(id: number) {
    console.log('getEmployeeInfo id', id);
    return 'getEmployeeInfo';
  }
   
  UpdateEmployee(updateEmployeeDto: UpdateEmployeeDto){
    console.log('updateEmployeeDto',updateEmployeeDto.id,updateEmployeeDto);
    return 'UpdateEmployee';
  }
  deleteEmployee(deleteEmployeeDto: DeleteEmployeeDto){
    console.log('deleteEmployeeDto',deleteEmployeeDto);
    return 'deleteEmployee';
  }
}
