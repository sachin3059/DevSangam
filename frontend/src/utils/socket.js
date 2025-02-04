import io from "socket.io-client";

export const createSocketConnection = () => {
    return io("http://localhost:3000"); // work on dev mode not on production  and this will not work on production
}