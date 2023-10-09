import { HttpService } from "../../Constants";

export const AuthService = async (data) => await HttpService.post("/login", data);
