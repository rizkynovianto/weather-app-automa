import WeatherMonitor from './views/WeatherMonitor.jsx'
import SavedLocation from './views/SavedLocation.jsx'

const appRoutes = [

    {
        path: "/weathermonitor",
        name: "Weather Monitor",
        component: WeatherMonitor,
        layout: "/main"
    },

    {
        path: "/savedlocation",
        name: "Saved Location",
        component: SavedLocation,
        layout: "/main"
    },

];

const defaultPath = "/main/weathermonitor"

export {
    
    appRoutes as routes,
    defaultPath
}