import axios from "axios";
import { Request } from "express";

export const GetProfileService = async (access_token: string) => {
    const profile = await axios.get('https://api.spotify.com/v1/me', {headers: {"Authorization": `Bearer ${access_token}`}});
    return profile.data
}