const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
];
const baseUrl = "https://accounts.spotify.com/";
const redirectUri = "http://localhost:3000";
const clientId = "5098f7c50b3e42278c725fb95b91f32f";

export const LoginService = async () => {
    return `${baseUrl}authorize?client_id=${clientId}&response_type=token&show_dialog=true&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}`;
}
