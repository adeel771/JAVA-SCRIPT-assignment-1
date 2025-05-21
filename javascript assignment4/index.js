const boxes = document.querySelectorAll('.color-box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    document.body.style.backgroundColor = box.style.backgroundColor;
  });
});

// *******************// question no2**********************************
const box = document.querySelector('.box');

box.addEventListener('mousemove', (e) => {
  const rect = box.getBoundingClientRect();
  const offsetX = e.clientX - rect.left - rect.width / 2;
  const offsetY = e.clientY - rect.top - rect.height / 2;
  const moveX = offsetX * 0.05;
  const moveY = offsetY * 0.05;
  box.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

box.addEventListener('mouseleave', () => {
  box.style.transform = 'translate(0, 0)';
});
// ✅ 1. Online Course Enrollment Processor
// Scenario:
// An online platform tracks course enrollments for students. Each enrollment includes the
// student's name, selected course, and enrollment date.
// Task:
// Write a function that processes an array of enrollment objects, each containing:
// ● name: Name of the student.
// ● course: The name of the course.
// ● enrollmentDate: The date the student enrolled.

// The system should:
// 1. Use switch to assign a fee to each course:
// ○ Web Development: $200
// ○ Data Science: $250
// ○ Graphic Design: $150
// 2. Use if-else to apply a 10% early bird discount for enrollments made more than 30
// days before the course start date.
// 3. Format student names and courses using string methods (capitalize first letter of each
// word).
// 4. Use date methods to calculate the duration since enrollment.
// 5. Use array methods to generate a summary of enrollments and fees.
function processEnrollments(enrollments) {
    const courseFees = {
        "Web Development": 200,
        "Data Science": 250,
        "Graphic Design": 150
    };

    const summary = enrollments.map(enrollment => {
        const { name, course, enrollmentDate, courseStartDate } = enrollment;
        const formattedName = name.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        const formattedCourse = course.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        const fee = courseFees[course] || 0;
        const enrollmentDateObj = new Date(enrollmentDate);
        const startDateObj = new Date(courseStartDate);
        const duration = Math.floor((startDateObj - enrollmentDateObj) / (1000 * 60 * 60 * 24));

        let finalFee = fee;
        if (duration > 30) {
            finalFee *= 0.9;
        }

        return {
                studentName: formattedName,
               course: formattedCourse,
         fee: finalFee,
           duration: duration
        };
    });

    return summary;
}
const enrollments = [
    {
     name: "john doe",
     course: "Web Development",
    enrollmentDate: "2023-01-01",
    courseStartDate: "2023-02-15"
    },
    {
     name: "jane smith",
     course: "Data Science",
       enrollmentDate: "2023-01-10",
    courseStartDate: "2023-02-20"
    }
];

console.log(processEnrollments(enrollments));

// ✅ 2. Employee Payroll System
// Scenario:
// You are developing a payroll system for employees. Each employee has a salary, hours worked,
// and bonus eligibility.
// Task:
// Write a function that processes an array of employee objects, each containing:
// ● employeeName: The name of the employee.
// ● baseSalary: The base salary of the employee.
// ● hoursWorked: The total number of hours worked.
// ● eligibleForBonus: Boolean flag indicating if the employee is eligible for a bonus.

// The system should:
// 1. Calculate the overtime pay (1.5x the base rate) for any hours worked beyond 40.
// 2. Use switch to apply a bonus based on eligibility:
// ○ If eligible, apply a 10% bonus to the base salary.
// ○ If not eligible, no bonus.
// 3. Use if-else to check if the total salary exceeds $100,000, applying a tax rate of 30%
// for high earners.
// 4. Use string methods to format employee names.
// 5. Use array methods to calculate and display the total payroll.
function calculatePayroll(employees) {
    const totalPayroll = employees.map(employee => {
        const { employeeName, baseSalary, hoursWorked, eligibleForBonus } = employee;
        const formattedName = employeeName.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        let overtimePay = 0;
        if (hoursWorked > 40) {
            overtimePay = (hoursWorked - 40) * (baseSalary / 40) * 1.5;
        }

        let bonus = 0;
        if (eligibleForBonus) {
            bonus = baseSalary * 0.1;
        }

        let totalSalary = baseSalary + overtimePay + bonus;
        if (totalSalary > 100000) {
            totalSalary *= 0.7;
        }

        return {
            employeeName: formattedName,
            totalSalary: totalSalary
        };
    });

    const totalPayrollAmount = totalPayroll.reduce((acc, emp) => acc + emp.totalSalary, 0);
    return { totalPayroll, totalPayrollAmount };
}
const employees = [
    {
        employeeName: "john doe",
        baseSalary: 50000,
        hoursWorked: 45,
        eligibleForBonus: true
    },
    {
        employeeName: "jane smith",
        baseSalary: 60000,
        hoursWorked: 38,
        eligibleForBonus: false
    }
];

console.log(calculatePayroll(employees));
// ✅ 3. Temperature Converter
// Scenario:
// You are building a temperature converter that converts between Celsius, Fahrenheit, and Kelvin.
// Task:
// Write a function that:
// 1. Takes in a temperature value and a unit (Celsius, Fahrenheit, or Kelvin).
// 2. Use switch to convert the given temperature to the other two units (e.g., Celsius to
// Fahrenheit and Kelvin).
// 3. Return the converted temperature values.
function convertTemperature(value, unit) {
    let celsius, fahrenheit, kelvin;

    switch (unit) {
        case 'Celsius':
            celsius = value;
            fahrenheit = (value * 9/5) + 32;
            kelvin = value + 273.15;
            break;
        case 'Fahrenheit':
            fahrenheit = value;
            celsius = (value - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 'Kelvin':
            kelvin = value;
            celsius = value - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
        default:
            return 'Invalid unit';
    }

    return { Celsius: celsius, Fahrenheit: fahrenheit, Kelvin: kelvin };
}


// 4. Banking System (Using Switch Case, Functions, and Loops)
// Scenario:
// You are developing a banking system that allows users to check their balance, deposit money,
// withdraw money, and transfer money to other users.
// Task:
// 1. Create an array of users, where each user has:
// ○ name (user’s name),
// ○ balance (user’s current balance).
// 2. Write a function that takes the user’s action (e.g., "deposit", "withdraw",
// "transfer", "checkBalance") and updates the user’s balance accordingly.
// 3. Use switch to handle the user’s action and:
// ○ For "deposit", add the deposit amount to the balance.
// ○ For "withdraw", subtract the withdrawal amount from the balance.
// ○ For "transfer", transfer money between users.
// 4. Return the updated balance after the action is performed.
function currencyConverter(amount, targetCurrency) {
    const exchangeRates = {
        "USD": 1,
        "EUR": 0.85,
        "GBP": 0.75,
        "JPY": 110.50
    };

    let convertedAmount;

    switch (targetCurrency) {
     case 'EUR':
            convertedAmount = amount * exchangeRates.EUR;
            break;
        case 'GBP':
            convertedAmount = amount * exchangeRates.GBP;
            break;
        case 'JPY':
            convertedAmount = amount * exchangeRates.JPY;
            break;
        default:
            return 'Invalid currency';
    }

    return convertedAmount;
}
// 5. Multi-Currency Converter
// Scenario:
// You are building a currency converter for an international travel app. The app needs to convert
// an amount in one currency to multiple other currencies (e.g., USD to EUR, GBP, JPY, etc.).
// Task:
// 1. Create an object with exchange rates for different currencies (e.g., {"USD": 1,
// "EUR": 0.85, "GBP": 0.75, "JPY": 110.50}).
// 2. Write a function that:
// ○ Takes in the amount in USD and the target currency.
// ○ Converts the amount to the target currency using the exchange rates.
// ○ Use switch to handle the conversion based on the target currency.
// 3. Return the converted amount in the selected currency.
function bankingSystem(users, action, userName, amount, targetUser Name) {
    const user = users.find(u => u.name === userName);
    if (!user) return 'User  not found';

    switch (action) {
        case 'deposit':
            user.balance += amount;
            break;
        case 'withdraw':
            if (user.balance >= amount) {
                user.balance -= amount;
            } else {
                return 'Insufficient funds';
            }
            break;
        case 'transfer':
            const targetUser  = users.find(u => u.name === targetUser Name);
            if (targetUser  && user.balance >= amount) {
                user.balance -= amount;
                targetUser .balance += amount;
            } else {
                return 'Transfer failed';
            }
            break;
        case 'checkBalance':
            return user.balance;
        default:
            return 'Invalid action';
    }

    return user.balance;
}
