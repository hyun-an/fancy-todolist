import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main-screen'
import AboutScreen from './screens/about-screen'
import DatesScreen from './screens/dates-screen'
import Sidebar from './components/sidebar'
import ArchiveScreen from './screens/archived-screen'

const Drawer = createDrawerNavigator()

const Main = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Main'
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: 'gray.900'
      }}
    >
      <Drawer.Screen name='Main' component={MainScreen} />
      <Drawer.Screen name='About' component={AboutScreen} />
      <Drawer.Screen name='Dates' component={DatesScreen} />
      <Drawer.Screen name='Archives' component={ArchiveScreen} />
    </Drawer.Navigator>
  )
}

export default Main
