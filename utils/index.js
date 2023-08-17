import { Platform } from "react-native";
import { io } from "socket.io-client";
export const BaseUrl =
  Platform.OS ==="http://192.168.37.141:4500";

export const socket = io.connect("http://192.168.37.141:4500");
