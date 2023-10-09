import { HttpService } from "../../Constants";

export const fetchUsersService = async () => await HttpService.get(`/users`);
