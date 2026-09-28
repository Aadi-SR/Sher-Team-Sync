import Home from "../../features/dashboard/ui/pages/Home";
import Chat from "../../features/chats/ui/pages/Chat";
import Settings from "../../features/settings/ui/pages/Settings";

export let commonRoutes = [
    {
        path:"home",
        element : <Home />
    },
    {
        path:"home/chat",
        element : <Chat />
    },
    {
        path:"home/settings",
        element : <Settings />
    },

]