import {
  Box,
  VStack,
  IconButton,
  useColorModeValue,
  HStack,
  Heading,
  Center
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { useCallback } from 'react'
import MenuButton from './menu-button'
import ThemeToggle from './theme-toggle'

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props
  const handleBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  const currentRoute = state.routeNames[state.index]

  const handleMainButton = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])

  const handleAboutButton = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])

  /*const handleDatesButton = useCallback(() => {
    navigation.navigate('Dates')
  }, [navigation])*/

  /*const handleArchiveButton = useCallback(() => {
    navigation.navigate('Archives')
  }, [navigation])*/

  return (
    <Box flex={1} p={7} bg={useColorModeValue('gray.100', 'gray.800')}>
      <VStack flex={1} space={1} mt={'32px'}>
        <HStack justifyContent='flex-end'>
          <IconButton
            borderRadius={100}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('gray.800', 'blue.50')
            }}
            onPress={handleBackButton}
          />
        </HStack>
        <Heading mb={5}>Get your things done!</Heading>
        <MenuButton
          active={currentRoute === 'Main'}
          icon={'list'}
          onPress={handleMainButton}
        >
          To Do
        </MenuButton>
        {/*<MenuButton
          active={currentRoute === 'Dates'}
          icon={'calendar'}
          onPress={handleDatesButton}
        >
          Dates
        </MenuButton>
        <MenuButton
          active={currentRoute === 'Archives'}
          icon={'archive'}
          onPress={handleArchiveButton}
        >
          Recently Deleted
        </MenuButton>*/}
        <MenuButton
          active={currentRoute === 'About'}
          icon={'info'}
          onPress={handleAboutButton}
        >
          About
        </MenuButton>
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </Box>
  )
}

export default Sidebar
