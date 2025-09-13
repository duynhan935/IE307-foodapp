import React from "react";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

interface TabIconProps {
    focused: boolean;
    icon: any;
    title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
    if (!focused) {
        return (
            <View className="size-full items-center justify-center mt-4 rounded-full">
                <Image source={icon} tintColor="#a8b5db" className="size-5" />
            </View>
        );
    }
    return (
        <>
            <ImageBackground
                source={images.highlight}
                className="flex flex-row items-center justify-center flex-1 w-full min-w-[112px] min-h-16 mt-4 rounded-full overflow-hidden"
            >
                <Image source={icon} tintColor="#151312" className="size-5" />
                <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
            </ImageBackground>
        </>
    );
};

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    height: 52,
                    borderRadius: 50,
                    borderTopWidth: 0,
                    backgroundColor: "#0f0d23",
                    position: "absolute",
                    marginHorizontal: 20,
                    marginBottom: 36,
                    overflow: "hidden",
                    borderColor: "#0f0d23",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "Home",

                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} title="Home" />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    headerShown: false,
                    title: "Search",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.search} title="Search" />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: "Profile",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.person} title="Profile" />,
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    headerShown: false,
                    title: "Saved",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.save} title="Saved" />,
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;

// cái headerShown: false để ẩn cái header index mặc định của expo-router
