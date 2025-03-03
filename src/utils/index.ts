import {
  AccountInfo,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import { Database } from "sqlite3";
import TelegramBot from "node-telegram-bot-api";
import {
  MAIN_WALLET_ADDRESS,
  PUMP_FUN_ADDRESS,
  SOLANA_RPC_URL,
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHANNEL_ID,
  TRACKED_WALLETS_SIZE,
} from "../config/config";
import { getTransactionDetails, txnLink } from "./utils";
import * as fs from "fs";

interface WalletTrack {
  address: string;
  timestamp: number;
}

export class WalletTracker {
  private connection: Connection;
  private db: Database;
  private bot: TelegramBot;
  private trackedWallets: Map<string, WalletTrack>;

  constructor() {
    this.connection = new Connection(SOLANA_RPC_URL);
    this.db = new Database("wallets.db");
    const BOT_TOKEN = TELEGRAM_BOT_TOKEN || "";
    this.bot = new TelegramBot(BOT_TOKEN, { polling: false });
    this.trackedWallets = new Map();
    this.initDatabase();
    this.loadTrackedWallets();
  }

  private initDatabase(): void {
    this.db.run(`
            CREATE TABLE IF NOT EXISTS tracked_wallets (
                address TEXT PRIMARY KEY,
                timestamp INTEGER
            )
        `);
  }
  // private saveLog(message: string): void {
  //   const timestamp = new Date().toISOString();
  //   const logMessage = `[${timestamp}] ${message}\n`;

  //   fs.appendFileSync("wallet_tracker.txt", logMessage);
  // }

  // private loadTrackedWallets(): void {
  //   this.db.all("SELECT * FROM tracked_wallets", (err, rows: WalletTrack[]) => {
  //     if (err) {
  //       console.error("Error loading wallets:", err);
  //       return;
  //     }
  //     rows.forEach((row) => {
  //       this.trackedWallets.set(row.address, row);
  //     });
  //   });
  // }

  private async trackNewWallet(address: string): Promise<void> {
    const timestamp = Date.now();
    this.db.run(
      "INSERT INTO tracked_wallets (address, timestamp) VALUES (?, ?)",
      [address, timestamp]
    );
    this.trackedWallets.set(address, { address, timestamp });
  }

  .....
}
