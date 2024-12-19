import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export async function getTransactionDetails(
  connection: any,
  signature: string
) {
  const txn = await connection.getParsedTransaction(signature, {
    maxSupportedTransactionVersion: 0,
    commitment: "confirmed",
  });

  if (txn?.meta && txn.transaction) {
    const instructions = txn.transaction.message.instructions;

    const timestamp = txn.blockTime
      ? new Date(txn.blockTime * 1000).toISOString()
      : new Date().toISOString();

    const preBalances = txn.meta.preBalances;
    const postBalances = txn.meta.postBalances;
    const balanceChange = (postBalances[0] - preBalances[0]) / LAMPORTS_PER_SOL;

    const details = {
      ....
  }
}

export const txnLink = (txn: string) => {
  return `<a href="https://solscan.io/tx/${txn}">Transaction Link</a>`;
};
