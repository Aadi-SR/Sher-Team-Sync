import MyTask from "../../features/employee-module/myTask/ui/pages/MyTask";
import Profile from "../../features/employee-module/profile/ui/pages/Profile";
import Attendance from "../../features/employee-module/attendance/ui/pages/Attendance";

export let employeeRoutes = [
    {
        path:"home/my-tasks",
        element : <MyTask />
    },
    {
        path:"home/profile",
        element : <Profile />
    },
    {
        path:"home/attendance",
        element : <Attendance />
    },
]
