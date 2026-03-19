import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs 
            screenOptions={{ 
                tabBarActiveTintColor: 'black', 
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'home',
                }}
            />
            <Tabs.Screen
                name="analysis"
                options={{
                    title: 'analysis',
                }}
            />
        </Tabs>
    );
}