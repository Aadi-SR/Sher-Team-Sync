import Employees from "../../features/admin-module/employees/ui/pages/Employees";
import Department from "../../features/admin-module/departments/ui/pages/Department";
import Tasks from "../../features/admin-module/tasks/ui/pages/Tasks";
import Document from "../../features/admin-module/documents/ui/pages/Document";

export let adminRoutes = [
    {
        path:"home/employee",
        element : <Employees />
    },
    {
        path:"home/department",
        element : <Department />
    },
    {
        path:"home/task",
        element : <Tasks />
    },
    {
        path:"home/document",
        element : <Document />
    },
]