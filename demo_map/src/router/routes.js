import PrivateEntry from "../pages/PrivateEntry"
import PrivateNotice from "../pages/PrivateNotice"
import PrivateOrganization from "../pages/PrivateOrganization"
import PrivateUser from "../pages/PrivateUser"
import PublicAdd from "../pages/PublicAdd"
import PublicMap from "../pages/PublicMap"


export const privateRoutes = [
    {path: '/notice', element: <PrivateNotice/>},
    {path: '/organization', element: <PrivateOrganization/>},
    {path: '/user', element: <PrivateUser/>},
    {path: '/map', element: <PublicMap/>},
    {path: '/admin', element: <PrivateEntry/>},

]

export const publicRoutes = [
    {path: '/admin', element: <PrivateEntry/>},
    {path: '/add', element: <PublicAdd/>},
    {path: '/map', element: <PublicMap/>}
]