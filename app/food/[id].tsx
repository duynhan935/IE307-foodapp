import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const FoodDetail = () => {
    const router = useRouter();
    return (
        <View className="flex-1 pt-14 bg-white">
            <TouchableOpacity
                onPress={() => router.back()}
                className="absolute left-5 top-10 w-10 h-10 rounded-full bg-[#F9CF63] items-center justify-center"
                activeOpacity={0.8}
            >
                <Ionicons name="arrow-back" size={22} color="#F15A24" />
            </TouchableOpacity>
            <View className="flex-1 items-center justify-center">
                <Text>Food Detail</Text>
            </View>
        </View>
    );
};

export default FoodDetail;
