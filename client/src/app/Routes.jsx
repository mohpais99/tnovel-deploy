import Home from "./views/Home";
import Detail from "./views/Detail";
import Read from "./views/Read";

const appRoutes = [
    {
        path: "/",
        name: "Beranda",
        component: Home,
        role: null
    },
    {
        path: "view/:slug",
        name: "Detail",
        component: Detail,
        role: null
    },
    {
        path: "read/:slug",
        name: "Read",
        component: Read,
        role: null
    }
]

export default appRoutes;