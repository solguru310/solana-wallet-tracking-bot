import { WalletTracker } from "./utils";

async function main() {
  const tracker = new WalletTracker();
  await tracker.start();
}

main().catch(console.error);
