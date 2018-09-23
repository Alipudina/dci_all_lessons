var employees = 72, employees_num = 0,
    cashier = 100000;
    worker_num = 50, worker_salary = 1000;

var web_dev = 10, web_dev_num = 1,
    web_front_num = 4, web_front_salary = 1500,
    web_back_num = 4, web_back_salary = 2000,
    web_full_num = 2, web_full_salary = 3000;

var project_maneger_num = 5, project_maneger_salary = 4000;
var devOps_num = 5, devOps_salary = 5000;
var data = 2, data_num = 1,
    data_analyze_salary = 7500,
    data_machin_salary = 10000;
var given_salary = 0;

while (cashier >= given_salary) {

  if (employees_num <= employees) {

    if (data_num <= data) {
      data_num++;
      employees_num++;
      given_salary += data_machin_salary + data_analyze_salary;
      data_num++;
      employees_num++;
    } else if (web_dev_num <= web_dev) {
      
    }

  }

}
