import { createActor as Backend } from "../../../../declarations/backend/";
import { createActor as HttpOutcall } from "../../../../declarations/httpOutcalls";
import { createActor as fileUpload } from "../../../../declarations/fileUpload";
import { createActor as NFT_canister } from "../../../../declarations/NFT_canister";

const canisterIdBackEnd = import.meta.env.VITE_BACKEND_CANISTER_ID;
const canisterIdFileUpload = import.meta.env.VITE_FILEUPLOAD_CANISTER_ID;
const canisterHttpOutcall = import.meta.env.VITE_HTTPOUTCALLS_CANISTER_ID;
const canisterNFTId = import.meta.env.VITE_CANISTER_ID_NFT_CANISTER;
const host = import.meta.env.VITE_HOST;


const actorBackend = Backend(canisterIdBackEnd, { agentOptions: { host } });

const actorFileUpload = fileUpload(canisterIdFileUpload, {
  agentOptions: { host },
});

const httpOutcalls = HttpOutcall(canisterHttpOutcall, {
  agentOptions: { host },
});

// NFT connection from backend
const actorNFT = NFT_canister(canisterNFTId, {
  agentOptions: { host },
});

export { actorBackend, actorFileUpload, httpOutcalls, actorNFT };
