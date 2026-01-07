import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CustomDrawerContent, RenderHeader } from './components';
import { AskScreen } from './screens';

const Drawer = createDrawerNavigator();

const renderHeader = (props: any) => {
    return <RenderHeader {...props} />
}

const renderDrawerContent = (props: any) => {
    return <CustomDrawerContent {...props} />
}

const AppDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={renderDrawerContent}
        >
            <Drawer.Screen
                name='Ask'
                component={AskScreen}
                options={{ header: renderHeader }}
            />
        </Drawer.Navigator>
    )
}

export default AppDrawer