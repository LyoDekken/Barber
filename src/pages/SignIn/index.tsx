import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignIn() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 40,
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 40 }}>
        <Ionicons name="lock-closed-outline" size={48} color="#333" />
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
          Login
        </Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>Email</Text>
        <TextInput
          style={{ backgroundColor: "#f5f5f5", borderRadius: 10, padding: 10 }}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>Senha</Text>
        <TextInput
          secureTextEntry={true}
          style={{ backgroundColor: "#f5f5f5", borderRadius: 10, padding: 10 }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#333",
          borderRadius: 10,
          padding: 15,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
