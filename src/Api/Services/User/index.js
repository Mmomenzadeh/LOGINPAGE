import { HttpService } from "../../Constants";

export const userDetailsFetch = async (id) =>await HttpService.get(`/users/${id}`);
