import { HttpService } from "../../../Service/HttpService";

export const AuthService = async (data) => HttpService.post("/api/login", data);
