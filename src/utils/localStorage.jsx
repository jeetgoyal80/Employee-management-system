const employees = [
    {
      Id: 1,
      firstName: "Aman",
      lastName: "Sharma",
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Prepare Sales Report",
          description: "Compile monthly sales data into a report.",
          date: "2025-04-07",
          category: "Sales"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Client Follow-up",
          description: "Call clients for feedback.",
          date: "2025-03-30",
          category: "Customer Service"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Update Inventory",
          description: "Check and update warehouse stock.",
          date: "2025-03-25",
          category: "Logistics"
        }
      ],
      newTaskCount: 1,
      activeCount: 1,
      completedCount: 1,
      failedCount: 1
    },
    {
      Id: 2,
      firstName: "Priya",
      lastName: "Verma",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Website Testing",
          description: "Perform functionality testing on new website version.",
          date: "2025-04-08",
          category: "IT"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Bug Fixing",
          description: "Resolve UI-related issues.",
          date: "2025-04-06",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "API Integration",
          description: "Integrate third-party APIs.",
          date: "2025-04-01",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Security Review",
          description: "Audit system vulnerabilities.",
          date: "2025-03-28",
          category: "Security"
        }
      ],
      newTaskCount: 1,
      activeCount: 2,
      completedCount: 1,
      failedCount: 1
    },
    {
      Id: 3,
      firstName: "Rohit",
      lastName: "Mehta",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Design New Logo",
          description: "Create branding for the product launch.",
          date: "2025-04-09",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Banner Ad Creation",
          description: "Design promotional banners for ads.",
          date: "2025-04-05",
          category: "Marketing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Brand Guidelines",
          description: "Document design guidelines for teams.",
          date: "2025-03-29",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Print Media Campaign",
          description: "Plan and execute magazine ads.",
          date: "2025-03-24",
          category: "Advertising"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "UX Testing",
          description: "Collect feedback from usability testing.",
          date: "2025-04-08",
          category: "UX"
        }
      ],
      newTaskCount: 1,
      activeCount: 2,
      completedCount: 2,
      failedCount: 1
    },
    {
      Id: 4,
      firstName: "Neha",
      lastName: "Joshi",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Employee Onboarding",
          description: "Assist HR in onboarding new employees.",
          date: "2025-04-08",
          category: "HR"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Team Feedback Review",
          description: "Analyze employee feedback forms.",
          date: "2025-04-04",
          category: "HR"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Payroll Audit",
          description: "Verify employee salaries and taxes.",
          date: "2025-03-30",
          category: "Finance"
        }
      ],
      newTaskCount: 1,
      activeCount: 1,
      completedCount: 1,
      failedCount: 1
    },
    {
      Id: 5,
      firstName: "Vikas",
      lastName: "Gupta",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Data Migration",
          description: "Move records to the new database.",
          date: "2025-04-08",
          category: "IT"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "System Backup",
          description: "Create a full system backup.",
          date: "2025-04-07",
          category: "IT"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Server Maintenance",
          description: "Upgrade server hardware.",
          date: "2025-04-03",
          category: "IT"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Database Optimization",
          description: "Improve DB performance.",
          date: "2025-03-27",
          category: "Database"
        }
      ],
      newTaskCount: 1,
      activeCount: 2,
      completedCount: 1,
      failedCount: 1
    }
  ];
  
const admin = [
    
        {
            "Id": 1,
            "email": "admin@example.com",
            "password": "123"
        }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin }; // returning both as an object
};




