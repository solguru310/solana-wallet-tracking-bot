import dotenv from "dotenv";
dotenv.config();

export const PUMP_FUN_ADDRESS = "Target PUMPFUN ADDRESS";

export const MAIN_WALLET_ADDRESS = process.env.MAIN_WALLET_ADDRESS || "";
export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
export const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID || "";
export const SOLANA_RPC_URL = process.env.SOLANA_RPC_URL || "";

export const TRACKED_WALLETS_SIZE = 150;
