import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface RightAction {
    key: string;
    icon: string;
}

const SearchBar = ({ data }: { data: RightAction[] }) => {
    return (
        <View className="flex-row items-center gap-3">
            {/* Search box */}
            <View className="flex-1 flex-row items-center bg-white rounded-full h-11 pl-3 pr-2">
                <TouchableOpacity activeOpacity={0.8} onPress={() => router.push("/search")}>
                    <Ionicons name="search-outline" size={20} color="#9AA0A6" />
                </TouchableOpacity>
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#9AA0A6"
                    className="flex-1 ml-2 text-base text-black"
                    returnKeyType="search"
                />
                <TouchableOpacity
                    activeOpacity={0.8}
                    className="w-9 h-9 rounded-full bg-[#F15A24] items-center justify-center"
                >
                    <Ionicons name="options-outline" size={18} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            {/* Right actions */}
            {data.map((a) => (
                <TouchableOpacity
                    key={a.key}
                    activeOpacity={0.7}
                    className="w-10 h-10 rounded-xl bg-white items-center justify-center"
                >
                    <Ionicons
                        name={
                            a.key === "cart"
                                ? "cart-outline"
                                : a.key === "bell"
                                ? "notifications-outline"
                                : "person-outline"
                        }
                        size={20}
                        color="#F15A24"
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default SearchBar;
